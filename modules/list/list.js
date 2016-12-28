define(["jquery", "underscore", "backbone", "text!modules/list/listView.html"], function($, _, Backbone, listViewTpl) {
    var listView = Backbone.View.extend({
        template: _.template(listViewTpl),
        render: function() {
            $(this.el).append(this.template());
            return this;
        }
    });

    return listView;
});