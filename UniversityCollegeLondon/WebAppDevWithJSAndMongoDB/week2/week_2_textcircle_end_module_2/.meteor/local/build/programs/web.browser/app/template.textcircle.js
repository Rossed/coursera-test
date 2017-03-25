(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.NAV({
    "class": "navbar navbar-default navbar-fixed-top"
  }, "\n  		", HTML.DIV({
    "class": "container"
  }, "\n    		", HTML.Raw('<a class="navbar-brand" href="#">TextCircle</a>'), "\n        ", HTML.P({
    "class": "navbar-text navbar-right"
  }, "\n          ", Blaze._TemplateWith(function() {
    return {
      align: Spacebars.call("right")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("loginButtons"));
  }), "\n        "), "\n  		"), " ", HTML.Raw("<!-- / nav container -->"), "\n	"), " \n	", HTML.DIV({
    "class": "container top-margin"
  }, "\n\n ", HTML.DIV({
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
