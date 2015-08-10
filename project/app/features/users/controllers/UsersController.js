module.exports = function ($scope, $state, RestService) {

    var HelloMessage = require("../users.jsx");

    //$scope.$emit("PAGE_TITLE", "Git users");

    var self = this;
    self.spinnerStatus = true;

    function test(item) {
        console.log(item);
    }

    // LOAD USERS
    RestService
        .getData("users")
        .then(function (data) {
            self.spinnerStatus = false;
            //self.users = data;
            React.render(
                React.createElement(HelloMessage, {test: test, data: data}),
                document.getElementById('users-views')
            );
        }, function (error) {
            self.spinnerStatus = false;
            self.serverStatus = true;
        });

    self.userDetail = function (id) {
        $state.go("users.detail", {id: id});
    };

};