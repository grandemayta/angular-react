module.exports = function (app) {

    app.config(["$stateProvider",
        function ($stateProvider) {

            $stateProvider.state("headermenu", {
                controller: "HeaderMenuController",
                templateProvider: ["$q", function ($q) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                        deferred.resolve(require("./views/headermenu.html"));
                    });
                    return deferred.promise;
                }],
                resolve: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                        $ocLazyLoad.load({name: "headermenu"});
                        deferred.resolve(require("./module"));
                    });
                    return deferred.promise;
                }]
            });

        }
    ]);
};