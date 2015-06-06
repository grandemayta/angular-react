'use strict';

module.exports = function (app) {

    app.directive('base', function ($state) {

        return {
            restrict: 'E',
            template: '\
            <div class="snap-drawers">\
                <div class="snap-drawer snap-drawer-left">\
                    <h4 ng-click="changePage(\'home\')">Home</h4>\
                    <h4 ng-click="changePage(\'page2\')">Page 2</h4>\
                </div>\
                <div class="snap-content">\
                    <header>\
                        <i ng-click="toggleMenu()" class="icon-menu icon icon-navicon-round"></i>\
                    </header>\
                    <div class="spacer-50"></div>\
                    <ui-view/>\
                </div>\
            </div>',
            replace: true,
            link: function (scope, element) {

                element.ready(function () {

                    var snapper = new Snap({
                        element: element[0].lastElementChild,
                        disable: 'right',
                        hyperextensible: false
                    });

                    scope.toggleMenu = function () {
                        if (snapper.state().state === 'closed') snapper.open('left');
                        else snapper.close('left')
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