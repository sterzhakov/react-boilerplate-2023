/* eslint-disable @typescript-eslint/no-var-requires */
// Libs
const path = require("path");
const dotenv = require("dotenv");
const WebpackDotenv = require("dotenv-webpack");
const { merge } = require("webpack-merge");

// Other config
const commonConfig = require("./common");

// Initializers
const dotenvPath = path.resolve(__dirname, "../env/.standalone.env");
dotenv.config({ path: dotenvPath });

// Env
const WEBPACK_STATIC_PUBLIC_PATH = process.env["WEBPACK_STATIC_PUBLIC_PATH"];

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    filename: "js/bundle.min.js",
    path: path.resolve(__dirname, "../build/standalone"),
    publicPath: WEBPACK_STATIC_PUBLIC_PATH,
    clean: true,
  },
  devtool: "source-map",
  plugins: [
    new WebpackDotenv({
      path: "./env/.standalone.env",
    }),
  ],
});
