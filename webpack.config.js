const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devServer: {
    hot: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    contentBase: './dist',
    historyApiFallback: true,
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/assets/images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|gif|)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[ext]/[name].[ext]',
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './src/assets', to: 'assets' },
      ],
    }),
    new CleanWebpackPlugin()
  ],
}
