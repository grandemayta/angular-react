'use strict';

module.exports = function (app) {

    app.directive('home', function () {

        return {
            restrict: 'AE',
            template: '<h1>Nello combina guai</h1>'
        };

    });


};