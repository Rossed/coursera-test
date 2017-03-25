(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// siteace.js                                                          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var Websites = new Mongo.Collection("websites"),                       // 1
    WebsitesIndex = new EasySearch.Index({                             //
    collection: Websites,                                              // 3
    fields: ['title', 'description'],                                  // 4
    engine: new EasySearch.Minimongo()                                 // 5
});                                                                    //
                                                                       //
Comments = new Mongo.Collection("comments");                           // 8
                                                                       //
// meteor --release 1.3.4.4 reset                                      //
                                                                       //
//Routing stuff!                                                       //
Router.configure({                                                     // 13
    layoutTemplate: 'ApplicationLayout'                                // 14
});                                                                    //
                                                                       //
Router.route('/', function () {                                        // 17
    this.render('navbar', {                                            // 18
        to: 'navbar'                                                   // 19
    });                                                                //
    this.render('website_form', {                                      // 21
        to: 'form'                                                     // 22
    });                                                                //
    this.render('website_list', {                                      // 24
        to: 'main'                                                     // 25
    });                                                                //
    this.render('comments_list', {                                     // 27
        to: 'comments'                                                 // 28
    });                                                                //
    this.render('comment_form', {                                      // 30
        to: 'comment'                                                  // 31
    });                                                                //
});                                                                    //
                                                                       //
Router.route('/:_id', function () {                                    // 35
    this.render('navbar', {                                            // 36
        to: 'navbar'                                                   // 37
    });                                                                //
    this.render('website_detail', {                                    // 39
        to: 'main',                                                    // 40
        data: function () {                                            // 41
            return Websites.findOne({                                  // 42
                _id: this.params._id                                   // 43
            });                                                        //
        }                                                              //
    });                                                                //
});                                                                    //
                                                                       //
if (Meteor.isClient) {                                                 // 49
    /////                                                              //
    // template helpers                                                //
    /////                                                              //
    Template.searchBox.helpers({                                       // 53
        websitesIndex: function () {                                   // 54
            return WebsitesIndex;                                      //
        }                                                              //
    });                                                                //
    // helper function that returns all available websites             //
    /*                                                                 //
    Template.website_list.helpers({                                    //
    	websites:function(){                                              //
    		return Websites.find({});                                        //
    	}                                                                 //
    });                                                                //
    */                                                                 //
    // format the date                                                 //
    Template.registerHelper('formattedDate', function () {             // 65
        return moment(this.createdOn).format("DD/MM/YYYY");            // 66
    });                                                                //
    // helper function that returns the username for a given user ID   //
    Template.registerHelper('getUser', function (userId) {             // 69
        var user = Meteor.users.findOne({                              // 70
            _id: userId                                                // 71
        });                                                            //
        if (user) {                                                    // 73
            return user.username;                                      // 74
        } else {                                                       //
            return "anonymous";                                        // 77
        }                                                              //
    });                                                                //
    Template.website_list.helpers({                                    // 80
        websites: function () {                                        // 81
            return Websites.find({}, {                                 // 82
                sort: {                                                // 83
                    up: -1                                             // 84
                }                                                      //
            });                                                        //
        }                                                              //
    });                                                                //
    Template.comments_list.helpers({                                   // 89
        comments: function () {                                        // 90
            return Comments.find({                                     // 91
                website: Router.current().params._id                   // 92
            });                                                        //
        }                                                              //
    });                                                                //
    //add username field                                               //
    Accounts.ui.config({                                               // 97
        passwordSignupFields: "USERNAME_AND_EMAIL"                     // 98
    });                                                                //
    /////                                                              //
    // template events                                                 //
    /////                                                              //
    Template.ApplicationLayout.events({                                // 103
        "click .js-upvote": function (event) {                         // 104
            // example of how you can access the id for the website in the database
            // (this is the data context for the template)             //
            var website_id = this._id;                                 // 107
            console.log("Up voting website with id " + website_id);    // 108
            // put the code in here to add a vote to a website!        //
            Websites.update({                                          // 110
                _id: website_id                                        // 111
            }, {                                                       //
                $set: {                                                // 113
                    up: this.up + 1                                    // 114
                }                                                      //
            });                                                        //
            return false; // prevent the button from reloading the page
        },                                                             //
        "click .js-downvote": function (event) {                       // 119
            // example of how you can access the id for the website in the database
            // (this is the data context for the template)             //
            var website_id = this._id;                                 // 122
            console.log("Down voting website with id " + website_id);  // 123
            // put the code in here to remove a vote from a website!   //
            Websites.update({                                          // 125
                _id: website_id                                        // 126
            }, {                                                       //
                $set: {                                                // 128
                    down: this.down + 1                                // 129
                }                                                      //
            });                                                        //
            return false; // prevent the button from reloading the page
        }                                                              //
    });                                                                //
    /*                                                                 //
    	Template.website_item.events({                                    //
    		"click .js-upvote":function(event){                              //
    			// example of how you can access the id for the website in the database
    			// (this is the data context for the template)                  //
    			var website_id = this._id;                                      //
    			console.log("Up voting website with id "+website_id);           //
    			// put the code in here to add a vote to a website!             //
    			var upvotes = $(event.currentTarget).data("+1");                //
    			Websites.update({_id:website_id},                               //
                        {$set: {upvotes:upvotes+1}});                  //
     			return false;// prevent the button from reloading the page     //
    		},                                                               //
    		"click .js-downvote":function(event){                            //
     			// example of how you can access the id for the website in the database
    			// (this is the data context for the template)                  //
    			var website_id = this._id;                                      //
    			console.log("Down voting website with id "+website_id);         //
     			// put the code in here to remove a vote from a website!       //
     			return false;// prevent the button from reloading the page     //
    		}                                                                //
    	})                                                                //
    */                                                                 //
    Template.website_form.events({                                     // 162
        "click .js-toggle-website-form": function (event) {            // 163
            $("#website_form").toggle('slow');                         // 164
        },                                                             //
        "submit .js-save-website-form": function (event) {             // 166
            // here is an example of how to get the url out of the form:
            var url = event.target.url.value;                          // 168
            console.log("The url they entered is: " + url);            // 169
            //  put your website saving code in here!                  //
            var title = event.target.title.value;                      // 171
            var description = event.target.description.value;          // 172
            if (Meteor.user()) {                                       // 173
                Websites.insert({                                      // 174
                    url: url,                                          // 175
                    title: title,                                      // 176
                    description: description,                          // 177
                    createdOn: new Date(),                             // 178
                    createdBy: Meteor.user()._id,                      // 179
                    up: 0,                                             // 180
                    down: 0                                            // 181
                });                                                    //
            }                                                          //
            $("#website_form").toggle('hide');                         // 184
            return false; // stop the form submit from reloading the page
        }                                                              //
    });                                                                //
    //commenting!                                                      //
    Template.comment_form.events({                                     // 189
        "submit .js-save-comment-form": function (event) {             // 190
            if (Meteor.user()) {                                       // 191
                // here is an example of how to get the comment out of the form:
                var comment = event.target.comment.value;              // 193
                console.log("The comment they entered is: " + comment);
                Comments.insert({                                      // 195
                    website: Router.current().params._id,              // 196
                    comment: comment,                                  // 197
                    createdOn: new Date(),                             // 198
                    user: Meteor.user().username                       // 199
                });                                                    //
            } else {                                                   //
                alert('You need to be logged in to submit comments!');
            }                                                          //
            return false; // stop the form submit from reloading the page
        }                                                              //
    });                                                                //
}                                                                      //
                                                                       //
if (Meteor.isServer) {                                                 // 210
    // start up function that creates entries in the Websites databases.
    Meteor.startup(function () {                                       // 212
        // code to run on server at startup                            //
        if (!Websites.findOne()) {                                     // 214
            console.log("No websites yet. Creating starter data.");    // 215
            Websites.insert({                                          // 216
                title: "Goldsmiths Computing Department",              // 217
                url: "http://www.gold.ac.uk/computing/",               // 218
                description: "This is where this course was developed.",
                createdOn: new Date(),                                 // 220
                user: "Anonymous",                                     // 221
                up: 0,                                                 // 222
                down: 0                                                // 223
            });                                                        //
            Websites.insert({                                          // 225
                title: "University of London",                         // 226
                url: "http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
                description: "University of London International Programme.",
                createdOn: new Date(),                                 // 229
                user: "Anonymous",                                     // 230
                up: 0,                                                 // 231
                down: 0                                                // 232
            });                                                        //
            Websites.insert({                                          // 234
                title: "Coursera",                                     // 235
                url: "http://www.coursera.org",                        // 236
                description: "Universal access to the world’s best education.",
                createdOn: new Date(),                                 // 238
                user: "Anonymous",                                     // 239
                up: 0,                                                 // 240
                down: 0                                                // 241
            });                                                        //
            Websites.insert({                                          // 243
                title: "Google",                                       // 244
                url: "http://www.google.com",                          // 245
                description: "Popular search engine.",                 // 246
                createdOn: new Date(),                                 // 247
                user: "Anonymous",                                     // 248
                up: 0,                                                 // 249
                down: 0                                                // 250
            });                                                        //
        }                                                              //
    });                                                                //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=siteace.js.map
