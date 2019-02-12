const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/entrypoint.ts'],
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'dist/public')
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      }
    ]
  },
  plugins: [new HardSourceWebpackPlugin()],
  externals: [/^[a-z\-0-9]+$/]
}