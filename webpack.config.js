var path = require('path');
var webpack = require('webpack');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: [`${SRC_DIR}/components/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: [/seed.js/],
        // included seed.js into exclude becuase we do not want the seed script ran everytime we run the run webpack
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
