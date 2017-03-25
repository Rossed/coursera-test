Meteor.subscribe("users");
Meteor.subscribe("chats");


function home() {
	Session.set("currentUser", Meteor.userId());
	if (Session.get("currentUser") != null) {
		$("#continueBtn").click();
		var currentLocation = window.location;
		if (currentLocation == "http://localhost:3000/home") {
			clearInterval(setHome);
		}
	}
};

var setHome = setInterval(home, 9);