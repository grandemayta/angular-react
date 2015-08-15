module.exports = function ($scope, $state, ReactService, RestService) {

    //$scope.$emit("PAGE_TITLE", "Git users");

    var UsersView = require("../views/users.jsx");

    $scope.fnUserDetail = function (item) {
        console.log(item);
    };

    $scope.usersViewData = {
        fnUserDetail: $scope.fnUserDetail,
        users: [],
        spinnerStatus: 'active',
        serverStatus: 'deactive'
    };

    ReactService.load(UsersView, "users-view", $scope.usersViewData);

    // LOAD USERS
    RestService
        .getData("users")
        .then(function (data) {
            $scope.usersViewData.spinnerStatus = 'deactive';
            $scope.usersViewData.users = data;
            ReactService.load(UsersView, "users-view", $scope.usersViewData);
        }, function () {
            $scope.usersViewData.spinnerStatus = 'deactive';
            $scope.usersViewData.serverStatus = 'active';
            ReactService.load(UsersView, "users-view", $scope.usersViewData);
        });

};