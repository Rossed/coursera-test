Template.loginButtons.rendered = function() {
	var userId = Meteor.userId();
	if (!userId) {
		Accounts._loginButtonsSession.set('dropdownVisible', true);
	} else {
		Accounts._loginButtonsSession.set('dropdownVisible', false);
	}
};

Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});
