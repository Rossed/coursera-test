Template.chat_page.helpers({
  messages:function(){
    var chat = Chats.findOne({_id:Session.get("chatId")});
    if (chat) {
      return chat.messages;
    } else {
      return [];
    }
  },
  chatWith: function (){
    var chat = Chats.findOne({_id:Session.get("chatId")});
    if (chat) {
      if (chat.user1Id === Meteor.userId()){
        return Meteor.users.findOne(chat.user2Id);
      } else {
        return Meteor.users.findOne(chat.user1Id);
      }
    }
    return ;
  }
})
Template.chat_page.events({
// this event fires when the user sends a message on the chat page
'submit .js-send-chat':function(event){
  // stop the form from triggering a page reload
  event.preventDefault();
  Meteor.call("sendMessage",
    Session.get("chatId"),
    event.target.chat.value,
    function(error, result){
      event.target.chat.value = "";
    }
  );
}
})

Template.chat_message.helpers({
  isOwner: function() {
    return this.userId === Meteor.userId();
  },
  user: function() {
    return Meteor.users.findOne(this.userId);
  },
  formatedDate: function() {
    return moment(this.createdOn).fromNow();
  }
});
