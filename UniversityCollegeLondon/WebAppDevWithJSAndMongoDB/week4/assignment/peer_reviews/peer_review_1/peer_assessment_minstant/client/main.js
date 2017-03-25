///
// helper functions
///
Template.available_user_list.helpers({
  users:function(){
    return Meteor.users.find();
  }
})
Template.available_user.helpers({
  getUsername:function(userId){
    user = Meteor.users.findOne({_id:userId});
    return user.profile.username;
  },
  isMyUser:function(userId){
    if (userId == Meteor.userId()){
      return true;
    }
    else {
      return false;
    }
  }
})
