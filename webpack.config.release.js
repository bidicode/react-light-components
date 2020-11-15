const merge = require('webpack-merge');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./webpack.config');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(config, {
  mode: 'production',
  entry: {
    'main': ['./src/index.ts',
             './styles/index.scss']
  },
  output: {
    filename: `react-light-components.min.js`,
    chunkFilename: 'react-light-components.min.js',
    path: path.join(__dirname, 'dist/bundle'),
    libraryTarget: 'umd',
    library: 'react-light-components',
    umdNamedDefine: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'react-light-components.min.css',
      chunkFilename: 'react-light-components-[id].min.css'
    }),
    new BundleAnalyzerPlugin({ analyzerPort: 8888, openAnalyzer: false })
  ]
});
