'use strict';

module.exports = function (app) {

    /*require('./UserDetail')(app);*/

    app.config(function ($stateProvider, $stickyStateProvider) {

        $stateProvider
            .state('home.detail', {
                url: 'detail',
                sticky: true,
                views: {
                    'detail': {template: '<h2>Grande nello sei meglio di ciarmiello<h2/>'}
                }
            });
    });

};