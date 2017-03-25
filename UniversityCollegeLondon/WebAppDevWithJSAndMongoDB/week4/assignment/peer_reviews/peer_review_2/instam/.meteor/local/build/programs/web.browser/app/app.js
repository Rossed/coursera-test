var require = meteorInstall({"client":{"template.about.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/template.about.js                                                                      //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
Template.__checkName("about");                                                                   // 2
Template["about"] = new Template("Template.about", (function() {                                 // 3
  var view = this;                                                                               // 4
  return HTML.Raw('<div class="container">\n		<div class="row">\n			<div class="jumbotron top-under well-color">\n			  <h1>INSTAM :)</h1>\n			  <p>An instant messaging app*. Created with Meteor.</p>\n			  <h5>* still under heavy development</h5>\n			  <p><a class="btn btn-primary btn-lg" href="https://github.com/sudosparrowhawk/full-stack/tree/master/instam" target="blank" role="button">Learn more</a></p>\n			</div>\n		</div>\n	</div>');
}));                                                                                             // 6
                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////

},"template.chat.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/template.chat.js                                                                       //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
Template.__checkName("chat");                                                                    // 2
Template["chat"] = new Template("Template.chat", (function() {                                   // 3
  var view = this;                                                                               // 4
  return HTML.DIV({                                                                              // 5
    "class": "container top-under"                                                               // 6
  }, "\n		", HTML.DIV({                                                                          // 7
    "class": "row"                                                                               // 8
  }, "\n			", HTML.DIV({                                                                         // 9
    "class": "nowUser"                                                                           // 10
  }, "\n				", HTML.H4(HTML.SPAN({                                                               // 11
    "class": "label label-info"                                                                  // 12
  }, Blaze.View("lookup:nowUser", function() {                                                   // 13
    return Spacebars.mustache(view.lookup("nowUser"));                                           // 14
  }))), "\n			"), "\n			", HTML.DIV({                                                            // 15
    "class": "col-md-6 col-xs-12"                                                                // 16
  }, "\n				", HTML.DIV({                                                                        // 17
    "class": "well well-lg well-color level-up-this"                                             // 18
  }, "\n					", Blaze.Each(function() {                                                          // 19
    return Spacebars.call(view.lookup("history"));                                               // 20
  }, function() {                                                                                // 21
    return [ "\n						", HTML.IMG({                                                              // 22
      src: function() {                                                                          // 23
        return [ "/", Spacebars.mustache(view.lookup("getAvatar"), view.lookup("from")) ];       // 24
      },                                                                                         // 25
      "class": "small-avatar"                                                                    // 26
    }), "\n						", HTML.SPAN({                                                                  // 27
      "class": "label label-default"                                                             // 28
    }, Blaze.View("lookup:getUsername", function() {                                             // 29
      return Spacebars.mustache(view.lookup("getUsername"), view.lookup("from"));                // 30
    })), "\n						 : ", Blaze.View("lookup:message", function() {                                // 31
      return Spacebars.mustache(view.lookup("message"));                                         // 32
    }), "\n						", HTML.BR(), "\n					" ];                                                      // 33
  }), "\n				"), "\n			"), "\n\n			", HTML.DIV({                                                 // 34
    "class": "col-md-6 col-xs-12"                                                                // 35
  }, "\n				", Spacebars.include(view.lookupTemplate("messageForm")), "\n			"), "\n		"), "\n	");
}));                                                                                             // 37
                                                                                                 // 38
///////////////////////////////////////////////////////////////////////////////////////////////////

},"template.home.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/template.home.js                                                                       //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
Template.__checkName("home");                                                                    // 2
Template["home"] = new Template("Template.home", (function() {                                   // 3
  var view = this;                                                                               // 4
  return HTML.DIV({                                                                              // 5
    "class": "container"                                                                         // 6
  }, "\n		", HTML.DIV({                                                                          // 7
    "class": "jumbotron jumbo-color"                                                             // 8
  }, "\n			", HTML.Raw('<div class="jumbo-text">\n				<h2>LogIn/SignUp before continue.</h2>\n			</div>'), "\n			", HTML.Raw("<br>"), "\n			", HTML.DIV({
    "class": "login-buttons"                                                                     // 10
  }, "\n				", Spacebars.include(view.lookupTemplate("loginButtons")), "\n			"), "\n			", HTML.Raw('<a href="/home" id="continueBtn" hidden=""></a>'), "\n		"), "\n	");
}));                                                                                             // 12
                                                                                                 // 13
///////////////////////////////////////////////////////////////////////////////////////////////////

},"template.messageForm.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/template.messageForm.js                                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
Template.__checkName("messageForm");                                                             // 2
Template["messageForm"] = new Template("Template.messageForm", (function() {                     // 3
  var view = this;                                                                               // 4
  return Blaze._TemplateWith(function() {                                                        // 5
    return {                                                                                     // 6
      collection: Spacebars.call("Chats"),                                                       // 7
      id: Spacebars.call("messageForm"),                                                         // 8
      type: Spacebars.call("method"),                                                            // 9
      meteormethod: Spacebars.call("sendMsg")                                                    // 10
    };                                                                                           // 11
  }, function() {                                                                                // 12
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                       // 13
      return [ "\n    ", HTML.DIV({                                                              // 14
        "class": "row"                                                                           // 15
      }, "\n      ", HTML.DIV({                                                                  // 16
        "class": "col-md-10"                                                                     // 17
      }, "\n        ", HTML.FIELDSET("\n          ", Blaze._TemplateWith(function() {            // 18
        return {                                                                                 // 19
          name: Spacebars.call("message"),                                                       // 20
          rows: Spacebars.call(2)                                                                // 21
        };                                                                                       // 22
      }, function() {                                                                            // 23
        return Spacebars.include(view.lookupTemplate("afQuickField"));                           // 24
      }), "\n         "), "\n      "), "\n      ", HTML.DIV({                                    // 25
        "class": "col-md-2"                                                                      // 26
      }, "\n        ", HTML.BUTTON({                                                             // 27
        type: "submit",                                                                          // 28
        "class": "btn send-btn"                                                                  // 29
      }, "\n        ", HTML.I({                                                                  // 30
        "class": "fa fa-paper-plane",                                                            // 31
        "aria-hidden": "true"                                                                    // 32
      }), "\n        SEND"), "\n      "), "\n    "), "\n  " ];                                   // 33
    });                                                                                          // 34
  });                                                                                            // 35
}));                                                                                             // 36
                                                                                                 // 37
///////////////////////////////////////////////////////////////////////////////////////////////////

},"template.nav.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/template.nav.js                                                                        //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
Template.__checkName("nav");                                                                     // 2
Template["nav"] = new Template("Template.nav", (function() {                                     // 3
  var view = this;                                                                               // 4
  return HTML.NAV({                                                                              // 5
    "class": "navbar navbar-default navbar-fixed-top nav-color"                                  // 6
  }, "\n    ", HTML.DIV({                                                                        // 7
    "class": "container-fluid"                                                                   // 8
  }, "\n      ", HTML.Raw("<!-- Brand and toggle get grouped for better mobile display -->"), "\n      ", HTML.Raw('<div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href="/home">\n        <i class="fa fa-commenting-o fa-fw" aria-hidden="true"></i>\n        INSTAM</a>\n      </div>'), "\n\n      ", HTML.Raw("<!-- Collect the nav links, forms, and other content for toggling -->"), "\n      ", HTML.DIV({
    "class": "collapse navbar-collapse",                                                         // 10
    id: "bs-example-navbar-collapse-1"                                                           // 11
  }, "\n        ", HTML.Raw('<ul class="nav navbar-nav">\n          <li class="active"><a href="#">Profile <span class="sr-only">(current)</span></a></li>\n          <li><a href="#">Messages</a></li>\n        </ul>'), "\n        \n        ", HTML.UL({
    "class": "nav navbar-nav navbar-right"                                                       // 13
  }, "\n          ", HTML.LI(HTML.P({                                                            // 14
    "class": "navbar-text"                                                                       // 15
  }, Blaze._TemplateWith(function() {                                                            // 16
    return {                                                                                     // 17
      align: Spacebars.call("right")                                                             // 18
    };                                                                                           // 19
  }, function() {                                                                                // 20
    return Spacebars.include(view.lookupTemplate("loginButtons"));                               // 21
  }))), "\n          ", HTML.Raw('<li><a href="/about">About</a></li>'), "\n        "), "\n      "), HTML.Raw("<!-- /.navbar-collapse -->"), "\n    "), HTML.Raw("<!-- /.container-fluid -->\n  "));
}));                                                                                             // 23
                                                                                                 // 24
///////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userList.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/template.userList.js                                                                   //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
Template.__checkName("userList");                                                                // 2
Template["userList"] = new Template("Template.userList", (function() {                           // 3
  var view = this;                                                                               // 4
  return HTML.DIV({                                                                              // 5
    "class": "container top-under"                                                               // 6
  }, HTML.Raw("\n		<br>\n		"), Blaze.Each(function() {                                           // 7
    return Spacebars.call(view.lookup("user"));                                                  // 8
  }, function() {                                                                                // 9
    return [ "\n			", HTML.DIV({                                                                 // 10
      "class": "col-md-3 col-xs-12"                                                              // 11
    }, "\n				", HTML.A({                                                                        // 12
      href: function() {                                                                         // 13
        return [ "/chat/", Spacebars.mustache(view.lookup("_id")) ];                             // 14
      },                                                                                         // 15
      "class": "js_user_selected"                                                                // 16
    }, "\n					", HTML.IMG({                                                                     // 17
      src: function() {                                                                          // 18
        return [ "/", Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "avatar")) ];     // 19
      }                                                                                          // 20
    }), "\n					", HTML.BR(), "\n					", HTML.H4({                                               // 21
      "class": "user-name"                                                                       // 22
    }, HTML.SPAN({                                                                               // 23
      "class": "label label-default"                                                             // 24
    }, Blaze.View("lookup:profile.username", function() {                                        // 25
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "username"));              // 26
    })), "\n					", HTML.SPAN({                                                                  // 27
      "class": "label label-info"                                                                // 28
    }, Blaze.View("lookup:me", function() {                                                      // 29
      return Spacebars.mustache(view.lookup("me"), view.lookup("_id"));                          // 30
    })), "\n\n					"), "\n\n				"), "\n			"), "\n		" ];                                          // 31
  }), "\n	");                                                                                    // 32
}));                                                                                             // 33
                                                                                                 // 34
///////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/template.main.js                                                                       //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
Template.body.addContent((function() {                                                           // 2
  var view = this;                                                                               // 3
  return "";                                                                                     // 4
}));                                                                                             // 5
Meteor.startup(Template.body.renderToDocument);                                                  // 6
                                                                                                 // 7
Template.__checkName("main");                                                                    // 8
Template["main"] = new Template("Template.main", (function() {                                   // 9
  var view = this;                                                                               // 10
  return [ Blaze._TemplateWith(function() {                                                      // 11
    return "navbar";                                                                             // 12
  }, function() {                                                                                // 13
    return Spacebars.include(view.lookupTemplate("yield"));                                      // 14
  }), "\n	", Blaze._TemplateWith(function() {                                                    // 15
    return "main";                                                                               // 16
  }, function() {                                                                                // 17
    return Spacebars.include(view.lookupTemplate("yield"));                                      // 18
  }) ];                                                                                          // 19
}));                                                                                             // 20
                                                                                                 // 21
///////////////////////////////////////////////////////////////////////////////////////////////////

},"accounts.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/accounts.js                                                                            //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Template.loginButtons.rendered = function () {                                                   // 1
	var userId = Meteor.userId();                                                                   // 2
	if (!userId) {                                                                                  // 3
		Accounts._loginButtonsSession.set('dropdownVisible', true);                                    // 4
	} else {                                                                                        // 5
		Accounts._loginButtonsSession.set('dropdownVisible', false);                                   // 6
	}                                                                                               // 7
};                                                                                               // 8
                                                                                                 //
Accounts.ui.config({                                                                             // 10
	passwordSignupFields: "USERNAME_AND_EMAIL"                                                      // 11
});                                                                                              // 10
///////////////////////////////////////////////////////////////////////////////////////////////////

},"events.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/events.js                                                                              //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Template.userList.events({                                                                       // 1
	'click .js_user_selected': function () {                                                        // 2
		function clickJs_user_selected(event) {                                                        // 2
			Session.set("now", this._id);                                                                 // 3
			//console.log(Session.get("now"));                                                            //
			Meteor.call("sendValue", Session.get("now"));                                                 // 5
		}                                                                                              // 6
                                                                                                 //
		return clickJs_user_selected;                                                                  // 2
	}()                                                                                             // 2
});                                                                                              // 1
///////////////////////////////////////////////////////////////////////////////////////////////////

},"helpers.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/helpers.js                                                                             //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Template.userList.helpers({                                                                      // 1
  user: function () {                                                                            // 2
    function user() {                                                                            // 2
      return Meteor.users.find();                                                                // 3
    }                                                                                            // 4
                                                                                                 //
    return user;                                                                                 // 2
  }(),                                                                                           // 2
                                                                                                 //
  me: function () {                                                                              // 6
    function me(id) {                                                                            // 6
      var user = Meteor.users.findOne({ _id: id });                                              // 7
      if (user._id == Meteor.userId()) {                                                         // 8
        return "me";                                                                             // 9
      }                                                                                          // 10
    }                                                                                            // 11
                                                                                                 //
    return me;                                                                                   // 6
  }()                                                                                            // 6
});                                                                                              // 1
                                                                                                 //
Template.chat.helpers({                                                                          // 14
  nowUser: function () {                                                                         // 15
    function nowUser() {                                                                         // 15
      var now = Meteor.users.findOne({ _id: Session.get("now") });                               // 16
      if (now) {                                                                                 // 17
        return now.profile.username;                                                             // 18
      }                                                                                          // 19
    }                                                                                            // 20
                                                                                                 //
    return nowUser;                                                                              // 15
  }(),                                                                                           // 15
                                                                                                 //
  history: function () {                                                                         // 22
    function history() {                                                                         // 22
      var me, user, filter, chats;                                                               // 23
      me = Meteor.userId();                                                                      // 24
      user = Session.get("now");                                                                 // 25
      filter = {                                                                                 // 26
        $or: [{ from: user, to: me }, { from: me, to: user }]                                    // 27
      };                                                                                         // 26
      chats = Chats.find(filter);                                                                // 32
      return chats;                                                                              // 33
    }                                                                                            // 34
                                                                                                 //
    return history;                                                                              // 22
  }(),                                                                                           // 22
                                                                                                 //
  getUsername: function () {                                                                     // 36
    function getUsername(id) {                                                                   // 36
      var user = Meteor.users.findOne({ _id: id });                                              // 37
      if (user._id == Meteor.userId()) {                                                         // 38
        return "me";                                                                             // 39
      } else {                                                                                   // 40
        return user.profile.username;                                                            // 41
      }                                                                                          // 42
    }                                                                                            // 43
                                                                                                 //
    return getUsername;                                                                          // 36
  }(),                                                                                           // 36
                                                                                                 //
  getAvatar: function () {                                                                       // 45
    function getAvatar(id) {                                                                     // 45
      var user = Meteor.users.findOne({ _id: id });                                              // 46
      return user.profile.avatar;                                                                // 47
    }                                                                                            // 48
                                                                                                 //
    return getAvatar;                                                                            // 45
  }()                                                                                            // 45
});                                                                                              // 14
///////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/routes.js                                                                              //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Router.configure({                                                                               // 1
	layoutTemplate: "main"                                                                          // 2
});                                                                                              // 1
                                                                                                 //
Router.route('/', function () {                                                                  // 5
	this.render('home');                                                                            // 6
});                                                                                              // 7
                                                                                                 //
if (Meteor.userId()) {                                                                           // 9
	Router.route('/home', function () {                                                             // 10
		this.render('nav', {                                                                           // 11
			to: 'navbar'                                                                                  // 12
		});                                                                                            // 11
		this.render('userList', {                                                                      // 14
			to: 'main'                                                                                    // 15
		});                                                                                            // 14
	});                                                                                             // 17
                                                                                                 //
	Router.route('/chat/:_id', function () {                                                        // 19
		this.render('nav', {                                                                           // 20
			to: 'navbar'                                                                                  // 21
		});                                                                                            // 20
		this.render('chat', {                                                                          // 23
			to: 'main'                                                                                    // 24
		});                                                                                            // 23
	});                                                                                             // 26
}                                                                                                // 27
                                                                                                 //
Router.route('/about', function () {                                                             // 29
	this.render('nav', {                                                                            // 30
		to: 'navbar'                                                                                   // 31
	});                                                                                             // 30
	this.render('about', {                                                                          // 33
		to: 'main'                                                                                     // 34
	});                                                                                             // 33
});                                                                                              // 36
///////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/main.js                                                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Meteor.subscribe("users");                                                                       // 1
Meteor.subscribe("chats");                                                                       // 2
                                                                                                 //
function home() {                                                                                // 5
	Session.set("currentUser", Meteor.userId());                                                    // 6
	if (Session.get("currentUser") != null) {                                                       // 7
		$("#continueBtn").click();                                                                     // 8
		var currentLocation = window.location;                                                         // 9
		if (currentLocation == "http://localhost:3000/home") {                                         // 10
			clearInterval(setHome);                                                                       // 11
		}                                                                                              // 12
	}                                                                                               // 13
};                                                                                               // 14
                                                                                                 //
var setHome = setInterval(home, 9);                                                              // 16
///////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"collections.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// lib/collections.js                                                                            //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Chats = new Mongo.Collection("chats");                                                           // 1
///////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// lib/schema.js                                                                                 //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Chats.attachSchema(new SimpleSchema({                                                            // 1
	message: {                                                                                      // 2
		type: String,                                                                                  // 3
		max: 500                                                                                       // 4
	},                                                                                              // 2
	from: {                                                                                         // 6
		type: String,                                                                                  // 7
		optional: true                                                                                 // 8
	},                                                                                              // 6
	to: {                                                                                           // 10
		type: String,                                                                                  // 11
		optional: true                                                                                 // 12
	},                                                                                              // 10
	createdOn: {                                                                                    // 14
		type: Date,                                                                                    // 15
		optional: true                                                                                 // 16
	}                                                                                               // 14
}));                                                                                             // 1
///////////////////////////////////////////////////////////////////////////////////////////////////

}},"common":{"methods.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// common/methods.js                                                                             //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var now;                                                                                         // 1
                                                                                                 //
Meteor.methods({                                                                                 // 3
	sendValue: function () {                                                                        // 4
		function sendValue(value) {                                                                    // 4
			now = value;                                                                                  // 5
			//console.log(now + " server");                                                               //
		}                                                                                              // 7
                                                                                                 //
		return sendValue;                                                                              // 4
	}(),                                                                                            // 4
                                                                                                 //
	sendMsg: function () {                                                                          // 9
		function sendMsg(message) {                                                                    // 9
			message.from = this.userId;                                                                   // 10
			message.to = now;                                                                             // 11
			message.createdOn = new Date();                                                               // 12
			Chats.insert(message);                                                                        // 13
		}                                                                                              // 14
                                                                                                 //
		return sendMsg;                                                                                // 9
	}()                                                                                             // 9
});                                                                                              // 3
///////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.about.js");
require("./client/template.chat.js");
require("./client/template.home.js");
require("./client/template.messageForm.js");
require("./client/template.nav.js");
require("./client/template.userList.js");
require("./client/template.main.js");
require("./lib/collections.js");
require("./lib/schema.js");
require("./client/accounts.js");
require("./client/events.js");
require("./client/helpers.js");
require("./client/routes.js");
require("./common/methods.js");
require("./client/main.js");