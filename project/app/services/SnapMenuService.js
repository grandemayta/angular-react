module.exports = function (app) {

    "use strict";

    app.factory("SnapMenuService",
        function () {

            var snapper;

            return {

                init: function (id) {
                    snapper = new Snap({
                        element: document.querySelector('#' + id),
                        disable: "right",
                        hyperextensible: false
                    });
                },

                toggleMenu: function () {
                    if (snapper.state().state === "closed") snapper.open("left");
                    else snapper.close("left")
                }
            };

        });

};