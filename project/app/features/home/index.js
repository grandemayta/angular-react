'use strict';

module.exports = function (app) {

    require('./home')(app);

    app.config(function ($stateProvider) {

        $stateProvider
            .state('home', {
                parent: 'base',
                url: '/',
                template: '<home/>'
            })
    });

};