(function(){
Template.__checkName("docItem");
Template["docItem"] = new Template("Template.docItem", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "container top-margin"
  }, "\n    ", HTML.DIV({
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
  }, "\n        ", Spacebars.include(view.lookupTemplate("viewer")), "\n      "), "\n    "), "\n    ", Spacebars.include(view.lookupTemplate("commentList")), "\n\n    ", Spacebars.include(view.lookupTemplate("insertCommentForm")), "\n\n	"), HTML.Raw("<!-- end of docItem container -->") ];
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

Template.__checkName("commentList");
Template["commentList"] = new Template("Template.commentList", (function() {
  var view = this;
  return Blaze.Each(function() {
    return Spacebars.call(view.lookup("comments"));
  }, function() {
    return [ "\n  ", HTML.UL("\n    ", HTML.LI(Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    }), "\n      ", HTML.P(Blaze.View("lookup:body", function() {
      return Spacebars.mustache(view.lookup("body"));
    })), "\n    "), "\n  "), "\n  " ];
  });
}));

Template.__checkName("insertCommentForm2");
Template["insertCommentForm2"] = new Template("Template.insertCommentForm2", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Comments"),
      id: Spacebars.call("insertCommentForm"),
      type: Spacebars.call("method"),
      meteormethod: Spacebars.call("addComment")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("quickForm"));
  });
}));

Template.__checkName("insertCommentForm");
Template["insertCommentForm"] = new Template("Template.insertCommentForm", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Comments"),
      id: Spacebars.call("insertCommentForm"),
      type: Spacebars.call("method"),
      meteormethod: Spacebars.call("addComment")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {
      return [ "\n    ", HTML.FIELDSET("\n      ", HTML.LEGEND("Comment"), "\n      ", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("title")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n      ", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("body"),
          rows: Spacebars.call(6),
          value: Spacebars.call("Write your comment here")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n      ", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("docid"),
          value: Spacebars.call(view.lookup("docid")),
          type: Spacebars.call("hidden")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n      ", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("owner"),
          value: Spacebars.call(123),
          type: Spacebars.call("hidden")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n\n    "), "\n    ", HTML.BUTTON({
        type: "submit",
        "class": "btn btn-primary"
      }, "Insert"), "\n  " ];
    });
  });
}));

}).call(this);
