var require = meteorInstall({"lib":{"collections.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// lib/collections.js                                                       //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Songs = new Mongo.Collection("songs");                                      // 1
//////////////////////////////////////////////////////////////////////////////

}},"server":{"main.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/main.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                            //
Meteor.startup(function () {                                                // 3
  // code to run on server at startup                                       //
                                                                            //
});                                                                         // 6
//////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/collections.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
