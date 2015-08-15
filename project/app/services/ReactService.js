module.exports = function (app) {

    "use strict";

    app.factory("ReactService",
        function () {

            var service = {};

            service.load = function (componentInstance, componentId, commonData) {

                React.render(
                    React.createElement(componentInstance, commonData),
                    document.getElementById(componentId)
                );
            };

            return service;
        });

};