(function(){
Template.__checkName("ApplicationLayout");
Template["ApplicationLayout"] = new Template("Template.ApplicationLayout", (function() {
  var view = this;
  return [ HTML.HEAD("\n  ", HTML.TITLE("textcircle"), "\n"), "\n\n    ", Blaze._TemplateWith(function() {
    return "header";
  }, function() {
    return Spacebars.include(view.lookupTemplate("yield"));
  }), "\n\n    ", Blaze._TemplateWith(function() {
    return "main";
  }, function() {
    return Spacebars.include(view.lookupTemplate("yield"));
  }) ];
}));

}).call(this);
