var app = angular.module("userrepositories", []);

app.controller("UserRepositoriesController", [
    "$scope", "$state", "RestService",
    require("./controllers/UserRepositoriesController")
]);

module.exports = app;

