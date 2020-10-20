const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const template = require('html-webpack-template');
const webpack = require('webpack');

const htmlConfig = {
  template,
  appMountId: 'root',
  links: [
    'https://fonts.googleapis.com/css?family=Roboto:300,400|Libre+Franklin:400,500,700&display=swap',
    'https://use.typekit.net/fwi8kgn.css',
  ],
  title: 'Demo App',
};

const exclude = /node_modules/;

const webpackConfig = {
  target: 'web',
  entry: './src/index.js',
  resolve: {
    symlinks: false, // So we can npm link our libs
  },
  node: {
    global: true,
  },
  output: {
    chunkFilename: '[name].[chunkhash].js',
    filename: '[name].[contenthash].js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s)?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude,
      },
      {
        test: /\.m?js$/,
        use: ['babel-loader'],
        exclude,
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: ['file-loader'],
        exclude,
      },
    ],
  },
};

module.exports = {
  htmlConfig,
  webpackConfig,
};
