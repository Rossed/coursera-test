(function(){
Template.__checkName("docList");
Template["docList"] = new Template("Template.docList", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container top-margin"
  }, "\n		", HTML.DIV({
    "class": "row"
  }, "\n  		", Blaze.Each(function() {
    return Spacebars.call(view.lookup("documents"));
  }, function() {
    return [ "\n  		", HTML.DIV({
      "class": "col-md-3 col-xs-6"
    }, "\n  			", HTML.DIV({
      "class": "light-border"
    }, "\n  				", HTML.A({
      href: function() {
        return [ "/documents/", Spacebars.mustache(view.lookup("_id")) ];
      }
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    })), "\n  			"), "\n  		"), "\n  		" ];
  }), "\n  		"), "\n	");
}));

}).call(this);
