'use strict';

require('angular');
require('angular-ui-router');
require('angular-touch');

require('css/slideout.css');

var app = angular.module('app', [
        'ui.router',
        'ngTouch'
    ]
);

require('../config')(app);

angular.bootstrap(document.body, ['app']);