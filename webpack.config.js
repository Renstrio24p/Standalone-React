const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const startTime = Date.now();

  const devServerOptions = {
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
      // publicPath: '/'
    },
    open: true,
    hot: !isProduction,
    liveReload: !isProduction,
    historyApiFallback: true,
  };

  if (isProduction) {
    devServerOptions.client = {
      logging: 'none',
    };
  }


  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'assets/[name].[contenthash].js',
      chunkFilename: 'assets/[name].[contenthash].js',
      // publicPath: '/',
    },
    target: 'web',
    devServer: devServerOptions,
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
              target: 'esnext',
            },
          },
        },
        {
          test: /\.(jsx)?$/,
          use: {
            loader: 'esbuild-loader',
            options: {
              loader: 'jsx',
              target: 'es2015',
              minify: true,
            },
          },
        },
        {
          test: /\.(c|sa|sc)ss$/,
          exclude: /\.module\.(c|sa|sc)ss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            {
              loader: 'esbuild-loader',
              options: {
                loader:'css',
                minify: true,
                target: 'es2015',
              },
            },
          ],
        },
        {
          test: /\.module\.(c|sa|sc)ss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'sass-loader',
            {
              loader: 'esbuild-loader',
              options: {
                loader: 'css',
                minify: true,
                target: 'es2015',
              },
            },
          ],
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
      maxAssetSize: 244000,
      maxEntrypointSize: 244000,
    },
    cache: {
      type: 'filesystem',
    },
    stats: 'errors-warnings',
  };
};
