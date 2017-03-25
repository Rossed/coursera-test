var require = meteorInstall({"image_share.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// image_share.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
if (Meteor.isClient) {}                                              // 1
                                                                     //
if (Meteor.isServer) {                                               // 5
	Meteor.startup(function () {                                        // 6
		// code to run on server at startup                                //
	});                                                                 //
}                                                                    //
///////////////////////////////////////////////////////////////////////

}},{"extensions":[".js",".json"]});
require("./image_share.js");
//# sourceMappingURL=app.js.map
