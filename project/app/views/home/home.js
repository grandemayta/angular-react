'use strict';

module.exports = function (app) {

    app.directive('home', function () {

        return {
            restrict: 'E',
            template: '<h1>Nello combina guai</h1>'
        };

    });


};