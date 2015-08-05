module.exports = function (app) {

    require("./controllers/UserRepositoriesController")(app);

    "use strict";

    app.config(["$stateProvider",
        function ($stateProvider) {

            $stateProvider
                .state("users.detail.repositories", {
                    url: "^/repositories/:id",
                    views: {
                        "repositories": {
                            template: require("./views/userrepositories.html"),
                            controller: "UserRepositoriesController"
                        }
                    }
                });

        }
    ]);

};