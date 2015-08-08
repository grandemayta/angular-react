module.exports = function (app) {

    app.config(["$stateProvider",
        function ($stateProvider) {

            $stateProvider.state("users.detail.repositories", {
                url: "^/repositories/:id",
                views: {
                    "repositories": {
                        controller: "UserRepositoriesController",
                        templateProvider: ["$q", function ($q) {
                            var deferred = $q.defer();
                            require.ensure([], function (require) {
                                deferred.resolve(require("./views/userrepositories.html"));
                            });
                            return deferred.promise;
                        }]
                    }
                },
                resolve: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                        $ocLazyLoad.load({name: "userrepositories"});
                        deferred.resolve(require("./module"));
                    });
                    return deferred.promise;
                }]
            });

        }
    ]);

};