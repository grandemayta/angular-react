module.exports = function ($scope, $state, SnapMenuService) {

    SnapMenuService.init('snapMenu');

    $scope.toggleMenu = function () {
        SnapMenuService.toggleMenu();
    };

    $scope.changePage = function (page) {
        $scope.toggleMenu();
        $state.go(page);
    };

};