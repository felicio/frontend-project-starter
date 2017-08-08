/* eslint-env node */
/* eslint-disable no-inline-comments */

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('./config.base')({
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
})
