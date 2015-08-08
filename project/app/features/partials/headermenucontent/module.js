var app = angular.module("headermenucontent", []);

app.controller("HeaderMenuContentController", [
    "$scope", "$state", "SnapMenuService",
    require("./controllers/HeaderMenuContentController")
]);

module.exports = app;