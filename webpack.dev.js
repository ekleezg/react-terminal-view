const path = require("path");
const { merge } = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
});
