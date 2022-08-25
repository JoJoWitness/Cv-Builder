const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/components/app.js',
  plugins: [new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'src/index.html'
            }),
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:"",
  },
  
  module: {
    rules: [
      {
        test: /\.(s[ac]ss||css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/i,
        use: {
            loader: 'file-loader',
            options: {
                name: "[name].[ext]",
                outputPath: "images",
                publicPath: 'images',
            }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
        },
    ],
  },
};

