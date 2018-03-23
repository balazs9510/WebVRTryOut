var path = require("path");
module.exports = {
  entry: './Scripts/index.js',
  output: {
    path: path.resolve(__dirname, "Scripts"),
    filename: "bundle.js"
  },
  mode: 'development'
};