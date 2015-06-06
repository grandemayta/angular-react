'use strict';

module.exports = function (app) {

    require('../partials/base')(app);
    require('../views/home')(app);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('base', {
                template: '<base/>'
            })

            .state('home', {
                parent: 'base',
                url: '/',
                template: '<home/>'
            });

    });

};