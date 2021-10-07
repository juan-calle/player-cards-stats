const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/components/player-stats-card/playerStatsCard.js',
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    publicPath: '/dist/',
    open: true,
  },
  experiments: {
    topLevelAwait: true,
  },
  plugins: [new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })],
  watch: true,
  watchOptions: {
    ignored: ['node_modules/**'],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        loader: 'css-loader',
        exclude: /node_modules/,
        options: {
          sourceMap: false,
        },
      },
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'node_modules')],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].bundle.js',
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false,
          },
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
