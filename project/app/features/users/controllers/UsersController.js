module.exports = function ($state, RestService) {

    var HelloMessage = require("../users.jsx");

    //$scope.$emit("PAGE_TITLE", "Git users");

    var self = this;
    self.spinnerStatus = true;

    // LOAD USERS
    RestService
        .getData("users")
        .then(function (data) {
            self.spinnerStatus = false;
            //self.users = data;
            React.render(
                React.createElement(HelloMessage, {data: data}),
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