const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { test: /.css$/, use: ['style-loader', 'css-loader']},
      { test: /.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[local]-[hash:8]', 'sass-loader']},
      { enforce: 'pre', test: /\.js|jsx$/, use: 'eslint-loader', exclude: /node_modules/ },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      "@": path.join(__dirname, '/src')
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, './src/index.html') }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: '127.0.0.1',  // 我们可以允许我们用任意方式进行访问（127.0.0.1，localhost, 本机ip）
    port: '8888',
    contentBase: './dist',
    hot: true,
    open: true
  }
};
