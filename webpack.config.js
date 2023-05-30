const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 500,
  },
  entry: './src/index.jsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.webpack.js',
    clean: true,
  },
  target: 'web',
  devServer: {
    port: '5500',
    static: {
      directory: path.join(__dirname, 'src')
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
        use: 'babel-loader', 
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: ["style-loader","css-loader","sass-loader",],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './', 'index.html')
    }),
    new CopyPlugin({
        patterns: [
          { from: "src", to: "src" },
        ],
      }),
  ]
};
