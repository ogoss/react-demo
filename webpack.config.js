'use strict';

let webpack = require('webpack');
let path = require('path');

module.exports = {
  // 入口文件
  entry: {
    index: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './app/main.js'
    ]
  },
  // 导出文件
  output: {
    path: path.resolve(__dirname, 'build/assets'),
    publicPath: '/assets',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // 调用模块
  module: {
    preLoaders: [{
      test: /\.js|jsx?$/,
      include: path.resolve(__dirname, 'app'),
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js|jsx?$/,
      loaders: [
        'react-hot',
        'babel-loader'
      ],
      exclude: /node_modules/
    }]
  },
  // 插件
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
