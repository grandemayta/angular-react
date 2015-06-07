module.exports = function (app) {

    app.factory('SnapMenuService', function () {

        var snapper;

        return {

            init: function (element) {

                snapper = new Snap({
                    element: element,
                    disable: 'right',
                    hyperextensible: false
                });

            },

            toggleMenu: function () {
                if (snapper.state().state === 'closed') snapper.open('left');
                else snapper.close('left')
            }
        };


    });

};