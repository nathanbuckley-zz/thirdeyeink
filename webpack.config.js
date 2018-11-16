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
      extractComments: true,
      uglifyOptions: {
        mangle: false,
        compress:{
          collapse_vars: false,
          drop_console: true,
          inline: false,
          join_vars: false,
          reduce_funcs: false,
          reduce_vars: false,
          unused: false
        },
        keep_fnames: true,
      }})
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