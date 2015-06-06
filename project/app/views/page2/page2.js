'use strict';

module.exports = function (app) {

    app.directive('page2', function () {

        return {
            restrict: 'E',
            template: '<h1>Forza Inter sempre e comunque!</h1>'
        };

    });


};