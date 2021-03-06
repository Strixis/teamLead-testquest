const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractplugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const imgOutput = 'sources/img/[name][ext]';
const videoOutput = 'sources/video/[name][ext]';
const fontsOutput = 'sources/fonts/[name][ext]';

module.exports = (_, { mode }) => ({
  entry: path.resolve(__dirname, 'src', 'index.js'),
  devtool: mode === 'production' ? false : 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '',
  },
  resolve: {
    extensions: [
      '.js',
      '.sass',
    ],
    alias: {
      styles: path.resolve(__dirname, 'src', 'assets', 'styles'),
      fonts: path.resolve(__dirname, 'src', 'assets', 'fonts'),
      img: path.resolve(__dirname, 'src', 'assets', 'img'),
      scripts: path.resolve(__dirname, 'src', 'assets', 'scripts'),
      video: path.resolve(__dirname, 'src', 'assets', 'video')
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/i,
          /dist/i,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          mode === 'production' ? {
            loader: MiniCssExtractplugin.loader,
            options: {
              publicPath: '',
            },
          } : 'style-loader',
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          mode === 'production' ? MiniCssExtractplugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(jp(e)?g|png|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: `${imgOutput}`,
        },
      },
      {
        test: /\.mp4$/,
        type: 'asset/resource',
        generator:{
          filename: `${videoOutput}`,
        },
      },
      {
        test: /^favicon\.(jp(e)?g|png|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: `${fontsOutput}`,
        }
      },
    ],
  },
  optimization: {
    minimize: mode === 'production' ? true : false,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'LevelUp!',
      favicon: path.resolve(__dirname, 'src', 'favicon.png'),
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractplugin({
      filename: 'index.css',
    }),
  ],
});
