const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
      parallel: true,
      extractComments: true,
      uglifyOptions: {
        mangle: true,
        keep_fnames: true
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
          'file-loader'
          ],
          include: [
            path.resolve(__dirname, "img")
          ],
      }
    ]
  }
};