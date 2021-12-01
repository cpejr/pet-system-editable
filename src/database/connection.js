import knex from 'knex';

import config from '../../knexfile';

const environment = process.env.NODE_ENV || 'development';

const configuration = config[environment];

const connection = knex(configuration);

const registerService = (name, initFn) => {
  if (process.env.NODE_ENV === 'development') {
    if (!(name in global)) {
      global[name] = initFn();
    }
    return global[name];
  }
  return initFn();
};

export const db = registerService('db', () => knex(configuration));

// module.exports = connection;
