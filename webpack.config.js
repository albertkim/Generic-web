module.exports = {
  context: __dirname,

  entry: ["./src/index.html", "./src/index.js"],

  output: {
    filename: "index.js",
    path: __dirname + "/build",
    publicPath: ""
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?presets[]=react,presets[]=es2015"]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?presets[]=react,presets[]=es2015"]
      },
      {
        test: /index\.html$/,
        loader: "file?name=index.html",
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
}
