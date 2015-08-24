module.exports = function ($scope, $state, ReactService, RestService) {

    //$scope.$emit("PAGE_TITLE", "Git users");

    var UsersView = require("../views/users.jsx");

    $scope.fnUserDetail = function (item) {
        $state.go("users.detail", {id: item.id});
    };

    $scope.usersViewData = {
        fnUserDetail: $scope.fnUserDetail,
        users: [],
        spinnerStatus: true,
        serverStatus: false
    };

    ReactService.load(UsersView, "users-view", $scope.usersViewData);

    // LOAD USERS
    RestService
        .getData("users")
        .then(function (data) {
            $scope.usersViewData.spinnerStatus = false;
            $scope.usersViewData.users = data;
            ReactService.load(UsersView, "users-view", $scope.usersViewData);
        }, function () {
            $scope.usersViewData.spinnerStatus = "deactive";
            $scope.usersViewData.serverStatus = true;
            ReactService.load(UsersView, "users-view", $scope.usersViewData);
        });

};