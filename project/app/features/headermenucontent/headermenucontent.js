'use strict';

module.exports = function (app) {

    app.directive('headermenucontent', function ($state, SnapMenuService) {

        return {
            restrict: 'E',
            template: '\
            <div class="snap-drawers">\
                <div class="snap-drawer snap-drawer-left">\
                    <ul class="menu-list">\
                        <li>\
                            <p ng-click="changePage(\'users\')">Users</p>\
                        </li>\
                    </ul>\
                </div>\
                <div class="snap-content">\
                    <header>\
                        <i ng-click="toggleMenu()" class="icon-header-left icon icon-navicon-round"></i>\
                    </header>\
                    <ui-view/>\
                </div>\
            </div>',
            replace: true,
            link: function (scope, element) {

                element.ready(function () {

                    SnapMenuService.init(element[0].lastElementChild);

                    scope.toggleMenu = function () {
                        SnapMenuService.toggleMenu();
                    };

                    scope.changePage = function (page) {
                        scope.toggleMenu();
                        $state.go(page);
                    };

                });

            }
        };

    });

};