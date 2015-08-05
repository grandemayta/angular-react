module.exports = function (app) {

    require("./controllers/UsersController")(app);

    "use strict";

    app.config(["$stateProvider",
        function ($stateProvider) {

            $stateProvider
                .state("users", {
                    parent: "headermenucontent",
                    url: "/",
                    template: require("./views/users.html"),
                    controller: "UsersController"
                });
        }
    ]);

};