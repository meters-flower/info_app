define(["jquery", "underscore", "backbone", "modules/index/index", "modules/list/list", "jqm"], function($, _, Backbone, index, list) {
    var Router = Backbone.Router.extend({
        initialize: function () {
            console.log("Route initialize");
        },

        routes: {
            "": "index", 
            "index": "index", 
            "list": "list"
        },

        firstPage: true,

        index: function(action) {
            console.log("indexPage");
           this.changePage(new index());
        },

        list: function(action) {
            console.log("listPage");
            this.changePage(new list());
        },

        changePage: function(page) {
            page.render();
            var $page = $(page.el)
            $page.attr('data-role', 'page');
            $("body").append($page);
            var transition = $.mobile.defaultPageTransition;
            if(this.firstPage) {
                $.mobile.changePage($page, {
                    changeHash: false,
                    transition: transition
                });
            }else {
                this.firstPage = false;
            }
        }
    });

    return Router;
});