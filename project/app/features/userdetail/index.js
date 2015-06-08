'use strict';

module.exports = function (app) {

    require('./UserDetailRouter')(app);
    require('./UserDetailController')(app);

};