const path = require('path');
const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor:['react','react-dom'],
  },
  output: {
    filename: "js/bundle.js",
    path: DIST_PATH
  },
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
  }
};
