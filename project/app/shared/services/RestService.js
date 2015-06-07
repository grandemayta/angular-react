'use strict';

module.exports = function (app) {

    app.factory('RestService', function ($q, $http) {

        var BASE_URL = 'https://api.github.com';

        return {

            getData: function (url) {
                var defer = $q.defer();

                $http
                    .get(BASE_URL + '/' + url)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                    .error(function (response) {
                        defer.reject(response)
                    });

                return defer.promise;
            },

            getDataByParams: function (url, params) {
                var defer = $q.defer();

                $http
                    .get(BASE_URL + '/' + url + '/' + params)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                    .error(function (response) {
                        defer.reject(response)
                    });

                return defer.promise;
            }

        };

    });

};