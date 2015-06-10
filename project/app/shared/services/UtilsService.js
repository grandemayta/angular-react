module.exports = function (app) {

    app.factory('UtilsService', function () {

        return {

            toggleOverflowHidden: function () {
                var checkOverflowHidden = angular.element(document.querySelector('.scrollable-area'));
                if (checkOverflowHidden.length > 0) checkOverflowHidden[0].classList.toggle('overflow-hidden');
            }
        };

    });

};