const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        ELECTRON_DISABLE_SECURITY_WARNINGS: 'true'
      },
      __DEV__: 'true'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
    compress: true
  }
})
