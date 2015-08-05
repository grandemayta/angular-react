module.exports = function (app) {

    "use strict";

    require("../partials/headermenucontent/config")(app);
    require("../features/users/config")(app);
    require("../features/userdetail/config")(app);
    require("../features/userrepositories/config")(app);

    app.config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

        }
    ]);

};