module.exports = function (app) {

    app.config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider.state("users", {

                parent: "headermenucontent",
                url: "/",
                controllerAs: "users",
                controller: "UsersController",
                templateProvider: ["$q", function ($q) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                        deferred.resolve(require("./views/users.html"));
                    });
                    return deferred.promise;
                }],
                resolve: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                        $ocLazyLoad.load({name: "users"});
                        deferred.resolve(require("./module"));
                    });
                    return deferred.promise;
                }]

            });

            $urlRouterProvider.otherwise("/");

        }
    ]);

};