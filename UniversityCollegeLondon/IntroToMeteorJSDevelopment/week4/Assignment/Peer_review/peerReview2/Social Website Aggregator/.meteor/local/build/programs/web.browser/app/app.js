var require = meteorInstall({"client":{"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// client/template.main.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.body.addContent((function() {                                                                            // 2
  var view = this;                                                                                                // 3
  return "";                                                                                                      // 4
}));                                                                                                              // 5
Meteor.startup(Template.body.renderToDocument);                                                                   // 6
                                                                                                                  // 7
Template.__checkName("ApplicationLayout");                                                                        // 8
Template["ApplicationLayout"] = new Template("Template.ApplicationLayout", (function() {                          // 9
  var view = this;                                                                                                // 10
  return [ Blaze._TemplateWith(function() {                                                                       // 11
    return "navbar";                                                                                              // 12
  }, function() {                                                                                                 // 13
    return Spacebars.include(view.lookupTemplate("yield"));                                                       // 14
  }), "\n	  ", HTML.DIV({                                                                                         // 15
    "class": "container"                                                                                          // 16
  }, "\n		", Blaze._TemplateWith(function() {                                                                     // 17
    return "website_form";                                                                                        // 18
  }, function() {                                                                                                 // 19
    return Spacebars.include(view.lookupTemplate("yield"));                                                       // 20
  }), "\n		", Blaze._TemplateWith(function() {                                                                    // 21
    return "main";                                                                                                // 22
  }, function() {                                                                                                 // 23
    return Spacebars.include(view.lookupTemplate("yield"));                                                       // 24
  }), "\n		", Blaze._TemplateWith(function() {                                                                    // 25
    return "comments";                                                                                            // 26
  }, function() {                                                                                                 // 27
    return Spacebars.include(view.lookupTemplate("yield"));                                                       // 28
  }), "\n		", Spacebars.include(view.lookupTemplate("modal")), "\n	  ") ];                                        // 29
}));                                                                                                              // 30
                                                                                                                  // 31
Template.__checkName("modal");                                                                                    // 32
Template["modal"] = new Template("Template.modal", (function() {                                                  // 33
  var view = this;                                                                                                // 34
  return HTML.Raw('<div class="modal fade" id="modal-dialog" role="dialog">\n		<div class="modal-dialog">\n		  <div class="modal-content">\n			<div class="modal-header">\n			  <button type="button" class="close" data-dismiss="modal">&times;</button>\n			</div>\n			<div class="modal-body" id="dialog-body">\n			  You must be login first.\n			</div>\n		  </div>\n		</div>\n	  </div>');
}));                                                                                                              // 36
                                                                                                                  // 37
Template.__checkName("navbar");                                                                                   // 38
Template["navbar"] = new Template("Template.navbar", (function() {                                                // 39
  var view = this;                                                                                                // 40
  return HTML.NAV({                                                                                               // 41
    "class": "navbar navbar-default"                                                                              // 42
  }, HTML.Raw('\n	  <a class="navbar-brand" href="/">Social Website Aggregator</a>\n		'), HTML.DIV({              // 43
    "class": "container-fluid"                                                                                    // 44
  }, "\n		  ", HTML.Raw('<div class="navbar-header">\n		  </div>'), "\n		  ", HTML.FORM({                         // 45
    "class": "navbar-form navbar-right js-search-form"                                                            // 46
  }, "\n			", Spacebars.include(view.lookupTemplate("loginButtons")), "	\n			", HTML.Raw('<input type="text" id="search">'), "\n			", HTML.Raw('<button type="submit">Search</button>'), "\n		  "), "\n		"), "\n	  ");
}));                                                                                                              // 48
                                                                                                                  // 49
Template.__checkName("website_form");                                                                             // 50
Template["website_form"] = new Template("Template.website_form", (function() {                                    // 51
  var view = this;                                                                                                // 52
  return HTML.Raw('<a class="btn btn-default js-toggle-website-form" href="#">\n		  <span><strong>Add new</strong></span>\n	  </a>\n	  <div id="website_form" class="hidden_div">\n		<form class="js-save-website-form">\n		  <div class="form-group">\n			<label for="url">Site address</label>\n			<input type="text" class="form-control" id="url" placeholder="http://www.mysite.com">\n		  </div>\n		  <div class="form-group">\n			<label for="title">Title</label>\n			<input type="text" class="form-control" id="title" placeholder="Mysite">\n		  </div>\n		  <div class="form-group">\n			<label for="description">Description</label>\n			<input type="text" class="form-control" id="description" placeholder="This site seems very useful for ...">\n		  </div>\n\n		  <button type="submit" class="glyphicon glyphicon-send"></button>\n		</form>\n	  </div>');
}));                                                                                                              // 54
                                                                                                                  // 55
Template.__checkName("website_list");                                                                             // 56
Template["website_list"] = new Template("Template.website_list", (function() {                                    // 57
  var view = this;                                                                                                // 58
  return HTML.DIV("\n	  ", Blaze.Each(function() {                                                                // 59
    return Spacebars.call(view.lookup("websites"));                                                               // 60
  }, function() {                                                                                                 // 61
    return [ "\n		", HTML.DIV({                                                                                   // 62
      "class": "card"                                                                                             // 63
    }, "\n		  ", HTML.SPAN({                                                                                      // 64
      "class": "rank"                                                                                             // 65
    }, Blaze.View("lookup:@index", function() {                                                                   // 66
      return Spacebars.mustache(view.lookup("@index"));                                                           // 67
    })), "\n		  ", HTML.DIV({                                                                                     // 68
      "class": "column-middle"                                                                                    // 69
    }, "\n			", HTML.A({                                                                                          // 70
      href: "#",                                                                                                  // 71
      "class": "btn btn-success js-upvote"                                                                        // 72
    }, "\n			  ", HTML.SPAN({                                                                                     // 73
      "class": "glyphicon glyphicon-hand-up",                                                                     // 74
      "aria-hidden": "true"                                                                                       // 75
    }), "\n			"), "\n			", HTML.SPAN(Blaze.If(function() {                                                        // 76
      return Spacebars.call(view.lookup("rating"));                                                               // 77
    }, function() {                                                                                               // 78
      return Blaze.View("lookup:rating", function() {                                                             // 79
        return Spacebars.mustache(view.lookup("rating"));                                                         // 80
      });                                                                                                         // 81
    }, function() {                                                                                               // 82
      return "0";                                                                                                 // 83
    })), "\n			", HTML.A({                                                                                        // 84
      href: "#",                                                                                                  // 85
      "class": "btn btn-danger js-downvote"                                                                       // 86
    }, "\n			  ", HTML.SPAN({                                                                                     // 87
      "class": "glyphicon glyphicon-hand-down",                                                                   // 88
      "aria-hidden": "true"                                                                                       // 89
    }), "\n			"), "\n		  "), "\n		  ", HTML.DIV({                                                                 // 90
      "class": "text-left"                                                                                        // 91
    }, "\n			", HTML.P(HTML.A({                                                                                   // 92
      href: function() {                                                                                          // 93
        return [ "/site/", Spacebars.mustache(view.lookup("_id")) ];                                              // 94
      }                                                                                                           // 95
    }, Blaze.View("lookup:title", function() {                                                                    // 96
      return Spacebars.mustache(view.lookup("title"));                                                            // 97
    })), " ", HTML.A({                                                                                            // 98
      href: function() {                                                                                          // 99
        return Spacebars.mustache(view.lookup("url"));                                                            // 100
      }                                                                                                           // 101
    }, HTML.CharRef({                                                                                             // 102
      html: "&gt;",                                                                                               // 103
      str: ">"                                                                                                    // 104
    }), HTML.CharRef({                                                                                            // 105
      html: "&gt;",                                                                                               // 106
      str: ">"                                                                                                    // 107
    }))), "\n			", HTML.P(Blaze.View("lookup:description", function() {                                           // 108
      return Spacebars.mustache(view.lookup("description"));                                                      // 109
    })), "\n			", HTML.P({                                                                                        // 110
      "class": "tagline"                                                                                          // 111
    }, "sent ", Blaze.View("lookup:formatDate", function() {                                                      // 112
      return Spacebars.mustache(view.lookup("formatDate"), view.lookup("createdOn"));                             // 113
    }), " by ", Blaze.If(function() {                                                                             // 114
      return Spacebars.call(view.lookup("createdBy"));                                                            // 115
    }, function() {                                                                                               // 116
      return Blaze.View("lookup:createdBy", function() {                                                          // 117
        return Spacebars.mustache(view.lookup("createdBy"));                                                      // 118
      });                                                                                                         // 119
    }, function() {                                                                                               // 120
      return "not registered";                                                                                    // 121
    })), "\n		  "), "\n		"), "\n	  " ];                                                                           // 122
  }), "\n	  ");                                                                                                   // 123
}));                                                                                                              // 124
                                                                                                                  // 125
Template.__checkName("website_detail");                                                                           // 126
Template["website_detail"] = new Template("Template.website_detail", (function() {                                // 127
  var view = this;                                                                                                // 128
  return [ HTML.H2(HTML.A({                                                                                       // 129
    href: function() {                                                                                            // 130
      return Spacebars.mustache(view.lookup("url"));                                                              // 131
    }                                                                                                             // 132
  }, Blaze.View("lookup:title", function() {                                                                      // 133
    return Spacebars.mustache(view.lookup("title"));                                                              // 134
  }))), "\n	  ", HTML.DIV({                                                                                       // 135
    "class": "site-detail"                                                                                        // 136
  }, "\n		", HTML.P({                                                                                             // 137
    "class": "tagline"                                                                                            // 138
  }, "sent ", Blaze.View("lookup:formatDate", function() {                                                        // 139
    return Spacebars.mustache(view.lookup("formatDate"), view.lookup("createdOn"));                               // 140
  }), " by ", Blaze.If(function() {                                                                               // 141
    return Spacebars.call(view.lookup("createdBy"));                                                              // 142
  }, function() {                                                                                                 // 143
    return Blaze.View("lookup:createdBy", function() {                                                            // 144
      return Spacebars.mustache(view.lookup("createdBy"));                                                        // 145
    });                                                                                                           // 146
  }, function() {                                                                                                 // 147
    return "not registered";                                                                                      // 148
  })), "\n		", HTML.P(Blaze.View("lookup:description", function() {                                               // 149
    return Spacebars.mustache(view.lookup("description"));                                                        // 150
  })), "\n	  "), "\n	  ", HTML.DIV({                                                                              // 151
    id: "comment-form",                                                                                           // 152
    "class": "card"                                                                                               // 153
  }, "\n		", HTML.Raw("<h3>Post your comment...</h3>"), "\n		", HTML.FORM({                                       // 154
    "class": "js-save-comment-form"                                                                               // 155
  }, "\n		  ", HTML.DIV({                                                                                         // 156
    "class": "form-group"                                                                                         // 157
  }, "\n			", HTML.TEXTAREA({                                                                                     // 158
    id: "comment",                                                                                                // 159
    "class": "form-control",                                                                                      // 160
    placeholder: "..here."                                                                                        // 161
  }), "\n		  "), "\n		  ", HTML.Raw('<button type="submit" class="glyphicon glyphicon-send"></button>'), "\n		"), "\n	  ") ];
}));                                                                                                              // 163
                                                                                                                  // 164
Template.__checkName("website_comments");                                                                         // 165
Template["website_comments"] = new Template("Template.website_comments", (function() {                            // 166
  var view = this;                                                                                                // 167
  return HTML.DIV({                                                                                               // 168
    "class": "comments card"                                                                                      // 169
  }, HTML.Raw("\n		<h3>Comments:</h3>\n		"), Blaze.Each(function() {                                              // 170
    return Spacebars.call(view.lookup("comments"));                                                               // 171
  }, function() {                                                                                                 // 172
    return [ "\n		", HTML.DIV({                                                                                   // 173
      "class": "comment"                                                                                          // 174
    }, "\n		  ", HTML.P({                                                                                         // 175
      "class": "tagline"                                                                                          // 176
    }, "sent ", Blaze.View("lookup:formatDate", function() {                                                      // 177
      return Spacebars.mustache(view.lookup("formatDate"), view.lookup("createdOn"));                             // 178
    }), " by ", Blaze.If(function() {                                                                             // 179
      return Spacebars.call(view.lookup("createdBy"));                                                            // 180
    }, function() {                                                                                               // 181
      return Blaze.View("lookup:createdBy", function() {                                                          // 182
        return Spacebars.mustache(view.lookup("createdBy"));                                                      // 183
      });                                                                                                         // 184
    }, function() {                                                                                               // 185
      return "not registered";                                                                                    // 186
    })), "\n		  ", HTML.P(Blaze.View("lookup:comment", function() {                                               // 187
      return Spacebars.mustache(view.lookup("comment"));                                                          // 188
    })), "\n		"), "\n		" ];                                                                                       // 189
  }), "\n	  ");                                                                                                   // 190
}));                                                                                                              // 191
                                                                                                                  // 192
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// client/main.js                                                                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
/// routing                                                                                                       //
Router.configure({                                                                                                // 2
    layoutTemplate: 'ApplicationLayout'                                                                           // 3
});                                                                                                               // 2
                                                                                                                  //
Router.route('/', function () {                                                                                   // 6
    this.render('navbar', { to: 'navbar' });                                                                      // 7
    this.render('website_form', { to: 'website_form' });                                                          // 8
    this.render('website_list', { to: 'main', data: { websites: Websites.find({}, { sort: { rating: -1 } }) } });
});                                                                                                               // 10
                                                                                                                  //
Router.route('/site/:_id', function () {                                                                          // 12
    this.render('navbar', { to: 'navbar' });                                                                      // 13
    this.render('website_detail', { to: 'main', data: Websites.findOne({ _id: this.params._id }) });              // 14
    this.render('website_comments', { to: 'comments', data: { comments: Comments.find({ website_id: this.params._id }) } });
});                                                                                                               // 16
                                                                                                                  //
Router.route('/search/:_query', function () {                                                                     // 18
    var query = this.params._query.toLowerCase();                                                                 // 19
    var search_result = [];                                                                                       // 20
    var websites = Websites.find().fetch();                                                                       // 21
    for (var i in meteorBabelHelpers.sanitizeForInObject(websites)) {                                             // 22
        if (websites[i].title.toLowerCase().search(query) >= 0 || websites[i].description.toLowerCase().search(query) >= 0) {
            search_result.push(websites[i]);                                                                      // 24
        }                                                                                                         // 25
    }                                                                                                             // 26
    console.log(search_result);                                                                                   // 27
    this.render('navbar', { to: 'navbar' });                                                                      // 28
    this.render('website_list', { to: 'main', data: { websites: search_result } });                               // 29
});                                                                                                               // 30
                                                                                                                  //
Template.registerHelper('formatDate', function (date) {                                                           // 32
    return date.toLocaleDateString();                                                                             // 33
});                                                                                                               // 34
                                                                                                                  //
/// acounts config                                                                                                //
Accounts.ui.config({                                                                                              // 37
    passwordSignupFields: "EMAIL"                                                                                 // 38
});                                                                                                               // 37
                                                                                                                  //
Template.website_list.events({                                                                                    // 41
    "click .js-upvote": function () {                                                                             // 42
        function clickJsUpvote(event) {                                                                           // 42
            var website_id = this._id;                                                                            // 43
            console.log("Up voting website with id " + website_id);                                               // 44
            old_rating = Websites.findOne({ _id: website_id }).rating;                                            // 45
            if (old_rating == undefined) {                                                                        // 46
                old_rating = 0;                                                                                   // 47
            }                                                                                                     // 48
            console.log("Site value is " + old_rating);                                                           // 49
            if (Meteor.user()) {                                                                                  // 50
                Websites.update({ _id: website_id }, { $set: { rating: old_rating + 1 } });                       // 51
            } else {                                                                                              // 52
                $('#modal-dialog').modal('show');                                                                 // 54
            }                                                                                                     // 55
                                                                                                                  //
            return false;                                                                                         // 57
        }                                                                                                         // 58
                                                                                                                  //
        return clickJsUpvote;                                                                                     // 42
    }(),                                                                                                          // 42
    "click .js-downvote": function () {                                                                           // 59
        function clickJsDownvote(event) {                                                                         // 59
            var website_id = this._id;                                                                            // 60
            console.log("Down voting website with id " + website_id);                                             // 61
                                                                                                                  //
            old_rating = Websites.findOne({ _id: website_id }).rating;                                            // 63
            if (old_rating == undefined) {                                                                        // 64
                old_rating = 0;                                                                                   // 65
            }                                                                                                     // 66
            console.log("Site value is " + old_rating);                                                           // 67
            if (Meteor.user()) {                                                                                  // 68
                Websites.update({ _id: website_id }, { $set: { rating: old_rating - 1 } });                       // 69
            } else {                                                                                              // 70
                $('#modal-dialog').modal('show');                                                                 // 72
            }                                                                                                     // 73
                                                                                                                  //
            return false;                                                                                         // 75
        }                                                                                                         // 76
                                                                                                                  //
        return clickJsDownvote;                                                                                   // 59
    }()                                                                                                           // 59
});                                                                                                               // 41
                                                                                                                  //
Template.website_form.events({                                                                                    // 79
    "click .js-toggle-website-form": function () {                                                                // 80
        function clickJsToggleWebsiteForm(event) {                                                                // 80
            $("#website_form").toggle('slow');                                                                    // 81
        }                                                                                                         // 82
                                                                                                                  //
        return clickJsToggleWebsiteForm;                                                                          // 80
    }(),                                                                                                          // 80
    "submit .js-save-website-form": function () {                                                                 // 83
        function submitJsSaveWebsiteForm(event) {                                                                 // 83
            var url = event.target.url.value;                                                                     // 84
            console.log("The url they entered is: " + url);                                                       // 85
                                                                                                                  //
            if (Meteor.user()) {                                                                                  // 87
                Websites.insert({                                                                                 // 88
                    url: event.target.url.value,                                                                  // 89
                    title: event.target.title.value,                                                              // 90
                    description: event.target.description.value,                                                  // 91
                    createdBy: Meteor.user().username,                                                            // 92
                    createdOn: new Date()                                                                         // 93
                });                                                                                               // 88
            } else {                                                                                              // 95
                $('#modal-dialog').modal('show');                                                                 // 97
            }                                                                                                     // 98
                                                                                                                  //
            $("#website_form").toggle('slow');                                                                    // 100
                                                                                                                  //
            return false;                                                                                         // 102
        }                                                                                                         // 103
                                                                                                                  //
        return submitJsSaveWebsiteForm;                                                                           // 83
    }()                                                                                                           // 83
});                                                                                                               // 79
                                                                                                                  //
Template.website_detail.events({                                                                                  // 106
    "submit .js-save-comment-form": function () {                                                                 // 107
        function submitJsSaveCommentForm(event) {                                                                 // 107
            var website_id = this._id;                                                                            // 108
            if (Meteor.user()) {                                                                                  // 109
                console.log(this._id);                                                                            // 110
                Comments.insert({                                                                                 // 111
                    website_id: website_id,                                                                       // 112
                    comment: event.target.comment.value,                                                          // 113
                    createdBy: Meteor.user().username,                                                            // 114
                    createdOn: new Date()                                                                         // 115
                });                                                                                               // 111
            } else {                                                                                              // 117
                $('#modal-dialog').modal('show');                                                                 // 119
            }                                                                                                     // 120
                                                                                                                  //
            return false;                                                                                         // 122
        }                                                                                                         // 123
                                                                                                                  //
        return submitJsSaveCommentForm;                                                                           // 107
    }()                                                                                                           // 107
                                                                                                                  //
});                                                                                                               // 106
                                                                                                                  //
Template.navbar.events({                                                                                          // 127
    "submit .js-search-form": function () {                                                                       // 128
        function submitJsSearchForm(event) {                                                                      // 128
            console.log('/search/' + event.target.search.value);                                                  // 129
            Router.go('/search/' + event.target.search.value);                                                    // 130
            return false;                                                                                         // 131
        }                                                                                                         // 132
                                                                                                                  //
        return submitJsSearchForm;                                                                                // 128
    }()                                                                                                           // 128
});                                                                                                               // 127
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"collections.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/collections.js                                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Websites = new Mongo.Collection("websites");                                                                      // 1
                                                                                                                  //
Comments = new Mongo.Collection("Comments");                                                                      // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./lib/collections.js");
require("./client/main.js");