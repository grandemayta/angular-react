'use strict';

module.exports = function (app) {

    require('../features/headermenucontent')(app);
    require('../features/users')(app);
    require('../features/userdetail')(app);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('headermenucontent', {
                template: '<headermenucontent/>'
            });

    });

};