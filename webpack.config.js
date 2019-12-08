const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader',
        exclude: [/node_modules/, /build/],
      },
    ],
  },
  resolve: {
    extensions: ['.js','.jsx', '.css'],
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(process.cwd(), 'app'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './app',
  },
};
