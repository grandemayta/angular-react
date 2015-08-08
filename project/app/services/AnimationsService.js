module.exports = function (app) {

    "use strict";

    app.factory("AnimationsService",
        function () {

            var service = {};

            service.togglePanel = function (isOpen, _id) {
                if (isOpen) Velocity(document.getElementById(_id), "slideDown", {duration: 300});
                else Velocity(document.getElementById(_id), "slideUp", {duration: 300});
            };

            return service;
        });

};