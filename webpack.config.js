const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpack = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/[name].[contenthash].js', 
     publicPath: '/'
  },
  target: 'web',
  devServer: {
    port: '4500',
    proxy: {
      '/api': {
        target: 'http://localhost:8800', // Proxy Origin 
        secure: false,
        changeOrigin: true,
      },
    },
    static: {
      directory: path.join(__dirname, 'src'),
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]', // Output path for images
        },
      },
      {
        test: /\.(mp4|webm|ogg|ogv)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'videos/[name].[contenthash][ext]', // Output path for videos
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(), // Minimize CSS
      new TerserPlugin(), // Minimize JavaScript
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 2000, 
      maxSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './', 'index.html'),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      'ReactRouterDOM': 'react-router-dom',
    }),
    new CopyWebpack({
      patterns: [
        {
          from: 'src/images', // image directory origin
          to: 'images', // image directory destination
        },
        {
          from: 'src/videos', // videos directory origin
          to: 'videos', // videos directory destination
        },
      ],
    }),
    new Dotenv(),
  ],
};

// You must not alter this configuration file for webpack unless you are a tester
