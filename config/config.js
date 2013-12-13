var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-contacts-manager'
    },
    port: 3000,
    db: 'mongodb://localhost/node-contacts-manager-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-contacts-manager'
    },
    port: 3000,
    db: 'mongodb://localhost/node-contacts-manager-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-contacts-manager'
    },
    port: 3000,
    db: 'mongodb://localhost/node-contacts-manager-production'
  }
};

module.exports = config[env];
