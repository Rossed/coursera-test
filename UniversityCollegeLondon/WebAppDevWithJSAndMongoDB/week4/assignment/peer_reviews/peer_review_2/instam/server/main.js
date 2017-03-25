//read access 

Meteor.publish("users", function() {
	if (this.userId) {
		return Meteor.users.find({});
	} else {
		return undefined;
	}
});

Meteor.publish("chats", function() {
	if (this.userId) {
		return Chats.find({});
	} else {
		return undefined;
	}
});