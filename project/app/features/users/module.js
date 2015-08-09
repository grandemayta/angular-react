var app = angular.module("users", []);

app.controller("UsersController", [
    "$state", "RestService",
    require("./controllers/UsersController")
]);

module.exports = app;

