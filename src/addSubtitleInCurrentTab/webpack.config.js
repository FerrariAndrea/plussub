// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/addSubtitleInCurrentTab/index.ts',
  output: {
    filename: 'addSubtitleInCurrentTab.js',
    path: `${path.resolve(__dirname)}/../../dist`
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '+': path.resolve(__dirname),
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  }
};