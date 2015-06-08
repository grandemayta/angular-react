'use strict';

module.exports = function (app) {

    app.config(function ($stateProvider) {

        $stateProvider
            .state('users', {
                parent: 'headermenucontent',
                url: '/',
                template: require('./users.html'),
                controller: 'UsersController'
            })
    });
};