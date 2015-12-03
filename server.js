var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(
  webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true
  }
).
listen(8080, 'localhost', (error, result) => {
  if (error) { console.log(error); }
  console.log('Listening at localhost:8080');
});