module.exports = function ($scope, $state, SnapMenuService) {

    SnapMenuService.init("snapMenu");

    $scope.$on("PAGE_TITLE", function (event, data) {
        console.log(event);
        console.log(data);
        $scope.pageTitle = data;
    });

    $scope.toggleMenu = function () {
        SnapMenuService.toggleMenu();
    };

    $scope.changePage = function (page) {
        $scope.toggleMenu();
        $state.go(page);
    };

};