'use strict';

module.exports = {
  // 入口文件
  entry: {
    'index': './app/entry.js'
  },
  // 导出文件
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // 调用模块
  module: {
    loaders: [{
      test: /\.js|jsx?$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
