const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      main: './assets/js/main.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/js/[name].[contenthash].js',
      clean: true,
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name][ext]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/webfonts/[name][ext]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: false,
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        } : false
      }),
      new HtmlWebpackPlugin({
        template: './oferta.html',
        filename: 'oferta.html',
        inject: false,
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        } : false
      }),
      new HtmlWebpackPlugin({
        template: './kontakt.html',
        filename: 'kontakt.html',
        inject: false,
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        } : false
      }),
      new HtmlWebpackPlugin({
        template: './polityka_prywatnosci.html',
        filename: 'polityka_prywatnosci.html',
        inject: false,
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        } : false
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'assets/images',
            to: 'assets/images',
            noErrorOnMissing: true
          },
          {
            from: 'assets/css',
            to: 'assets/css',
            noErrorOnMissing: true
          },
          {
            from: 'assets/js',
            to: 'assets/js',
            globOptions: {
              ignore: ['**/main.js']
            },
            noErrorOnMissing: true
          },
          {
            from: 'assets/webfonts',
            to: 'assets/webfonts',
            noErrorOnMissing: true
          },
          {
            from: 'robots.txt',
            to: 'robots.txt',
            noErrorOnMissing: true
          },
          {
            from: 'sitemap.xml',
            to: 'sitemap.xml',
            noErrorOnMissing: true
          },
          {
            from: 'site.webmanifest',
            to: 'site.webmanifest',
            noErrorOnMissing: true
          }
        ]
      }),
      ...(isProduction ? [
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name].[contenthash].css'
        })
      ] : [])
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'assets')
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  };
};
