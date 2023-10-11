const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'assets/[name].[contenthash].js',
      chunkFilename: 'assets/[name].[contenthash].js',
    },
    target: 'web',
    devServer: {
      port: '4500',
      proxy: {
        '/api': {
          target: 'http://localhost:8800',
          secure: false,
          changeOrigin: true,
        },
      },
      static: {
        directory: path.join(__dirname, 'src'),
      },
      open: true,
      hot: !isProduction,
      liveReload: !isProduction,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /node_modules/,
          use: {
            loader: 'esbuild-loader',
            options: {
              target: 'es2015',
            },
          },
        },
        {
          test: /\.js(x)$/,
          use: {
            loader: 'esbuild-loader',
            options: {
              target: 'es2015',
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
            filename: 'images/[name].[contenthash][ext]',
          },
        },
        {
          test: /\.(mp4|webm|ogg|ogv)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'videos/[name].[contenthash][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './', 'index.html'),
      }),
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
        ReactRouterDOM: 'react-router-dom',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/images',
            to: 'images',
          },
          {
            from: 'src/videos',
            to: 'videos',
          },
        ],
      }),
      new Dotenv(),
    ],
    optimization: {
      minimize: isProduction,
      splitChunks: {
        chunks: 'async',
        minSize: 244 * 1024, // 244 KiB
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    performance: {
      maxAssetSize: 244000, // Set the maximum asset size
      maxEntrypointSize: 244000, // Set the maximum entry point size
    },
    cache: {
      type: 'filesystem',
    },
  };
};
