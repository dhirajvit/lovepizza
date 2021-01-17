const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let outputPath = __dirname + '/test-dist/';
let glob = require('glob');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: glob.sync(__dirname + '/app/test/**/*.test.*'),
  devtool: 'eval-source-map',
  output: {
    path: outputPath,
  },
  target: 'node',
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder from bundling
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: {
              removeViewBox: false,
            },
          },
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
