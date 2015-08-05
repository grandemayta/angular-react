module.exports = function (app) {

    "use strict";

    app.directive("spinner",
        function () {

            return {
                restrict: 'E',
                replace: true,
                template: '\
                          <div class="spinner-content">\
                            <div class="three-quarters-loader"></div>\
                          </div>'
            };

        }
    );

};