'use strict';

module.exports = function (app) {

    app.directive('page2', function () {

        return {
            restrict: 'E',
            template: require('./page2.html')
        };

    });


};