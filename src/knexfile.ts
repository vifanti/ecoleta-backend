import path from 'path';

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database', 'database.sqlite'),
    },
    migrations: {
      extension: 'ts',
      directory: path.resolve(__dirname, 'database', 'migrations'),
    },
    seeds: {
      extension: 'ts',
      directory: path.resolve(__dirname, 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database', 'database.sqlite'),
    },
    migrations: {
      extension: 'ts',
      directory: path.resolve(__dirname, 'database', 'migrations'),
    },
    seeds: {
      extension: 'ts',
      directory: path.resolve(__dirname, 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },
};
