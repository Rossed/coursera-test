Router.configure({
	layoutTemplate: "main"
});

Router.route('/', function() {
	this.render('home');
});

if (Meteor.userId()) {
	Router.route('/home', function() {
		this.render('nav', {
			to: 'navbar'
		});
		this.render('userList', {
			to: 'main'
		});
	});

	Router.route('/chat/:_id', function() {
		this.render('nav', {
			to: 'navbar'
		});
		this.render('chat', {
			to: 'main'
		});
	});
}

Router.route('/about', function() {
	this.render('nav', {
		to: 'navbar'
	});
	this.render('about', {
		to: 'main'
	});
});