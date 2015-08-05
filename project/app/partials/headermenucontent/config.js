module.exports = function (app) {

    require("./controllers/HeaderMenuContentController")(app);

    "use strict";

    app.config(["$stateProvider",
        function ($stateProvider) {

            $stateProvider
                .state("headermenucontent", {
                    template: require("./views/headermenucontent.html"),
                    controller: "HeaderMenuContentController"
                });

        }
    ]);

};