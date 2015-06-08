'use strict';

module.exports = function (app) {

    app.controller('UsersController', function ($scope, $state, RestService) {

        // LOAD USERS
        RestService
            .getData('users')
            .then(function (data) {
                $scope.users = data;
            });

        $scope.userDetail = function (id) {
            $state.go('users.detail', {id: id});
        };

    });

};