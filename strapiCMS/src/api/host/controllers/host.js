'use strict';

/**
 * host controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::host.host');
