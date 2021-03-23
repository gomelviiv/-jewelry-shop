var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      Assets: path.resolve(__dirname, './assets/'),
      Components: path.resolve(__dirname, '../src/components/'),
      Pages: path.resolve(__dirname, '../src/pages/'),
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader?url=false',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      { test: /\.tsx?$/, loader: 'babel-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader' },

      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
};
