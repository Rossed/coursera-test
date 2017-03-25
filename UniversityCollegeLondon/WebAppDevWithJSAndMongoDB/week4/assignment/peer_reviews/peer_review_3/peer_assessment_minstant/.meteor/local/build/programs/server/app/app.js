var require = meteorInstall({"shared":{"methods.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// shared/methods.js                                                                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"minstant.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// minstant.js                                                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Chats = new Mongo.Collection("chats");                                                                              // 1
// subscriptions - allow read access to collections                                                                 //
                                                                                                                    //
if (Meteor.isClient) {                                                                                              // 5
                                                                                                                    //
  Meteor.subscribe("chats");                                                                                        // 7
  Meteor.subscribe("users");                                                                                        // 8
                                                                                                                    //
  // set up the main template the the router will use to build pages                                                //
  Router.configure({                                                                                                // 11
    layoutTemplate: 'ApplicationLayout'                                                                             // 12
  });                                                                                                               // 11
  // specify the top level route, the page users see when they arrive at the site                                   //
  Router.route('/', function () {                                                                                   // 15
    console.log("rendering root /");                                                                                // 16
    this.render("navbar", { to: "header" });                                                                        // 17
    this.render("lobby_page", { to: "main" });                                                                      // 18
  });                                                                                                               // 19
                                                                                                                    //
  // specify a route that allows the current user to chat to another users                                          //
  Router.route('/chat/:_id', function () {                                                                          // 22
    // make sure user is logged in before chatting TBD: see iron:router documentation                               //
    if (!Meteor.user()) {                                                                                           // 24
      console.log("you are not logged in!!!");                                                                      // 25
      Router.go('/');                                                                                               // 26
    }                                                                                                               // 28
                                                                                                                    //
    // the user they want to chat to has id equal to                                                                //
    // the id sent in after /chat/...                                                                               //
    var otherUserId = this.params._id;                                                                              // 33
    // find a chat that has two users that match current user id                                                    //
    // and the requested user id                                                                                    //
    var filter = {                                                                                                  // 36
      $or: [{ user1Id: Meteor.userId(), user2Id: otherUserId }, { user2Id: Meteor.userId(), user1Id: otherUserId }]
    };                                                                                                              // 36
    var chat = Chats.findOne(filter);                                                                               // 42
    if (!chat) {                                                                                                    // 43
      // no chat matching the filter - need to insert a new one                                                     //
      // chatId = Chats.insert({user1Id:Meteor.userId(), user2Id:otherUserId});                                     //
      chatId = Meteor.call("addChat", Meteor.userId(), otherUserId);                                                // 45
    } else {                                                                                                        // 46
      // there is a chat going already - use that.                                                                  //
      chatId = chat._id;                                                                                            // 48
    }                                                                                                               // 49
    if (chatId) {                                                                                                   // 50
      // looking good, save the id to the session                                                                   //
      Session.set("chatId", chatId);                                                                                // 51
    }                                                                                                               // 52
    this.render("navbar", { to: "header" });                                                                        // 53
    this.render("chat_page", { to: "main" });                                                                       // 54
  });                                                                                                               // 56
                                                                                                                    //
  ///                                                                                                               //
  // helper functions                                                                                               //
  ///                                                                                                               //
  Template.available_user_list.helpers({                                                                            // 61
    users: function users() {                                                                                       // 62
      return Meteor.users.find();                                                                                   // 63
    }                                                                                                               // 64
  });                                                                                                               // 61
  Template.available_user.helpers({                                                                                 // 66
    getUsername: function getUsername(userId) {                                                                     // 67
      user = Meteor.users.findOne({ _id: userId });                                                                 // 68
      return user.profile.username;                                                                                 // 69
    },                                                                                                              // 70
    isMyUser: function isMyUser(userId) {                                                                           // 71
      if (userId == Meteor.userId()) {                                                                              // 72
        return true;                                                                                                // 73
      } else {                                                                                                      // 74
        return false;                                                                                               // 76
      }                                                                                                             // 77
    }                                                                                                               // 78
  });                                                                                                               // 66
                                                                                                                    //
  Template.chat_page.helpers({                                                                                      // 82
    messages: function messages() {                                                                                 // 83
      var chat = Chats.findOne({ _id: Session.get("chatId") });                                                     // 84
      return chat.messages;                                                                                         // 85
    },                                                                                                              // 86
    other_user: function other_user() {                                                                             // 87
      return "";                                                                                                    // 88
    }                                                                                                               // 89
                                                                                                                    //
  });                                                                                                               // 82
                                                                                                                    //
  Template.chat_message.helpers({                                                                                   // 93
    userId2Avatar: function userId2Avatar(userId) {                                                                 // 94
      user = Meteor.users.findOne({ _id: userId });                                                                 // 95
      console.log("avatar: " + user.profile.avatar);                                                                // 96
      return user.profile.avatar;                                                                                   // 97
    },                                                                                                              // 98
    userId2Name: function userId2Name(userId) {                                                                     // 99
      user = Meteor.users.findOne({ _id: userId });                                                                 // 100
      console.log("avatar: " + user.profile.avatar);                                                                // 101
      return user.profile.username;                                                                                 // 102
    }                                                                                                               // 103
  });                                                                                                               // 93
                                                                                                                    //
  Template.chat_page.events({                                                                                       // 106
    // this event fires when the user sends a message on the chat page                                              //
    'submit .js-send-chat': function submitJsSendChat(event) {                                                      // 108
      // stop the form from triggering a page reload                                                                //
      event.preventDefault();                                                                                       // 110
      var chatId = Session.get("chatId");                                                                           // 111
      var chatText = event.target.chat.value;                                                                       // 112
      Meteor.call("sendChat", chatId, chatText);                                                                    // 113
      // reset the form                                                                                             //
      event.target.chat.value = "";                                                                                 // 115
    }                                                                                                               // 116
  });                                                                                                               // 106
}                                                                                                                   // 118
                                                                                                                    //
// Meteor Methods                                                                                                   //
Meteor.methods({                                                                                                    // 121
  addChat: function addChat(u1, u2) {                                                                               // 122
    if (!this.userId) {                                                                                             // 123
      console.log("user not logged in!");                                                                           // 124
      return; // user not logged in, give up                                                                        // 125
    }                                                                                                               // 126
    return Chats.insert({ user1Id: u1, user2Id: u2 });                                                              // 127
  },                                                                                                                // 128
  sendChat: function sendChat(chatId, chatText) {                                                                   // 129
    // see if we can find a chat object in the database                                                             //
    // to which we'll add the message                                                                               //
    var chat = Chats.findOne({ _id: chatId });                                                                      // 132
    if (chat) {                                                                                                     // 133
      // ok - we have a chat to use                                                                                 //
      var msgs = chat.messages; // pull the messages property                                                       // 134
      if (!msgs) {                                                                                                  // 135
        // no messages yet, create a new array                                                                      //
        msgs = [];                                                                                                  // 136
      }                                                                                                             // 137
      // is a good idea to insert data straight from the form                                                       //
      // (i.e. the user) into the database?? certainly not.                                                         //
      // push adds the message to the end of the array                                                              //
      msgs.push({ text: chatText, source: Meteor.userId() });                                                       // 141
                                                                                                                    //
      // put the messages array onto the chat object                                                                //
      chat.messages = msgs;                                                                                         // 144
      // update the chat object in the database.                                                                    //
      Chats.update(chat._id, chat);                                                                                 // 146
    }                                                                                                               // 147
  }                                                                                                                 // 148
});                                                                                                                 // 121
                                                                                                                    //
// start up script that creates some users for testing                                                              //
// users have the username 'user1@test.com' .. 'user8@test.com'                                                     //
// and the password test123                                                                                         //
                                                                                                                    //
if (Meteor.isServer) {                                                                                              // 157
  Meteor.startup(function () {                                                                                      // 158
    if (!Meteor.users.findOne()) {                                                                                  // 159
      for (var i = 1; i < 9; i++) {                                                                                 // 160
        var email = "user" + i + "@test.com";                                                                       // 161
        var username = "user" + i;                                                                                  // 162
        var avatar = "ava" + i + ".png";                                                                            // 163
        console.log("creating a user with password 'test123' and username/ email: " + email);                       // 164
        Meteor.users.insert({ profile: { username: username, avatar: avatar }, emails: [{ address: email }], services: { password: { "bcrypt": "$2a$10$I3erQ084OiyILTv8ybtQ4ON6wusgPbMZ6.P33zzSDei.BbDL.Q4EO" } } });
      }                                                                                                             // 166
    }                                                                                                               // 167
  });                                                                                                               // 168
                                                                                                                    //
  Meteor.publish("chats", function () {                                                                             // 170
    return Chats.find({});                                                                                          // 171
  });                                                                                                               // 172
                                                                                                                    //
  Meteor.publish("users", function () {                                                                             // 174
    return Meteor.users.find({});                                                                                   // 175
  });                                                                                                               // 176
}                                                                                                                   // 177
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},{"extensions":[".js",".json"]});
require("./shared/methods.js");
require("./minstant.js");
//# sourceMappingURL=app.js.map
