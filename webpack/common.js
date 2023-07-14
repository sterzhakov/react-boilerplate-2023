/* eslint-disable @typescript-eslint/no-var-requires */
// Libs
const path = require('path')
const { ProvidePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Initializers
const projectPath = path.resolve(path.resolve(__dirname, '../'))
const srcPath = path.resolve(path.resolve(projectPath, 'src'))
const publicPath = path.resolve(path.resolve(projectPath, 'public'))

module.exports = {
  entry: './index.tsx',
  resolve: {
    alias: {
      src: srcPath,
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  context: srcPath,
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(publicPath, 'index.html.ejs'),
    }),
    new ProvidePlugin({
      React: 'react', // automatically import react where needed
    }),
  ],
}
