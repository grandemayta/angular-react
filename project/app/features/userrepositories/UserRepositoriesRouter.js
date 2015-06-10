'use strict';

module.exports = function (app) {

    app.config(function ($stateProvider) {

        $stateProvider
            .state('users.detail.repositories', {
                url: '^/repositories/:id',
                views: {
                    'repositories': {
                        template: require('./userrepositories.html'),
                        controller: 'UserRepositoriesController'
                    }
                },
                onEnter: function (UtilsService) {
                    UtilsService.enableOverflowHidden();
                },
                onExit: function (UtilsService) {
                    UtilsService.disableOverflowHidden();
                }
            });

    });

};