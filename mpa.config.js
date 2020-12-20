const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { glob } = require("glob");

// entry: {
//     home: "./src/home/index.js",
//     list: "./src/list/index.js",
//     detail: "./src/detail/index.js",
//   },

//    new htmlWebpackPlugin({
//       template: "./src/home/index.html",
//       filename: "home.html",
//       chunks: ["home"],
//     }),
//     new htmlWebpackPlugin({
//       template: "./src/list/index.html",
//       filename: "list.html",
//       chunks: ["list"],
//     }),
//     new htmlWebpackPlugin({
//       template: "./src/detail/index.html",
//       filename: "detail.html",
//       chunks: ["detail"],
//     }),

const setMpa = () => {
  const entry = {};
  const htmlWebpackPlugins = [];

  const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));

  entryFiles.map((item, index) => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/index\.js$/);
    const pageName = match && match[1];
    console.log(pageName);

    //home: "./src/home/index.js",
    entry[pageName] = entryFile;

    //
    htmlWebpackPlugins.push(
      new htmlWebpackPlugin({
        template: path.join(__dirname, `./src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
      })
    );
  });
  console.log(entryFiles);
  return {
    entry,
    htmlWebpackPlugins,
  };
};
const { entry, htmlWebpackPlugins } = setMpa();

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]-[chunkhash:6].js",
  },
  mode: "development",
  module: {
    rules: [
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
  plugins: [...htmlWebpackPlugins],
};
