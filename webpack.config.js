const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "./build"),
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "/" },
          },
          "css-loader",
        ],
      },
      {
        test: /\.png$/i,
        loader: "url-loader",
        options: {
          name: "[name].[contenthash:10].[ext]",
          limit: 4 * 1024,
        },
      },
      // {
      //   test: /\.png$/,
      //   loader: "file-loader",
      // },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "fuck webpack",
      filename: "html/index.html",
    }),
    // new HtmlWebpackPlugin({
    //   filename: "html/a.html",
    //   template: "./src/a.html",
    // }),
    new MiniCssExtractPlugin({}),
  ],
  mode: "development",
};
