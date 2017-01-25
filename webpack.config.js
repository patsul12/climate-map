var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./js/index.js",
  output: {
    path: './src',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        
        include: [
          path.resolve(__dirname, "js"),
        ],
        
        test: /\.jsx?$/,
        
        query: {
          plugins: ['transform-runtime'],
          presets: ["es2015"],
        }
      },
    ]
  },
};
