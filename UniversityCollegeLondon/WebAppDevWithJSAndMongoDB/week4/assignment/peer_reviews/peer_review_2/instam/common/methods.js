var now;

Meteor.methods({
	sendValue: function(value) {
		now = value;
		//console.log(now + " server");
	},

	sendMsg: function(message) {
		message.from = this.userId;
		message.to = now;
		message.createdOn = new Date();
		Chats.insert(message);
	}
});