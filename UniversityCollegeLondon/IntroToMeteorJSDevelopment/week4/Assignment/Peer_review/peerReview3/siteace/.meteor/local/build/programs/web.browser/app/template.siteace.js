(function(){
Template.body.addContent((function() {
  var view = this;
  return "";
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("ApplicationLayout");
Template["ApplicationLayout"] = new Template("Template.ApplicationLayout", (function() {
  var view = this;
  return [ HTML.Raw("<!-- navbar  - you will be putting the login functions here -->"), Blaze._TemplateWith(function() {
    return "navbar";
  }, function() {
    return Spacebars.include(view.lookupTemplate("yield"));
  }), "\n    ", HTML.DIV({
    "class": "container",
    id: "main"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-md-8"
  }, "\n                ", HTML.Raw("<h3>Listed sites:</h3>"), " ", Blaze._TemplateWith(function() {
    return "form";
  }, function() {
    return Spacebars.include(view.lookupTemplate("yield"));
  }), " ", Blaze._TemplateWith(function() {
    return "main";
  }, function() {
    return Spacebars.include(view.lookupTemplate("yield"));
  }), " "), "\n            ", HTML.DIV({
    "class": "col-md-4 well"
  }, "\n                ", HTML.Raw("<h3>Search for a site:</h3>"), " ", Spacebars.include(view.lookupTemplate("searchBox")), " "), "\n        "), "\n    ") ];
}));

Template.__checkName("navbar");
Template["navbar"] = new Template("Template.navbar", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default"
  }, "\n        ", HTML.DIV({
    "class": "container-fluid"
  }, "\n            ", HTML.Raw('<div class="navbar-header">\n                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="/">Site Ace <span class="glyphicon glyphicon-link" aria-hidden="true"></span></a> </div>'), "\n            ", HTML.DIV({
    "class": "collapse navbar-collapse",
    id: "bs-example-navbar-collapse-1"
  }, "\n                ", HTML.UL({
    "class": "nav navbar-nav"
  }, "\n                    ", HTML.Raw('<li class="active"><a href="/">Home <span class="sr-only">(current)</span></a></li>'), "\n                    ", HTML.LI("\n                        ", HTML.BUTTON({
    "class": "btn btn-link btn-block btn-login"
  }, HTML.Raw('<span class="glyphicon glyphicon-user" aria-hidden="true"></span>'), " ", Spacebars.include(view.lookupTemplate("loginButtons"))), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    ");
}));

Template.__checkName("website_form");
Template["website_form"] = new Template("Template.website_form", (function() {
  var view = this;
  return [ Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n    ", HTML.A({
      "class": "btn btn-default js-toggle-website-form",
      href: "#"
    }, " ", HTML.SPAN({
      "class": "glyphicon glyphicon-plus",
      "aria-hidden": "true"
    }), " "), " " ];
  }), HTML.Raw('\n    <div id="website_form" class="hidden_div">\n        <form class="js-save-website-form">\n            <div class="form-group">\n                <label for="url">Site address</label>\n                <input type="text" class="form-control" id="url" placeholder="http://www.mysite.com"> </div>\n            <div class="form-group">\n                <label for="title">Title</label>\n                <input type="text" class="form-control" id="title" placeholder="Enter site title"> </div>\n            <div class="form-group">\n                <label for="description">Description</label>\n                <input type="text" class="form-control" id="description" placeholder="I found this site really useful for ..."> </div>\n            <button type="submit" class="btn btn-default js-submit">Submit</button>\n        </form>\n    </div>') ];
}));

Template.__checkName("website_list");
Template["website_list"] = new Template("Template.website_list", (function() {
  var view = this;
  return HTML.OL(" ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("websites"));
  }, function() {
    return [ " ", Spacebars.include(view.lookupTemplate("website_item")), " " ];
  }), " ");
}));

Template.__checkName("website_item");
Template["website_item"] = new Template("Template.website_item", (function() {
  var view = this;
  return HTML.LI(" ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("_id"));
    }
  }, Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n        ", HTML.P(" ", Blaze.View("lookup:description", function() {
    return Spacebars.mustache(view.lookup("description"));
  }), " "), HTML.Raw('\n        <a href="#" class="btn btn-default js-upvote"> <span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span> </a>\n        <a href="#" class="btn btn-default js-downvote"> <span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span> </a>\n        '), HTML.P({
    "class": "website-meta"
  }, "Added: ", Blaze.View("lookup:formattedDate", function() {
    return Spacebars.mustache(view.lookup("formattedDate"));
  }), " | ", HTML.SPAN({
    "class": "js-votes-up"
  }, Blaze.View("lookup:up", function() {
    return Spacebars.mustache(view.lookup("up"));
  })), "↑, ", HTML.SPAN({
    "class": "js-votes-down"
  }, Blaze.View("lookup:down", function() {
    return Spacebars.mustache(view.lookup("down"));
  })), "↓"), HTML.Raw("\n        <!-- you will be putting your up and down vote buttons in here! -->\n    "));
}));

Template.__checkName("searchBox");
Template["searchBox"] = new Template("Template.searchBox", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      index: Spacebars.call(view.lookup("websitesIndex"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("EasySearch"), "Input"));
    });
  }), HTML.Raw("\n    <br>\n    <br>\n    <h4>Results:</h4>\n    <br> "), Blaze._TemplateWith(function() {
    return {
      index: Spacebars.call(view.lookup("websitesIndex"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("EasySearch"), "Each"));
    }, function() {
      return [ "\n    ", HTML.H5({
        "class": "list-group-item-heading"
      }, Blaze.View("lookup:title", function() {
        return Spacebars.mustache(view.lookup("title"));
      })), "\n    ", HTML.P(HTML.A({
        href: function() {
          return Spacebars.mustache(view.lookup("url"));
        }
      }, "Go to site")), " " ];
    });
  }) ];
}));

Template.__checkName("website_detail");
Template["website_detail"] = new Template("Template.website_detail", (function() {
  var view = this;
  return [ HTML.H1(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("url"));
    }
  }, Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  }))), "\n    ", HTML.P(" ", Blaze.View("lookup:description", function() {
    return Spacebars.mustache(view.lookup("description"));
  }), " "), HTML.Raw('\n    <a href="#" class="btn btn-default js-upvote"> <span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span> </a>\n    <a href="#" class="btn btn-default js-downvote"> <span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span> </a>\n    '), HTML.P({
    "class": "website-meta"
  }, "Votes: ", HTML.SPAN({
    "class": "js-votes-up"
  }, Blaze.View("lookup:up", function() {
    return Spacebars.mustache(view.lookup("up"));
  })), "↑, ", HTML.SPAN({
    "class": "js-votes-down"
  }, Blaze.View("lookup:down", function() {
    return Spacebars.mustache(view.lookup("down"));
  })), "↓"), " ", Spacebars.include(view.lookupTemplate("comments_list")), " ", Spacebars.include(view.lookupTemplate("comment_item")), " ", Spacebars.include(view.lookupTemplate("comment_form")) ];
}));

Template.__checkName("comments_list");
Template["comments_list"] = new Template("Template.comments_list", (function() {
  var view = this;
  return [ HTML.Raw("<h3>Comments</h3>\n    "), HTML.OL(" ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("comments"));
  }, function() {
    return [ " ", Spacebars.include(view.lookupTemplate("comment_item")), " " ];
  }), " ") ];
}));

Template.__checkName("comment_item");
Template["comment_item"] = new Template("Template.comment_item", (function() {
  var view = this;
  return HTML.LI(" ", Blaze.View("lookup:comment", function() {
    return Spacebars.mustache(view.lookup("comment"));
  }), "\n        ", HTML.P({
    "class": "comment-meta"
  }, Blaze.View("lookup:formattedDate", function() {
    return Spacebars.mustache(view.lookup("formattedDate"));
  }), " by ", Blaze.View("lookup:getUser", function() {
    return Spacebars.mustache(view.lookup("getUser"), view.lookup("user"));
  })), "\n    ");
}));

Template.__checkName("comment_form");
Template["comment_form"] = new Template("Template.comment_form", (function() {
  var view = this;
  return HTML.Raw('<div id="comment_form">\n        <form class="js-save-comment-form">\n            <div class="form-group">\n                <input type="text" class="form-control" id="comment" placeholder="Type your comment here..."> </div>\n            <button type="submit" class="btn btn-default">Submit</button>\n        </form>\n    </div>');
}));

}).call(this);
