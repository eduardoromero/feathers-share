'use strict';

const path = require('path');
const NeDB = require('nedb');
const r = require('rethinkdbdash')({
    db: 'vue_horizon',
    host: 'share.cloud9.mx'
});
//const service = require('feathers-nedb');
const service = require('feathers-rethinkdb');
const hooks = require('./hooks');

module.exports = function () {
    const app = this;

    let options = {
        Model: r,
        name: 'shares_3d09577cdf74', // rethinkdb table
        paginate: {
            default: 100
        }
    };

    // Initialize our service with any options it requires
    app.use('/shares', service(options));

    // Get our initialize service to that we can bind hooks
    const sharesService = app.service('/shares');

    // Set up our before hooks
    sharesService.before(hooks.before);

    // Set up our after hooks
    sharesService.after(hooks.after);
};
