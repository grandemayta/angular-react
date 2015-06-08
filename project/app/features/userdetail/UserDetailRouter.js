'use strict';

module.exports = function (app) {

    app.config(function ($stateProvider, $stickyStateProvider) {

        $stateProvider
            .state('users.detail', {
                url: 'detail/:id',
                sticky: true,
                views: {
                    'detail': {
                        template: require('./userdetail.html'),
                        controller: 'UserDetailController'
                    }
                }
            });
    });

};