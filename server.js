var webpack = require('webpack')
var express = require('express')
var ReactDOMServer = require('react-dom/server')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new WebpackDevServer(
  webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true
  }
).listen(8080, 'localhost', (error, result) => {
  if (error) { console.log(error); }
  console.log('Listening at localhost:8080');
})

// Server-side react sendering with redux: https://medium.com/@firasd/quick-start-tutorial-universal-react-with-server-side-rendering-76fe5363d6e#.mmtc61rw9
// http://jmfurlott.com/tutorial-setting-up-a-simple-isomorphic-react-app/
// var app = express()

// app.get(['/'], function(req, res) {
//   /* Use React Router */
//   var ReactRouter = require('react-router');
//   var match = ReactRouter.match;
//   var routes = require('./app/routes.js').routes

//   match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
//     if (error) {
//       res.status(500).send(error.message)
//     } else if (redirectLocation) {
//       res.redirect(302, redirectLocation.pathname + redirectLocation.search)
//     } else if (renderProps) {
//       res.send("<!DOCTYPE html>"+
//         ReactDOMServer.renderToString(
//           RouterContext(renderProps)
//         )
//       )
//     } else {
//       res.status(404).send('Not found')
//     }
//   })
// })

// app.listen(8080)
