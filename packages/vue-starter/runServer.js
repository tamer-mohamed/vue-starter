const webpack = require('webpack');
const { devServer, server } = require('@vue-starter/webpack');
const path = require('path');
const cp = require('child_process');

// Launch or restart the Node.js server
function runServer() {
  return new Promise((resolve, reject) => {
    webpack({
      ...devServer,
      mode: 'development',
    }).run((err) => {
      if (err) {
        return reject();
      }

      webpack({
        ...server,
        mode: 'development',
      }).run((nErr) => {
        return resolve();
      });
    });
  });
}

module.exports = runServer;
