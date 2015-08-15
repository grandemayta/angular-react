var app = angular.module("users", []);

app.controller("UsersController", [
    "$scope", "$state", "ReactService", "RestService",
    require("./controllers/UsersController")
]);

module.exports = app;

