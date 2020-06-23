const merge = require("webpack-merge");
const common = require("./webpack.common.js");

process.env.NODE_ENV = "development";

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  devServer: {
    stats: "minimal",
    overlay: true,
    open: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns css into commonjs
          "sass-loader", // 1. Turns sass into css
        ],
      },
    ],
  },
});
