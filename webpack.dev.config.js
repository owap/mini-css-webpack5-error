const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { htmlConfig, webpackConfig } = require('./webpack.config');

const plugins = [
  new HtmlWebpackPlugin({
    ...htmlConfig,
    title: 'BlackSky Apps',
  }),
  ...webpackConfig.plugins,
];
webpackConfig.plugins = plugins;

const devServer = {
  ...webpackConfig.devServer,
  historyApiFallback: true,
  open: true,
  publicPath: '/',
};
webpackConfig.devServer = devServer;

module.exports = {
  ...webpackConfig,
  mode: 'development',
  devtool: 'inline-source-map',
};
