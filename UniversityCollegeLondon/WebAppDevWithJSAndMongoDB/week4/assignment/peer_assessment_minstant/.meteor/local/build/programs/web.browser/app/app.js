var require = meteorInstall({"client":{"template.minstant.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// client/template.minstant.js                                                                      //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
                                                                                                    // 1
Template.body.addContent((function() {                                                              // 2
  var view = this;                                                                                  // 3
  return "";                                                                                        // 4
}));                                                                                                // 5
Meteor.startup(Template.body.renderToDocument);                                                     // 6
                                                                                                    // 7
Template.__checkName("ApplicationLayout");                                                          // 8
Template["ApplicationLayout"] = new Template("Template.ApplicationLayout", (function() {            // 9
  var view = this;                                                                                  // 10
  return [ Blaze._TemplateWith(function() {                                                         // 11
    return "header";                                                                                // 12
  }, function() {                                                                                   // 13
    return Spacebars.include(view.lookupTemplate("yield"));                                         // 14
  }), "\n	\n	", HTML.DIV({                                                                          // 15
    "class": "container"                                                                            // 16
  }, "\n	", Blaze._TemplateWith(function() {                                                        // 17
    return "main";                                                                                  // 18
  }, function() {                                                                                   // 19
    return Spacebars.include(view.lookupTemplate("yield"));                                         // 20
  }), "\n	") ];                                                                                     // 21
}));                                                                                                // 22
                                                                                                    // 23
Template.__checkName("navbar");                                                                     // 24
Template["navbar"] = new Template("Template.navbar", (function() {                                  // 25
  var view = this;                                                                                  // 26
  return HTML.NAV({                                                                                 // 27
    "class": "navbar navbar-default"                                                                // 28
  }, "\n  ", HTML.DIV({                                                                             // 29
    "class": "container-fluid"                                                                      // 30
  }, "\n    ", HTML.Raw('<div class="navbar-header">\n      <a class="navbar-brand" href="/">\n        Minstant!\n      </a>\n    </div>'), "\n    ", HTML.DIV({
    "class": "nav navbar-nav navbar-right"                                                          // 32
  }, "\n    ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n"), "\n  "), "\n");       // 33
}));                                                                                                // 34
                                                                                                    // 35
Template.__checkName("lobby_page");                                                                 // 36
Template["lobby_page"] = new Template("Template.lobby_page", (function() {                          // 37
  var view = this;                                                                                  // 38
  return Spacebars.include(view.lookupTemplate("available_user_list"));                             // 39
}));                                                                                                // 40
                                                                                                    // 41
Template.__checkName("available_user_list");                                                        // 42
Template["available_user_list"] = new Template("Template.available_user_list", (function() {        // 43
  var view = this;                                                                                  // 44
  return [ HTML.Raw('<h2 class="text-center">Choose someone to chat with:</h2>\n	'), HTML.DIV({     // 45
    "class": "row"                                                                                  // 46
  }, "\n		", HTML.DIV({                                                                             // 47
    "class": "col-md-6"                                                                             // 48
  }, "\n		", HTML.Raw('<h2 class="text-center">Online</h2>'), "\n		", Blaze.Each(function() {       // 49
    return Spacebars.call(view.lookup("users"));                                                    // 50
  }, function() {                                                                                   // 51
    return [ "\n			", Blaze.If(function() {                                                         // 52
      return Spacebars.dataMustache(view.lookup("isMyUser"), view.lookup("_id"));                   // 53
    }, function() {                                                                                 // 54
      return "\n			";                                                                               // 55
    }, function() {                                                                                 // 56
      return [ "\n				", Blaze.If(function() {                                                      // 57
        return Spacebars.dataMustache(view.lookup("online"), view.lookup("_id"));                   // 58
      }, function() {                                                                               // 59
        return [ "\n						", Spacebars.include(view.lookupTemplate("online_user")), "\n				" ];     // 60
      }), "\n			" ];                                                                                // 61
    }), "\n		" ];                                                                                   // 62
  }), "\n		"), "\n		", HTML.DIV({                                                                   // 63
    "class": "col-md-6"                                                                             // 64
  }, "\n		", HTML.Raw('<h2 class="text-center">Offline</h2>'), "\n		", Blaze.Each(function() {      // 65
    return Spacebars.call(view.lookup("users"));                                                    // 66
  }, function() {                                                                                   // 67
    return [ "\n			", Blaze.If(function() {                                                         // 68
      return Spacebars.dataMustache(view.lookup("isMyUser"), view.lookup("_id"));                   // 69
    }, function() {                                                                                 // 70
      return "\n			";                                                                               // 71
    }, function() {                                                                                 // 72
      return [ "\n				", Blaze.If(function() {                                                      // 73
        return Spacebars.dataMustache(view.lookup("online"), view.lookup("_id"));                   // 74
      }, function() {                                                                               // 75
        return "\n				";                                                                            // 76
      }, function() {                                                                               // 77
        return [ "\n						", Spacebars.include(view.lookupTemplate("offline_user")), "\n				" ];    // 78
      }), "\n			" ];                                                                                // 79
    }), "\n		" ];                                                                                   // 80
  }), "\n		"), "\n\n\n			", HTML.Raw("<!-- {{> available_user}} -->"), "\n	") ];                    // 81
}));                                                                                                // 82
                                                                                                    // 83
Template.__checkName("online_user");                                                                // 84
Template["online_user"] = new Template("Template.online_user", (function() {                        // 85
  var view = this;                                                                                  // 86
  return HTML.DIV({                                                                                 // 87
    "class": "row"                                                                                  // 88
  }, HTML.Raw('\n	<div class="col-xs-4"></div>\n		'), HTML.DIV({                                    // 89
    "class": "col-xs-4 display_username online"                                                     // 90
  }, "\n			", HTML.A({                                                                              // 91
    href: function() {                                                                              // 92
      return [ "/chat/", Spacebars.mustache(view.lookup("_id")) ];                                  // 93
    }                                                                                               // 94
  }, "\n				", HTML.DIV({                                                                           // 95
    "class": "div_username"                                                                         // 96
  }, "\n					", HTML.DIV("\n					", HTML.Raw('<div id="circle" class="pull-left"></div>'), HTML.P({
    "class": "inline username"                                                                      // 98
  }, Blaze.View("lookup:getUsername", function() {                                                  // 99
    return Spacebars.mustache(view.lookup("getUsername"), view.lookup("_id"));                      // 100
  })), "\n					"), "\n				"), "\n				", HTML.DIV({                                                  // 101
    "class": "display_pic"                                                                          // 102
  }, "\n					", HTML.DIV({                                                                          // 103
    "class": "background_avatar_img"                                                                // 104
  }, "\n						", HTML.IMG({                                                                         // 105
    src: function() {                                                                               // 106
      return [ "/", Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "avatar")) ];          // 107
    },                                                                                              // 108
    "class": "avatar_img"                                                                           // 109
  }), "\n					"), "\n				"), "\n			"), "\n		"), HTML.Raw('\n		<div class="col-xs-4"></div>\n	'));   // 110
}));                                                                                                // 111
                                                                                                    // 112
Template.__checkName("offline_user");                                                               // 113
Template["offline_user"] = new Template("Template.offline_user", (function() {                      // 114
  var view = this;                                                                                  // 115
  return HTML.DIV({                                                                                 // 116
    "class": "row"                                                                                  // 117
  }, HTML.Raw('\n		<div class="col-xs-4"></div>\n		'), HTML.DIV({                                   // 118
    "class": "col-xs-4 display_username offline"                                                    // 119
  }, "\n			", HTML.A({                                                                              // 120
    href: function() {                                                                              // 121
      return [ "/chat/", Spacebars.mustache(view.lookup("_id")) ];                                  // 122
    }                                                                                               // 123
  }, "\n			", HTML.DIV({                                                                            // 124
    "class": "div_username"                                                                         // 125
  }, "\n				", HTML.DIV("\n				", HTML.Raw('<div id="circle" class="pull-left"></div>'), HTML.P({   // 126
    "class": "username"                                                                             // 127
  }, Blaze.View("lookup:getUsername", function() {                                                  // 128
    return Spacebars.mustache(view.lookup("getUsername"), view.lookup("_id"));                      // 129
  })), "\n				"), "\n				"), "\n				", HTML.DIV({                                                   // 130
    "class": "display_pic"                                                                          // 131
  }, "\n					", HTML.DIV({                                                                          // 132
    "class": "background_avatar_img"                                                                // 133
  }, "\n						", HTML.IMG({                                                                         // 134
    src: function() {                                                                               // 135
      return [ "/", Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "avatar")) ];          // 136
    },                                                                                              // 137
    "class": "avatar_img"                                                                           // 138
  }), "\n					"), "\n				"), "\n			"), "\n		"), HTML.Raw('\n		<div class="col-xs-4"></div>\n	'));   // 139
}));                                                                                                // 140
                                                                                                    // 141
Template.__checkName("chat_page");                                                                  // 142
Template["chat_page"] = new Template("Template.chat_page", (function() {                            // 143
  var view = this;                                                                                  // 144
  return [ HTML.DIV({                                                                               // 145
    "class": "row"                                                                                  // 146
  }, "\n		", HTML.DIV({                                                                             // 147
    "class": "col-md-12"                                                                            // 148
  }, "\n			", HTML.H2({                                                                             // 149
    "class": "text-center"                                                                          // 150
  }, "Your talking to ", Blaze.View("lookup:other_user", function() {                               // 151
    return Spacebars.mustache(view.lookup("other_user"));                                           // 152
  })), "\n			", HTML.DIV("\n			", Blaze.Each(function() {                                           // 153
    return Spacebars.call(view.lookup("messages"));                                                 // 154
  }, function() {                                                                                   // 155
    return [ "\n				", Spacebars.include(view.lookupTemplate("chat_message")), "\n			" ];           // 156
  }), "\n			"), "	\n		"), "\n	"), "\n    ", HTML.DIV({                                              // 157
    "class": "row"                                                                                  // 158
  }, "\n		", HTML.DIV({                                                                             // 159
    "class": "col-md-12"                                                                            // 160
  }, "\n		", HTML.DIV({                                                                             // 161
    "class": "div-chat-input"                                                                       // 162
  }, "\n		  ", HTML.Raw('<h3 class="text-center">Type in the box below to send a message!</h3>'), "\n		  ", HTML.FORM({
    "class": "js-send-chat"                                                                         // 164
  }, "\n			", HTML.Raw('<input class="input pull-left" id="message_input" type="text" name="chat" placeholder="type a message here...">'), "\n			", HTML.Raw('<!-- <div contenteditable="true" class="input pull-left" id="message_input">\n 			</div>\n -->'), "\n			", HTML.Raw("<!-- start emoticon dropdown menu -->"), "\n		    ", HTML.DIV({
    "class": "dropdown pull-left",                                                                  // 166
    id: "menu-emoticon-container"                                                                   // 167
  }, "\n		    ", HTML.DIV("\n		        ", HTML.A({                                                  // 168
    href: "#",                                                                                      // 169
    "class": "dropdown-toggle",                                                                     // 170
    "data-toggle": "dropdown"                                                                       // 171
  }, " \n		        	", Blaze.View("lookup:getEmoji", function() {                                   // 172
    return Spacebars.mustache(view.lookup("getEmoji"), "smile");                                    // 173
  }), "\n		        ", HTML.Raw('<b class="caret"></b>')), "\n		        ", HTML.UL({                 // 174
    "class": "dropdown-menu js-insert-emoticon pull-right"                                          // 175
  }, "\n		            ", HTML.LI("\n		                ", HTML.DIV({                                 // 176
    "class": "row dropdown-list",                                                                   // 177
    style: "width: 150px;"                                                                          // 178
  }, "\n		                    ", HTML.UL({                                                          // 179
    "class": "list-unstyled col-xs-3"                                                               // 180
  }, "\n		                        ", HTML.LI(Blaze.View("lookup:getEmoji", function() {             // 181
    return Spacebars.mustache(view.lookup("getEmoji"), "smile");                                    // 182
  })), "\n		                        ", HTML.LI(Blaze.View("lookup:getEmoji", function() {           // 183
    return Spacebars.mustache(view.lookup("getEmoji"), "blush");                                    // 184
  })), "\n		                        ", HTML.LI(Blaze.View("lookup:getEmoji", function() {           // 185
    return Spacebars.mustache(view.lookup("getEmoji"), "relaxed");                                  // 186
  })), "\n		                    "), "\n		                    ", HTML.UL({                           // 187
    "class": "list-unstyled col-xs-3"                                                               // 188
  }, "\n		                        ", HTML.LI(Blaze.View("lookup:getEmoji", function() {             // 189
    return Spacebars.mustache(view.lookup("getEmoji"), "wink");                                     // 190
  })), "\n		                        ", HTML.LI(Blaze.View("lookup:getEmoji", function() {           // 191
    return Spacebars.mustache(view.lookup("getEmoji"), "heart_eyes");                               // 192
  })), "\n		                        ", HTML.LI(Blaze.View("lookup:getEmoji", function() {           // 193
    return Spacebars.mustache(view.lookup("getEmoji"), "kissing_heart");                            // 194
  })), "\n		                    "), "\n		                    ", HTML.UL({                           // 195
    "class": "list-unstyled col-xs-3"                                                               // 196
  }, "\n		                        ", HTML.LI(Blaze.View("lookup:getEmoji", function() {             // 197
    return Spacebars.mustache(view.lookup("getEmoji"), "kissing_closed_eyes");                      // 198
  })), "\n		                        ", HTML.LI(Blaze.View("lookup:getEmoji", function() {           // 199
    return Spacebars.mustache(view.lookup("getEmoji"), "stuck_out_tongue_winking_eye");             // 200
  })), "\n		                        ", HTML.LI(Blaze.View("lookup:getEmoji", function() {           // 201
    return Spacebars.mustache(view.lookup("getEmoji"), "stuck_out_tongue_closed_eyes");             // 202
  })), "\n		                    "), "\n		                    ", HTML.UL({                           // 203
    "class": "list-unstyled col-xs-3"                                                               // 204
  }, "\n		                        ", HTML.LI(Blaze.View("lookup:getEmoji", function() {             // 205
    return Spacebars.mustache(view.lookup("getEmoji"), "grin");                                     // 206
  })), "\n		                        ", HTML.LI(Blaze.View("lookup:getEmoji", function() {           // 207
    return Spacebars.mustache(view.lookup("getEmoji"), "pensive");                                  // 208
  })), "\n		                        ", HTML.LI(Blaze.View("lookup:getEmoji", function() {           // 209
    return Spacebars.mustache(view.lookup("getEmoji"), "disappointed");                             // 210
  })), "\n		                    "), "\n		                "), "\n		            "), "\n		        "), "\n		        "), "\n		    "), "\n			", HTML.Raw("<!-- end emoticon dropdown menu -->"), "\n\n			", HTML.Raw('<button class="btn btn-primary" id="btn-chat-send">send</button>'), "\n		  "), "\n		"), "\n		"), "\n	") ];
}));                                                                                                // 212
                                                                                                    // 213
Template.__checkName("chat_message");                                                               // 214
Template["chat_message"] = new Template("Template.chat_message", (function() {                      // 215
  var view = this;                                                                                  // 216
  return HTML.DIV({                                                                                 // 217
    "class": "row"                                                                                  // 218
  }, "\n	", HTML.DIV({                                                                              // 219
    "class": function() {                                                                           // 220
      return [ "well well-lg ", Spacebars.mustache(view.lookup("message_sender")) ];                // 221
    },                                                                                              // 222
    id: "message"                                                                                   // 223
  }, "\n	  ", HTML.IMG({                                                                            // 224
    src: function() {                                                                               // 225
      return [ "/", Spacebars.mustache(view.lookup("display_pic")) ];                               // 226
    },                                                                                              // 227
    height: "20px",                                                                                 // 228
    width: "20px"                                                                                   // 229
  }), "  said: \n	  ", Spacebars.include(view.lookupTemplate("emoji"), function() {                 // 230
    return [ "\n	  	", Blaze.View("lookup:text", function() {                                       // 231
      return Spacebars.mustache(view.lookup("text"));                                               // 232
    }), "\n	  " ];                                                                                  // 233
  }), "\n	  ", HTML.Raw("<br>"), "\n	"), "\n  ");                                                   // 234
}));                                                                                                // 235
                                                                                                    // 236
//////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// client/main.js                                                                                   //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
Meteor.subscribe("chats", function () {                                                             // 1
  Session.set('db_data_loaded', true);                                                              // 2
});                                                                                                 //
Meteor.subscribe("users");                                                                          // 4
                                                                                                    //
Meteor.startup(function () {                                                                        // 6
  Session.set('db_data_loaded', false);                                                             // 7
  Meteor.subscribe('emojis');                                                                       // 8
});                                                                                                 //
// set up the main template the the router will use to build pages                                  //
Router.configure({                                                                                  // 11
  layoutTemplate: 'ApplicationLayout'                                                               // 12
});                                                                                                 //
// specify the top level route, the page users see when they arrive at the site                     //
Router.route('/', function () {                                                                     // 15
  console.log("rendering root /");                                                                  // 16
  this.render("navbar", { to: "header" });                                                          // 17
  this.render("lobby_page", { to: "main" });                                                        // 18
});                                                                                                 //
                                                                                                    //
// specify a route that allows the current user to chat to another users                            //
Router.route('/chat/:_id', function () {                                                            // 22
  // the user they want to chat to has id equal to                                                  //
  // the id sent in after /chat/...                                                                 //
  if (!Meteor.user()) {                                                                             // 25
    alert('Please log in to chat');                                                                 // 26
  } else {                                                                                          //
    var otherUserId = this.params._id;                                                              // 28
    // find a chat that has two users that match current user id                                    //
    // and the requested user id                                                                    //
    var filter = { $or: [{ user1Id: Meteor.userId(), user2Id: otherUserId }, { user2Id: Meteor.userId(), user1Id: otherUserId }] };
    var chat = Chats.findOne(filter);                                                               // 35
    if (Session.get('db_data_loaded')) {                                                            // 36
      if (!chat) {                                                                                  // 37
        // no chat matching the filter - need to insert a new one                                   //
        chatId = Meteor.call('insertChat', otherUserId);                                            // 38
        console.log("no chat matching the filter - need to insert a new one");                      // 39
      } else {                                                                                      //
        // there is a chat going already - use that.                                                //
        console.log("there is a chat going already - use that.");                                   // 42
        chatId = chat._id;                                                                          // 43
      }                                                                                             //
      if (chatId) {                                                                                 // 45
        // looking good, save the id to the session                                                 //
        Session.set("chatId", chatId);                                                              // 46
      }                                                                                             //
    }                                                                                               //
    this.render("navbar", { to: "header" });                                                        // 49
    this.render("chat_page", { to: "main" });                                                       // 50
  }                                                                                                 //
});                                                                                                 //
                                                                                                    //
///                                                                                                 //
// helper functions                                                                                 //
///                                                                                                 //
Template.available_user_list.helpers({                                                              // 57
  users: function () {                                                                              // 58
    function users() {                                                                              // 58
      return Meteor.users.find();                                                                   // 59
    }                                                                                               //
                                                                                                    //
    return users;                                                                                   //
  }(),                                                                                              //
  isMyUser: function () {                                                                           // 61
    function isMyUser(userId) {                                                                     // 61
      if (userId == Meteor.userId()) {                                                              // 62
        return true;                                                                                // 63
      } else {                                                                                      //
        return false;                                                                               // 66
      }                                                                                             //
    }                                                                                               //
                                                                                                    //
    return isMyUser;                                                                                //
  }(),                                                                                              //
  online: function () {                                                                             // 69
    function online(userId) {                                                                       // 69
      if (Meteor.users.findOne({ _id: userId }).services.resume && Meteor.users.findOne({ _id: userId }).services.resume.loginTokens.length > 0) {
        return true;                                                                                // 72
      } else {                                                                                      //
        return false;                                                                               // 74
      }                                                                                             //
    }                                                                                               //
                                                                                                    //
    return online;                                                                                  //
  }()                                                                                               //
                                                                                                    //
});                                                                                                 //
Template.online_user.helpers({                                                                      // 79
  getUsername: function () {                                                                        // 80
    function getUsername(userId) {                                                                  // 80
      user = Meteor.users.findOne({ _id: userId });                                                 // 81
      return user.profile.username;                                                                 // 82
    }                                                                                               //
                                                                                                    //
    return getUsername;                                                                             //
  }()                                                                                               //
});                                                                                                 //
Template.offline_user.helpers({                                                                     // 85
  getUsername: function () {                                                                        // 86
    function getUsername(userId) {                                                                  // 86
      user = Meteor.users.findOne({ _id: userId });                                                 // 87
      return user.profile.username;                                                                 // 88
    }                                                                                               //
                                                                                                    //
    return getUsername;                                                                             //
  }()                                                                                               //
});                                                                                                 //
// Template.available_user.helpers({                                                                //
//    getUsername:function(userId){                                                                 //
//      user = Meteor.users.findOne({_id:userId});                                                  //
//      return user.profile.username;                                                               //
//    },                                                                                            //
//    isMyUser:function(userId){                                                                    //
//      if (userId == Meteor.userId()){                                                             //
//        return true;                                                                              //
//      }                                                                                           //
//      else {                                                                                      //
//        return false;                                                                             //
//      }                                                                                           //
//    },                                                                                            //
//    online:function(userId) {                                                                     //
//    	if(Meteor.users.findOne({_id:userId}).services.resume &&                                     //
//    		Meteor.users.findOne({_id:userId}).services.resume.loginTokens.length > 0) {                //
//    		return true;                                                                                //
//    	} else {                                                                                     //
//    		return false                                                                                //
//    	}                                                                                            //
//    }                                                                                             //
//  })                                                                                              //
Template.chat_page.helpers({                                                                        // 113
  messages: function () {                                                                           // 114
    function messages() {                                                                           // 114
      var chat = Chats.findOne({ _id: Session.get("chatId") });                                     // 115
      return chat.messages;                                                                         // 116
    }                                                                                               //
                                                                                                    //
    return messages;                                                                                //
  }(),                                                                                              //
  other_user: function () {                                                                         // 118
    function other_user() {                                                                         // 118
      var chat = Chats.findOne({ _id: Session.get("chatId") });                                     // 119
      console.log(chat.user1Id);                                                                    // 120
      if (Meteor.userId() == chat.user1Id) {                                                        // 121
        var username = Meteor.users.findOne({ _id: chat.user2Id }).profile.username;                // 122
        return username;                                                                            // 123
      } else {                                                                                      //
        var username = Meteor.users.findOne({ _id: chat.user1Id }).profile.username;                // 125
        return username;                                                                            // 126
      }                                                                                             //
    }                                                                                               //
                                                                                                    //
    return other_user;                                                                              //
  }(),                                                                                              //
  getEmoji: function () {                                                                           // 129
    function getEmoji(emoji) {                                                                      // 129
      return Emojis.findOne({ alias: emoji }).emoji;                                                // 130
    }                                                                                               //
                                                                                                    //
    return getEmoji;                                                                                //
  }()                                                                                               //
});                                                                                                 //
Template.chat_message.helpers({                                                                     // 133
  display_pic: function () {                                                                        // 134
    function display_pic() {                                                                        // 134
      return this.sender.profile.avatar;                                                            // 135
    }                                                                                               //
                                                                                                    //
    return display_pic;                                                                             //
  }(),                                                                                              //
  message_sender: function () {                                                                     // 137
    function message_sender() {                                                                     // 137
      if (this.sender._id == Meteor.user()._id) {                                                   // 138
        return "floatMeRight";                                                                      // 139
      } else {                                                                                      //
        return;                                                                                     // 141
      };                                                                                            //
    }                                                                                               //
                                                                                                    //
    return message_sender;                                                                          //
  }()                                                                                               //
});                                                                                                 //
                                                                                                    //
///                                                                                                 //
// event helpers                                                                                    //
///                                                                                                 //
                                                                                                    //
Template.chat_page.events({                                                                         // 150
  // this event fires when the user sends a message on the chat page                                //
  'submit .js-send-chat': function () {                                                             // 152
    function submitJsSendChat(event) {                                                              // 152
      // stop the form from triggering a page reload                                                //
      event.preventDefault();                                                                       // 154
      // see if we can find a chat object in the database                                           //
      // to which we'll add the message                                                             //
      var chat = Chats.findOne({ _id: Session.get("chatId") });                                     // 152
      if (chat) {                                                                                   // 158
        // ok - we have a chat to use                                                               //
        var msgs = chat.messages; // pull the messages property                                     // 159
        if (!msgs) {                                                                                // 158
          // no messages yet, create a new array                                                    //
          msgs = [];                                                                                // 161
        }                                                                                           //
        // is a good idea to insert data straight from the form                                     //
        // (i.e. the user) into the database?? certainly not.                                       //
        // push adds the message to the end of the array                                            //
        msgs.push({                                                                                 // 158
          sender: Meteor.user(),                                                                    // 167
          text: event.target.chat.value                                                             // 168
        });                                                                                         //
        // reset the form                                                                           //
        // document.querySelector('[contenteditable]').textContent = "";                            //
        event.target.chat.value = "";                                                               // 158
        // put the messages array onto the chat object                                              //
        chat.messages = msgs;                                                                       // 158
        // update the chat object in the database.                                                  //
        // Chats.update(chat._id, chat);                                                            //
        Meteor.call('updateChat', chat);                                                            // 158
      }                                                                                             //
    }                                                                                               //
                                                                                                    //
    return submitJsSendChat;                                                                        //
  }(),                                                                                              //
  'click .js-insert-emoticon': function () {                                                        // 180
    function clickJsInsertEmoticon(event) {                                                         // 180
      $('#message_input').val($('#message_input').val() + event.target.textContent);                // 181
    }                                                                                               //
                                                                                                    //
    return clickJsInsertEmoticon;                                                                   //
  }()                                                                                               //
});                                                                                                 //
                                                                                                    //
///                                                                                                 //
// onRendered                                                                                       //
///                                                                                                 //
                                                                                                    //
Template.online_user.onRendered(function () {                                                       // 190
  $(".display_username").hover(function () {                                                        // 191
    $(this.firstChild.nextElementSibling.children[1]).css("display", "unset");                      // 193
    $(this.firstChild.nextElementSibling.children[0]).css("border-bottom-left-radius", "0px");      // 194
    $(this.firstChild.nextElementSibling.children[0]).css("border-bottom-right-radius", "0px");     // 195
  }, function () {                                                                                  //
    $(this.firstChild.nextElementSibling.children[1]).css("display", "none");                       // 197
    $(this.firstChild.nextElementSibling.children[0]).css("border-bottom-left-radius", "4px");      // 198
    $(this.firstChild.nextElementSibling.children[0]).css("border-bottom-right-radius", "4px");     // 199
  });                                                                                               //
});                                                                                                 //
Template.offline_user.onRendered(function () {                                                      // 203
  $(".display_username").hover(function () {                                                        // 204
    $(this.firstChild.nextElementSibling.children[1]).css("display", "unset");                      // 206
    $(this.firstChild.nextElementSibling.children[0]).css("border-bottom-left-radius", "0px");      // 207
    $(this.firstChild.nextElementSibling.children[0]).css("border-bottom-right-radius", "0px");     // 208
  }, function () {                                                                                  //
    $(this.firstChild.nextElementSibling.children[1]).css("display", "none");                       // 210
    $(this.firstChild.nextElementSibling.children[0]).css("border-bottom-left-radius", "4px");      // 211
    $(this.firstChild.nextElementSibling.children[0]).css("border-bottom-right-radius", "4px");     // 212
  });                                                                                               //
});                                                                                                 //
                                                                                                    //
Accounts.ui.config({                                                                                // 217
  requestPermissions: {},                                                                           // 218
  extraSignupFields: [{                                                                             // 219
    fieldName: 'username',                                                                          // 220
    fieldLabel: 'Username',                                                                         // 221
    inputType: 'text',                                                                              // 222
    visible: true,                                                                                  // 223
    validate: function () {                                                                         // 224
      function validate(value, errorFunction) {                                                     // 224
        if (!value) {                                                                               // 225
          errorFunction("Please enter a username");                                                 // 226
          return false;                                                                             // 227
        } else if (value.length >= 9) {                                                             //
          errorFunction("Please enter a username of 8 characters or less");                         // 229
        } else {                                                                                    //
          return true;                                                                              // 231
        }                                                                                           //
      }                                                                                             //
                                                                                                    //
      return validate;                                                                              //
    }()                                                                                             //
  }, {                                                                                              //
    fieldName: 'gender',                                                                            // 235
    showFieldLabel: false, // If true, fieldLabel will be shown before radio group                  // 236
    fieldLabel: 'Gender',                                                                           // 237
    inputType: 'radio',                                                                             // 238
    radioLayout: 'vertical', // It can be 'inline' or 'vertical'                                    // 239
    data: [{ // Array of radio options, all properties are required                                 // 240
      id: 1, // id suffix of the radio element                                                      // 241
      label: 'Male', // label for the radio element                                                 // 242
      value: 'm' // value of the radio element, this will be saved.                                 // 243
    }, {                                                                                            // 240
      id: 2,                                                                                        // 245
      label: 'Female',                                                                              // 246
      value: 'f',                                                                                   // 247
      checked: 'checked'                                                                            // 248
    }],                                                                                             //
    visible: true                                                                                   // 250
  }, {                                                                                              //
    fieldName: 'avatar',                                                                            // 252
    showFieldLabel: false, // If true, fieldLabel will be shown before radio group                  // 253
    fieldLabel: 'Avatar',                                                                           // 254
    inputType: 'text',                                                                              // 255
    visible: false                                                                                  // 256
  }, {                                                                                              //
    fieldName: 'terms',                                                                             // 258
    fieldLabel: 'I accept the terms and conditions',                                                // 259
    inputType: 'checkbox',                                                                          // 260
    visible: true,                                                                                  // 261
    saveToProfile: false,                                                                           // 262
    validate: function () {                                                                         // 263
      function validate(value, errorFunction) {                                                     // 263
        if (value) {                                                                                // 264
          return true;                                                                              // 265
        } else {                                                                                    //
          errorFunction('You must accept the terms and conditions.');                               // 267
          return false;                                                                             // 268
        }                                                                                           //
      }                                                                                             //
                                                                                                    //
      return validate;                                                                              //
    }()                                                                                             //
  }]                                                                                                //
});                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"collections.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// lib/collections.js                                                                               //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
Chats = new Mongo.Collection("chats");                                                              // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////

}},"shared":{"main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// shared/main.js                                                                                   //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
///                                                                                                 //
// Shared Folder                                                                                    //
///                                                                                                 //
                                                                                                    //
Meteor.methods({                                                                                    // 5
	insertChat: function () {                                                                          // 6
		function insertChat(otherUserId) {                                                                // 6
			chatId = Chats.insert({ user1Id: Meteor.userId(), user2Id: otherUserId });                       // 7
			return chatId;                                                                                   // 8
		}                                                                                                 //
                                                                                                    //
		return insertChat;                                                                                //
	}(),                                                                                               //
	updateChat: function () {                                                                          // 10
		function updateChat(chat) {                                                                       // 10
			Chats.update(chat._id, chat);                                                                    // 11
		}                                                                                                 //
                                                                                                    //
		return updateChat;                                                                                //
	}()                                                                                                //
});                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.minstant.js");
require("./lib/collections.js");
require("./client/main.js");
require("./shared/main.js");