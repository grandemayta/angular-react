'use strict';

module.exports = function (app) {

    app.directive('errorServer', function () {

        return {
            restrict: 'E',
            replace: true,
            template: '\
            <div class="error-content">\
                <div class="error-icon icon icon-chevron-down"></div>\
                <div class="error-message">Oops something went wrong</div>\
            </div>'
        };

    });

};