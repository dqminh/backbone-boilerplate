(function() {

  (function(Example) {
    Example.Model = Backbone.Model.extend({});
    Example.Collection = Backbone.Collection.extend({});
    Example.Router = Backbone.Router.extend({});
    return Example.Views.Tutorial = Backbone.View.extend({
      template: "app/templates/example.html",
      render: function(done) {
        var view;
        view = this;
        return namespace.fetchTemplate(this.template, function(tmpl) {
          view.el.innerHTML = tmpl();
          return done(view.el);
        });
      }
    });
  })(namespace.module("example"));

}).call(this);
