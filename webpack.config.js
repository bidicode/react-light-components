const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
  },
  module: { 
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        loaders: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 0 } },
          'sass-loader'
        ]
      }
    ]
  }
};

