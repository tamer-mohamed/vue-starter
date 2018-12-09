const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.config');

const devServerConfig = merge(baseConfig, {
  target: 'node',
  entry: {
    'dev-server': path.join(process.cwd(), 'src/server/dev/server'),
  },
  output: {
    path: path.join(process.cwd(), 'dist', 'server'),
    filename: 'dev-server.js',
    libraryTarget: 'commonjs',
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      CLIENT: false,
      SERVER: true,
      nodeRequire: 'function(module){return require(module);}',
    }),
  ],
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
});

module.exports = devServerConfig;
