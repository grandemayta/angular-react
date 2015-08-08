var app = angular.module("userdetail", []);

app.controller("UserDetailController", [
    "$scope", "$state", "RestService",
    require("./controllers/UserDetailController")
]);

module.exports = app;

