'use strict';

require('angular');
require('angular-ui-router');
require('angular-touch');
require('ct-ui-router-extras.core');
require('ct-ui-router-extras.sticky');

require('scss/common.scss');

var app = angular.module('app', [
        'ui.router',
        'ct.ui.router.extras.core',
        'ct.ui.router.extras.sticky',
        'ngTouch'
    ]
);

require('../config')(app);
require('../shared/services')(app);
require('../shared/directives')(app);

angular.bootstrap(document.body, ['app']);