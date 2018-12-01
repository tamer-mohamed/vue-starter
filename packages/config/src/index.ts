const { AppConfig } = require('./AppConfig');
const clientConfig = require('./webpack.client.config.js');
const serverConfig = require('./webpack.server.config.js');

module.exports = {
  isomorphicClient,
  clientConfig,
  serverConfig,
};
