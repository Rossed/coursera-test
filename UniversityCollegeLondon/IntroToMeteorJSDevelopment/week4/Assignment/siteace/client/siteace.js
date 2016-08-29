/////
// routing 
/////

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('navbar', {
    to:"navbar", 
    data: function() {
    	Session.set("singlePageMode", undefined);
    }
  });
  this.render('website_list', {
    to:"main"
  });
});

Router.route('/:_id', function() {
	this.render('navbar', {
		to: "navbar",
		data: function() {
			Session.set("websiteFilter", undefined);
			Session.set("singlePageMode", true)
		}
	});
	this.render('website_page', {
		to: "main",
		data: function() {
			return Websites.findOne({_id:this.params._id});
		}
	});
});

/////
// template helpers 
/////

Template.navbar.helpers({
	//helper function to check if in single page viewing mode
	not_inSinglePageMode: function() {
		if (Session.get("singlePageMode")) {
			return false;
		} else {
			return true;
		}
	}
})

Template.website_list.helpers({
	// helper function that returns all available websites
	websites:function(){
		if (Session.get("websiteFilter")) {
			return Session.get("websiteFilter");
		} else {
			return Websites.find({}, {sort:{upVote:-1}});
		}
	}, 
	//helper function that determines if websites 
	//are being flitered due to seach
	filtering_websites: function() {
		if (Session.get("websiteFilter")) {
			return true;
		} else {
			return false;
		}
	}, 
});

/////
// Templateate events 
/////

Template.website_list.events({
	'click .js-unset-website-filter': function() {
		Session.set("websiteFilter", undefined);
	}
})

Template.website_item.events({
	"click .js-upvote":function(event){
		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;
		console.log("Up voting website with id "+website_id);
		// put the code in here to add a vote to a website!
		var website = Websites.findOne({_id: website_id});

		var website_upVotes = website.upVote;
		website_upVotes = website_upVotes + 1;
		Websites.update({_id:website_id}, 
      					{$set: {upVote:website_upVotes}});

		return false;// prevent the button from reloading the page
	}, 
	"click .js-downvote":function(event){

		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;
		console.log("Down voting website with id "+website_id);
		// put the code in here to remove a vote from a website!	
		var website = Websites.findOne({_id: website_id});

		var website_downVotes = website.downVote;
		website_downVotes = website_downVotes + 1;
		Websites.update({_id:website_id}, 
      					{$set: {downVote:website_downVotes}});

		return false;// prevent the button from reloading the page
	},
})

Template.website_form.events({
	"click .js-toggle-website-form":function(event){
		$("#website_form").toggle('slow');
	}, 
	"submit .js-save-website-form":function(event){

		// here is an example of how to get the url out of the form:
		var url = event.target.url.value;
		var title = event.target.title.value;
		var description = event.target.description.value;
		console.log("The url they entered is: "+url);
		$("#website_form").toggle('slow');
		
		//  put your website saving code in here!	
		if (Meteor.user()) {
			  Websites.insert({
			    title: title, 
			    url: url, 
			    description: description, 
			    createdOn:new Date(),
			    upVote:0,
			    downVote:0,
			    comments:[]
			})
			event.target.url.value = "";
			event.target.title.value = "";
			event.target.description.value = "";
		} else {
			alert("You must login to submit a website!");
		}

		return false;// stop the form submit from reloading the page

	},
});

Template.website_page.events({
	"submit .js-submit-comment":function(event){

		var comment = event.target.comment_input.value;

		if (comment.length > 0) {
			var website_id = this._id;
			var website = Websites.findOne({_id: website_id});
			var comments = website.comments;
			var user;

			if(Meteor.user()) {
				user = Meteor.user().emails[0].address;

			} else {
				user = "anonymous"

			}

			var comment_obj = {
				postedBy: user,
				createdOn: new Date(),
				comment: comment
			}

			comments.push(comment_obj);

			Websites.update({_id:website_id},
							{$set: {comments: comments}});

			
		} else {
			alert("Please enter a comment before pressing submit");
		}

		event.target.comment_input.value = "";
		return false;// stop the form submit from reloading the page

	}
});

Template.navbar.events({
	'submit .js-search-form':function(event){
		var search = event.target.search.value;
		var found_relavent_website = false;

		var relavent_websites = [];
		//Ensure user has entered something
		if (search.length > 0) {
			var words = search.split(" ");
			//For all the words in the users search
			for (i=0; i<words.length; i++) {
				var word = words[i].toLowerCase();
				//For all the webstites
				for (object in Websites._collection._docs._map) {
					var website_title_words = Websites.findOne({_id:object}).title.split(" ");
					//For all the words in each website
					for (j=0; j<website_title_words.length; j++) {
						var website_title_word = website_title_words[j].toLowerCase();
						//Check to see if search words match
						if (word.localeCompare(website_title_word) == 0) {
							if (relavent_websites.indexOf(object) < 0) {
								found_relavent_website = true;
								relavent_websites.push(Websites.findOne({_id:object}));
								Session.set("websiteFilter", relavent_websites);
							} 
						} 
					} //end 3rd for statement
				} //end 2nd for statement
			} //end 1st for statement
		} //end 1st if statement

		if (!found_relavent_website) {
			alert("The search came up empty");
		}

		//reset search bar
		event.target.search.value = "";

		return false;
	}
});







