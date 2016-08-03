'use strict';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');
let open = require('open');

new WebpackDevServer(webpack(config), {
  contentBase: 'app',
  filename: 'bundle.js',
  publicPath: '/assets'
})
.listen(8080, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:8099');
  console.log('Opening your system browser...');
  open('http://localhost:8080/');
});
