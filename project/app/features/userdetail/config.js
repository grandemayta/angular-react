module.exports = function (app) {

    require("./controllers/UserDetailController")(app);

    "use strict";

    app.config(["$stateProvider",
        function ($stateProvider) {

            $stateProvider
                .state("users.detail", {
                    url: "detail/:id",
                    views: {
                        "detail": {
                            template: require("./views/userdetail.html"),
                            controller: "UserDetailController"
                        }
                    }
                });

        }
    ]);

};