'use strict';

module.exports = function (app) {
    require('./HeaderBackbuttonDirective')(app);
    require('./SpinnerDirective')(app);
    require('./ErrorServerDirective')(app);
};