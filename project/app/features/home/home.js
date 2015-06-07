'use strict';

module.exports = function (app) {

    require('./UsersController')(app);

    app.directive('home', function () {

        return {
            restrict: 'E',
            replace: true,
            template: require('./home.html'),
            controller: 'UsersController'
        };

    });
};