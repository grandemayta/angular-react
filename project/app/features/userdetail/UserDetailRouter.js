'use strict';

module.exports = function (app) {

    app.config(function ($stateProvider) {

        $stateProvider
            .state('users.detail', {
                url: 'detail/:id',
                views: {
                    'detail': {
                        template: require('./userdetail.html'),
                        controller: 'UserDetailController'
                    }
                }
            });

    });

};