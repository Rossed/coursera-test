Chats = new Mongo.Collection("chats");

if (Meteor.isServer) {

  Meteor.publish("chats", function(){
    return Chats.find({$or:[
      {user1Id:this.userId},
      {user2Id:this.userId}
    ]});
  });

  Meteor.publish("users", function(){
    return Meteor.users.find()
  });

  Meteor.publish('emojis', function() {
    // Here you can choose to publish a subset of all emojis
    // if you'd like to.
    return Emojis.find();
  });
}

if (Meteor.isClient) {
  Meteor.subscribe('chats');
  Meteor.subscribe('users');
  Meteor.subscribe('emojis');
}
