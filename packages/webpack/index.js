module.exports = {
  client: require('./src/webpack.client.config'),
  server: require('./src/webpack.server.config'),
  devServer: require('./src/webpack.dev-server.config'),
  isomorphic: require('./src/webpack.isomorphic.config'),
};
