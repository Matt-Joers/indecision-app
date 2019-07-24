// entry point of app - app.js in source folder
// where to output the bundle file -> webpack.config.js file
// expose an object to another file
// webpack.js.org
const path = require('path');
// console.log(path.join(__dirname, 'public'));

module.exports = {
  entry: './public/src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};
