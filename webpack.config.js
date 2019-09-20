const path = require('path');
const DIST_PATH = path.resolve(__dirname, '../dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor:['react','react-dom'],
  },
  output: {
    filename: "bundle.js",
    publicPath: '/',
    path: DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre", // 编译前检查
        exclude: /node_modules/, // 不检测的文件
        include: [path.resolve(__dirname, 'src')], // 指定检查的目录
        use:[
          {
            loader:'eslint-loader',
            options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
              formatter: require('eslint-friendly-formatter'), // 指定错误报告的格式规范
              emitWarning: true, // 这个配置需要打开，才能在控制台输出warning信息
              emitError: true, // 这个配置需要打开，才能在控制台输出error信息
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        exclude : '/node_modules',
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',  //
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      "@": path.join(__dirname, '/src'),
      'components': path.join(__dirname, './src/components')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, './src/index.html') }),
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
};
