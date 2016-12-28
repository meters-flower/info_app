define(["jquery", "underscore", "backbone", "text!modules/index/indexView.html"], function($, _, Backbone, indexViewTpl) {
    var indexView = Backbone.View.extend({
        template: _.template(indexViewTpl),
        render: function() {
            $(this.el).append(this.template());
            return this;
        }
    });

    return indexView;
});