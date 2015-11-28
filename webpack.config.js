module.exports = {
  context: __dirname,
  
  entry: {
    javascript: "./src/index.jsx",
    html: "./src/index.html"
  },

  output: {
    filename: "index.js",
    path: __dirname + "/build",
  },
  
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?presets[]=react,presets[]=es2015"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  }
}