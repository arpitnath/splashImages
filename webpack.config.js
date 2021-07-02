/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.ts')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'splash images'
    }),
    new ESLintPlugin({
      extensions: ['js', 'js', 'ts', 'ts']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}
