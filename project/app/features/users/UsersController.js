'use strict';

module.exports = function (app) {

    app.controller('UsersController', function ($scope, $state, RestService) {

        $scope.spinnerStatus = true;

        console.log(MYAPP);

        // LOAD USERS
        RestService
            .getData('users')
            .then(function (data) {
                $scope.spinnerStatus = false;
                $scope.users = data;
            }, function (error) {
                $scope.spinnerStatus = false;
                $scope.serverStatus = true;
            });

        $scope.userDetail = function (id) {
            $state.go('users.detail', {id: id});
        };

    });

};