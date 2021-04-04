import knex from 'knex';

import config from './knexfile';

const environment = process.env.NODE_ENV || 'development';

const configuration = config[environment];

const connection = knex(configuration);

module.exports = connection;
