const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      // JS files
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // SCSS files
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({
                  autoprefixer: { browsers: ['last 4 version'] }
                })
              ]
            }
          },
          'sass-loader'
        ]
      },
      // Images
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 85
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '75-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              }
            }
          },
        ]
      },
      // HTML|PHP files
      {
        test: /\.(html|php)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.*']),
    new HtmlWebpackPlugin({
      filename: 'index.php',
      template: 'src/index.php'
    }),
    new MiniCssExtractPlugin({}),

  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
