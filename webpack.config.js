const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const isReactRouterDomUsed = (() => {
  try {
    require.resolve('react-router-dom');
    return true;
  } catch (error) {
    return false;
  }
})();

module.exports = (argv) => {
  const isProduction = argv.mode === 'production';
  const publicPath = isReactRouterDomUsed ? '/' : '';

  const devServerOptions = {
    port: 4500,
    proxy: { '/api': { target: 'http://localhost:8800', secure: false, changeOrigin: true } },
    static: { directory: path.join(__dirname, 'src'), publicPath },
    open: true,
    hot: !isProduction,
    liveReload: !isProduction,
    historyApiFallback: true,
  };

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'assets/[name].[contenthash].js' : 'assets/[name].js',
      chunkFilename: isProduction ? 'assets/[name].[contenthash].js' : 'assets/[name].js',
      publicPath,
    },
    target: 'web',
    devServer: devServerOptions,
    resolve: { extensions: ['.js', '.jsx', '.json'] },
    module: {
      rules: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: 'esbuild-loader', options: { loader: 'jsx', target: 'es2015', minify: isProduction } } },
        { test: /\.(c|sa|sc)ss$/, exclude: /\.module\.(c|sa|sc)ss$/, use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'sass-loader', 'esbuild-loader'] },
        { test: /\.module\.(c|sa|sc)ss$/, use: ['style-loader', { loader: 'css-loader', options: { modules: true } }, 'sass-loader', 'esbuild-loader'] },
        { test: /\.(png|jpe?g|gif|svg|webp)$/i, type: 'asset/resource', generator: { filename: 'images/[name].[contenthash][ext]' } },
        { test: /\.(mp4|webm|ogg|ogv)$/i, type: 'asset/resource', generator: { filename: 'videos/[name].[contenthash][ext]' } },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'index.html' }),
      new webpack.ProvidePlugin({ React: 'react', ReactDOM: 'react-dom' }),
      new CopyWebpackPlugin({ patterns: [{ from: 'src/images', to: 'images' }, { from: 'src/videos', to: 'videos' }] }),
      new Dotenv(),
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin({ terserOptions: { compress: { drop_console: isProduction } } })],
      splitChunks: { chunks: 'all', minSize: 250, cacheGroups: { defaultVendors: { test: /[\\/]node_modules[\\/]/, priority: -10 }, default: { minChunks: 2, priority: -20, reuseExistingChunk: true } } },
    },
    performance: { hints: isProduction ? 'warning' : false, maxAssetSize: 450 * 1024, maxEntrypointSize: 450 * 1024 },
    cache: { type: 'filesystem' },
    stats: 'errors-warnings',
    devtool: isProduction ? 'source-map' : 'eval-source-map',
  };
};
