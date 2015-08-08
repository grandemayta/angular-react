module.exports = function (app) {

    app.config(["$stateProvider",
        function ($stateProvider) {

            $stateProvider.state("users.detail", {

                url: "detail/:id",
                views: {
                    "detail": {
                        controller: "UserDetailController",
                        templateProvider: ["$q", function ($q) {
                            var deferred = $q.defer();
                            require.ensure([], function (require) {
                                deferred.resolve(require("./views/userdetail.html"));
                            });
                            return deferred.promise;
                        }]
                    }
                },
                resolve: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                        $ocLazyLoad.load({name: "userdetail"});
                        deferred.resolve(require("./module"));
                    });
                    return deferred.promise;
                }]
            });

        }
    ]);

};