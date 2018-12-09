const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const VueSSRPlugin = require('vue-ssr-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const isomorphicConfig = merge(baseConfig, {
  target: 'node',
  entry: { isomorphic: path.join(process.cwd(), 'src/server/isomorphic') },
  output: {
    path: path.join(process.cwd(), 'dist', 'server'),
    filename: 'isomorphic.js',
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      CLIENT: false,
      SERVER: true,
      nodeRequire: 'function(module){return require(module);}',
    }),
    new VueSSRPlugin({}),
  ],
});

module.exports = isomorphicConfig;
