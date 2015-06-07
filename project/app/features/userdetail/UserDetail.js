'use strict';

module.exports = function (app) {

    app.directive('user', function () {

        return {
            restrict: 'E',
            template: '<h2>Grande nello sei meglio di ciarmiello<h2/>'
        };

    });


};