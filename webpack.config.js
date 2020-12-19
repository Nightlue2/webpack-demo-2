const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   loader: "html-loader",
      // },
      {
        test: /\.less$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({}),
    new HtmlWebpackPlugin({
      title: "happy webpack",
      filename: "html/index.html",
      template: "src/index.html",
    }),
  ],
  mode: "development",
};
