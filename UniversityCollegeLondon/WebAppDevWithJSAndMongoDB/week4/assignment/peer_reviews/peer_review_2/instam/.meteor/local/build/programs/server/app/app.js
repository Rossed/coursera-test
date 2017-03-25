var require = meteorInstall({"lib":{"collections.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// lib/collections.js                                                                    //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
Chats = new Mongo.Collection("chats");                                                   // 1
///////////////////////////////////////////////////////////////////////////////////////////

},"schema.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// lib/schema.js                                                                         //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
Chats.attachSchema(new SimpleSchema({                                                    // 1
	message: {                                                                              // 2
		type: String,                                                                          // 3
		max: 500                                                                               // 4
	},                                                                                      // 2
	from: {                                                                                 // 6
		type: String,                                                                          // 7
		optional: true                                                                         // 8
	},                                                                                      // 6
	to: {                                                                                   // 10
		type: String,                                                                          // 11
		optional: true                                                                         // 12
	},                                                                                      // 10
	createdOn: {                                                                            // 14
		type: Date,                                                                            // 15
		optional: true                                                                         // 16
	}                                                                                       // 14
}));                                                                                     // 1
///////////////////////////////////////////////////////////////////////////////////////////

}},"common":{"methods.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// common/methods.js                                                                     //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
var now;                                                                                 // 1
                                                                                         //
Meteor.methods({                                                                         // 3
	sendValue: function sendValue(value) {                                                  // 4
		now = value;                                                                           // 5
		//console.log(now + " server");                                                        //
	},                                                                                      // 7
                                                                                         //
	sendMsg: function sendMsg(message) {                                                    // 9
		message.from = this.userId;                                                            // 10
		message.to = now;                                                                      // 11
		message.createdOn = new Date();                                                        // 12
		Chats.insert(message);                                                                 // 13
	}                                                                                       // 14
});                                                                                      // 3
///////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"startup.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// server/startup.js                                                                     //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
Meteor.startup(function () {                                                             // 1
	if (!Meteor.users.findOne()) {                                                          // 2
		for (var i = 1; i < 5; i++) {                                                          // 3
			var email = "user" + i + "@test.com";                                                 // 4
			var username = "user" + i;                                                            // 5
			var avatar = "avator" + i + ".png";                                                   // 6
			console.log("creating a user with password 'test123' and username/ email: " + email);
			Meteor.users.insert({ profile: { username: username, avatar: avatar }, emails: [{ address: email }], services: { password: { "bcrypt": "$2a$10$I3erQ084OiyILTv8ybtQ4ON6wusgPbMZ6.P33zzSDei.BbDL.Q4EO" } } });
		}                                                                                      // 9
	}                                                                                       // 10
});                                                                                      // 11
///////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// server/main.js                                                                        //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
//read access                                                                            //
                                                                                         //
Meteor.publish("users", function () {                                                    // 3
	if (this.userId) {                                                                      // 4
		return Meteor.users.find({});                                                          // 5
	} else {                                                                                // 6
		return undefined;                                                                      // 7
	}                                                                                       // 8
});                                                                                      // 9
                                                                                         //
Meteor.publish("chats", function () {                                                    // 11
	if (this.userId) {                                                                      // 12
		return Chats.find({});                                                                 // 13
	} else {                                                                                // 14
		return undefined;                                                                      // 15
	}                                                                                       // 16
});                                                                                      // 17
///////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./lib/collections.js");
require("./lib/schema.js");
require("./common/methods.js");
require("./server/startup.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
