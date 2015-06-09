'use strict';

module.exports = function (app) {

    app.directive('headerBackbutton', function ($window) {

        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
              title: '='
            },
            template: '\
            <div class="panel-backbutton">\
                <header class="padding-bottom-50">\
                    <i ng-click="goBack()" class="icon-header-left icon icon-chevron-left"></i>\
                    <p ng-bind="title" class="text-header"></p>\
                </header>\
                <div class="padding-bottom-50"></div>\
                <div ng-transclude></div>\
            </div>',
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