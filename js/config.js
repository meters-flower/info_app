require.config({
    baseUrl: "../js", 

    /* 设置需要加载的模块的模块文件名称和对应路径 */
    paths: {
        "jquery": "lib/jquery-1.8.0.min",
        "jqmconfig": "plugin/jqm.config",
        "jqm": "lib/jquery.mobile-1.4.5.min",
        "underscore": "lib/underscore-min",
        "backbone": "lib/backbone-1.3.3",
        "text": "plugin/text",

        "modules": "../modules"
    },

    // /* 定义非AMD模块文件的特征 */
    // shim: {
    //     "underscore": {
    //         exports: "_"
    //     },
    //     "backbone": {
    //         deps: ["underscore", "jquery"],
    //         exports: "Backbone" 
    //     }
    // }
});

require(["app"], function(app) {
    console.log("app start");
    app.initialize();
});