const PATH = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      api: PATH.resolve(__dirname, 'src/apiService/'),
      fixtures: PATH.resolve(__dirname, 'src/fixtures/'),
      assets: PATH.resolve(__dirname, 'src/assets/'),
      theme: PATH.resolve(__dirname, 'src/theme/'),
      components: PATH.resolve(__dirname, 'src/components/'),
      containers: PATH.resolve(__dirname, 'src/containers/'),
      store: PATH.resolve(__dirname, 'src/store/'),
      HOC: PATH.resolve(__dirname, 'src/HOC'),
    },
    extensions: ['.js', '.jsx', '.css'],
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
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg|woff|woff2|ttf|otf|eot)$/i,
        use: [
          '@svgr/webpack',
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Phoenix',
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
