//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Random = Package.random.Random;
var _ = Package.underscore._;
var check = Package.check.check;
var Match = Package.check.Match;
var Mongo = Package.mongo.Mongo;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var EditableText, sanitizeHtml, callbackMutatedDoc;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/babrahams_editable-text/lib/template.editable_text.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("editableText");                                                                                  // 2
Template["editableText"] = new Template("Template.editableText", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      context: Spacebars.call(view.lookup("context")),                                                                 // 7
      collection: Spacebars.call(view.lookup("collection")),                                                           // 8
      field: Spacebars.call(view.lookup("field")),                                                                     // 9
      value: Spacebars.call(view.lookup("value")),                                                                     // 10
      editingValue: Spacebars.call(view.lookup("editingValue")),                                                       // 11
      textarea: Spacebars.call(view.lookup("textarea")),                                                               // 12
      wysiwyg: Spacebars.call(view.lookup("wysiwyg")),                                                                 // 13
      acceptEmpty: Spacebars.call(view.lookup("acceptEmpty")),                                                         // 14
      removeEmpty: Spacebars.call(view.lookup("removeEmpty")),                                                         // 15
      eventType: Spacebars.call(view.lookup("eventType")),                                                             // 16
      type: Spacebars.call(view.lookup("type")),                                                                       // 17
      objectTypeText: Spacebars.call(view.lookup("objectTypeText")),                                                   // 18
      "class": Spacebars.call(view.lookup("class")),                                                                   // 19
      inputClass: Spacebars.call(view.lookup("inputClass")),                                                           // 20
      autoInsert: Spacebars.call(view.lookup("autoInsert")),                                                           // 21
      beforeInsert: Spacebars.call(view.lookup("beforeInsert")),                                                       // 22
      afterInsert: Spacebars.call(view.lookup("afterInsert")),                                                         // 23
      wysiwygStyle: Spacebars.call(view.lookup("wysiwygStyle")),                                                       // 24
      style: Spacebars.call(view.lookup("style")),                                                                     // 25
      inputStyle: Spacebars.call(view.lookup("inputStyle")),                                                           // 26
      substitute: Spacebars.call(view.lookup("substitute")),                                                           // 27
      title: Spacebars.call(view.lookup("title")),                                                                     // 28
      userCanEdit: Spacebars.call(view.lookup("userCanEdit")),                                                         // 29
      useTransaction: Spacebars.call(view.lookup("useTransaction")),                                                   // 30
      beforeUpdate: Spacebars.call(view.lookup("beforeUpdate")),                                                       // 31
      afterUpdate: Spacebars.call(view.lookup("afterUpdate")),                                                         // 32
      beforeRemove: Spacebars.call(view.lookup("beforeRemove")),                                                       // 33
      afterRemove: Spacebars.call(view.lookup("afterRemove")),                                                         // 34
      onStartEditing: Spacebars.call(view.lookup("onStartEditing")),                                                   // 35
      onStopEditing: Spacebars.call(view.lookup("onStopEditing")),                                                     // 36
      onShowToolbar: Spacebars.call(view.lookup("onShowToolbar")),                                                     // 37
      onHideToolbar: Spacebars.call(view.lookup("onHideToolbar")),                                                     // 38
      placeholder: Spacebars.call(view.lookup("placeholder")),                                                         // 39
      saveOnFocusout: Spacebars.call(view.lookup("saveOnFocusout")),                                                   // 40
      noSaveOnReturn: Spacebars.call(view.lookup("noSaveOnReturn")),                                                   // 41
      dontSelectAll: Spacebars.call(view.lookup("dontSelectAll")),                                                     // 42
      showSaveButton: Spacebars.call(view.lookup("showSaveButton")),                                                   // 43
      trustHtml: Spacebars.call(view.lookup("trustHtml")),                                                             // 44
      useMethod: Spacebars.call(view.lookup("useMethod")),                                                             // 45
      toolbarPosition: Spacebars.call(view.lookup("toolbarPosition")),                                                 // 46
      options: Spacebars.call(view.lookup("options")),                                                                 // 47
      autoResize: Spacebars.call(view.lookup("autoResize")),                                                           // 48
      emptyText: Spacebars.call(view.lookup("emptyText")),                                                             // 49
      showToolbar: Spacebars.call(view.lookup("showToolbar")),                                                         // 50
      derivedOptions: Spacebars.call(view.lookup("derivedOptions")),                                                   // 51
      template: Spacebars.call(view.lookup("template")),                                                               // 52
      stopPropagation: Spacebars.call(view.lookup("stopPropagation")),                                                 // 53
      editor: Spacebars.call(view.lookup("editor")),                                                                   // 54
      editorOptions: Spacebars.call(view.lookup("editorOptions"))                                                      // 55
    };                                                                                                                 // 56
  }, function() {                                                                                                      // 57
    return Spacebars.include(view.lookupTemplate("editable_text_widget"));                                             // 58
  });                                                                                                                  // 59
}));                                                                                                                   // 60
                                                                                                                       // 61
Template.__checkName("editable_text_widget");                                                                          // 62
Template["editable_text_widget"] = new Template("Template.editable_text_widget", (function() {                         // 63
  var view = this;                                                                                                     // 64
  return Spacebars.With(function() {                                                                                   // 65
    return Spacebars.call(view.lookup("initOptions"));                                                                 // 66
  }, function() {                                                                                                      // 67
    return Blaze.If(function() {                                                                                       // 68
      return Spacebars.call(view.lookup("controlTemplate"));                                                           // 69
    }, function() {                                                                                                    // 70
      return Blaze._TemplateWith(function() {                                                                          // 71
        return {                                                                                                       // 72
          template: Spacebars.call(view.lookup("controlTemplate")),                                                    // 73
          data: Spacebars.call(view.lookup("controlData"))                                                             // 74
        };                                                                                                             // 75
      }, function() {                                                                                                  // 76
        return Spacebars.include(function() {                                                                          // 77
          return Spacebars.call(Template.__dynamic);                                                                   // 78
        });                                                                                                            // 79
      });                                                                                                              // 80
    }, function() {                                                                                                    // 81
      return Blaze.If(function() {                                                                                     // 82
        return Spacebars.call(view.lookup("editing"));                                                                 // 83
      }, function() {                                                                                                  // 84
        return Blaze.If(function() {                                                                                   // 85
          return Spacebars.call(view.lookup("textarea"));                                                              // 86
        }, function() {                                                                                                // 87
          return [ Blaze.If(function() {                                                                               // 88
            return Spacebars.call(view.lookup("showSaveButton"));                                                      // 89
          }, function() {                                                                                              // 90
            return HTML.BUTTON({                                                                                       // 91
              "class": "editable-text-save-button"                                                                     // 92
            }, "Save");                                                                                                // 93
          }), HTML.TEXTAREA({                                                                                          // 94
            "class": function() {                                                                                      // 95
              return [ "text-area-edit ", Spacebars.mustache(view.lookup("inputClass")) ];                             // 96
            },                                                                                                         // 97
            placeholder: function() {                                                                                  // 98
              return Spacebars.mustache(view.lookup("placeholder"));                                                   // 99
            },                                                                                                         // 100
            title: function() {                                                                                        // 101
              return Blaze.If(function() {                                                                             // 102
                return Spacebars.call(view.lookup("trustHtml"));                                                       // 103
              }, function() {                                                                                          // 104
                return "Hold SHIFT and press ENTER for a new line";                                                    // 105
              });                                                                                                      // 106
            },                                                                                                         // 107
            style: function() {                                                                                        // 108
              return Spacebars.mustache(view.lookup("inputStyle"));                                                    // 109
            },                                                                                                         // 110
            value: function() {                                                                                        // 111
              return Spacebars.mustache(view.lookup("value"));                                                         // 112
            }                                                                                                          // 113
          }) ];                                                                                                        // 114
        }, function() {                                                                                                // 115
          return Blaze.If(function() {                                                                                 // 116
            return Spacebars.call(view.lookup("isWysiwyg"));                                                           // 117
          }, function() {                                                                                              // 118
            return HTML.DIV({                                                                                          // 119
              "class": "wysiwyg-container"                                                                             // 120
            }, Blaze.If(function() {                                                                                   // 121
              return Spacebars.dataMustache(view.lookup("toolsPosition"), "top");                                      // 122
            }, function() {                                                                                            // 123
              return Spacebars.include(view.lookupTemplate("wysiwyg"));                                                // 124
            }), HTML.DIV({                                                                                             // 125
              "class": function() {                                                                                    // 126
                return [ "wysiwyg ", Spacebars.mustache(view.lookup("inputClass")) ];                                  // 127
              },                                                                                                       // 128
              style: function() {                                                                                      // 129
                return Spacebars.mustache(view.lookup("inputStyle"));                                                  // 130
              }                                                                                                        // 131
            }, Blaze.View("lookup:wysiwygContent", function() {                                                        // 132
              return Spacebars.mustache(view.lookup("wysiwygContent"));                                                // 133
            })), Blaze.Unless(function() {                                                                             // 134
              return Spacebars.dataMustache(view.lookup("toolsPosition"), "top");                                      // 135
            }, function() {                                                                                            // 136
              return Spacebars.include(view.lookupTemplate("wysiwyg"));                                                // 137
            }));                                                                                                       // 138
          }, function() {                                                                                              // 139
            return HTML.INPUT({                                                                                        // 140
              "class": function() {                                                                                    // 141
                return [ "wide-text-edit ", Spacebars.mustache(view.lookup("inputClass")) ];                           // 142
              },                                                                                                       // 143
              type: "text",                                                                                            // 144
              value: function() {                                                                                      // 145
                return Spacebars.mustache(view.lookup("inputValue"));                                                  // 146
              },                                                                                                       // 147
              placeholder: function() {                                                                                // 148
                return Spacebars.mustache(view.lookup("placeholder"));                                                 // 149
              },                                                                                                       // 150
              style: function() {                                                                                      // 151
                return Spacebars.mustache(view.lookup("inputStyle"));                                                  // 152
              }                                                                                                        // 153
            });                                                                                                        // 154
          });                                                                                                          // 155
        });                                                                                                            // 156
      }, function() {                                                                                                  // 157
        return Blaze.If(function() {                                                                                   // 158
          return Spacebars.call(view.lookup("canEditText"));                                                           // 159
        }, function() {                                                                                                // 160
          return Blaze.If(function() {                                                                                 // 161
            return Spacebars.call(view.lookup("substitute"));                                                          // 162
          }, function() {                                                                                              // 163
            return HTML.SPAN({                                                                                         // 164
              title: function() {                                                                                      // 165
                return Spacebars.mustache(view.lookup("title"));                                                       // 166
              },                                                                                                       // 167
              "class": function() {                                                                                    // 168
                return [ "editable-text ", Spacebars.mustache(view.lookup("class")), " et-", Spacebars.mustache(Spacebars.dot(view.lookup("context"), "_id")) ];
              }                                                                                                        // 170
            }, Blaze.View("lookup:substitute", function() {                                                            // 171
              return Spacebars.mustache(view.lookup("substitute"));                                                    // 172
            }));                                                                                                       // 173
          }, function() {                                                                                              // 174
            return Blaze.If(function() {                                                                               // 175
              return Spacebars.call(view.lookup("isWysiwyg"));                                                         // 176
            }, function() {                                                                                            // 177
              return HTML.DIV({                                                                                        // 178
                "class": "wysiwyg-content"                                                                             // 179
              }, HTML.DIV({                                                                                            // 180
                "class": function() {                                                                                  // 181
                  return [ "editable-text ", Spacebars.mustache(view.lookup("class")), " et-", Spacebars.mustache(Spacebars.dot(view.lookup("context"), "_id")) ];
                },                                                                                                     // 183
                title: function() {                                                                                    // 184
                  return Spacebars.mustache(view.lookup("title"));                                                     // 185
                },                                                                                                     // 186
                style: function() {                                                                                    // 187
                  return Spacebars.mustache(view.lookup("style"));                                                     // 188
                }                                                                                                      // 189
              }, Blaze.View("lookup:wysiwygContent", function() {                                                      // 190
                return Spacebars.mustache(view.lookup("wysiwygContent"));                                              // 191
              })));                                                                                                    // 192
            }, function() {                                                                                            // 193
              return HTML.SPAN({                                                                                       // 194
                "class": function() {                                                                                  // 195
                  return [ "editable-text ", Spacebars.mustache(view.lookup("class")), " et-", Spacebars.mustache(Spacebars.dot(view.lookup("context"), "_id")) ];
                },                                                                                                     // 197
                title: function() {                                                                                    // 198
                  return Spacebars.mustache(view.lookup("title"));                                                     // 199
                }                                                                                                      // 200
              }, Blaze.View("lookup:content", function() {                                                             // 201
                return Spacebars.mustache(view.lookup("content"));                                                     // 202
              }));                                                                                                     // 203
            });                                                                                                        // 204
          });                                                                                                          // 205
        }, function() {                                                                                                // 206
          return Spacebars.With(function() {                                                                           // 207
            return Spacebars.dataMustache(view.lookup("substitute"), true);                                            // 208
          }, function() {                                                                                              // 209
            return Blaze.View("lookup:.", function() {                                                                 // 210
              return Spacebars.mustache(view.lookup("."));                                                             // 211
            });                                                                                                        // 212
          }, function() {                                                                                              // 213
            return Blaze.If(function() {                                                                               // 214
              return Spacebars.call(view.lookup("isWysiwyg"));                                                         // 215
            }, function() {                                                                                            // 216
              return Blaze.View("lookup:wysiwygContent", function() {                                                  // 217
                return Spacebars.mustache(view.lookup("wysiwygContent"));                                              // 218
              });                                                                                                      // 219
            }, function() {                                                                                            // 220
              return Blaze.View("lookup:content", function() {                                                         // 221
                return Spacebars.mustache(view.lookup("content"));                                                     // 222
              });                                                                                                      // 223
            });                                                                                                        // 224
          });                                                                                                          // 225
        });                                                                                                            // 226
      });                                                                                                              // 227
    });                                                                                                                // 228
  });                                                                                                                  // 229
}));                                                                                                                   // 230
                                                                                                                       // 231
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/babrahams_editable-text/lib/editable_text.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
EditableText = {};                                                                                                     // 1
                                                                                                                       // 2
// *******************************                                                                                     // 3
// CONFIG that only affects CLIENT                                                                                     // 4
// *******************************                                                                                     // 5
                                                                                                                       // 6
EditableText.saveOnFocusout = true;                                                                                    // 7
EditableText.trustHtml = false;                                                                                        // 8
EditableText.useMethods = true; // only set this to false if you really know what you're doing and have taken appropriate measures to thwart XSS attacks
EditableText.editors = {}; // where other packages register different editors that can supplant the UI functionality of this package, while using the mutator methods it makes available
EditableText.isTouchDevice = ('ontouchstart' in document.documentElement);                                             // 11
                                                                                                                       // 12
// The `EditableText.insert`, `EditableText.update`, `EditableText.remove` functions can be optionally overwritten if necessary
// Not recommended, though. It's a lot of work to get the same functionality that the package provides by default      // 14
                                                                                                                       // 15
EditableText.insert = function (Collection, doc) {                                                                     // 16
  var self = _.clone(this); // Don't want to update the original                                                       // 17
  if (EditableText.useMethods && this.useMethod !== false || this.useMethod) {                                         // 18
    var objId = Random.id();                                                                                           // 19
    self.context = _.clone(self.context); // need to clone this field again because this.context is an object and _.clone isn't a deep clone
    self.context._id = objId;                                                                                          // 21
    Meteor.call('_editableTextWrite', 'insert', self, null, EditableText._useTransaction(this), function (err, res) {  // 22
      if (err) {                                                                                                       // 23
        console.log(err);                                                                                              // 24
        return;                                                                                                        // 25
      }                                                                                                                // 26
      // Just in case it didn't get into the DOM in time                                                               // 27
      /*Tracker.flush();                                                                                               // 28
      var elem = $('.et-' + objId);                                                                                    // 29
      if (elem.length) {                                                                                               // 30
        elem.eq(0).trigger((EditableText.wysiwyg && self.wysiwyg) ? 'mousedown' : 'click');                            // 31
      }*/                                                                                                              // 32
    });                                                                                                                // 33
    // TODO -- this new object needs to get `selected` set in its template instance (and the corresponding element needs to gain focus) wherever it lands in the DOM
    // However, we have no easy way of getting its template instance, other than iterating over                        // 35
    // all template instances, looking for the one where the context._id matches the object_id value                   // 36
    // Unfortunately, I have no idea where the template instances are stored                                           // 37
    // So using a filthy hack instead ...                                                                              // 38
    // Getting the element(s) in the DOM with the right class and firing click event on the first one                  // 39
    // Too bad if this wasn't the element we really wanted to be editing                                               // 40
    // Note: we can't fire events on them all as, if there are (even temporarily) duplicates in the DOM and removeEmpty=true, this could cause unwanted side effects (e.g. instant deletion after creation)
    // This means that in cases when the newly inserted document field is available in multiple places on the screen, the wrong one might be selected for editing (i.e. one that wasn't where the user clicked)
    // This is probably rare enough that we'll ignore it until it becomes a serious problem, at which time we'll come up with another hack
    Tracker.flush(); // Put this here rather than in the callback to maintain latency compensation                     // 44
    var elem = $('.et-' + objId);                                                                                      // 45
    if (elem.length) {                                                                                                 // 46
      elem.eq(0).trigger((EditableText.wysiwyg && self.wysiwyg) ? 'mousedown' : 'click');                              // 47
    }                                                                                                                  // 48
    return;                                                                                                            // 49
  }                                                                                                                    // 50
  if (EditableText._useTransaction(this)) {                                                                            // 51
    if (this.transactionInsertText || this.objectTypeText) {                                                           // 52
      tx.start(this.transactionInsertText || 'add ' + this.objectTypeText);                                            // 53
    }                                                                                                                  // 54
    EditableText._callback.call(self, 'beforeInsert', self.context);                                                   // 55
    var new_id = tx.insert(Collection, doc, {instant: true});                                                          // 56
    EditableText._callback.call(self, 'afterInsert', Collection.findOne({_id: new_id}));                               // 57
    if (this.transactionInsertText || this.objectTypeText) {                                                           // 58
      tx.commit();                                                                                                     // 59
    }                                                                                                                  // 60
  }                                                                                                                    // 61
  else {                                                                                                               // 62
    doc = EditableText._callback.call(self, 'beforeInsert', self.context);                                             // 63
    var new_id = Collection.insert(doc);                                                                               // 64
    EditableText._callback.call(self, 'afterInsert', Collection.findOne({_id: new_id}));                               // 65
  }                                                                                                                    // 66
  // see above                                                                                                         // 67
  Tracker.flush();                                                                                                     // 68
  $('.et-' + new_id).eq(0).trigger((EditableText.wysiwyg && this.wysiwyg) ? 'mousedown' : 'click');                    // 69
  return new_id;                                                                                                       // 70
}                                                                                                                      // 71
                                                                                                                       // 72
EditableText.update = function(Collection, doc, modifier) {                                                            // 73
  var self = this;                                                                                                     // 74
  if (EditableText.useMethods && this.useMethod !== false || this.useMethod) {                                         // 75
    Meteor.call('_editableTextWrite', 'update', this, modifier, EditableText._useTransaction(this), function (err, res) {
      if (err) {                                                                                                       // 77
        console.log(err);                                                                                              // 78
      }                                                                                                                // 79
    });                                                                                                                // 80
    return;                                                                                                            // 81
  }                                                                                                                    // 82
  if (EditableText._useTransaction(this)) {                                                                            // 83
    if (this.objectTypeText || this.transactionUpdateText) {                                                           // 84
      tx.start(this.transactionUpdateText || 'update ' + this.objectTypeText);                                         // 85
    }                                                                                                                  // 86
    EditableText._callback.call(self, 'beforeUpdate', doc);                                                            // 87
    // Important to send the id only, not the whole document ("self"),                                                 // 88
    // as this update is fired from all sorts of contexts, some of which are incomplete --                             // 89
    // this will force the transaction script to find the relevant document with its full context from the database    // 90
    tx.update(Collection, doc._id, modifier, {instant: true});                                                         // 91
    EditableText._callback.call(self, 'afterUpdate', Collection.findOne({_id: doc._id}));                              // 92
    if (this.objectTypeText || this.transactionUpdateText) {                                                           // 93
      tx.commit();                                                                                                     // 94
    }                                                                                                                  // 95
  }                                                                                                                    // 96
  else {                                                                                                               // 97
    EditableText._callback.call(self, 'beforeUpdate', doc);                                                            // 98
    Collection.update({_id: doc._id}, modifier);                                                                       // 99
    EditableText._callback.call(self, 'afterUpdate', Collection.findOne({_id: doc._id}));                              // 100
  }                                                                                                                    // 101
}                                                                                                                      // 102
                                                                                                                       // 103
EditableText.remove = function(Collection, doc) {                                                                      // 104
  var self = this;                                                                                                     // 105
  if (EditableText.useMethods && this.useMethod !== false || this.useMethod) {                                         // 106
    Meteor.call('_editableTextWrite', 'remove', this, null, EditableText._useTransaction(this), function (err, res) {  // 107
      if (err) {                                                                                                       // 108
        console.log(err);                                                                                              // 109
      }                                                                                                                // 110
    });                                                                                                                // 111
    return;                                                                                                            // 112
  }                                                                                                                    // 113
  if (EditableText._useTransaction(this)) {                                                                            // 114
    if (this.objectTypeText || this.transactionRemoveText) {                                                           // 115
      tx.start(this.transactionRemoveText || 'remove ' + this.objectTypeText);                                         // 116
    }                                                                                                                  // 117
    EditableText._callback.call(self,'beforeRemove',doc);                                                              // 118
    tx.remove(Collection,doc._id,{instant:true});                                                                      // 119
    EditableText._callback.call(self,'afterRemove',Collection.findOne({_id:doc._id}));                                 // 120
    if (this.objectTypeText || this.transactionRemoveText) {                                                           // 121
      tx.commit();                                                                                                     // 122
    }                                                                                                                  // 123
  }                                                                                                                    // 124
  else {                                                                                                               // 125
    EditableText._callback.call(self,'beforeRemove',doc);                                                              // 126
    Collection.remove({_id:doc._id});                                                                                  // 127
    EditableText._callback.call(self,'afterRemove',Collection.findOne({_id:doc._id}));                                 // 128
  }                                                                                                                    // 129
}                                                                                                                      // 130
                                                                                                                       // 131
                                                                                                                       // 132
// *********************************                                                                                   // 133
// INTERNAL PROPERTIES AND FUNCTIONS                                                                                   // 134
// *********************************                                                                                   // 135
                                                                                                                       // 136
EditableText._removeEntities = function (html) {                                                                       // 137
  return $.trim(html.replace(/&quot;/g, '"').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&nbsp;/g, ' '));     // 138
}                                                                                                                      // 139
                                                                                                                       // 140
/*EditableText._linkify = function (text) {                                                                            // 141
  return autolinker.link(text);                                                                                        // 142
}*/                                                                                                                    // 143
                                                                                                                       // 144
EditableText._useTransaction = function (data) {                                                                       // 145
  return !!(typeof tx !== 'undefined' && ((EditableText.useTransactions && data.useTransaction !== false) || data.useTransaction));    
}                                                                                                                      // 147
                                                                                                                       // 148
EditableText.__blockOkayEvent = false;                                                                                 // 149
EditableText.__blockEditEvent = false;                                                                                 // 150
                                                                                                                       // 151
Template.editableText.helpers({                                                                                        // 152
  context : function () {                                                                                              // 153
    return this.context || this.document || this.doc || this.object || this.obj || this.data || this.dataContext || Blaze._parentData(1);
  }                                                                                                                    // 155
});                                                                                                                    // 156
                                                                                                                       // 157
// Returns an event map that handles the "escape" and "return" keys and                                                // 158
// "blur" events on a text input (given by selector) and interprets them                                               // 159
// as "ok" or "cancel".                                                                                                // 160
                                                                                                                       // 161
EditableText._okCancelEvents = function (selector, callbacks, acceptEmpty) {                                           // 162
  var ok = callbacks.ok || function () {};                                                                             // 163
  var cancel = callbacks.cancel || function () {};                                                                     // 164
  var events = {};                                                                                                     // 165
  events['keydown '+selector+', focusout '+selector] =                                                                 // 166
    function (evt, tmpl) {                                                                                             // 167
      evt.stopImmediatePropagation();                                                                                  // 168
      var charCode = evt.which || evt.keyCode;                                                                         // 169
      var value = $.trim(String($(evt.target).val() || ""));                                                           // 170
      if (evt.type === "keydown") {                                                                                    // 171
        switch (charCode) {                                                                                            // 172
          case 27 : // escape = cancel                                                                                 // 173
            cancel.call(this, value, evt, tmpl);                                                                       // 174
            break;                                                                                                     // 175
        }                                                                                                              // 176
      }                                                                                                                // 177
      if (evt.type === "keydown" && (charCode === 13 && !(evt.shiftKey || (typeof this.noSaveOnReturn !== 'undefined' && this.noSaveOnReturn))) || (evt.type === "focusout" && ((typeof this.saveOnFocusout !== 'undefined' && this.saveOnFocusout) || (typeof this.saveOnFocusout === 'undefined' && EditableText.saveOnFocusout)))) {
        evt.preventDefault();                                                                                          // 179
        // blur/return/enter = ok/submit if non-empty                                                                  // 180
        if ((value || (this.type === 'number' && parseInt(value) === 0)) || this.removeEmpty || (this.acceptEmpty || acceptEmpty)) {
          if (!EditableText._blockOkayEvent) {                                                                         // 182
            EditableText._blockOkayEvent = true;                                                                       // 183
            ok.call(this, value, evt, tmpl); // EditableText._linkify(value)                                           // 184
            Meteor.defer(function () {                                                                                 // 185
              EditableText._blockOkayEvent = false;                                                                    // 186
            });                                                                                                        // 187
          }                                                                                                            // 188
          else { // In case this value is set to true for some strange reason                                          // 189
            EditableText._blockOkayEvent = false;                                                                      // 190
          }                                                                                                            // 191
        }                                                                                                              // 192
        else {                                                                                                         // 193
          cancel.call(this, value, evt, tmpl);                                                                         // 194
        }                                                                                                              // 195
      }                                                                                                                // 196
    };                                                                                                                 // 197
  return events;                                                                                                       // 198
};                                                                                                                     // 199
                                                                                                                       // 200
EditableText._activateInput = function (input, dontSelect) {                                                           // 201
  if (input !== null) {                                                                                                // 202
    input.focus();                                                                                                     // 203
    if (typeof dontSelect !== 'undefined' && dontSelect) {                                                             // 204
      return;                                                                                                          // 205
    }                                                                                                                  // 206
    input.select();                                                                                                    // 207
  }                                                                                                                    // 208
  else {                                                                                                               // 209
    console.log('Input was null');                                                                                     // 210
  }                                                                                                                    // 211
};                                                                                                                     // 212
                                                                                                                       // 213
EditableText._extractNumber = function (raw) {                                                                         // 214
  if (typeof raw !== 'undefined') {                                                                                    // 215
    var numbers = raw.match(/[0-9]+/);                                                                                 // 216
    if (numbers) {                                                                                                     // 217
      return parseInt(numbers[0], 10);                                                                                 // 218
    }                                                                                                                  // 219
  }                                                                                                                    // 220
  return 0;                                                                                                            // 221
}                                                                                                                      // 222
                                                                                                                       // 223
EditableText._makeUpdate = function (value, isEscape, evtType) {                                                       // 224
  // value has already been trimmed with $.trim()                                                                      // 225
  var currentValue = (this.editingValue || this.value) || EditableText._drillDown(this.context, this.field);           // 226
  var type = this.type || 'string';                                                                                    // 227
  var keepZero = false;                                                                                                // 228
  switch (type) {                                                                                                      // 229
    case 'number' :                                                                                                    // 230
	  if (value !== '') {                                                                                                 // 231
        var rawNewValue = EditableText._extractNumber(value);                                                          // 232
        var newValue = rawNewValue && parseInt(rawNewValue) || 0;                                                      // 233
		keepZero = true;                                                                                                     // 234
	  }                                                                                                                   // 235
	  else {                                                                                                              // 236
		var newValue = 0;                                                                                                    // 237
	  }                                                                                                                   // 238
	  if (currentValue !== undefined) {                                                                                   // 239
        currentValue = currentValue && parseInt(currentValue) || 0;                                                    // 240
	  }                                                                                                                   // 241
      break;                                                                                                           // 242
    default :                                                                                                          // 243
      var newValue = value.replace(/mml:/g, ""); // For cleaning up mathml pasted from msword                          // 244
      currentValue = _.isString(currentValue) && currentValue.replace(/<br \/>/g, "<br>") || '';                       // 245
	  currentValue = EditableText._removeEntities(currentValue);                                                          // 246
	  newValue = EditableText._removeEntities(newValue);                                                                  // 247
      break;                                                                                                           // 248
  }                                                                                                                    // 249
  var updatedValue = {};                                                                                               // 250
  updatedValue[this.field] = newValue; // console.log("newValue:",newValue); console.log("currentValue:",currentValue);
  // Sometimes we don't want the actual field's value, we want whatever was passed in to the template as the 'value' keyword to be used to compare against
  if (newValue !== currentValue || (!(newValue || (this.type === 'number' && newValue === 0 && keepZero)) && this.removeEmpty && !(this.acceptEmpty && evtType === 'focusout'))) {
    if (!(newValue || (this.type === 'number' && newValue === 0 && keepZero)) && this.removeEmpty && !(this.acceptEmpty && evtType === 'focusout')) {
      if ((isEscape || evtType === 'focusout') && (this.acceptEmpty || currentValue)) { // isEscape is an alternative for (isEscape || evtType === 'focusout') if we want to allow focusout to remove an item
        return;                                                                                                        // 256
      }                                                                                                                // 257
      EditableText.remove.call(this, Mongo.Collection.get(this.collection), this.context);                             // 258
    }                                                                                                                  // 259
    else if (!isEscape && (newValue !== currentValue) && ((newValue || (this.type === 'number' && newValue === 0)) || this.acceptEmpty || (this.wysiwyg && this.acceptEmpty !== false))) { // wysiwyg accepts empty by default unless explicitly told not to
      // Make the update                                                                                               // 261
      EditableText.update.call(this, Mongo.Collection.get(this.collection), this.context, {$set: updatedValue});       // 262
    }                                                                                                                  // 263
  }                                                                                                                    // 264
}                                                                                                                      // 265
                                                                                                                       // 266
// *******                                                                                                             // 267
// HELPERS                                                                                                             // 268
// *******                                                                                                             // 269
                                                                                                                       // 270
Template.editable_text_widget.helpers({                                                                                // 271
                                                                                                                       // 272
  value : function () {                                                                                                // 273
	var value = (this.editingValue !== 'undefined') ? this.editingValue : this.value;                                     // 274
    return (this.type === 'number' && value === 0) ? 0 : value || EditableText._drillDown(this.context, this.field);   // 275
  },                                                                                                                   // 276
                                                                                                                       // 277
  editing : function () {                                                                                              // 278
    return Blaze._templateInstance().selected.get();                                                                   // 279
  },                                                                                                                   // 280
                                                                                                                       // 281
  textarea : function () {                                                                                             // 282
    return (this.textarea && !this.wysiwyg) || (this.wysiwyg && !EditableText.wysiwyg);                                // 283
  },                                                                                                                   // 284
                                                                                                                       // 285
  isWysiwyg : function () {                                                                                            // 286
    return EditableText.wysiwyg && this.wysiwyg;                                                                       // 287
  },                                                                                                                   // 288
                                                                                                                       // 289
  wysiwygContent : function () {                                                                                       // 290
    var value = this.value || EditableText._drillDown(this.context, this.field);                                       // 291
    return value && new Spacebars.SafeString(value.replace(/\n/g, '<br>')) || "";                                      // 292
  },                                                                                                                   // 293
                                                                                                                       // 294
  inputValue : function () {                                                                                           // 295
	var val = (this.editingValue !== undefined) ? this.editingValue : this.value;                                         // 296
    var value = (this.type === 'number' && val === 0) ? 0 : val || EditableText._drillDown(this.context, this.field);  // 297
    return (this.type === 'number' && value === 0) ? 0 : value && value.toString() || "";                              // 298
  },                                                                                                                   // 299
                                                                                                                       // 300
  substitute : function (userCanNotEdit) {                                                                             // 301
    var substitute = !(this.value || EditableText._drillDown(this.context,this.field)) && ((userCanNotEdit) ? (this.emptyText && Spacebars.SafeString(this.emptyText.toString())) : (this.substitute && Spacebars.SafeString(this.substitute.toString())));
	return substitute;                                                                                                    // 303
  },                                                                                                                   // 304
                                                                                                                       // 305
  title : function () {                                                                                                // 306
    return this.title || ((this.eventType === 'dblclick') ? 'double click' : 'click') + ' to edit';                    // 307
  },                                                                                                                   // 308
                                                                                                                       // 309
  canEditText : function () {                                                                                          // 310
    var userCanEdit = EditableText.userCanEdit.call(this, this.context,Mongo.Collection.get(this.collection));         // 311
    return (typeof this.userCanEdit !== 'undefined') ? (this.userCanEdit && userCanEdit) : userCanEdit;                // 312
  },                                                                                                                   // 313
                                                                                                                       // 314
  content : function () {                                                                                              // 315
    var value = (typeof this.value !== 'undefined') ? this.value : EditableText._drillDown(this.context, this.field);  // 316
    var val = (_.isString(value)) ? (((typeof this.trustHtml !== 'undefined' && this.trustHtml || EditableText.trustHtml) || (this.wysiwyg && !EditableText.wysiwyg)) && new Spacebars.SafeString(value.replace(/\n/g, '<br>')) || value) : ((value || value === 0) ? value.toString() : "");
    return val;                                                                                                        // 318
  },                                                                                                                   // 319
                                                                                                                       // 320
  trustHtml : function () {                                                                                            // 321
    return typeof this.trustHtml !== 'undefined' && this.trustHtml || EditableText.trustHtml;                          // 322
  },                                                                                                                   // 323
                                                                                                                       // 324
  toolsPosition : function (pos) {                                                                                     // 325
    return this.toolbarPosition === pos;                                                                               // 326
  },                                                                                                                   // 327
                                                                                                                       // 328
  initOptions : function () {                                                                                          // 329
    var data = this;                                                                                                   // 330
	var derivedOptions = (data.derivedOptions) ? EditableText._callback.call(data, 'derivedOptions', data) : {};          // 331
	var opts = _.extend(data.options || {}, _.isObject(derivedOptions) && derivedOptions || {});                          // 332
    if (opts) {                                                                                                        // 333
      _.each(opts, function (value, key) {                                                                             // 334
        if (data[key] === undefined) {                                                                                 // 335
          data[key] = value;                                                                                           // 336
        }                                                                                                              // 337
      });                                                                                                              // 338
	  var context = opts.context || opts.doc || opts.document || opts.obj || opts.object || opts.data || opts.dataContext;
      if (context !== undefined) {                                                                                     // 340
        data.context = context;                                                                                        // 341
      }                                                                                                                // 342
    }                                                                                                                  // 343
	return data;                                                                                                          // 344
  },                                                                                                                   // 345
                                                                                                                       // 346
  controlTemplate : function () {                                                                                      // 347
	return this.editor && EditableText.editors[this.editor] && EditableText.editors[this.editor].template;                // 348
  },                                                                                                                   // 349
                                                                                                                       // 350
  controlData : function () {                                                                                          // 351
	return this;                                                                                                          // 352
  }                                                                                                                    // 353
                                                                                                                       // 354
});                                                                                                                    // 355
                                                                                                                       // 356
                                                                                                                       // 357
// ******                                                                                                              // 358
// EVENTS                                                                                                              // 359
// ******                                                                                                              // 360
                                                                                                                       // 361
Template.body.events({                                                                                                 // 362
  'click .editable-text-trigger, mousedown .editable-text-trigger, dblclick .editable-text-trigger' : function (evt) {
	if (!EditableText.__blockEditEvent) {                                                                                 // 364
      $(evt.currentTarget).find('.editable-text').trigger(evt.type);                                                   // 365
	}                                                                                                                     // 366
	else {                                                                                                                // 367
	  EditableText.__blockEditEvent = false;	                                                                             // 368
	}                                                                                                                     // 369
  }                                                                                                                    // 370
});                                                                                                                    // 371
                                                                                                                       // 372
EditableText.okCancelEvents = {};                                                                                      // 373
                                                                                                                       // 374
EditableText.okCancelEvents.ok = function (value, evt, tmpl) {                                                         // 375
  evt.stopImmediatePropagation();                                                                                      // 376
  evt.stopPropagation();                                                                                               // 377
  var isEscape = false;                                                                                                // 378
  EditableText._makeUpdate.call(this, value, isEscape, evt.type);                                                      // 379
  tmpl.selected.set(false);                                                                                            // 380
  EditableText._callback.call(this, 'onStopEditing', tmpl.data.context);                                               // 381
}                                                                                                                      // 382
                                                                                                                       // 383
EditableText.okCancelEvents.cancel = function (value, evt, tmpl) {                                                     // 384
  evt.stopImmediatePropagation();                                                                                      // 385
  // Check for removeEmpty update, in case a document has been auto inserted and user clicks escape                    // 386
  // But set the flag isEscape so regular updates are not made                                                         // 387
  var isEscape = true;                                                                                                 // 388
  EditableText._makeUpdate.call(this, value, isEscape);                                                                // 389
  tmpl.selected.set(false);                                                                                            // 390
  EditableText._callback.call(this, 'onStopEditing', tmpl.data.context);                                               // 391
}                                                                                                                      // 392
                                                                                                                       // 393
EditableText.editing_key_press = function(elem, inputClass) {                                                          // 394
  if (EditableText.editing_key_press.fakeEl === undefined) {                                                           // 395
    EditableText.editing_key_press.fakeEl = $('<span class="' + (inputClass || '') + '">').hide().appendTo(document.body);
  }                                                                                                                    // 397
  var el = $(elem);                                                                                                    // 398
  EditableText.editing_key_press.fakeEl.text(el.val());                                                                // 399
  var width = EditableText.editing_key_press.fakeEl.width() + 20;                                                      // 400
  el.width(width);                                                                                                     // 401
  el.css('min-width', width);                                                                                          // 402
}                                                                                                                      // 403
                                                                                                                       // 404
Template.editable_text_widget.events(EditableText._okCancelEvents('.wide-text-edit', EditableText.okCancelEvents));    // 405
Template.editable_text_widget.events({                                                                                 // 406
  'keyup .wide-text-edit' : function (evt) {                                                                           // 407
	if (this.editor) {                                                                                                    // 408
	  return;	                                                                                                            // 409
	}                                                                                                                     // 410
	if (this.autoResize) {                                                                                                // 411
	  EditableText.editing_key_press(evt.target, this.inputClass);	                                                       // 412
	}                                                                                                                     // 413
  }                                                                                                                    // 414
});                                                                                                                    // 415
Template.editable_text_widget.events(EditableText._okCancelEvents('.text-area-edit', EditableText.okCancelEvents));    // 416
Template.editable_text_widget.events({                                                                                 // 417
  'mousedown .editable-text, click .editable-text, dblclick .editable-text' : function (evt, tmpl) {                   // 418
	if (this.editor) {                                                                                                    // 419
	  return;	                                                                                                            // 420
	}                                                                                                                     // 421
	if (this.stopPropagation) {                                                                                           // 422
      evt.stopImmediatePropagation();                                                                                  // 423
      evt.stopPropagation();                                                                                           // 424
	}                                                                                                                     // 425
	EditableText.__blockEditEvent = true;                                                                                 // 426
    // This is the click event that opens the field for editing                                                        // 427
    var eventType = this.eventType || ((EditableText.wysiwyg && this.wysiwyg) ? 'mousedown' : 'click');                // 428
    if (eventType !== evt.type) {                                                                                      // 429
      return;                                                                                                          // 430
    }                                                                                                                  // 431
    var textarea = (this.textarea && !this.wysiwyg) || (this.wysiwyg && !EditableText.wysiwyg);                        // 432
    var wysiwyg = EditableText.wysiwyg && this.wysiwyg;                                                                // 433
    var obj = this.context;                                                                                            // 434
    var Collection = Mongo.Collection.get(this.collection);                                                            // 435
    if (this.autoInsert && obj && !obj._id && _.isObject(obj) && EditableText.userCanEdit.call(this, obj, Collection)) { // This is quite involved -- you need an object with all context info, but no _id field for auto-creation to occur
      if (typeof this.value !== 'undefined' && this.value !== obj[this.field]) {                                       // 437
        obj[this.field] = this.value;                                                                                  // 438
      }                                                                                                                // 439
      // Create an object                                                                                              // 440
      EditableText.insert.call(this, Collection, obj);                                                                 // 441
	  EditableText.__blockEditEvent = false;                                                                              // 442
      evt.stopImmediatePropagation();                                                                                  // 443
      evt.stopPropagation();                                                                                           // 444
      return;                                                                                                          // 445
    }                                                                                                                  // 446
    if (obj && !tmpl.selected.get()) {                                                                                 // 447
      if (EditableText.userCanEdit.call(this, obj, Collection)) {                                                      // 448
        // document.activeElement.blur(); // Make sure the focusout event fires first when switching editable text objects, so that the first one gets saved properly
        tmpl.selected.set(true);                                                                                       // 450
        Tracker.flush();                                                                                               // 451
        if (!wysiwyg) {                                                                                                // 452
          EditableText._activateInput(tmpl.$((textarea) ? 'textarea' :  'input'), this.dontSelectAll || false); // textarea
		  if (this.autoResize && !textarea) {                                                                                // 454
			EditableText.editing_key_press(tmpl.$('.wide-text-edit'), this.inputClass);                                         // 455
		  }                                                                                                                  // 456
        }                                                                                                              // 457
		EditableText._callback.call(this, 'onStartEditing', tmpl.data.context);                                              // 458
      }                                                                                                                // 459
    }                                                                                                                  // 460
	EditableText.__blockEditEvent = false;                                                                                // 461
  }                                                                                                                    // 462
});                                                                                                                    // 463
                                                                                                                       // 464
Template.editable_text_widget.created = function () {                                                                  // 465
  this.selected = new ReactiveVar();                                                                                   // 466
}                                                                                                                      // 467
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/babrahams_editable-text/lib/editable_text_common.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (typeof EditableText === 'undefined') {                                                                             // 1
  EditableText = {};                                                                                                   // 2
}                                                                                                                      // 3
                                                                                                                       // 4
                                                                                                                       // 5
// ******************************************                                                                          // 6
// CONFIG that affects BOTH CLIENT AND SERVER                                                                          // 7
// ******************************************                                                                          // 8
                                                                                                                       // 9
EditableText.userCanEdit = function(doc,Collection) {                                                                  // 10
  // e.g. return doc.user_id = Meteor.userId();                                                                        // 11
  return true;                                                                                                         // 12
}                                                                                                                      // 13
                                                                                                                       // 14
EditableText.useTransactions = (typeof tx !== 'undefined' && _.isObject(tx.Transactions)) ? true : false;              // 15
EditableText.clientControlsTransactions = false;                                                                       // 16
                                                                                                                       // 17
EditableText.maximumImageSize = 0; // Can't put image data in the editor by default                                    // 18
                                                                                                                       // 19
// This is the set of defaults for sanitizeHtml on the server (as set by the library itself)                           // 20
// Required on the client for consistency of filtering on the paste event                                              // 21
if (Meteor.isClient) {                                                                                                 // 22
  sanitizeHtml = {};                                                                                                   // 23
  sanitizeHtml.defaults = {                                                                                            // 24
    allowedTags: [ 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
    allowedAttributes: { a: [ 'href', 'name', 'target' ] },                                                            // 26
    selfClosing: [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' ],                           // 27
    allowedSchemes: [ 'http', 'https', 'ftp', 'mailto' ]                                                               // 28
  };                                                                                                                   // 29
}                                                                                                                      // 30
                                                                                                                       // 31
Meteor.startup(function () {                                                                                           // 32
  // The startup block is to allow apps to overwrite the sanitizeHtml defaults                                         // 33
  EditableText.allowedHtml = {                                                                                         // 34
	allowedTags: sanitizeHtml.defaults.allowedTags.concat(['sub', 'sup', 'font', 'u', 's', 'span']),                      // 35
	allowedAttributes: _.extend(sanitizeHtml.defaults.allowedAttributes, {                                                // 36
	  font : ['size', 'face'],                                                                                            // 37
	  div : ['align', 'style', 'class'],                                                                                  // 38
	  span: ['style', 'class'],                                                                                           // 39
	  table: ['style', 'class'],                                                                                          // 40
	  td : ['rowspan', 'colspan', 'style', 'class'],                                                                      // 41
	  a: ['href', 'target', 'class'],                                                                                     // 42
	  i: ['class']                                                                                                        // 43
	}),                                                                                                                   // 44
	allowedSchemes:['http', 'https', 'ftp', 'mailto']                                                                     // 45
  }                                                                                                                    // 46
});;                                                                                                                   // 47
                                                                                                                       // 48
                                                                                                                       // 49
// ******************************************                                                                          // 50
// Functions that are intended for use in app                                                                          // 51
// ******************************************                                                                          // 52
                                                                                                                       // 53
// Function for setting multiple config variable via a hash                                                            // 54
                                                                                                                       // 55
EditableText.config = function(config) {                                                                               // 56
  if (_.isObject(config)) {                                                                                            // 57
     _.each(config,function(val,key) {                                                                                 // 58
       if (_.contains(['userCanEdit','insert','update','remove'],key)) {                                               // 59
         if (_.isFunction(val)) {                                                                                      // 60
           EditableText[key] = val;                                                                                    // 61
         }                                                                                                             // 62
         else {                                                                                                        // 63
           throw new Meteor.Error(key + ' must be a function');                                                        // 64
         }                                                                                                             // 65
       }                                                                                                               // 66
       if (_.contains(['useTransactions','clientControlsTransactions','saveOnFocusout','trustHtml','useMethods'],key)) {
         if (_.isBoolean(val)) {                                                                                       // 68
           EditableText[key] = val;                                                                                    // 69
         }                                                                                                             // 70
         else {                                                                                                        // 71
           throw new Meteor.Error(key + ' must be a boolean');                                                         // 72
         }                                                                                                             // 73
       }                                                                                                               // 74
       if (_.contains(['collection2Options'], key)) {                                                                  // 75
         if (_.isObject(val)) {                                                                                        // 76
            EditableText[key] = val;                                                                                   // 77
         }                                                                                                             // 78
       }                                                                                                               // 79
     });                                                                                                               // 80
  }                                                                                                                    // 81
  else {                                                                                                               // 82
    throw new Meteor.Error('Editable text config object must be a hash of key value pairs. Config not changed.');      // 83
  }                                                                                                                    // 84
}                                                                                                                      // 85
                                                                                                                       // 86
// Function for registering callbacks                                                                                  // 87
                                                                                                                       // 88
EditableText.registerCallbacks = function(obj) {                                                                       // 89
  if (_.isObject(obj)) {                                                                                               // 90
    _.each(obj,function(val,key) {                                                                                     // 91
      if (_.isFunction(val)) {                                                                                         // 92
        EditableText._callbacks[key] = val;                                                                            // 93
      }                                                                                                                // 94
      else {                                                                                                           // 95
        throw new Meteor.Error('Callbacks need to be functions. You passed a ' + typeof(val) + '.');                   // 96
      }                                                                                                                // 97
    });                                                                                                                // 98
  }                                                                                                                    // 99
  else {                                                                                                               // 100
    throw new Meteor.Error('You must pass an object to register callbacks');                                           // 101
  }                                                                                                                    // 102
}                                                                                                                      // 103
                                                                                                                       // 104
                                                                                                                       // 105
// *********************************                                                                                   // 106
// INTERNAL PROPERTIES AND FUNCTIONS                                                                                   // 107
// *********************************                                                                                   // 108
                                                                                                                       // 109
EditableText._callbacks = {};                                                                                          // 110
                                                                                                                       // 111
EditableText._mutatedDocIsObject = function (mutatedDoc) {                                                             // 112
  return _.isObject(mutatedDoc) && !_.isArray(mutatedDoc) && !_.isDate(mutatedDoc) && !_.isFunction(mutatedDoc); // Just want real key-value pair type objects
}                                                                                                                      // 114
                                                                                                                       // 115
EditableText._callback = function(callback, doc, originalValue) {                                                      // 116
  // Note: 'beforeUpdate' and 'beforeInsertMultiple' callbacks are special-cased to use return values of any type, not just objects
  // originalValue is only set on beforeUpdate and beforeInsertMultiple callbacks. It is of the form { value: <actual original value> }
  // otherwise originalValue should be undefined                                                                       // 119
  callback = String(callback);                                                                                         // 120
  var self = this;                                                                                                     // 121
  var callbackRan = false;                                                                                             // 122
  if (self[callback] && _.isString(self[callback])) {                                                                  // 123
    var mutatedDoc = EditableText._executeCallback(self[callback], self, doc, originalValue);                          // 124
	callbackRan = true;                                                                                                   // 125
	var mutatedDocIsObject = EditableText._mutatedDocIsObject(mutatedDoc);                                                // 126
	if (!originalValue && !mutatedDocIsObject) {                                                                          // 127
	  throw new Meteor.Error('Wrong type returned', 'Your callback function "' + callback + '" returned a ' + typeof mutatedDoc + '. An object was expected.');	
	}                                                                                                                     // 129
    doc = (originalValue) ? mutatedDoc : mutatedDocIsObject && mutatedDoc || doc;                                      // 130
  }                                                                                                                    // 131
  if (originalValue) {                                                                                                 // 132
	// if the callback hasn't run, then the                                                                               // 133
	// doc is still the whole document,                                                                                   // 134
	// not the new value for the field                                                                                    // 135
	if (!callbackRan) {                                                                                                   // 136
	  doc = originalValue.value;	                                                                                         // 137
	}                                                                                                                     // 138
	if (callbackRan && mutatedDocIsObject && (_.has(doc, '$set') || _.has(doc, '$addToSet') || _.has(doc, '$push'))) {    // 139
	  return {modifier: doc};                                                                                             // 140
	}                                                                                                                     // 141
	else {                                                                                                                // 142
	  return {value: doc};                                                                                                // 143
	}                                                                                                                     // 144
  }                                                                                                                    // 145
  return doc;                                                                                                          // 146
}                                                                                                                      // 147
                                                                                                                       // 148
EditableText._executeCallback = function(callbackFunctionName, self, doc, originalValue) { // originalValue.value is the default to return if no updates have been made
  var mutatedDoc = (originalValue && {value: originalValue.value}) || doc;                                             // 150
  var callbackFunction = EditableText._callbacks[callbackFunctionName];                                                // 151
  if (callbackFunction && _.isFunction(callbackFunction)) {                                                            // 152
    callbackMutatedDoc = callbackFunction.call(self, doc, Mongo.Collection.get(self.collection), originalValue && originalValue.value || undefined, originalValue && originalValue.modifier || undefined);
	if (!_.isUndefined(callbackMutatedDoc)) {                                                                             // 154
	  mutatedDoc = callbackMutatedDoc;                                                                                    // 155
	}                                                                                                                     // 156
  }                                                                                                                    // 157
  else {                                                                                                               // 158
    throw new Meteor.Error('Callback not a function', 'Could not execute callback. Reason: ' + ((callbackFunction) ? '"' + callbackFunctionName + '" is not a function, it\'s a ' + typeof(callbackFunction) + '.' : 'no callback function called "' + callbackFunctionName + '" has been registered via EditableText.registerCallbacks.'));    
  }                                                                                                                    // 160
  return mutatedDoc;                                                                                                   // 161
}                                                                                                                      // 162
                                                                                                                       // 163
EditableText._drillDown = function(obj,key) {                                                                          // 164
  return Meteor._get.apply(null,[obj].concat(key.split('.')));                                                         // 165
}                                                                                                                      // 166
                                                                                                                       // 167
EditableText._allowedHtml = function() {                                                                               // 168
  var allowed = EditableText.allowedHtml;                                                                              // 169
  if (EditableText.maximumImageSize && _.isNumber(EditableText.maximumImageSize) && allowed) {                         // 170
    allowed.allowedTags.push('img');                                                                                   // 171
    allowed.allowedAttributes.img = ['src'];                                                                           // 172
    allowed.allowedSchemes.push('data');                                                                               // 173
  }                                                                                                                    // 174
  return allowed;                                                                                                      // 175
}                                                                                                                      // 176
                                                                                                                       // 177
                                                                                                                       // 178
// *************                                                                                                       // 179
// UPDATE METHOD                                                                                                       // 180
// *************                                                                                                       // 181
                                                                                                                       // 182
Meteor.methods({                                                                                                       // 183
  _editableTextWrite : function (action, data, modifier, transaction) {                                                // 184
    check(action, String);                                                                                             // 185
    check(data, Object);                                                                                               // 186
    check(data.collection, String);                                                                                    // 187
    check(data.context, (typeof FS !== "undefined" && FS.File) ? Match.OneOf(Object, FS.File) : Object);               // 188
    check(modifier, (action === 'update') ? Object : null);                                                            // 189
    check(transaction, Boolean);                                                                                       // 190
    check(data.objectTypeText, Match.OneOf(String, undefined));                                                        // 191
    var hasPackageCollection2 = !!Package['aldeed:collection2'];                                                       // 192
    var hasPackageSimpleSchema = !!Package['aldeed:simple-schema'];                                                    // 193
    var Collection = Mongo.Collection.get(data.collection);                                                            // 194
    var c2optionsHashRequired = hasPackageCollection2 && hasPackageSimpleSchema && _.isFunction(Collection.simpleSchema) && Collection._c2;
    if (Collection && EditableText.userCanEdit.call(data, data.context, Collection)) {                                 // 196
	  if (Meteor.isServer) {                                                                                              // 197
        if (_.isBoolean(EditableText.useTransactions) && !EditableText.clientControlsTransactions) {                   // 198
          transaction = EditableText.useTransactions;                                                                  // 199
        }                                                                                                              // 200
      }                                                                                                                // 201
      if (typeof tx === 'undefined') {                                                                                 // 202
        transaction = false;                                                                                           // 203
      }                                                                                                                // 204
      var setStatus = function (err, res) {                                                                            // 205
        data.status = {error: err, result: res};                                                                       // 206
      }                                                                                                                // 207
	  var options = (transaction) ? {instant: true} : {};                                                                 // 208
      if (c2optionsHashRequired) {                                                                                     // 209
        options = _.extend(options, EditableText.collection2options || {});                                            // 210
      }                                                                                                                // 211
      switch (action) {                                                                                                // 212
        case 'insert' :                                                                                                // 213
          if (Meteor.isServer) {                                                                                       // 214
            // run all string fields through sanitizeHtml                                                              // 215
            data.context = EditableText.sanitizeObject(data.context);                                                  // 216
          }                                                                                                            // 217
          if (transaction) {                                                                                           // 218
            if (data.objectTypeText || data.transactionInsertText) {                                                   // 219
              tx.start(data.transactionInsertText || 'add ' + data.objectTypeText);                                    // 220
            }                                                                                                          // 221
            data.context = EditableText._callback.call(data, 'beforeInsert', data.context) || data.context;            // 222
            var new_id = tx.insert(Collection, data.context, options, setStatus);                                      // 223
            EditableText._callback.call(data, 'afterInsert', Collection.findOne({_id: new_id}));                       // 224
            if (data.objectTypeText || data.transactionInsertText) {                                                   // 225
              tx.commit();                                                                                             // 226
            }                                                                                                          // 227
          }                                                                                                            // 228
          else {                                                                                                       // 229
            data.context = EditableText._callback.call(data,'beforeInsert',data.context) || data.context;              // 230
            var new_id = (c2optionsHashRequired) ? Collection.insert(data.context,options,setStatus) : Collection.insert(data.context, setStatus);
            EditableText._callback.call(data, 'afterInsert', Collection.findOne({_id: new_id}));                       // 232
          }                                                                                                            // 233
          return new_id;                                                                                               // 234
          break;                                                                                                       // 235
        case 'update' :                                                                                                // 236
          if (Meteor.isServer) {                                                                                       // 237
            var newValue, sanitized = false;                                                                           // 238
            if (modifier["$set"] && _.isString(modifier["$set"][data.field])) {                                        // 239
            // run through sanitizeHtml                                                                                // 240
              newValue = modifier["$set"][data.field] = EditableText.sanitizeString(modifier["$set"][data.field], data.wysiwyg || !!data.editor);
              sanitized = true;                                                                                        // 242
            }                                                                                                          // 243
            if (modifier["$set"] && _.isArray(modifier["$set"][data.field])) {                                         // 244
              newValue = modifier["$set"][data.field] = _.map(modifier["$set"][data.field], function (str) { return EditableText.sanitizeString(str, data.wysiwyg || !!data.editor); });
              sanitized = true;                                                                                        // 246
            }                                                                                                          // 247
            if (modifier["$set"] && _.isNumber(modifier["$set"][data.field])) {                                        // 248
              newValue = modifier["$set"][data.field];                                                                 // 249
              sanitized = true;                                                                                        // 250
            }                                                                                                          // 251
            if (modifier["$addToSet"] && _.isString(modifier["$addToSet"][data.field])) {                              // 252
              newValue = modifier["$addToSet"][data.field] = EditableText.sanitizeString(modifier["$addToSet"][data.field], data.wysiwyg || !!data.editor);
              sanitized = true;                                                                                        // 254
            }                                                                                                          // 255
            if (modifier["$push"] && _.isString(modifier["$push"][data.field])) {                                      // 256
              newValue = modifier["$push"][data.field] = EditableText.sanitizeString(modifier["$push"][data.field], data.wysiwyg || !!data.editor);
              sanitized = true;                                                                                        // 258
            }                                                                                                          // 259
            if (!sanitized) {                                                                                          // 260
              throw new Meteor.Error('Wrong data type sent for update');                                               // 261
			  return;                                                                                                           // 262
            }                                                                                                          // 263
          }                                                                                                            // 264
          else {                                                                                                       // 265
			var newValue;                                                                                                       // 266
            if (modifier["$set"]) { // Do we need a special case for data.type === 'number' ?                          // 267
			  newValue = modifier["$set"][data.field];                                                                          // 268
			}                                                                                                                   // 269
			else if (modifier["$addToSet"]) {                                                                                   // 270
			  newValue = modifier["$addToSet"][data.field];                                                                     // 271
			}                                                                                                                   // 272
			else if (modifier["$push"]) {                                                                                       // 273
			  newValue = modifier["$push"][data.field];                                                                         // 274
			}                                                                                                                   // 275
          }                                                                                                            // 276
          data.newValue = newValue;                                                                                    // 277
          data.oldValue = EditableText._drillDown(data.context, data.field);                                           // 278
		  var callbackModifier = function (modifier, key, val) {                                                             // 279
			/*if (val === undefined) {                                                                                          // 280
			  return modifier;                                                                                                  // 281
			}*/                                                                                                                 // 282
			var modifierTypes = ["$set", "$addToSet", "$push"];                                                                 // 283
			var modType = _.find(modifierTypes, function (mt) {                                                                 // 284
			  return _.has(modifier, mt);                                                                                       // 285
			});                                                                                                                 // 286
			if (modType) {                                                                                                      // 287
			  modifier[modType][key] = val;                                                                                     // 288
			}                                                                                                                   // 289
			return modifier;                                                                                                    // 290
		  }                                                                                                                  // 291
          if (transaction) {                                                                                           // 292
            if (data.transactionUpdateText || data.objectTypeText) {                                                   // 293
              tx.start(data.transactionUpdateText || 'update ' + data.objectTypeText);                                 // 294
            }                                                                                                          // 295
            var newVal = EditableText._callback.call(data,'beforeUpdate',data.context, {value: data.newValue, modifier: modifier}); // By setting the fourth parameter, we are expecting a value, not the whole doc, to be returned from the callback
			modifier = callbackModifier(newVal.modifier || modifier, data.field, newVal.value);                                 // 297
            tx.update(Collection,data.context._id, modifier, options, setStatus);                                      // 298
            EditableText._callback.call(data, 'afterUpdate', Collection.findOne({_id: data.context._id}));             // 299
            if (data.transactionUpdateText || data.objectTypeText) {                                                   // 300
              tx.commit();                                                                                             // 301
            }                                                                                                          // 302
          }                                                                                                            // 303
          else {                                                                                                       // 304
            var newVal = EditableText._callback.call(data, 'beforeUpdate', data.context, {value: data.newValue, modifier: modifier});
			modifier = callbackModifier(newVal.modifier || modifier, data.field, newVal.value);                                 // 306
            if (c2optionsHashRequired) {                                                                               // 307
              Collection.update({_id: data.context._id}, modifier, options, setStatus);                                // 308
            }                                                                                                          // 309
            else {                                                                                                     // 310
              Collection.update({_id: data.context._id}, modifier, setStatus);                                         // 311
            }                                                                                                          // 312
            EditableText._callback.call(data, 'afterUpdate', Collection.findOne({_id: data.context._id}));             // 313
          }                                                                                                            // 314
          break;                                                                                                       // 315
        case 'remove' :                                                                                                // 316
          if (transaction) {                                                                                           // 317
            if (data.transactionRemoveText || data.objectTypeText) {                                                   // 318
              tx.start(data.transactionRemoveText || 'remove ' + data.objectTypeText);                                 // 319
            }                                                                                                          // 320
            data.context = EditableText._callback.call(data, 'beforeRemove', data.context) || data.context;            // 321
            tx.remove(Collection, data.context._id, {instant: true}, setStatus);                                       // 322
            EditableText._callback.call(data, 'afterRemove', data.context);                                            // 323
            if (data.transactionRemoveText || data.objectTypeText) {                                                   // 324
              tx.commit();                                                                                             // 325
            }                                                                                                          // 326
          }                                                                                                            // 327
          else {                                                                                                       // 328
            data.context = EditableText._callback.call(data, 'beforeRemove', data.context) || data.context;            // 329
            Collection.remove({_id: data.context._id}, setStatus);                                                     // 330
            EditableText._callback.call(data, 'afterRemove', data.context);                                            // 331
          }                                                                                                            // 332
          break;                                                                                                       // 333
      }                                                                                                                // 334
    }                                                                                                                  // 335
  }                                                                                                                    // 336
});                                                                                                                    // 337
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['babrahams:editable-text'] = {}, {
  EditableText: EditableText,
  sanitizeHtml: sanitizeHtml
});

})();
