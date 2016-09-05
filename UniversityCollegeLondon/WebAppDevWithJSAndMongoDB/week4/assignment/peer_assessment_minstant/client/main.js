Meteor.subscribe("chats", function() {
  	Session.set('db_data_loaded', true);
  });
  Meteor.subscribe("users");

  Meteor.startup(function () {
  	Session.set('db_data_loaded', false);
  });
  // set up the main template the the router will use to build pages
  Router.configure({
    layoutTemplate: 'ApplicationLayout'
  });
  // specify the top level route, the page users see when they arrive at the site
  Router.route('/', function () {
    console.log("rendering root /");
    this.render("navbar", {to:"header"});
    this.render("lobby_page", {to:"main"});  
  });

  // specify a route that allows the current user to chat to another users
  Router.route('/chat/:_id', function () {
    // the user they want to chat to has id equal to 
    // the id sent in after /chat/... 
    var otherUserId = this.params._id;
    // find a chat that has two users that match current user id
    // and the requested user id
    var filter = {$or:[
                {user1Id:Meteor.userId(), user2Id:otherUserId}, 
                {user2Id:Meteor.userId(), user1Id:otherUserId}
                ]};
    var chat = Chats.findOne(filter);
    if (Session.get('db_data_loaded')) {
	    if (!chat){// no chat matching the filter - need to insert a new one
	      chatId = Meteor.call('insertChat', otherUserId);
	      console.log("no chat matching the filter - need to insert a new one");
	    }
	    else {// there is a chat going already - use that. 
	      console.log("there is a chat going already - use that.");
	      chatId = chat._id;
	    }
	    if (chatId){// looking good, save the id to the session
	      Session.set("chatId",chatId);
	    }
	}
	    this.render("navbar", {to:"header"});
	    this.render("chat_page", {to:"main"}); 
   });

  ///
  // helper functions 
  /// 
  Template.available_user_list.helpers({
    users:function(){
      return Meteor.users.find();
    },
    isMyUser:function(userId){
      if (userId == Meteor.userId()){
        return true;
      }
      else {
        return false;
      }
    },
    online:function(userId) {
    	if(Meteor.users.findOne({_id:userId}).services.resume &&
    		Meteor.users.findOne({_id:userId}).services.resume.loginTokens.length > 0) {
    		return true;
    	} else {
    		return false
    	}
    }

  })
  Template.online_user.helpers({
  	getUsername:function(userId){
      user = Meteor.users.findOne({_id:userId});
      return user.profile.username;
    }, 
  })
  Template.offline_user.helpers({
  	getUsername:function(userId){
      user = Meteor.users.findOne({_id:userId});
      return user.profile.username;
    }, 
  })
 // Template.available_user.helpers({
 //    getUsername:function(userId){
 //      user = Meteor.users.findOne({_id:userId});
 //      return user.profile.username;
 //    }, 
 //    isMyUser:function(userId){
 //      if (userId == Meteor.userId()){
 //        return true;
 //      }
 //      else {
 //        return false;
 //      }
 //    },
 //    online:function(userId) {
 //    	if(Meteor.users.findOne({_id:userId}).services.resume &&
 //    		Meteor.users.findOne({_id:userId}).services.resume.loginTokens.length > 0) {
 //    		return true;
 //    	} else {
 //    		return false
 //    	}
 //    }
 //  })
  Template.chat_page.helpers({
    messages:function(){
      var chat = Chats.findOne({_id:Session.get("chatId")});
      return chat.messages;
    }, 
    other_user:function(){
    	var chat = Chats.findOne({_id:Session.get("chatId")})
    	if (Meteor.userId() == chat.user1Id) {
    		var username = Meteor.users.findOne({_id:chat.user2Id}).profile.username;
    		return username;
    	} else {
    		var username = Meteor.users.findOne({_id:chat.user1Id}).profile.username;
    		return username;
    	}
    }, 
  })
  Template.chat_message.helpers({
  	display_pic: function() {
  		return this.sender.profile.avatar;
  	},
  	message_sender:function() {
  		if (this.sender._id == Meteor.user()._id) {
  			return "floatMeRight";
  		} else {
  			return;
  		};
  	}
  })

  ///
  // event helpers
  ///

 Template.chat_page.events({
  // this event fires when the user sends a message on the chat page
  'submit .js-send-chat':function(event){
    // stop the form from triggering a page reload
    event.preventDefault();
    // see if we can find a chat object in the database
    // to which we'll add the message
    var chat = Chats.findOne({_id:Session.get("chatId")});
    if (chat){// ok - we have a chat to use
      var msgs = chat.messages; // pull the messages property
      if (!msgs){// no messages yet, create a new array
        msgs = [];
      }
      // is a good idea to insert data straight from the form
      // (i.e. the user) into the database?? certainly not. 
      // push adds the message to the end of the array
      msgs.push({
      	sender: Meteor.user(),
      	text: event.target.chat.value,
		});
      // reset the form
      // document.querySelector('[contenteditable]').textContent = "";
      event.target.chat.value = "";
      // put the messages array onto the chat object
      chat.messages = msgs;
      // update the chat object in the database.
      // Chats.update(chat._id, chat);
      Meteor.call('updateChat', chat)     
    }
  },
  'click .js-insert-emoticon':function(event) {
  	document.querySelector('[contenteditable]').appendChild(event.target.cloneNode(true));
  }
 })

 ///
 // onRendered
 ///

Template.online_user.onRendered(function () {
	$( ".display_username" ).hover(
	  function() {
      $(this.firstChild.nextElementSibling.children[1]).css("display", "unset");
	  }, function() {
      $(this.firstChild.nextElementSibling.children[1]).css("display", "none");
	  }
	);
});
Template.offline_user.onRendered(function () {
  $( ".display_username" ).hover(
    function() {
      $(this.firstChild.nextElementSibling.children[1]).css("display", "unset");
    }, function() {
      $(this.firstChild.nextElementSibling.children[1]).css("display", "none");
    }
  );
});

Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'username',
        fieldLabel: 'Username',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please enter a username");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'gender',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
            id: 1,                  // id suffix of the radio element
            label: 'Male',          // label for the radio element
            value: 'm'              // value of the radio element, this will be saved.
          }, {
            id: 2,
            label: 'Female',
            value: 'f',
            checked: 'checked'
        }],
        visible: true
    }, {
        fieldName: 'avatar',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Avatar',
        inputType: 'text',
        visible: false
    }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});







