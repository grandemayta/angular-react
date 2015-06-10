module.exports = function (app) {

    app.factory('UtilsService', function () {

        return {

            enableOverflowHidden: function () {
                var checkOverflowHidden = angular.element(document.querySelector('.view-content'));
                if (checkOverflowHidden.length > 0) {
                    checkOverflowHidden[0].classList.add('overflow-hidden');
                }
            },

            disableOverflowHidden: function () {
                var checkOverflowHidden = angular.element(document.querySelector('.view-content'));
                if (checkOverflowHidden.length > 0) {
                    checkOverflowHidden[0].classList.remove('overflow-hidden');
                }
            }
        };

    });

};