'use strict';

module.exports = function (app) {

    app.run(function ($rootScope, $state) {

        $rootScope.$state = $state;

        $rootScope.$on('$stateChangeStart', function (event, toState) {

        });

        $rootScope.$on('$locationChangeSuccess', function () {

        });

        $rootScope.$on('$stateChangeError', function () {

        });
    });

};