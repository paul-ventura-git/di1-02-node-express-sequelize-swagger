/*
require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '..', 'database.sqlite'),
    logging: false
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
};
*/

/*
require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    username: 'postgres',
    password: process.env.DB_PASS || '123',
    database: process.env.DB_NAME || 'node_sequelize',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
};
*/

/*
require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'node_sequelize',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3307,
    dialect: 'mysql',
    logging: false
  },

  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
  },

  production: {
    use_env_variable: 'DATABASE_URL', // ejemplo: mysql://user:pass@host:port/dbname
    dialect: 'mysql'
  }
};
*/

require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    username: process.env.DB_USER || 'sa',
    password: process.env.DB_PASS || '123',
    database: process.env.DB_NAME || 'node_sequelize',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 1433,
    dialect: 'mssql', // Dialecto para SQL Server
    logging: false,
    dialectOptions: {
      options: {
        encrypt: true, // Necesario si usas Azure o redes seguras
        trustServerCertificate: true // Útil para entornos de desarrollo local
      }
    }
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true
      }
    }
  }
};