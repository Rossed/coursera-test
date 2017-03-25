Template.userList.helpers({
	user: function() {
		return Meteor.users.find();
	},

  me: function(id) {
    var user = Meteor.users.findOne({_id: id});
    if (user._id == Meteor.userId()) {
      return "me"
    }
  }
});

Template.chat.helpers({
  nowUser: function() {
    var now = Meteor.users.findOne({_id: Session.get("now")});
    if (now) {
      return now.profile.username;
    }
  },

  history: function() {
    var me, user, filter, chats;
    me = Meteor.userId();
    user = Session.get("now");
    filter = {
      $or: [
        {from: user, to: me},
        {from:me, to:user}
      ]
    };
    chats = Chats.find(filter);
    return chats;
  },

  getUsername: function(id) {
    var user = Meteor.users.findOne({_id: id});
    if (user._id == Meteor.userId()) {
      return "me"
    } else {
      return user.profile.username;
    }
  },

  getAvatar: function(id) {
    var user = Meteor.users.findOne({_id: id});
    return user.profile.avatar;
  }
})