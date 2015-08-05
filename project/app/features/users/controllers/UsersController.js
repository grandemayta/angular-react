module.exports = function (app) {

    "use strict";

    app.controller("UsersController", ["$scope", "$state", "RestService",
        function ($scope, $state, RestService) {

            $scope.spinnerStatus = true;

            // LOAD USERS
            RestService
                .getData("users")
                .then(function (data) {
                    $scope.spinnerStatus = false;
                    $scope.users = data;
                }, function (error) {
                    $scope.spinnerStatus = false;
                    $scope.serverStatus = true;
                });

            $scope.userDetail = function (id) {
                $state.go("users.detail", {id: id});
            };

        }
    ]);

};