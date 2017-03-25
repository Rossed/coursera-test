var require = meteorInstall({"template.minstant.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// template.minstant.js                                                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.body.addContent((function() {                                                                              // 2
  var view = this;                                                                                                  // 3
  return "";                                                                                                        // 4
}));                                                                                                                // 5
Meteor.startup(Template.body.renderToDocument);                                                                     // 6
                                                                                                                    // 7
Template.__checkName("ApplicationLayout");                                                                          // 8
Template["ApplicationLayout"] = new Template("Template.ApplicationLayout", (function() {                            // 9
  var view = this;                                                                                                  // 10
  return [ Blaze._TemplateWith(function() {                                                                         // 11
    return "header";                                                                                                // 12
  }, function() {                                                                                                   // 13
    return Spacebars.include(view.lookupTemplate("yield"));                                                         // 14
  }), "\n	\n	", HTML.DIV({                                                                                          // 15
    "class": "container"                                                                                            // 16
  }, "\n	", Blaze._TemplateWith(function() {                                                                        // 17
    return "main";                                                                                                  // 18
  }, function() {                                                                                                   // 19
    return Spacebars.include(view.lookupTemplate("yield"));                                                         // 20
  }), "\n	") ];                                                                                                     // 21
}));                                                                                                                // 22
                                                                                                                    // 23
Template.__checkName("navbar");                                                                                     // 24
Template["navbar"] = new Template("Template.navbar", (function() {                                                  // 25
  var view = this;                                                                                                  // 26
  return HTML.NAV({                                                                                                 // 27
    "class": "navbar navbar-default"                                                                                // 28
  }, "\n  ", HTML.DIV({                                                                                             // 29
    "class": "container-fluid"                                                                                      // 30
  }, "\n    ", HTML.Raw('<div class="navbar-header">\n      <a class="navbar-brand" href="/">\n        Minstant!\n      </a>\n    </div>'), "\n    ", HTML.DIV({
    "class": "nav navbar-nav"                                                                                       // 32
  }, "\n    ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n"), "\n  "), "\n");                       // 33
}));                                                                                                                // 34
                                                                                                                    // 35
Template.__checkName("lobby_page");                                                                                 // 36
Template["lobby_page"] = new Template("Template.lobby_page", (function() {                                          // 37
  var view = this;                                                                                                  // 38
  return Spacebars.include(view.lookupTemplate("available_user_list"));                                             // 39
}));                                                                                                                // 40
                                                                                                                    // 41
Template.__checkName("available_user_list");                                                                        // 42
Template["available_user_list"] = new Template("Template.available_user_list", (function() {                        // 43
  var view = this;                                                                                                  // 44
  return [ HTML.Raw("<h2>Choose someone to chat with:</h2>\n	"), HTML.DIV({                                         // 45
    "class": "row"                                                                                                  // 46
  }, "\n	", Blaze.Each(function() {                                                                                 // 47
    return Spacebars.call(view.lookup("users"));                                                                    // 48
  }, function() {                                                                                                   // 49
    return [ "\n	", Spacebars.include(view.lookupTemplate("available_user")), "\n	" ];                              // 50
  }), "\n") ];                                                                                                      // 51
}));                                                                                                                // 52
                                                                                                                    // 53
Template.__checkName("available_user");                                                                             // 54
Template["available_user"] = new Template("Template.available_user", (function() {                                  // 55
  var view = this;                                                                                                  // 56
  return HTML.DIV({                                                                                                 // 57
    "class": "col-md-2 col-sm-2"                                                                                    // 58
  }, "\n		", HTML.DIV({                                                                                             // 59
    "class": "user_avatar"                                                                                          // 60
  }, "\n			", Blaze.If(function() {                                                                                 // 61
    return Spacebars.dataMustache(view.lookup("isMyUser"), view.lookup("_id"));                                     // 62
  }, function() {                                                                                                   // 63
    return [ " \n			", HTML.DIV({                                                                                   // 64
      "class": "bg-success"                                                                                         // 65
    }, Blaze.View("lookup:getUsername", function() {                                                                // 66
      return Spacebars.mustache(view.lookup("getUsername"), view.lookup("_id"));                                    // 67
    }), " (YOU)\n				", HTML.BR(), "\n				", HTML.IMG({                                                             // 68
      src: function() {                                                                                             // 69
        return [ "/", Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "avatar")) ];                        // 70
      },                                                                                                            // 71
      "class": "avatar_img"                                                                                         // 72
    }), "			\n			"), "\n			" ];                                                                                     // 73
  }, function() {                                                                                                   // 74
    return [ "\n			", HTML.A({                                                                                      // 75
      href: function() {                                                                                            // 76
        return [ "/chat/", Spacebars.mustache(view.lookup("_id")) ];                                                // 77
      }                                                                                                             // 78
    }, "\n				", Blaze.View("lookup:getUsername", function() {                                                      // 79
      return Spacebars.mustache(view.lookup("getUsername"), view.lookup("_id"));                                    // 80
    }), "\n				", HTML.BR(), "\n				", HTML.IMG({                                                                   // 81
      src: function() {                                                                                             // 82
        return [ "/", Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "avatar")) ];                        // 83
      },                                                                                                            // 84
      "class": "avatar_img"                                                                                         // 85
    }), "\n			"), "\n			" ];                                                                                        // 86
  }), "\n		"), "\n	");                                                                                              // 87
}));                                                                                                                // 88
                                                                                                                    // 89
Template.__checkName("chat_page");                                                                                  // 90
Template["chat_page"] = new Template("Template.chat_page", (function() {                                            // 91
  var view = this;                                                                                                  // 92
  return [ HTML.Raw('<h2>Type in the box below to send a message!</h2>\n    <div class="row">\n        <div class="col-md-12">\n            <div class="well well-lg">\n                <blockquote>\n                    <a href="http://emoji.codes/" target="_blank">Click to see Emoji Cheat Sheet</a>\n                    <footer>Then hover over each emoticon/emoji to get its short name so can type it anywhere in your text message . For exmple: :smile: for smiley face, :angry: for angry face, etc. (notice the ":" before and after the short name). Exmple text message: \'Greetings from outerspace :alien:\'</footer>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n    '), HTML.DIV({
    "class": "row"                                                                                                  // 94
  }, "\n        ", HTML.DIV({                                                                                       // 95
    "class": "col-md-12"                                                                                            // 96
  }, "\n            ", HTML.DIV({                                                                                   // 97
    "class": "well well-lg"                                                                                         // 98
  }, "\n                ", Blaze.Each(function() {                                                                  // 99
    return Spacebars.call(view.lookup("messages"));                                                                 // 100
  }, function() {                                                                                                   // 101
    return [ "\n                ", Spacebars.include(view.lookupTemplate("chat_message")), "\n                " ];  // 102
  }), "\n            "), "\n        "), "\n    "), HTML.Raw('\n    <div class="row">\n        <div class="col-md-12">\n            <form class="js-send-chat">\n                <input class="input" type="text" name="chat" placeholder="type a message here...">\n                <button class="btn btn-default">send</button>\n            </form>\n        </div>\n    </div>') ];
}));                                                                                                                // 104
                                                                                                                    // 105
Template.__checkName("chat_message");                                                                               // 106
Template["chat_message"] = new Template("Template.chat_message", (function() {                                      // 107
  var view = this;                                                                                                  // 108
  return [ HTML.IMG({                                                                                               // 109
    src: function() {                                                                                               // 110
      return [ "/", Spacebars.mustache(view.lookup("userId2Avatar"), view.lookup("source")) ];                      // 111
    },                                                                                                              // 112
    "class": "avatar_img"                                                                                           // 113
  }), "\n     \n	", Blaze.View("lookup:userId2Name", function() {                                                   // 114
    return Spacebars.mustache(view.lookup("userId2Name"), view.lookup("source"));                                   // 115
  }), " said: ", Spacebars.include(view.lookupTemplate("emojione"), function() {                                    // 116
    return [ " ", Blaze.View("lookup:text", function() {                                                            // 117
      return Spacebars.mustache(view.lookup("text"));                                                               // 118
    }), " " ];                                                                                                      // 119
  }), HTML.Raw("\n	<br>") ];                                                                                        // 120
}));                                                                                                                // 121
                                                                                                                    // 122
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"shared":{"methods.js":function(){

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
    users: function () {                                                                                            // 62
      function users() {                                                                                            // 62
        return Meteor.users.find();                                                                                 // 63
      }                                                                                                             // 64
                                                                                                                    //
      return users;                                                                                                 // 62
    }()                                                                                                             // 62
  });                                                                                                               // 61
  Template.available_user.helpers({                                                                                 // 66
    getUsername: function () {                                                                                      // 67
      function getUsername(userId) {                                                                                // 67
        user = Meteor.users.findOne({ _id: userId });                                                               // 68
        return user.profile.username;                                                                               // 69
      }                                                                                                             // 70
                                                                                                                    //
      return getUsername;                                                                                           // 67
    }(),                                                                                                            // 67
    isMyUser: function () {                                                                                         // 71
      function isMyUser(userId) {                                                                                   // 71
        if (userId == Meteor.userId()) {                                                                            // 72
          return true;                                                                                              // 73
        } else {                                                                                                    // 74
          return false;                                                                                             // 76
        }                                                                                                           // 77
      }                                                                                                             // 78
                                                                                                                    //
      return isMyUser;                                                                                              // 71
    }()                                                                                                             // 71
  });                                                                                                               // 66
                                                                                                                    //
  Template.chat_page.helpers({                                                                                      // 82
    messages: function () {                                                                                         // 83
      function messages() {                                                                                         // 83
        var chat = Chats.findOne({ _id: Session.get("chatId") });                                                   // 84
        return chat.messages;                                                                                       // 85
      }                                                                                                             // 86
                                                                                                                    //
      return messages;                                                                                              // 83
    }(),                                                                                                            // 83
    other_user: function () {                                                                                       // 87
      function other_user() {                                                                                       // 87
        return "";                                                                                                  // 88
      }                                                                                                             // 89
                                                                                                                    //
      return other_user;                                                                                            // 87
    }()                                                                                                             // 87
                                                                                                                    //
  });                                                                                                               // 82
                                                                                                                    //
  Template.chat_message.helpers({                                                                                   // 93
    userId2Avatar: function () {                                                                                    // 94
      function userId2Avatar(userId) {                                                                              // 94
        user = Meteor.users.findOne({ _id: userId });                                                               // 95
        console.log("avatar: " + user.profile.avatar);                                                              // 96
        return user.profile.avatar;                                                                                 // 97
      }                                                                                                             // 98
                                                                                                                    //
      return userId2Avatar;                                                                                         // 94
    }(),                                                                                                            // 94
    userId2Name: function () {                                                                                      // 99
      function userId2Name(userId) {                                                                                // 99
        user = Meteor.users.findOne({ _id: userId });                                                               // 100
        console.log("avatar: " + user.profile.avatar);                                                              // 101
        return user.profile.username;                                                                               // 102
      }                                                                                                             // 103
                                                                                                                    //
      return userId2Name;                                                                                           // 99
    }()                                                                                                             // 99
  });                                                                                                               // 93
                                                                                                                    //
  Template.chat_page.events({                                                                                       // 106
    // this event fires when the user sends a message on the chat page                                              //
    'submit .js-send-chat': function () {                                                                           // 108
      function submitJsSendChat(event) {                                                                            // 108
        // stop the form from triggering a page reload                                                              //
        event.preventDefault();                                                                                     // 110
        var chatId = Session.get("chatId");                                                                         // 111
        var chatText = event.target.chat.value;                                                                     // 112
        Meteor.call("sendChat", chatId, chatText);                                                                  // 113
        // reset the form                                                                                           //
        event.target.chat.value = "";                                                                               // 115
      }                                                                                                             // 116
                                                                                                                    //
      return submitJsSendChat;                                                                                      // 108
    }()                                                                                                             // 108
  });                                                                                                               // 106
}                                                                                                                   // 118
                                                                                                                    //
// Meteor Methods                                                                                                   //
Meteor.methods({                                                                                                    // 121
  addChat: function () {                                                                                            // 122
    function addChat(u1, u2) {                                                                                      // 122
      if (!this.userId) {                                                                                           // 123
        console.log("user not logged in!");                                                                         // 124
        return; // user not logged in, give up                                                                      // 125
      }                                                                                                             // 126
      return Chats.insert({ user1Id: u1, user2Id: u2 });                                                            // 127
    }                                                                                                               // 128
                                                                                                                    //
    return addChat;                                                                                                 // 122
  }(),                                                                                                              // 122
  sendChat: function () {                                                                                           // 129
    function sendChat(chatId, chatText) {                                                                           // 129
      // see if we can find a chat object in the database                                                           //
      // to which we'll add the message                                                                             //
      var chat = Chats.findOne({ _id: chatId });                                                                    // 132
      if (chat) {                                                                                                   // 133
        // ok - we have a chat to use                                                                               //
        var msgs = chat.messages; // pull the messages property                                                     // 134
        if (!msgs) {                                                                                                // 135
          // no messages yet, create a new array                                                                    //
          msgs = [];                                                                                                // 136
        }                                                                                                           // 137
        // is a good idea to insert data straight from the form                                                     //
        // (i.e. the user) into the database?? certainly not.                                                       //
        // push adds the message to the end of the array                                                            //
        msgs.push({ text: chatText, source: Meteor.userId() });                                                     // 141
                                                                                                                    //
        // put the messages array onto the chat object                                                              //
        chat.messages = msgs;                                                                                       // 144
        // update the chat object in the database.                                                                  //
        Chats.update(chat._id, chat);                                                                               // 146
      }                                                                                                             // 147
    }                                                                                                               // 148
                                                                                                                    //
    return sendChat;                                                                                                // 129
  }()                                                                                                               // 129
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

}},{"extensions":[".js",".json",".html",".css"]});
require("./template.minstant.js");
require("./shared/methods.js");
require("./minstant.js");