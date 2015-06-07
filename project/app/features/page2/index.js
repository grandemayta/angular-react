'use strict';

module.exports = function (app) {
    
    require('./page2')(app);

    app.config(function ($stateProvider) {

        $stateProvider
            .state('page2', {
                parent: 'base',
                url: '/',
                template: '<page2/>'
            });
    });

};