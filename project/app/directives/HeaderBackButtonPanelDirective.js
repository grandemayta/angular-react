module.exports = function (app) {

    "use strict";

    app.directive("headerBackbuttonPanel", ['$window',
        function ($window) {

            return {
                restrict: "E",
                transclude: true,
                replace: true,
                scope: {
                    title: "="
                },
                template: "\
                <div class=\"panel-backbutton\">\
                    <header class=\"padding-bottom-50\">\
                        <i ng-click=\"goBack()\" class=\"icon-header-left icon icon-chevron-left\"></i>\
                        <p ng-bind=\"title\" class=\"text-header\"></p>\
                    </header>\
                    <div ng-class=\"{'overflow-hidden' : currentState !== currentState}\" class=\"view-content\">\
                        <div ng-transclude></div>\
                    </div>\
                </div>",
                link: function (scope, element) {

                    element.ready(function () {

                        scope.goBack = function () {
                            $window.history.back();
                        }

                    });
                }
            };

        }
    ]);

};