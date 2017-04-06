var path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: [path.resolve(__dirname, 'app/main.js')],
  resolve: {
      extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/build'),
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: { presets:['react'] }}
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};