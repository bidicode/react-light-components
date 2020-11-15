const path = require('path');

const merge = require('webpack-merge');
const config = require('./webpack.config');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(config, {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist/dev'),
    filename: `react-light-components-dev.js`,
    chunkFilename: '[name]-bundle.js',
  },
  entry: './dev/index.tsx',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebPackPlugin({
      template: './dev/index.html',
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin({ analyzerPort: 8800, openAnalyzer: false })
  ],
  devServer: {
    inline: true,
    port: 8000,
    contentBase: './dev/dist',
    open: true
  }
});
