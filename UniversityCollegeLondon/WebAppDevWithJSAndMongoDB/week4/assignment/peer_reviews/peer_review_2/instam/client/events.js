Template.userList.events({
	'click .js_user_selected': function(event) {
		Session.set("now", this._id);
		//console.log(Session.get("now"));
		Meteor.call("sendValue", Session.get("now"));
	}
});