const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/playerStatsCard.js',
  output: {
    filename: 'playerStatsCard.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
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
};
