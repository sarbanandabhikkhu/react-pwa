const path = require("path");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");

const webpackPlugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "./public/index.html"),
    title: "React Progressive Web App",
    filename: "index.html",
  }),
  new Dotenv({
    path: "./.env",
    systemvars: true,
  }),
  new CopyPlugin({
    patterns: [
      { from: "./src/manifest.json", to: "" },
      { from: "./src/assets/favicon.ico", to: "assets" },
      // { from: "./src/assets/portrait.png", to: "assets" },
      // { from: "./src/assets/landscape.png", to: "assets" },
      { from: "./src/assets/logo_x48.png", to: "assets" },
      { from: "./src/assets/logo_x72.png", to: "assets" },
      { from: "./src/assets/logo_x96.png", to: "assets" },
      { from: "./src/assets/logo_x192.png", to: "assets" },
      { from: "./src/assets/logo_x128.png", to: "assets" },
      { from: "./src/assets/logo_x192.png", to: "assets" },
      { from: "./src/assets/logo_x384.png", to: "assets" },
      { from: "./src/assets/logo_x512.png", to: "assets" },
      { from: "./src/assets/maskable_icon_x48.png", to: "assets" },
      { from: "./src/assets/maskable_icon_x72.png", to: "assets" },
      { from: "./src/assets/maskable_icon_x96.png", to: "assets" },
      { from: "./src/assets/maskable_icon_x192.png", to: "assets" },
      { from: "./src/assets/maskable_icon_x128.png", to: "assets" },
      { from: "./src/assets/maskable_icon_x192.png", to: "assets" },
      { from: "./src/assets/maskable_icon_x384.png", to: "assets" },
      { from: "./src/assets/maskable_icon_x512.png", to: "assets" },
    ],
  }),
];

if ("production" === process.env.NODE_ENV) {
  webpackPlugins.push(
    new InjectManifest({
      swSrc: "./src/serviceWorker.js",
      swDest: "sw.js",
    })
  );
}

const config = {
  context: __dirname,
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "main.js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ico|svg|png|j[pe]g|webp|gif)$/,
        use: "file-loader?name=./images/[name].[ext]",
        // type: "asset/resource",
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: webpackPlugins,
};

module.exports = config;
