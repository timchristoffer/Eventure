'use strict';

/**
 * host service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::host.host');
