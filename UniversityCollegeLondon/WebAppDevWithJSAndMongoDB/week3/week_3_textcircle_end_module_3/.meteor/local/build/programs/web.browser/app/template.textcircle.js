(function(){
Template.body.addContent((function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("navbar")), "\n\n	", HTML.DIV({
    "class": "container top-margin"
  }, "\n\n    ", HTML.DIV({
    "class": "row"
  }, "\n      ", HTML.DIV({
    "class": "col-md-12"
  }, "\n          ", Spacebars.include(view.lookupTemplate("docMeta")), "\n      "), "\n    "), "\n\n    ", HTML.DIV({
    "class": "row"
  }, "\n      ", HTML.DIV({
    "class": "col-md-12"
  }, "\n          ", Spacebars.include(view.lookupTemplate("editingUsers")), "\n      "), "\n    "), "\n\n    ", HTML.DIV({
    "class": "row"
  }, "\n      ", HTML.DIV({
    "class": "col-md-6"
  }, "\n          ", Spacebars.include(view.lookupTemplate("editor")), "\n      "), "\n      ", HTML.DIV({
    "class": "col-md-6"
  }, "\n        ", Spacebars.include(view.lookupTemplate("viewer")), "\n      "), "\n    "), "\n	") ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("navbar");
Template["navbar"] = new Template("Template.navbar", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default navbar-fixed-top"
  }, "\n      ", HTML.DIV({
    "class": "container"
  }, "\n        ", HTML.Raw('<a class="navbar-brand" href="#">TextCircle</a>'), "\n        ", HTML.UL({
    "class": "nav navbar-nav"
  }, "\n          ", HTML.Raw('<li>\n            <a href="#" class="js-add-doc">\n              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>\n              new document\n            </a> \n          </li>'), "\n\n\n          ", HTML.Raw("<!-- drop down list -->"), "\n          ", HTML.LI({
    "class": "dropdown"
  }, "\n          ", HTML.Raw('<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Documents <span class="caret"></span></a>'), "\n\n          ", HTML.UL({
    "class": "dropdown-menu"
  }, "\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("documents"));
  }, function() {
    return [ "\n            ", HTML.LI(HTML.A({
      href: "#",
      "class": "js-load-doc"
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    }))), "\n            " ];
  }), "\n          "), "\n        "), "\n          ", HTML.Raw("<!-- end drop down list -->"), "\n        "), "\n        ", HTML.DIV({
    "class": "nav navbar-right"
  }, "\n        ", HTML.DIV({
    "class": "navbar-text"
  }, "\n            ", Blaze._TemplateWith(function() {
    return {
      align: Spacebars.call("right")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("loginButtons"));
  }), "\n\n        "), "   \n        "), "       \n      "), HTML.Raw(" <!-- / nav container -->\n  "));
}));

Template.__checkName("editor");
Template["editor"] = new Template("Template.editor", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      docid: Spacebars.call(view.lookup("docid")),
      onRender: Spacebars.call(view.lookup("config")),
      id: Spacebars.call("editor"),
      mode: Spacebars.call("javascript")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("sharejsCM"));
  });
}));

Template.__checkName("viewer");
Template["viewer"] = new Template("Template.viewer", (function() {
  var view = this;
  return HTML.Raw('<iframe id="viewer_iframe">\n  </iframe>');
}));

Template.__checkName("docMeta");
Template["docMeta"] = new Template("Template.docMeta", (function() {
  var view = this;
  return Spacebars.With(function() {
    return Spacebars.call(view.lookup("document"));
  }, function() {
    return [ "\n  ", HTML.SPAN({
      "class": "h1"
    }, " ", Blaze._TemplateWith(function() {
      return {
        collection: Spacebars.call("documents"),
        field: Spacebars.call("title")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("editableText"));
    })), "\n  ", Blaze.If(function() {
      return Spacebars.call(view.lookup("canEdit"));
    }, function() {
      return [ "\n  ", HTML.DIV({
        "class": "checkbox"
      }, "\n      ", HTML.LABEL("\n        ", HTML.INPUT({
        type: "checkbox",
        "class": "js-tog-private"
      }), "Private\n      "), "\n  "), "\n  " ];
    }), "\n\n  " ];
  });
}));

Template.__checkName("editingUsers");
Template["editingUsers"] = new Template("Template.editingUsers", (function() {
  var view = this;
  return [ "Editors:\n  ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("users"));
  }, function() {
    return [ "\n  ", HTML.SPAN({
      "class": "label label-success"
    }, Blaze.View("lookup:firstname", function() {
      return Spacebars.mustache(view.lookup("firstname"));
    }), " "), "\n   \n  " ];
  }) ];
}));

}).call(this);
