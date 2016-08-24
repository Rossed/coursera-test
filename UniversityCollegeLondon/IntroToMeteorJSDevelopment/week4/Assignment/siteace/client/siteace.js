/////
// routing 
/////

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('website_list', {
    to:"main"
  });
});

Router.route('/:_id', function() {
	this.render('navbar', {
		to: "navbar"
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

// helper function that returns all available websites
Template.website_list.helpers({
	websites:function(){
		return Websites.find({}, {sort:{upVote:-1}});
	}
});

/////
// Templateate events 
/////

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
	}
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
			console.log(Websites.find());
		} else {
			alert("You must login to submit a website !");
		}

		return false;// stop the form submit from reloading the page

	}
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
