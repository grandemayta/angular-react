module.exports = function (app) {

    app.controller("UserDetailController", [
        "$scope", "$state", "ReactService", "RestService",
        function ($scope, $state, ReactService, RestService) {

            var UserDetailView = require("../views/userdetail.jsx");

            $scope.fnUserRepositories = function (item) {
                console.log(item);
                $state.go("users.detail.repositories", {id: $state.params.id});
            };

            $scope.userDetailViewData = {
                fnUserRepositories: $scope.fnUserRepositories,
                user: {},
                spinnerStatus: true,
                serverStatus: false
            };

            ReactService.load(UserDetailView, "userdetail-view", $scope.userDetailViewData);

            // LOAD USER
            RestService
                .getData("users/" + $state.params.id)
                .then(function (data) {
                    $scope.userDetailViewData.user = data;
                    $scope.userDetailViewData.spinnerStatus = false;
                    ReactService.load(UserDetailView, "userdetail-view", $scope.userDetailViewData);
                }, function (error) {
                    $scope.userDetailViewData.spinnerStatus = false;
                    $scope.userDetailViewData.serverStatus = true;
                    ReactService.load(UserDetailView, "userdetail-view", $scope.userDetailViewData);
                });

        }
    ]);

};