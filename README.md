# react-demo
This is a "ReactJS" demo

# 学习网站
* https://facebook.github.io/react/ 官方站点
* http://reactjs.cn/react/ 中文站点
* http://es6.ruanyifeng.com/ es2015
* https://webpack.github.io/ webpack

# Day 1: product filter component
Demo参考地址：https://facebook.github.io/react/docs/thinking-in-react.html

1. 用户组件拆分规则：单一功能原则

2. 组件搭建：一般情况下，从上往下。大项目可以采用从下往上方式。

3. 数据引用：props用于从父级向子级传递数据，state用于交互数据更改。

4. 初始化state：getInitialState()
> 识别state规则：
> - 是否是从父级通过 props 传入的？如果是，可能不是 state 。
> - 是否会随着时间改变？如果不是，可能不是 state 。
> - 能根据组件中其它 state 数据或者 props 计算出来吗？如果是，就不是 state 。

5. 确认state生命周期：
> - 找出每一个基于那个 state 渲染界面的组件。
> - 找出共同的祖先组件（某个单个的组件，在组件树中位于需要这个 state 的所有组件的上面）。
> - 要么是共同的祖先组件，要么是另外一个在组件树中位于更高层级的组件应该拥有这个 state 。
> - 如果找不出拥有这个 state 数据模型的合适的组件，创建一个新的组件来维护这个 state ，然后添加到组件树中，层级位于所有共同拥有者组件的上面。

6. 添加数据反馈：使用setState()更新state数据

# Day 2: webpack工具搭建（1）
1. 安装相关工具
```
npm install --save-dev webpack webpack-dev-server babel babel-cli babel-core babel-loader babel-preset-es2015 babel-preset-react
```
2. 创建配置文件 webpack.config.js
```
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
```
3. 修改component代码，改用es6语法
```
import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div>This is App Component use es6<div/>
    );
  }
}


export default AppComponent;

```
4. 启用webpack，并监听文件更改
```
webpack --watch
```
