'use strict';

module.exports = function (app) {

    app.controller('UserDetailController', function ($scope, $state, RestService) {

        $scope.spinnerStatus = true;
        $scope.serverStatus = false;

        // LOAD USER
        RestService
            .getData('users/' + $state.params.id)
            .then(function (data) {
                $scope.user = data;
                $scope.spinnerStatus = false;
            }, function (error) {
                $scope.spinnerStatus = false;
                $scope.serverStatus = true;
            });

    });

};