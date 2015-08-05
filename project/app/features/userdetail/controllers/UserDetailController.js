module.exports = function (app) {

    "use strict";

    app.controller("UserDetailController", ["$scope", "$state", "RestService",
        function ($scope, $state, RestService) {

            $scope.spinnerStatus = true;
            $scope.serverStatus = false;

            // LOAD USER
            RestService
                .getData("users/" + $state.params.id)
                .then(function (data) {
                    $scope.user = data;
                    $scope.spinnerStatus = false;
                }, function (error) {
                    $scope.spinnerStatus = false;
                    $scope.serverStatus = true;
                });

            $scope.userRepositories = function () {
                $state.go("users.detail.repositories", {id: $state.params.id});
            };

        }
    ]);

};