var app = angular.module("userdetail", []);

app.controller("UserDetailController", [
    "$scope", "$state", "ReactService", "RestService",
    require("./controllers/UserDetailController")
]);

module.exports = app;

