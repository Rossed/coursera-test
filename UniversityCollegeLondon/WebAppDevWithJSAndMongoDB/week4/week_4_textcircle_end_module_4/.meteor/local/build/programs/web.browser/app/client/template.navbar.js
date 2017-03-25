(function(){
Template.__checkName("navbar");
Template["navbar"] = new Template("Template.navbar", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default navbar-fixed-top"
  }, "\n      ", HTML.DIV({
    "class": "container"
  }, "\n        ", HTML.Raw('<a class="navbar-brand" href="/">TextCircle</a>'), "\n        ", HTML.UL({
    "class": "nav navbar-nav"
  }, "\n          ", HTML.Raw('<li>\n            <a href="#" class="js-add-doc">\n              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>\n              new document\n            </a> \n          </li>'), "\n\n\n          ", HTML.Raw("<!-- drop down list -->"), "\n          ", HTML.LI({
    "class": "dropdown"
  }, "\n          ", HTML.Raw('<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Documents <span class="caret"></span></a>'), "\n\n          ", HTML.UL({
    "class": "dropdown-menu"
  }, "\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("documents"));
  }, function() {
    return [ "\n            ", HTML.LI(HTML.A({
      href: function() {
        return [ "/documents/", Spacebars.mustache(view.lookup("_id")) ];
      },
      "class": ""
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

}).call(this);
