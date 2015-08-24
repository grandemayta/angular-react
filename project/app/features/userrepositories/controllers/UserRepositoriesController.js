module.exports = function (app) {

    app.controller("UserRepositoriesController", [
        "$scope", "$state", "RestService", "ReactService",
        function ($scope, $state, RestService, ReactService) {

            var UsersRepositoriesView = require("../views/userrepositories.jsx");
            $scope.title = $state.params.id + "\"s repositories";

            $scope.usersRepositoriesViewData = {
                repositories: [],
                spinnerStatus: true,
                serverStatus: false
            };

            ReactService.load(UsersRepositoriesView, "usersrepositories-view", $scope.usersRepositoriesViewData);

            RestService
                .getData("users/" + $state.params.id + "/repos")
                .then(function (data) {
                    $scope.usersRepositoriesViewData.repositories = data;
                    $scope.usersRepositoriesViewData.spinnerStatus = false;
                    ReactService.load(UsersRepositoriesView, "usersrepositories-view", $scope.usersRepositoriesViewData);
                }, function (error) {
                    $scope.usersRepositoriesViewData.spinnerStatus = false;
                    $scope.usersRepositoriesViewData.serverStatus = true;
                    ReactService.load(UsersRepositoriesView, "usersrepositories-view", $scope.usersRepositoriesViewData);
                });

        }
    ]);

};