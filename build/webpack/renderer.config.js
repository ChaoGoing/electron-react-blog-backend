const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  mode: process.env.NODE_ENV,
  entry: { bundle: ["./src/renderer/index.tsx"] },
  output: {
    // todo: change path and name according to env environment
    hashDigestLength: 10,
    filename: "js/web-[name].js",
    path: path.resolve(__dirname, "../../", "dist"),
    publicPath: "/",
    chunkFilename: "js/web-[name].js",
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },

  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: require.resolve("babel-loader"),
        },
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "build/webpack/tpl/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunksSortMode: "dependency",
    }),
  ],
};

if (process.env.NODE_ENV === "development") {
  config.devServer = {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    historyApiFallback: true,
    compress: true,
  };
}

module.exports = config;
