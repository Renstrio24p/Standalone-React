const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { execSync } = require('child_process');

execSync('node webpack.test.js');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/[name].[contenthash].js', // Use contenthash for cache-busting
    // clean: true,
  },
  target: 'web',
  devServer: {
    port: '4500',
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
      minSize: 2000, // Adjust this value as needed, e.g., 20000 bytes
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
  ],
};
