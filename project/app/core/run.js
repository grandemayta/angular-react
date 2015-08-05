module.exports = function (app) {

    "use strict";

    app.run(["$rootScope", "$state",
        function ($rootScope, $state) {

            $rootScope.$state = $state;

            $rootScope.$on("$stateChangeStart", function (event, toState) {

                $rootScope.currentState = toState.name;

            });

            $rootScope.$on("$locationChangeSuccess", function () {

            });

            $rootScope.$on("$stateChangeError", function () {

            });
        }
    ]);

};