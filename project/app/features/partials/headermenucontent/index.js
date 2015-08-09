module.exports = function (app) {

    app.config(["$stateProvider",
        function ($stateProvider) {

            $stateProvider.state("headermenucontent", {

                controller: "HeaderMenuContentController",
                templateProvider: ["$q", function ($q) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                        deferred.resolve(require("./views/headermenucontent.html"));
                    });
                    return deferred.promise;
                }],
                resolve: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                        $ocLazyLoad.load({name: "headermenucontent"});
                        deferred.resolve(require("./module"));
                    });
                    return deferred.promise;
                }]

            });

        }
    ]);

};