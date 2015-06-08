'use strict';

module.exports = function (app) {

    app.controller('UserDetailController', function ($scope, $state, RestService) {

        // LOAD USER
        RestService
            .getData('users/' + $state.params.id)
            .then(function (data) {
                $scope.user = data;
            });

    });

};