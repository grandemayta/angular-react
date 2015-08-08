require('angular');
require('angular-ui-router');
require('angular-touch');
require('oclazyload');
require('scss/common.scss');

var app = angular.module('app', [
        'ui.router',
        'ngTouch',
        'oc.lazyLoad'
    ]
);

require('./run')(app);
require('./modules')(app);
require('../services')(app);
require('../directives')(app);

angular.bootstrap(document.body, ['app']);