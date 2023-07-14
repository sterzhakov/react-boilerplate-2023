/* eslint-disable @typescript-eslint/no-var-requires */
// Libs
const path = require("path");
const dotenv = require("dotenv");
const WebpackDotenv = require("dotenv-webpack");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin =
  require("webpack/lib/container/ModuleFederationPlugin");

// Other config
const commonConfig = require("./common");

// Initializers
const dotenvPath = path.resolve(__dirname, "../env/.module-federation.env");
dotenv.config({ path: dotenvPath });

// Env
const WEBPACK_STATIC_PUBLIC_PATH = process.env["WEBPACK_STATIC_PUBLIC_PATH"];

// Local constants
const MODULE_NAME = 'BusinessApp';
const MODULE_PATH = './components/root/ModuleFederation';

module.exports = () => {
  return merge(commonConfig, {
    cache: false,
    mode: "production",
    output: {
      filename: "js/bundle.[contenthash].min.js",
      path: path.resolve(__dirname, "../build/module-federation"),
      publicPath: WEBPACK_STATIC_PUBLIC_PATH,
      clean: true,
    },
    devtool: "source-map",
    plugins: [
      new WebpackDotenv({
        path: "./env/.module-federation.env",
      }),
      new ModuleFederationPlugin({
        name: MODULE_NAME,
        library: { type: "var", name: MODULE_NAME },
        filename: "remoteEntry.js",
        exposes: {
          [`./${MODULE_NAME}`]: MODULE_PATH,
        },
      }),
    ],
  });
};
