var require = meteorInstall({"client":{"main.html":["./template.main.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////
//                                                                       //
// client/main.html                                                      //
//                                                                       //
///////////////////////////////////////////////////////////////////////////
                                                                         //
module.exports = require("./template.main.js");                          // 1
                                                                         // 2
///////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////
//                                                                       //
// client/template.main.js                                               //
//                                                                       //
///////////////////////////////////////////////////////////////////////////
                                                                         //
                                                                         // 1
Template.body.addContent((function() {                                   // 2
  var view = this;                                                       // 3
  return [ HTML.Raw("<h1>Welcome to Meteor!</h1>\n\n  "), Spacebars.include(view.lookupTemplate("hello")), "\n  ", Spacebars.include(view.lookupTemplate("time")) ];
}));                                                                     // 5
Meteor.startup(Template.body.renderToDocument);                          // 6
                                                                         // 7
Template.__checkName("hello");                                           // 8
Template["hello"] = new Template("Template.hello", (function() {         // 9
  var view = this;                                                       // 10
  return [ HTML.Raw("<h2>Hello from Australia</h2>\n  <button>Click Me</button>\n  "), HTML.P("You've pressed the button ", Blaze.View("lookup:counter", function() {
    return Spacebars.mustache(view.lookup("counter"));                   // 12
  }), " times.") ];                                                      // 13
}));                                                                     // 14
                                                                         // 15
Template.__checkName("time");                                            // 16
Template["time"] = new Template("Template.time", (function() {           // 17
  var view = this;                                                       // 18
  return HTML.H2("The time is: ", Blaze.View("lookup:date", function() {
    return Spacebars.mustache(view.lookup("date"));                      // 20
  }));                                                                   // 21
}));                                                                     // 22
                                                                         // 23
///////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","./main.html",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////
//                                                                       //
// client/main.js                                                        //
//                                                                       //
///////////////////////////////////////////////////////////////////////////
                                                                         //
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var ReactiveVar;module.import('meteor/reactive-var',{"ReactiveVar":function(v){ReactiveVar=v}});module.import('./main.html');
                                                                         // 2
                                                                         //
                                                                         // 4
                                                                         //
Template.hello.onCreated(function () {                                   // 6
  function helloOnCreated() {                                            // 6
    // counter starts at 0                                               //
    this.counter = new ReactiveVar(0);                                   // 8
  }                                                                      // 9
                                                                         //
  return helloOnCreated;                                                 // 6
}());                                                                    // 6
                                                                         //
Template.hello.helpers({                                                 // 11
  counter: function () {                                                 // 12
    function counter() {                                                 // 11
      return Template.instance().counter.get();                          // 13
    }                                                                    // 14
                                                                         //
    return counter;                                                      // 11
  }()                                                                    // 11
});                                                                      // 11
                                                                         //
Template.hello.events({                                                  // 17
  'click button': function () {                                          // 18
    function clickButton(event, instance) {                              // 17
      // increment the counter when button is clicked                    //
      instance.counter.set(instance.counter.get() + 1);                  // 20
    }                                                                    // 21
                                                                         //
    return clickButton;                                                  // 17
  }()                                                                    // 17
});                                                                      // 17
                                                                         //
var timeNdate = {                                                        // 24
  date: new Date()                                                       // 25
};                                                                       // 24
                                                                         //
Template.time.helpers(timeNdate);                                        // 28
///////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./client/main.js");