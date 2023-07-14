/* eslint-disable @typescript-eslint/no-var-requires */
// Libs
const path = require('path')
const dotenv = require('dotenv')
const WebpackDotenv = require('dotenv-webpack')
const { merge } = require('webpack-merge')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

// Other config
const commonConfig = require('./common')

// Initializers
const dotenvPath = path.resolve(__dirname, '../env/.development.env')
dotenv.config({ path: dotenvPath })

// Env
const WEBPACK_STATIC_PUBLIC_PATH = process.env['WEBPACK_STATIC_PUBLIC_PATH']

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    hot: true, // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
    client: {
      overlay: false,
    },
  },
  output: {
    publicPath: WEBPACK_STATIC_PUBLIC_PATH,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new WebpackDotenv({ path: './env/.development.env' }),
    new ReactRefreshPlugin({ overlay: false }),
  ],
})
