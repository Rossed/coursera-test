/// routing
Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function(){
    this.render('navbar', {to: 'navbar'});
    this.render('website_form', {to: 'website_form'});
    this.render('website_list', {to: 'main', data: {websites: Websites.find({}, {sort: {rating: -1}})}});
});

Router.route('/site/:_id', function() {
    this.render('navbar', {to: 'navbar'});
    this.render('website_detail', {to: 'main', data: Websites.findOne({_id:this.params._id})});
    this.render('website_comments', {to: 'comments', data: {comments: Comments.find({website_id: this.params._id})}});
});

Router.route('/search/:_query', function() {
    var query = this.params._query.toLowerCase();
    var search_result = [];
    var websites = Websites.find().fetch()
    for (var i in websites) {
        if(websites[i].title.toLowerCase().search(query)>=0 || websites[i].description.toLowerCase().search(query)>=0) {
            search_result.push(websites[i]);
        }
    }
    console.log(search_result);
    this.render('navbar', {to: 'navbar'});
    this.render('website_list', {to: 'main', data: {websites: search_result}});
});

Template.registerHelper('formatDate', function(date) {
    return date.toLocaleDateString();
});

/// acounts config
Accounts.ui.config({
    passwordSignupFields: "EMAIL"
});

Template.website_list.events({
    "click .js-upvote":function(event) {
        var website_id = this._id;
        console.log("Up voting website with id "+website_id);
        old_rating = Websites.findOne({_id: website_id}).rating;
        if(old_rating == undefined) {
            old_rating = 0;
        }
        console.log("Site value is " + old_rating);
        if(Meteor.user()) {
            Websites.update({_id: website_id}, {$set: {rating: old_rating + 1}});
        }
        else {
            $('#modal-dialog').modal('show');
        }

        return false;
    },
    "click .js-downvote":function(event) {
        var website_id = this._id;
        console.log("Down voting website with id "+website_id);

        old_rating = Websites.findOne({_id: website_id}).rating;
        if(old_rating == undefined) {
            old_rating = 0;
        }
        console.log("Site value is " + old_rating);
        if(Meteor.user()) {
            Websites.update({_id: website_id}, {$set: {rating: old_rating - 1}});
        }
        else {
            $('#modal-dialog').modal('show');
        }

        return false;
    }
})

Template.website_form.events({
    "click .js-toggle-website-form":function(event){
        $("#website_form").toggle('slow');
    },
    "submit .js-save-website-form":function(event){
        var url = event.target.url.value;
        console.log("The url they entered is: "+url);

        if(Meteor.user()) {
            Websites.insert({
                url: event.target.url.value,
                title: event.target.title.value,
                description: event.target.description.value,
                createdBy: Meteor.user().username,
                createdOn: new Date()
            });
        }
        else {
            $('#modal-dialog').modal('show');
        }

        $("#website_form").toggle('slow');

        return false;
    }
});

Template.website_detail.events({
    "submit .js-save-comment-form": function(event) {
        var website_id = this._id;
        if(Meteor.user()) {
            console.log(this._id);
            Comments.insert({
                website_id: website_id,
                comment: event.target.comment.value,
                createdBy: Meteor.user().username,
                createdOn: new Date()
            });
        }
        else {
            $('#modal-dialog').modal('show');
        }
        
        return false;
    },

});

Template.navbar.events({
    "submit .js-search-form": function(event) {
        console.log('/search/' + event.target.search.value);
        Router.go('/search/' + event.target.search.value);
        return false;
    },
});