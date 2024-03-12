const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const path = require('path');

module.exports = {
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
        ],
            },
        ],
    },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'main.html'
    }),
    new MiniCssExtractPlugin(),

  ]
};


