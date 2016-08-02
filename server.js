'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config')

new WebpackDevServer(webpack(config))
.listen(8099, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:8099');
  console.log('Opening your system browser...');
});
