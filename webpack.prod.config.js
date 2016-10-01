var webpack = require('webpack')

module.exports = {
  context: __dirname,

  entry: [
    './app/index.html',
    './app/index.tsx'
  ],

  output: {
    filename: 'index.js',
    path: __dirname + '/build',
    publicPath: '/'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      {
        test: /index\.html$/,
        loader: 'file?name=index.html',
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: ['style', 'css', 'sass'] },
      { test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader' }
    ],
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
