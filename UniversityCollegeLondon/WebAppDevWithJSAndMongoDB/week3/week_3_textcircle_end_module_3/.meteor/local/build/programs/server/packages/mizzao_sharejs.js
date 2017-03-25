(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var RoutePolicy = Package.routepolicy.RoutePolicy;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;

/* Package-scope variables */
var __coffeescriptShare, ShareJS;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/mizzao_sharejs/sharejs-meteor-auth.coffee.js                                                     //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Fiber, Future, LogicalOps, _monkeyPatch, _submitOpMonkeyPatched, runValidations,                         // 2
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };                          //
                                                                                                             //
Fiber = Npm.require('fibers');                                                                               // 2
                                                                                                             //
Future = Npm.require('fibers/future');                                                                       // 3
                                                                                                             //
LogicalOps = {                                                                                               // 6
  'or': function(a, b) {                                                                                     //
    return a || b;                                                                                           //
  },                                                                                                         //
  'and': function(a, b) {                                                                                    //
    return a && b;                                                                                           //
  }                                                                                                          //
};                                                                                                           //
                                                                                                             //
runValidations = function(currentOp, validations, doc, token) {                                              // 11
  var k, lookIn, nestedResult, result, v;                                                                    // 12
  if (currentOp === null) {                                                                                  //
    if ((validations != null ? validations.or : void 0) != null) {                                           //
      return runValidations("or", validations.or, doc, token);                                               // 15
    } else if ((validations != null ? validations.and : void 0) != null) {                                   //
      return runValidations("and", validations.and, doc, token);                                             // 18
    } else if (validations != null) {                                                                        //
      return runValidations("and", validations, doc, token);                                                 // 21
    } else {                                                                                                 //
      return true;                                                                                           // 25
    }                                                                                                        //
  } else if (currentOp != null) {                                                                            //
    if (currentOp === "or") {                                                                                //
      result = false;                                                                                        //
    } else if (currentOp = "and") {                                                                          //
      result = true;                                                                                         //
    }                                                                                                        //
    for (k in validations) {                                                                                 // 32
      v = validations[k];                                                                                    //
      if (k === "or" || k === "and") {                                                                       //
        nestedResult = runValidations(k, v, doc, token);                                                     //
        result = LogicalOps[currentOp](result, nestedResult);                                                //
      } else {                                                                                               //
        switch (v) {                                                                                         // 38
          case "is_in_array":                                                                                // 38
            result = LogicalOps[currentOp](result, indexOf.call(doc[k], token) >= 0);                        //
            break;                                                                                           // 39
          case "isnt_in_array":                                                                              // 38
            lookIn = doc.k || [];                                                                            //
            result = LogicalOps[currentOp](result, indexOf.call(doc[k], token) < 0);                         //
            break;                                                                                           // 41
          case "is_equal":                                                                                   // 38
            result = LogicalOps[currentOp](result, token === doc[k]);                                        //
            break;                                                                                           // 44
          case "isnt_equal":                                                                                 // 38
            result = LogicalOps[currentOp](result, token === !doc[k]);                                       //
        }                                                                                                    // 38
      }                                                                                                      //
    }                                                                                                        // 32
    return result;                                                                                           // 48
  }                                                                                                          //
};                                                                                                           // 11
                                                                                                             //
_submitOpMonkeyPatched = false;                                                                              // 50
                                                                                                             //
_monkeyPatch = function(agent) {                                                                             // 52
  var UserAgent, model;                                                                                      // 53
  UserAgent = Object.getPrototypeOf(agent);                                                                  //
  model = ShareJS.model;                                                                                     //
  UserAgent.submitOp = function(docName, opData, callback) {                                                 //
    var dupIfSource;                                                                                         // 58
    opData.meta || (opData.meta = {});                                                                       //
    opData.meta.userId = this.name;                                                                          //
    opData.meta.source = this.sessionId;                                                                     //
    dupIfSource = opData.dupIfSource || [];                                                                  //
    if (opData.op) {                                                                                         //
      return this.doAuth({                                                                                   //
        docName: docName,                                                                                    //
        op: opData.op,                                                                                       //
        v: opData.v,                                                                                         //
        meta: opData.meta,                                                                                   //
        dupIfSource: dupIfSource                                                                             //
      }, 'submit op', callback, (function(_this) {                                                           //
        return function() {                                                                                  //
          return model.applyOp(docName, opData, callback);                                                   //
        };                                                                                                   //
      })(this));                                                                                             //
    } else {                                                                                                 //
      return this.doAuth({                                                                                   //
        docName: docName,                                                                                    //
        meta: opData.meta                                                                                    //
      }, 'submit meta', callback, (function(_this) {                                                         //
        return function() {                                                                                  //
          return model.applyMetaOp(docName, opData, callback);                                               //
        };                                                                                                   //
      })(this));                                                                                             //
    }                                                                                                        //
  };                                                                                                         //
  console.log("ShareJS: patched UserAgent submitOp function to record Meteor userId");                       //
  return _submitOpMonkeyPatched = true;                                                                      //
};                                                                                                           // 52
                                                                                                             //
this.MeteorAccountsAuthHandler = (function() {                                                               // 75
  function MeteorAccountsAuthHandler(options, client) {                                                      //
    this.options = options;                                                                                  //
    this.client = client;                                                                                    //
    this.handle = bind(this.handle, this);                                                                   //
  }                                                                                                          //
                                                                                                             //
  MeteorAccountsAuthHandler.prototype.fetchDocument = function(collection, key) {                            //
    var future;                                                                                              // 80
    future = new Future;                                                                                     //
    this.client.collection(collection, function(err, collection) {                                           //
      if (err) {                                                                                             //
        return future["throw"](err);                                                                         // 82
      }                                                                                                      //
      return collection.findOne({                                                                            //
        _id: key                                                                                             //
      }, function(err, doc) {                                                                                //
        if (err) {                                                                                           //
          console.warn("failed to get doc in " + collection + " with key " + key + ": " + err);              //
        }                                                                                                    //
        if (err) {                                                                                           //
          future["throw"](null);                                                                             //
        }                                                                                                    //
        return future["return"](doc);                                                                        //
      });                                                                                                    //
    });                                                                                                      //
    return future;                                                                                           // 89
  };                                                                                                         //
                                                                                                             //
  MeteorAccountsAuthHandler.prototype.getAuthentication = function(agent) {                                  //
    var collection, future, token, user, validations;                                                        // 93
    token = agent.authentication;                                                                            //
    validations = this.options.authenticate.token_validations;                                               //
    collection = this.options.authenticate.collection;                                                       //
    future = new Future;                                                                                     //
    user = this.fetchDocument(collection, agent.authentication).wait();                                      //
    if (!((user != null) || ((validations.or != null) && (validations.and != null)))) {                      //
      future["return"](false);                                                                               //
    }                                                                                                        //
    future["return"](runValidations(null, validations, user, token));                                        //
    return future;                                                                                           // 107
  };                                                                                                         //
                                                                                                             //
  MeteorAccountsAuthHandler.prototype.getAuthorization = function(agent, action) {                           //
    var collection, doc, future, token, validations;                                                         // 111
    token = agent.authentication;                                                                            //
    validations = this.options.authorize.token_validations;                                                  //
    collection = this.options.authorize.collection;                                                          //
    future = new Future;                                                                                     //
    doc = this.fetchDocument(collection, action.docName).wait();                                             //
    if (!((doc != null) || ((validations.or != null) && (validations.and != null)))) {                       //
      future["return"](false);                                                                               //
    }                                                                                                        //
    future["return"](runValidations(null, validations, doc, token));                                         //
    return future;                                                                                           // 125
  };                                                                                                         //
                                                                                                             //
  MeteorAccountsAuthHandler.prototype.handle = function(agent, action) {                                     //
    var authenticate, authorize, opsToAuthorize, ref;                                                        // 129
    if (!_submitOpMonkeyPatched) {                                                                           //
      _monkeyPatch(agent);                                                                                   //
    }                                                                                                        //
    authenticate = this.options.authenticate != null;                                                        //
    authorize = this.options.authorize != null;                                                              //
    opsToAuthorize = (ref = this.options.authorize) != null ? ref.apply_on : void 0;                         //
    return (Fiber(((function(_this) {                                                                        //
      return function() {                                                                                    //
        var ref1, res;                                                                                       // 136
        res = false;                                                                                         //
        if (authenticate && (action.type === "connect")) {                                                   //
          res = _this.getAuthentication(agent).wait();                                                       //
          if (res) {                                                                                         //
            agent.name = agent.authentication;                                                               //
          }                                                                                                  //
        } else if (authorize && (ref1 = action.type, indexOf.call(opsToAuthorize, ref1) >= 0)) {             //
          res = _this.getAuthorization(agent, action).wait();                                                //
        } else {                                                                                             //
          res = true;                                                                                        //
        }                                                                                                    //
        if (res) {                                                                                           //
          return action.accept();                                                                            //
        } else {                                                                                             //
          return action.reject();                                                                            //
        }                                                                                                    //
      };                                                                                                     //
    })(this)))).run();                                                                                       //
  };                                                                                                         //
                                                                                                             //
  return MeteorAccountsAuthHandler;                                                                          //
                                                                                                             //
})();                                                                                                        //
                                                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/mizzao_sharejs/sharejs-server.coffee.js                                                          //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Future, options, ref;                                                                                    // 3
                                                                                                             //
Future = Npm.require('fibers/future');                                                                       // 3
                                                                                                             //
ShareJS = ShareJS || {};                                                                                     // 5
                                                                                                             //
options = _.extend({                                                                                         // 9
  staticPath: null,                                                                                          //
  db: {                                                                                                      //
    type: 'mongo',                                                                                           //
    opsCollectionPerDoc: false                                                                               //
  }                                                                                                          //
}, (ref = Meteor.settings.sharejs) != null ? ref.options : void 0);                                          //
                                                                                                             //
switch (options.db.type) {                                                                                   // 20
  case 'mongo':                                                                                              // 20
                                                                                                             //
    /*                                                                                                       // 22
      ShareJS 0.6.3 mongo driver:                                                                            //
      https://github.com/share/ShareJS/blob/v0.6.3/src/server/db/mongo.coffee                                //
      It will create its own indices on the 'ops' collection.                                                //
     */                                                                                                      //
    options.db.client = MongoInternals.defaultRemoteCollectionDriver().mongo.db;                             //
    options.db.client.open = function() {};                                                                  //
    if (options.accounts_auth != null) {                                                                     //
      options.auth = new MeteorAccountsAuthHandler(options.accounts_auth, options.db.client).handle;         //
    }                                                                                                        //
    break;                                                                                                   // 21
  default:                                                                                                   // 20
    Meteor._debug("ShareJS: using unsupported db type " + options.db.type + ", falling back to in-memory.");
}                                                                                                            // 20
                                                                                                             //
RoutePolicy.declare('/channel/', 'network');                                                                 // 46
                                                                                                             //
Npm.require('share').server.attach(WebApp.connectHandlers, options);                                         // 49
                                                                                                             //
                                                                                                             //
/*                                                                                                           // 51
  ShareJS attaches the server API to a weird place. Oh well...                                               //
  https://github.com/share/ShareJS/blob/v0.6.2/src/server/index.coffee                                       //
 */                                                                                                          //
                                                                                                             //
ShareJS.model = WebApp.connectHandlers.model;                                                                // 55
                                                                                                             //
ShareJS.initializeDoc = function(docName, content) {                                                         // 58
  return ShareJS.model.create(docName, 'text', {}, function(err) {                                           //
    var opData;                                                                                              // 60
    if (err) {                                                                                               //
      console.log(err);                                                                                      //
      return;                                                                                                // 62
    }                                                                                                        //
    opData = {                                                                                               //
      op: [                                                                                                  //
        {                                                                                                    //
          i: content,                                                                                        //
          p: 0                                                                                               //
        }                                                                                                    //
      ],                                                                                                     //
      v: 0,                                                                                                  //
      meta: {}                                                                                               //
    };                                                                                                       //
    return ShareJS.model.applyOp(docName, opData, function(err, res) {                                       //
      if (err) {                                                                                             //
        return console.log(err);                                                                             //
      }                                                                                                      //
    });                                                                                                      //
  });                                                                                                        //
};                                                                                                           // 58
                                                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mizzao:sharejs'] = {}, {
  ShareJS: ShareJS
});

})();

//# sourceMappingURL=mizzao_sharejs.js.map
