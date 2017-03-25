var require = meteorInstall({"lib":{"collections.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// lib/collections.js                                                                       //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
Chats = new Mongo.Collection("chats");                                                      // 1
                                                                                            //
if (Meteor.isServer) {                                                                      // 3
                                                                                            //
  Meteor.publish("chats", function () {                                                     // 5
    return Chats.find({ $or: [{ user1Id: this.userId }, { user2Id: this.userId }] });       // 6
  });                                                                                       //
                                                                                            //
  Meteor.publish("users", function () {                                                     // 12
    return Meteor.users.find();                                                             // 13
  });                                                                                       //
                                                                                            //
  Meteor.publish('emojis', function () {                                                    // 16
    // Here you can choose to publish a subset of all emojis                                //
    // if you'd like to.                                                                    //
    return Emojis.find();                                                                   // 19
  });                                                                                       //
}                                                                                           //
                                                                                            //
if (Meteor.isClient) {                                                                      // 23
  Meteor.subscribe('chats');                                                                // 24
  Meteor.subscribe('users');                                                                // 25
  Meteor.subscribe('emojis');                                                               // 26
}                                                                                           //
//////////////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// lib/methods.js                                                                           //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
Meteor.methods({                                                                            // 1
  "getChat": function () {                                                                  // 2
    function getChat(otherUserId) {                                                         // 2
      // var otherUserId = this.params._id;                                                 //
      // find a chat that has two users that match current user id                          //
      // and the requested user id                                                          //
      if (this.userId) {                                                                    // 6
        var filter = { $or: [{ user1Id: this.userId, user2Id: otherUserId }, { user2Id: this.userId, user1Id: otherUserId }] };
        var chat = Chats.findOne(filter);                                                   // 11
        if (!chat) {                                                                        // 12
          // no chat matching the filter - need to insert a new one                         //
          return Chats.insert({ user1Id: Meteor.userId(), user2Id: otherUserId });          // 13
        } else {                                                                            //
          // there is a chat going already - use that.                                      //
          return chat._id;                                                                  // 16
        }                                                                                   //
      }                                                                                     //
    }                                                                                       //
                                                                                            //
    return getChat;                                                                         //
  }(),                                                                                      //
  "sendMessage": function () {                                                              // 20
    function sendMessage(chatId, message) {                                                 // 20
      if (this.userId) {                                                                    // 21
        var chat = Chats.findOne({ _id: chatId });                                          // 22
        if (chat) {                                                                         // 23
          // ok - we have a chat to use                                                     //
          var msgs = chat.messages; // pull the messages property                           // 24
          if (!msgs) {                                                                      // 23
            // no messages yet, create a new array                                          //
            msgs = [];                                                                      // 26
          }                                                                                 //
          // is a good idea to insert data straight from the form                           //
          // (i.e. the user) into the database?? certainly not.                             //
          // push adds the message to the end of the array                                  //
          msgs.push({                                                                       // 23
            text: message,                                                                  // 32
            userId: this.userId,                                                            // 33
            createdOn: new Date()                                                           // 34
          });                                                                               //
          // put the messages array onto the chat object                                    //
          chat.messages = msgs;                                                             // 23
          // update the chat object in the database.                                        //
          Chats.update(chat._id, chat);                                                     // 23
        }                                                                                   //
      }                                                                                     //
    }                                                                                       //
                                                                                            //
    return sendMessage;                                                                     //
  }()                                                                                       //
});                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// lib/routes.js                                                                            //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
// set up the main template the the router will use to build pages                          //
Router.configure({                                                                          // 2
  layoutTemplate: 'ApplicationLayout'                                                       // 3
});                                                                                         //
// specify the top level route, the page users see when they arrive at the site             //
Router.route('/', function () {                                                             // 6
  this.render("navbar", { to: "header" });                                                  // 7
  this.render("lobby_page", { to: "main" });                                                // 8
});                                                                                         //
                                                                                            //
// specify a route that allows the current user to chat to another users                    //
Router.route('/chat/:_id', function () {                                                    // 12
  Meteor.call("getChat", this.params._id, function (error, result) {                        // 13
    Session.set("chatId", result);                                                          // 14
  });                                                                                       //
  // // the user they want to chat to has id equal to                                       //
  // // the id sent in after /chat/...                                                      //
  // var otherUserId = this.params._id;                                                     //
  // // find a chat that has two users that match current user id                           //
  // // and the requested user id                                                           //
  // var filter = {$or:[                                                                    //
  //             {user1Id:Meteor.userId(), user2Id:otherUserId},                            //
  //             {user2Id:Meteor.userId(), user1Id:otherUserId}                             //
  //             ]};                                                                        //
  // var chat = Chats.findOne(filter);                                                      //
  // if (!chat){// no chat matching the filter - need to insert a new one                   //
  //   chatId = Chats.insert({user1Id:Meteor.userId(), user2Id:otherUserId});               //
  // }                                                                                      //
  // else {// there is a chat going already - use that.                                     //
  //   chatId = chat._id;                                                                   //
  // }                                                                                      //
  // if (chatId){// looking good, save the id to the session                                //
  //   Session.set("chatId",chatId);                                                        //
  // }                                                                                      //
  this.render("navbar", { to: "header" });                                                  // 12
  this.render("chat_page", { to: "main" });                                                 // 36
});                                                                                         //
Router.route('/about', function () {                                                        // 38
  this.render("navbar", { to: "header" });                                                  // 39
  this.render("about", { to: "main" });                                                     // 40
});                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"startup.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// server/startup.js                                                                        //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
// start up script that creates some users for testing                                      //
// users have the username 'user1@test.com' .. 'user8@test.com'                             //
// and the password test123                                                                 //
Meteor.startup(function () {                                                                // 4
  if (!Meteor.users.findOne()) {                                                            // 5
    for (var i = 1; i < 9; i++) {                                                           // 6
      var email = "user" + i + "@test.com";                                                 // 7
      var username = "user" + i;                                                            // 8
      var avatar = "ava" + i + ".png";                                                      // 9
      console.log("creating a user with password 'test123' and username/ email: " + email);
      Meteor.users.insert({ profile: { username: username, avatar: avatar }, emails: [{ address: email }], services: { password: { "bcrypt": "$2a$10$I3erQ084OiyILTv8ybtQ4ON6wusgPbMZ6.P33zzSDei.BbDL.Q4EO" } } });
    }                                                                                       //
  }                                                                                         //
});                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./lib/collections.js");
require("./lib/methods.js");
require("./lib/routes.js");
require("./server/startup.js");
//# sourceMappingURL=app.js.map
