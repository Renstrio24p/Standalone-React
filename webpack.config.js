const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'webpack.bundle.js',
    clean: true,
  },
  target: 'web',
  devServer: {
    port: '4500',
    static: {
      directory: path.join(__dirname, 'src')
},
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx','.json'],
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
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader","css-loader","sass-loader",],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.(mp4|webm|ogg|ogv)$/i,
        type: 'asset/inline',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './', 'index.html')
    }),
    new CopyPlugin({
        patterns: [
          { from: "src/images", to: "./" },
        ],
      }),
  ]
};