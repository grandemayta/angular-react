'use strict';

module.exports = function (app) {

    require('./UsersRouter')(app);
    require('./UsersController')(app);

};