'use strict';

module.exports = function (app) {

    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                template: '\
                <nav id="menu">\
                    <h2>Menu</h2>\
                </nav>\
                <main id="panel">\
                    <header>\
                        <button class="toggle-button">☰</button>\
                        <h2>Panel</h2>\
                    </header>\
                </main>',
                controller: function () {
                    var slideout = new Slideout({
                        'panel': document.getElementById('panel'),
                        'menu': document.getElementById('menu'),
                        'padding': 256,
                        'tolerance': 70
                    });

                    // Toggle button
                    document.querySelector('.toggle-button').addEventListener('click', function () {
                        slideout.toggle();
                    });
                }
            });

    });

};