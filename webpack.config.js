var path = require("path");
module.exports = {
  entry: {
    app: ["./Scripts/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  mode: "development"
};