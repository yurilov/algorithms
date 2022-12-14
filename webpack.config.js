const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HTMLPlugin({
      template: "./src/index.html",
    }),
    // if needed to add some resourses or styles
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "resources"),
    //       to: path.resolve(__dirname, "dist", "resources"),
    //     },
    //     {
    //       from: path.resolve(__dirname, "src", "styles"),
    //       to: path.resolve(__dirname, "dist", "styles"),
    //     },
    //   ],
    // }),
    new CleanWebpackPlugin(),
  ],
};
