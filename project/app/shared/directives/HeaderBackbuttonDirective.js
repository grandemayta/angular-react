'use strict';

module.exports = function (app) {

    app.directive('headerBackbutton', function ($window) {

        return {
            restrict: 'E',
            template: '\
            <header class="padding-bottom-50">\
                <i ng-click="goBack()" class="icon-menu icon icon-chevron-left"></i>\
            </header>',
            replace: true,
            link: function (scope, element) {

                element.ready(function () {

                    scope.goBack = function () {
                        $window.history.back();
                    }

                });
            }
        };

    });

};