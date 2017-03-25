var require = meteorInstall({"lib":{"collections.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// lib/collections.js                                                                       //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
Chats = new Mongo.Collection("chats");                                                      // 1
//////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// server/main.js                                                                           //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
// start up script that creates some users for testing                                      //
// users have the username 'user1@test.com' .. 'user8@test.com'                             //
// and the password test123                                                                 //
                                                                                            //
Meteor.startup(function () {                                                                // 5
  if (!Meteor.users.findOne()) {                                                            // 6
    for (var i = 1; i < 9; i++) {                                                           // 7
      var email = "user" + i + "@test.com";                                                 // 8
      var username = "user" + i;                                                            // 9
      var avatar = "ava" + i + ".png";                                                      // 10
      console.log("creating a user with password 'test123' and username/ email: " + email);
      Meteor.users.insert({ profile: { username: username, avatar: avatar }, emails: [{ address: email }], services: { password: { "bcrypt": "$2a$10$I3erQ084OiyILTv8ybtQ4ON6wusgPbMZ6.P33zzSDei.BbDL.Q4EO" } } });
    }                                                                                       //
  }                                                                                         //
});                                                                                         //
Accounts.onCreateUser(function (options, user) {                                            // 16
  console.log(options.profile);                                                             // 17
  user.profile = {};                                                                        // 18
  user.profile = options.profile;                                                           // 19
                                                                                            //
  if (user.profile.gender == "m") {                                                         // 21
    user.profile.avatar = "ava2.png";                                                       // 22
  } else {                                                                                  //
    user.profile.avatar = "ava1.png";                                                       // 24
  }                                                                                         //
  return user;                                                                              // 26
});                                                                                         //
Meteor.publish("chats", function () {                                                       // 28
  var filter = { $or: [{ user1Id: this.userId }, { user2Id: this.userId }] };               // 29
  return Chats.find(filter);                                                                // 33
});                                                                                         //
Meteor.publish("users", function () {                                                       // 35
  return Meteor.users.find();                                                               // 36
});                                                                                         //
Meteor.publish('emojis', function () {                                                      // 38
  return Emojis.find();                                                                     // 39
});                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////

}},"shared":{"main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// shared/main.js                                                                           //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
///                                                                                         //
// Shared Folder                                                                            //
///                                                                                         //
                                                                                            //
Meteor.methods({                                                                            // 5
	insertChat: function () {                                                                  // 6
		function insertChat(otherUserId) {                                                        // 6
			chatId = Chats.insert({ user1Id: Meteor.userId(), user2Id: otherUserId });               // 7
			return chatId;                                                                           // 8
		}                                                                                         //
                                                                                            //
		return insertChat;                                                                        //
	}(),                                                                                       //
	updateChat: function () {                                                                  // 10
		function updateChat(chat) {                                                               // 10
			Chats.update(chat._id, chat);                                                            // 11
		}                                                                                         //
                                                                                            //
		return updateChat;                                                                        //
	}()                                                                                        //
});                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./lib/collections.js");
require("./server/main.js");
require("./shared/main.js");
//# sourceMappingURL=app.js.map
