var require = meteorInstall({"template.image_share.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// template.image_share.js                                                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.body.addContent((function() {                                                                     // 2
  var view = this;                                                                                         // 3
  return [ HTML.Raw("<h1>Welcome to Meteor!</h1>\n	"), Spacebars.include(view.lookupTemplate("images")) ];
}));                                                                                                       // 5
Meteor.startup(Template.body.renderToDocument);                                                            // 6
                                                                                                           // 7
Template.__checkName("images");                                                                            // 8
Template["images"] = new Template("Template.images", (function() {                                         // 9
  var view = this;                                                                                         // 10
  return "";                                                                                               // 11
}));                                                                                                       // 12
                                                                                                           // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"image_share.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// image_share.js                                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
if (Meteor.isClient) {}                                                                                    // 1
                                                                                                           //
if (Meteor.isServer) {                                                                                     // 5
	Meteor.startup(function () {                                                                              // 6
		// code to run on server at startup                                                                      //
	});                                                                                                       //
}                                                                                                          //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},{"extensions":[".js",".json",".html",".css"]});
require("./template.image_share.js");
require("./image_share.js");