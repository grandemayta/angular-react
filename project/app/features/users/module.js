var app = angular.module("users", []);

app.controller("UsersController", [
    "$scope", "$state", "RestService",
    require("./controllers/UsersController")
]);

module.exports = app;

