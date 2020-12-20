const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]-[hash:6].js",
  },
  mode: "development",
  resolveLoader: {
    modules: ["./node_modules", "./myLoaders"],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          // {
          //   loader: miniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: "../",
          //   },
          // },
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]-[hash:6].[ext]",
              outputPath: "images/",
            },
          },
          // "image-webpack-loader",
        ],
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
    port: 8081,
    open: true,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:9092",
      },
    },
    //不自动刷新浏览器窗口
    hotOnly: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    // new miniCssExtractPlugin({
    //   filename: "css/[name]-[contenthash:6].css",
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
