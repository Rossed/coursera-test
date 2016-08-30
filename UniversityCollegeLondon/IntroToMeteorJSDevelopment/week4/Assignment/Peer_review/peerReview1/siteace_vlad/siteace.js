const Websites = new Mongo.Collection("websites")
    , WebsitesIndex = new EasySearch.Index({
        collection: Websites
        , fields: ['title', 'description']
        , engine: new EasySearch.Minimongo()
    });

Comments = new Mongo.Collection("comments");

// meteor --release 1.3.4.4 reset

//Routing stuff!
Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
    this.render('navbar', {
        to: 'navbar'
    });
    this.render('website_form', {
        to: 'form'
    });
    this.render('website_list', {
        to: 'main'
    });
    this.render('comments_list', {
        to: 'comments'
    });
    this.render('comment_form', {
        to: 'comment'
    });
});

Router.route('/:_id', function () {
    this.render('navbar', {
        to: 'navbar'
    });
    this.render('website_detail', {
        to: 'main'
        , data: function () {
            return Websites.findOne({
                _id: this.params._id
            });
        }
    });
});

if (Meteor.isClient) {
    /////
    // template helpers
    /////
    Template.searchBox.helpers({
        websitesIndex: () => WebsitesIndex
    });
    // helper function that returns all available websites
    /*
    Template.website_list.helpers({
    	websites:function(){
    		return Websites.find({});
    	}
    });
    */
    // format the date
    Template.registerHelper('formattedDate', function () {
        return moment(this.createdOn).format("DD/MM/YYYY");
    });
    // helper function that returns the username for a given user ID
    Template.registerHelper('getUser', function (userId) {
        var user = Meteor.users.findOne({
            _id: userId
        });
        if (user) {
            return user.username;
        }
        else {
            return "anonymous";
        }
    });
    Template.website_list.helpers({
        websites: function () {
            return Websites.find({}, {
                sort: {
                    up: -1
                }
            });
        }
    });
    Template.comments_list.helpers({
        comments: function () {
            return Comments.find({
                website: Router.current().params._id
            });
        }
    });
    //add username field
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_AND_EMAIL"
    });
    /////
    // template events
    /////
    Template.ApplicationLayout.events({
            "click .js-upvote": function (event) {
                // example of how you can access the id for the website in the database
                // (this is the data context for the template)
                var website_id = this._id;
                console.log("Up voting website with id " + website_id);
                // put the code in here to add a vote to a website!
                Websites.update({
                    _id: website_id
                }, {
                    $set: {
                        up: this.up + 1
                    }
                });
                return false; // prevent the button from reloading the page
            }
            , "click .js-downvote": function (event) {
                // example of how you can access the id for the website in the database
                // (this is the data context for the template)
                var website_id = this._id;
                console.log("Down voting website with id " + website_id);
                // put the code in here to remove a vote from a website!
                Websites.update({
                    _id: website_id
                }, {
                    $set: {
                        down: this.down + 1
                    }
                });
                return false; // prevent the button from reloading the page
            }
        })
        /*
        	Template.website_item.events({
        		"click .js-upvote":function(event){
        			// example of how you can access the id for the website in the database
        			// (this is the data context for the template)
        			var website_id = this._id;
        			console.log("Up voting website with id "+website_id);
        			// put the code in here to add a vote to a website!
        			var upvotes = $(event.currentTarget).data("+1");
        			Websites.update({_id:website_id},
                            {$set: {upvotes:upvotes+1}});

        			return false;// prevent the button from reloading the page
        		},
        		"click .js-downvote":function(event){

        			// example of how you can access the id for the website in the database
        			// (this is the data context for the template)
        			var website_id = this._id;
        			console.log("Down voting website with id "+website_id);

        			// put the code in here to remove a vote from a website!

        			return false;// prevent the button from reloading the page
        		}
        	})
        */
    Template.website_form.events({
        "click .js-toggle-website-form": function (event) {
            $("#website_form").toggle('slow');
        }
        , "submit .js-save-website-form": function (event) {
            // here is an example of how to get the url out of the form:
            var url = event.target.url.value;
            console.log("The url they entered is: " + url);
            //  put your website saving code in here!
            var title = event.target.title.value;
            var description = event.target.description.value;
            if (Meteor.user()) {
                Websites.insert({
                    url: url
                    , title: title
                    , description: description
                    , createdOn: new Date()
                    , createdBy: Meteor.user()._id
                    , up: 0
                    , down: 0
                });
            }
            $("#website_form").toggle('hide');
            return false; // stop the form submit from reloading the page
        }
    });
    //commenting!
    Template.comment_form.events({
        "submit .js-save-comment-form": function (event) {
            if (Meteor.user()) {
                // here is an example of how to get the comment out of the form:
                var comment = event.target.comment.value;
                console.log("The comment they entered is: " + comment);
                Comments.insert({
                    website: Router.current().params._id
                    , comment: comment
                    , createdOn: new Date()
                    , user: Meteor.user().username
                });
            }
            else {
                alert('You need to be logged in to submit comments!');
            }
            return false; // stop the form submit from reloading the page
        }
    });
}

if (Meteor.isServer) {
    // start up function that creates entries in the Websites databases.
    Meteor.startup(function () {
        // code to run on server at startup
        if (!Websites.findOne()) {
            console.log("No websites yet. Creating starter data.");
            Websites.insert({
                title: "Goldsmiths Computing Department"
                , url: "http://www.gold.ac.uk/computing/"
                , description: "This is where this course was developed."
                , createdOn: new Date()
                , user: "Anonymous"
                , up: 0
                , down: 0
            });
            Websites.insert({
                title: "University of London"
                , url: "http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route"
                , description: "University of London International Programme."
                , createdOn: new Date()
                , user: "Anonymous"
                , up: 0
                , down: 0
            });
            Websites.insert({
                title: "Coursera"
                , url: "http://www.coursera.org"
                , description: "Universal access to the world’s best education."
                , createdOn: new Date()
                , user: "Anonymous"
                , up: 0
                , down: 0
            });
            Websites.insert({
                title: "Google"
                , url: "http://www.google.com"
                , description: "Popular search engine."
                , createdOn: new Date()
                , user: "Anonymous"
                , up: 0
                , down: 0
            });
        }
    });
}