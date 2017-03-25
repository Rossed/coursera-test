var require = meteorInstall({"client":{"template.about.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/template.about.js                                                                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("about");                                                                                     // 2
Template["about"] = new Template("Template.about", (function() {                                                   // 3
  var view = this;                                                                                                 // 4
  return HTML.Raw('<h2>This is a chat</h2>\n  <p>Try to use emojis</p>\n  <p><a href="http://www.webpagefx.com/tools/emoji-cheat-sheet/">emojis cheatsheet</a></p>');
}));                                                                                                               // 6
                                                                                                                   // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.chat.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/template.chat.js                                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("chat_page");                                                                                 // 2
Template["chat_page"] = new Template("Template.chat_page", (function() {                                           // 3
  var view = this;                                                                                                 // 4
  return [ HTML.H2("Type in the box below to send a message to ", Blaze.View("lookup:chatWith.profile.username", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("chatWith"), "profile", "username"));                      // 6
  }), "!"), "\n	", HTML.DIV({                                                                                      // 7
    "class": "row"                                                                                                 // 8
  }, "\n		", HTML.DIV({                                                                                            // 9
    "class": "col-md-12"                                                                                           // 10
  }, "\n			", HTML.DIV({                                                                                           // 11
    "class": "well well-lg"                                                                                        // 12
  }, "\n			", Blaze.Each(function() {                                                                              // 13
    return Spacebars.call(view.lookup("messages"));                                                                // 14
  }, function() {                                                                                                  // 15
    return [ "\n			", Spacebars.include(view.lookupTemplate("chat_message")), "\n			" ];                           // 16
  }), "\n			"), "\n		"), "\n	"), HTML.Raw('\n    <div class="row">\n		<div class="col-md-12">\n			<form class="js-send-chat">\n				<div class="input-group">\n					<input class="input form-control" type="text" name="chat" placeholder="type a message here...">\n		      <span class="input-group-btn">\n		        <button class="btn btn-default" type="submit">Send</button>\n		      </span>\n		    </div>\n			</form>\n		</div>\n	</div>') ];
}));                                                                                                               // 18
                                                                                                                   // 19
Template.__checkName("chat_message");                                                                              // 20
Template["chat_message"] = new Template("Template.chat_message", (function() {                                     // 21
  var view = this;                                                                                                 // 22
  return HTML.DIV({                                                                                                // 23
    "class": function() {                                                                                          // 24
      return [ "\n		row\n		", Blaze.If(function() {                                                                // 25
        return Spacebars.call(view.lookup("isOwner"));                                                             // 26
      }, function() {                                                                                              // 27
        return "\n			bg-success\n		";                                                                              // 28
      }), "\n\n	" ];                                                                                               // 29
    }                                                                                                              // 30
  }, "\n	  ", HTML.DIV({                                                                                           // 31
    "class": "col-xs-3 col-md-2"                                                                                   // 32
  }, "\n	    ", HTML.A({                                                                                           // 33
    href: "#",                                                                                                     // 34
    "class": "thumbnail"                                                                                           // 35
  }, "\n	      ", HTML.IMG({                                                                                       // 36
    "class": "media-object",                                                                                       // 37
    src: function() {                                                                                              // 38
      return [ "/", Spacebars.mustache(Spacebars.dot(view.lookup("user"), "profile", "avatar")) ];                 // 39
    },                                                                                                             // 40
    alt: function() {                                                                                              // 41
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "profile", "username"));                        // 42
    }                                                                                                              // 43
  }), "\n	    "), "\n	  "), "\n	  ", HTML.DIV({                                                                    // 44
    "class": "col-xs-9 col-md-10"                                                                                  // 45
  }, "\n	    ", HTML.H4({                                                                                          // 46
    "class": "media-heading"                                                                                       // 47
  }, "\n				", Blaze.If(function() {                                                                               // 48
    return Spacebars.call(view.lookup("isOwner"));                                                                 // 49
  }, function() {                                                                                                  // 50
    return "\n					You said\n			  ";                                                                               // 51
  }, function() {                                                                                                  // 52
    return [ "\n					", Blaze.View("lookup:user.profile.username", function() {                                    // 53
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "profile", "username"));                        // 54
    }), " said\n			  " ];                                                                                          // 55
  }), "\n				", Blaze.If(function() {                                                                              // 56
    return Spacebars.call(view.lookup("createdOn"));                                                               // 57
  }, function() {                                                                                                  // 58
    return [ "\n					", Blaze.View("lookup:formatedDate", function() {                                             // 59
      return Spacebars.mustache(view.lookup("formatedDate"));                                                      // 60
    }), "\n				" ];                                                                                                // 61
  }), "\n			"), "\n			", Spacebars.include(view.lookupTemplate("emoji"), function() {                              // 62
    return [ "\n		  	", Blaze.View("lookup:text", function() {                                                     // 63
      return Spacebars.mustache(view.lookup("text"));                                                              // 64
    }), "\n			" ];                                                                                                 // 65
  }), "\n	  "), "\n	");                                                                                            // 66
}));                                                                                                               // 67
                                                                                                                   // 68
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.layout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/template.layout.js                                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.body.addContent((function() {                                                                             // 2
  var view = this;                                                                                                 // 3
  return "";                                                                                                       // 4
}));                                                                                                               // 5
Meteor.startup(Template.body.renderToDocument);                                                                    // 6
                                                                                                                   // 7
Template.__checkName("ApplicationLayout");                                                                         // 8
Template["ApplicationLayout"] = new Template("Template.ApplicationLayout", (function() {                           // 9
  var view = this;                                                                                                 // 10
  return [ Blaze._TemplateWith(function() {                                                                        // 11
    return "header";                                                                                               // 12
  }, function() {                                                                                                  // 13
    return Spacebars.include(view.lookupTemplate("yield"));                                                        // 14
  }), "\n\n	", HTML.DIV({                                                                                          // 15
    "class": "container"                                                                                           // 16
  }, "\n	", Blaze._TemplateWith(function() {                                                                       // 17
    return "main";                                                                                                 // 18
  }, function() {                                                                                                  // 19
    return Spacebars.include(view.lookupTemplate("yield"));                                                        // 20
  }), "\n	") ];                                                                                                    // 21
}));                                                                                                               // 22
                                                                                                                   // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.minstant.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/template.minstant.js                                                                                     //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("lobby_page");                                                                                // 2
Template["lobby_page"] = new Template("Template.lobby_page", (function() {                                         // 3
  var view = this;                                                                                                 // 4
  return Spacebars.include(view.lookupTemplate("available_user_list"));                                            // 5
}));                                                                                                               // 6
                                                                                                                   // 7
Template.__checkName("available_user_list");                                                                       // 8
Template["available_user_list"] = new Template("Template.available_user_list", (function() {                       // 9
  var view = this;                                                                                                 // 10
  return [ HTML.Raw("<h2>Choose someone to chat with:</h2>\n	"), HTML.DIV({                                        // 11
    "class": "row"                                                                                                 // 12
  }, "\n	", Blaze.If(function() {                                                                                  // 13
    return Spacebars.call(view.lookup("currentUser"));                                                             // 14
  }, function() {                                                                                                  // 15
    return [ "\n		", Blaze.Each(function() {                                                                       // 16
      return Spacebars.call(view.lookup("users"));                                                                 // 17
    }, function() {                                                                                                // 18
      return [ "\n		", Spacebars.include(view.lookupTemplate("available_user")), "\n		" ];                         // 19
    }), "\n	" ];                                                                                                   // 20
  }, function() {                                                                                                  // 21
    return [ "\n		", HTML.H3("Please login"), "\n	" ];                                                             // 22
  }), "\n") ];                                                                                                     // 23
}));                                                                                                               // 24
                                                                                                                   // 25
Template.__checkName("available_user");                                                                            // 26
Template["available_user"] = new Template("Template.available_user", (function() {                                 // 27
  var view = this;                                                                                                 // 28
  return HTML.DIV({                                                                                                // 29
    "class": "col-xs-6 col-md-2"                                                                                   // 30
  }, "\n		", HTML.DIV({                                                                                            // 31
    "class": "user_avatar"                                                                                         // 32
  }, "\n			", Blaze.If(function() {                                                                                // 33
    return Spacebars.dataMustache(view.lookup("isMyUser"), view.lookup("_id"));                                    // 34
  }, function() {                                                                                                  // 35
    return [ "\n			", HTML.DIV({                                                                                   // 36
      "class": "bg-success"                                                                                        // 37
    }, Blaze.View("lookup:getUsername", function() {                                                               // 38
      return Spacebars.mustache(view.lookup("getUsername"), view.lookup("_id"));                                   // 39
    }), " (YOU)\n				", HTML.BR(), "\n				", HTML.IMG({                                                            // 40
      src: function() {                                                                                            // 41
        return [ "/", Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "avatar")) ];                       // 42
      },                                                                                                           // 43
      "class": "avatar_img"                                                                                        // 44
    }), "\n			"), "\n			" ];                                                                                       // 45
  }, function() {                                                                                                  // 46
    return [ "\n			", HTML.A({                                                                                     // 47
      href: function() {                                                                                           // 48
        return [ "/chat/", Spacebars.mustache(view.lookup("_id")) ];                                               // 49
      }                                                                                                            // 50
    }, "\n				", Blaze.View("lookup:getUsername", function() {                                                     // 51
      return Spacebars.mustache(view.lookup("getUsername"), view.lookup("_id"));                                   // 52
    }), "\n				", HTML.BR(), "\n				", HTML.IMG({                                                                  // 53
      src: function() {                                                                                            // 54
        return [ "/", Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "avatar")) ];                       // 55
      },                                                                                                           // 56
      "class": "avatar_img"                                                                                        // 57
    }), "\n			"), "\n			" ];                                                                                       // 58
  }), "\n		"), "\n	");                                                                                             // 59
}));                                                                                                               // 60
                                                                                                                   // 61
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.navbar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/template.navbar.js                                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("navbar");                                                                                    // 2
Template["navbar"] = new Template("Template.navbar", (function() {                                                 // 3
  var view = this;                                                                                                 // 4
  return HTML.NAV({                                                                                                // 5
    "class": "navbar navbar-default navbar-fixed-top"                                                              // 6
  }, "\n  ", HTML.DIV({                                                                                            // 7
    "class": "container-fluid"                                                                                     // 8
  }, "\n    ", HTML.Raw('<div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="/">\n        Minstant!\n      </a>\n    </div>'), "\n    ", HTML.DIV({
    "class": "collapse navbar-collapse",                                                                           // 10
    id: "navbar"                                                                                                   // 11
  }, "\n      ", HTML.Raw('<ul class="nav navbar-nav ">\n        <li><a href="/about">About</a></li>\n      </ul>'), "\n      ", HTML.DIV({
    "class": "nav navbar-nav navbar-right"                                                                         // 13
  }, "\n        ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n      "), "\n    "), "\n  "), "\n");
}));                                                                                                               // 15
                                                                                                                   // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"chat.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/chat.js                                                                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.chat_page.helpers({                                                                                       // 1
  messages: function () {                                                                                          // 2
    function messages() {                                                                                          // 2
      var chat = Chats.findOne({ _id: Session.get("chatId") });                                                    // 3
      if (chat) {                                                                                                  // 4
        return chat.messages;                                                                                      // 5
      } else {                                                                                                     //
        return [];                                                                                                 // 7
      }                                                                                                            //
    }                                                                                                              //
                                                                                                                   //
    return messages;                                                                                               //
  }(),                                                                                                             //
  chatWith: function () {                                                                                          // 10
    function chatWith() {                                                                                          // 10
      var chat = Chats.findOne({ _id: Session.get("chatId") });                                                    // 11
      if (chat) {                                                                                                  // 12
        if (chat.user1Id === Meteor.userId()) {                                                                    // 13
          return Meteor.users.findOne(chat.user2Id);                                                               // 14
        } else {                                                                                                   //
          return Meteor.users.findOne(chat.user1Id);                                                               // 16
        }                                                                                                          //
      }                                                                                                            //
      return;                                                                                                      // 19
    }                                                                                                              //
                                                                                                                   //
    return chatWith;                                                                                               //
  }()                                                                                                              //
});                                                                                                                //
Template.chat_page.events({                                                                                        // 22
  // this event fires when the user sends a message on the chat page                                               //
  'submit .js-send-chat': function () {                                                                            // 24
    function submitJsSendChat(event) {                                                                             // 24
      // stop the form from triggering a page reload                                                               //
      event.preventDefault();                                                                                      // 26
      Meteor.call("sendMessage", Session.get("chatId"), event.target.chat.value, function (error, result) {        // 27
        event.target.chat.value = "";                                                                              // 31
      });                                                                                                          //
    }                                                                                                              //
                                                                                                                   //
    return submitJsSendChat;                                                                                       //
  }()                                                                                                              //
});                                                                                                                //
                                                                                                                   //
Template.chat_message.helpers({                                                                                    // 37
  isOwner: function () {                                                                                           // 38
    function isOwner() {                                                                                           // 38
      return this.userId === Meteor.userId();                                                                      // 39
    }                                                                                                              //
                                                                                                                   //
    return isOwner;                                                                                                //
  }(),                                                                                                             //
  user: function () {                                                                                              // 41
    function user() {                                                                                              // 41
      return Meteor.users.findOne(this.userId);                                                                    // 42
    }                                                                                                              //
                                                                                                                   //
    return user;                                                                                                   //
  }(),                                                                                                             //
  formatedDate: function () {                                                                                      // 44
    function formatedDate() {                                                                                      // 44
      return moment(this.createdOn).fromNow();                                                                     // 45
    }                                                                                                              //
                                                                                                                   //
    return formatedDate;                                                                                           //
  }()                                                                                                              //
});                                                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/main.js                                                                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
///                                                                                                                //
// helper functions                                                                                                //
///                                                                                                                //
Template.available_user_list.helpers({                                                                             // 4
  users: function () {                                                                                             // 5
    function users() {                                                                                             // 5
      return Meteor.users.find();                                                                                  // 6
    }                                                                                                              //
                                                                                                                   //
    return users;                                                                                                  //
  }()                                                                                                              //
});                                                                                                                //
Template.available_user.helpers({                                                                                  // 9
  getUsername: function () {                                                                                       // 10
    function getUsername(userId) {                                                                                 // 10
      user = Meteor.users.findOne({ _id: userId });                                                                // 11
      return user.profile.username;                                                                                // 12
    }                                                                                                              //
                                                                                                                   //
    return getUsername;                                                                                            //
  }(),                                                                                                             //
  isMyUser: function () {                                                                                          // 14
    function isMyUser(userId) {                                                                                    // 14
      if (userId == Meteor.userId()) {                                                                             // 15
        return true;                                                                                               // 16
      } else {                                                                                                     //
        return false;                                                                                              // 19
      }                                                                                                            //
    }                                                                                                              //
                                                                                                                   //
    return isMyUser;                                                                                               //
  }()                                                                                                              //
});                                                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"collections.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// lib/collections.js                                                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Chats = new Mongo.Collection("chats");                                                                             // 1
                                                                                                                   //
if (Meteor.isServer) {                                                                                             // 3
                                                                                                                   //
  Meteor.publish("chats", function () {                                                                            // 5
    return Chats.find({ $or: [{ user1Id: this.userId }, { user2Id: this.userId }] });                              // 6
  });                                                                                                              //
                                                                                                                   //
  Meteor.publish("users", function () {                                                                            // 12
    return Meteor.users.find();                                                                                    // 13
  });                                                                                                              //
                                                                                                                   //
  Meteor.publish('emojis', function () {                                                                           // 16
    // Here you can choose to publish a subset of all emojis                                                       //
    // if you'd like to.                                                                                           //
    return Emojis.find();                                                                                          // 19
  });                                                                                                              //
}                                                                                                                  //
                                                                                                                   //
if (Meteor.isClient) {                                                                                             // 23
  Meteor.subscribe('chats');                                                                                       // 24
  Meteor.subscribe('users');                                                                                       // 25
  Meteor.subscribe('emojis');                                                                                      // 26
}                                                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// lib/methods.js                                                                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Meteor.methods({                                                                                                   // 1
  "getChat": function () {                                                                                         // 2
    function getChat(otherUserId) {                                                                                // 2
      // var otherUserId = this.params._id;                                                                        //
      // find a chat that has two users that match current user id                                                 //
      // and the requested user id                                                                                 //
      if (this.userId) {                                                                                           // 6
        var filter = { $or: [{ user1Id: this.userId, user2Id: otherUserId }, { user2Id: this.userId, user1Id: otherUserId }] };
        var chat = Chats.findOne(filter);                                                                          // 11
        if (!chat) {                                                                                               // 12
          // no chat matching the filter - need to insert a new one                                                //
          return Chats.insert({ user1Id: Meteor.userId(), user2Id: otherUserId });                                 // 13
        } else {                                                                                                   //
          // there is a chat going already - use that.                                                             //
          return chat._id;                                                                                         // 16
        }                                                                                                          //
      }                                                                                                            //
    }                                                                                                              //
                                                                                                                   //
    return getChat;                                                                                                //
  }(),                                                                                                             //
  "sendMessage": function () {                                                                                     // 20
    function sendMessage(chatId, message) {                                                                        // 20
      if (this.userId) {                                                                                           // 21
        var chat = Chats.findOne({ _id: chatId });                                                                 // 22
        if (chat) {                                                                                                // 23
          // ok - we have a chat to use                                                                            //
          var msgs = chat.messages; // pull the messages property                                                  // 24
          if (!msgs) {                                                                                             // 23
            // no messages yet, create a new array                                                                 //
            msgs = [];                                                                                             // 26
          }                                                                                                        //
          // is a good idea to insert data straight from the form                                                  //
          // (i.e. the user) into the database?? certainly not.                                                    //
          // push adds the message to the end of the array                                                         //
          msgs.push({                                                                                              // 23
            text: message,                                                                                         // 32
            userId: this.userId,                                                                                   // 33
            createdOn: new Date()                                                                                  // 34
          });                                                                                                      //
          // put the messages array onto the chat object                                                           //
          chat.messages = msgs;                                                                                    // 23
          // update the chat object in the database.                                                               //
          Chats.update(chat._id, chat);                                                                            // 23
        }                                                                                                          //
      }                                                                                                            //
    }                                                                                                              //
                                                                                                                   //
    return sendMessage;                                                                                            //
  }()                                                                                                              //
});                                                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// lib/routes.js                                                                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// set up the main template the the router will use to build pages                                                 //
Router.configure({                                                                                                 // 2
  layoutTemplate: 'ApplicationLayout'                                                                              // 3
});                                                                                                                //
// specify the top level route, the page users see when they arrive at the site                                    //
Router.route('/', function () {                                                                                    // 6
  this.render("navbar", { to: "header" });                                                                         // 7
  this.render("lobby_page", { to: "main" });                                                                       // 8
});                                                                                                                //
                                                                                                                   //
// specify a route that allows the current user to chat to another users                                           //
Router.route('/chat/:_id', function () {                                                                           // 12
  Meteor.call("getChat", this.params._id, function (error, result) {                                               // 13
    Session.set("chatId", result);                                                                                 // 14
  });                                                                                                              //
  // // the user they want to chat to has id equal to                                                              //
  // // the id sent in after /chat/...                                                                             //
  // var otherUserId = this.params._id;                                                                            //
  // // find a chat that has two users that match current user id                                                  //
  // // and the requested user id                                                                                  //
  // var filter = {$or:[                                                                                           //
  //             {user1Id:Meteor.userId(), user2Id:otherUserId},                                                   //
  //             {user2Id:Meteor.userId(), user1Id:otherUserId}                                                    //
  //             ]};                                                                                               //
  // var chat = Chats.findOne(filter);                                                                             //
  // if (!chat){// no chat matching the filter - need to insert a new one                                          //
  //   chatId = Chats.insert({user1Id:Meteor.userId(), user2Id:otherUserId});                                      //
  // }                                                                                                             //
  // else {// there is a chat going already - use that.                                                            //
  //   chatId = chat._id;                                                                                          //
  // }                                                                                                             //
  // if (chatId){// looking good, save the id to the session                                                       //
  //   Session.set("chatId",chatId);                                                                               //
  // }                                                                                                             //
  this.render("navbar", { to: "header" });                                                                         // 12
  this.render("chat_page", { to: "main" });                                                                        // 36
});                                                                                                                //
Router.route('/about', function () {                                                                               // 38
  this.render("navbar", { to: "header" });                                                                         // 39
  this.render("about", { to: "main" });                                                                            // 40
});                                                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.about.js");
require("./client/template.chat.js");
require("./client/template.layout.js");
require("./client/template.minstant.js");
require("./client/template.navbar.js");
require("./lib/collections.js");
require("./lib/methods.js");
require("./lib/routes.js");
require("./client/chat.js");
require("./client/main.js");