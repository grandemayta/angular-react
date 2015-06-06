'use strict';

require('angular');
require('angular-ui-router');
require('angular-touch');

require('scss/common.scss');

var app = angular.module('app', [
        'ui.router',
        'ngTouch'
    ]
);

require('../config')(app);

angular.bootstrap(document.body, ['app']);