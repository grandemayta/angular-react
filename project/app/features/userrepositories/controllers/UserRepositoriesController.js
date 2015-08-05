module.exports = function (app) {

    "use strict";

    app.controller("UserRepositoriesController", ["$scope", "$state", "RestService",
        function ($scope, $state, RestService) {

            $scope.title = $state.params.id + "\"s repositories";
            $scope.spinnerStatus = true;
            $scope.serverStatus = false;

            // LOAD USER REPOSITORIES
            RestService
                .getData("users/" + $state.params.id + "/repos")
                .then(function (data) {
                    $scope.repositories = data;
                    $scope.spinnerStatus = false;
                }, function (error) {
                    $scope.spinnerStatus = false;
                    $scope.serverStatus = true;
                });

        }
    ]);

};