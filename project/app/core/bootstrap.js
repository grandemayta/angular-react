require('angular');
require('angular-ui-router');
require('angular-touch');
require('scss/common.scss');

var app = angular.module('app', [
        'ui.router',
        'ngTouch'
    ]
);

require('./routes')(app);
require('./run')(app);
require('../shared/services')(app);
require('../shared/directives')(app);

angular.bootstrap(document.body, ['app']);