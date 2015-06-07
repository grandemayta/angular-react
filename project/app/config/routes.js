'use strict';

module.exports = function (app) {

    require('../features/menu')(app);
    require('../features/home')(app);
    require('../features/page2')(app);
    require('../features/userdetail')(app);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('base', {
                template: '<base/>'
            });

    });

};