'use strict';

module.exports = function (app) {

    require('./UserRepositoriesRouter')(app);
    require('./UserRepositoriesController')(app);

};