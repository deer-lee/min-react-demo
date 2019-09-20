const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');


module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, '../src/index.html') }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ],
  devServer: {
    host: '127.0.0.1',  // 我们可以允许我们用任意方式进行访问（127.0.0.1，localhost, 本机ip）
    port: '8888',
    contentBase: './dist',
    hot: true,
    open: true,
    quiet: true, // FriendlyErrorsPlugin
    overlay: true
  }
});
