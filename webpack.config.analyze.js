const merge = require('webpack-merge');

const config = require('./webpack.config.release');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(config, {
  plugins: [
    new BundleAnalyzerPlugin({ analyzerPort: 8888, openAnalyzer: false })
  ]
});
