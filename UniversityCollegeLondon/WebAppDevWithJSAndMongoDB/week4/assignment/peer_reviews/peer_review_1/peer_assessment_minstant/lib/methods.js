Meteor.methods({
  "getChat": function (otherUserId) {
    // var otherUserId = this.params._id;
    // find a chat that has two users that match current user id
    // and the requested user id
    if (this.userId) {
      var filter = {$or:[
        {user1Id:this.userId, user2Id:otherUserId},
        {user2Id:this.userId, user1Id:otherUserId}
      ]};
      var chat = Chats.findOne(filter);
      if (!chat){// no chat matching the filter - need to insert a new one
        return Chats.insert({user1Id:Meteor.userId(), user2Id:otherUserId});
      }
      else {// there is a chat going already - use that.
        return chat._id;
      }
    }
  },
  "sendMessage": function(chatId, message) {
    if (this.userId) {
      var chat = Chats.findOne({_id:chatId});
      if (chat){// ok - we have a chat to use
        var msgs = chat.messages; // pull the messages property
        if (!msgs){// no messages yet, create a new array
          msgs = [];
        }
        // is a good idea to insert data straight from the form
        // (i.e. the user) into the database?? certainly not.
        // push adds the message to the end of the array
        msgs.push({
          text: message,
          userId: this.userId,
          createdOn: new Date(),
        });
        // put the messages array onto the chat object
        chat.messages = msgs;
        // update the chat object in the database.
        Chats.update(chat._id, chat);
      }
    }
  }
});
