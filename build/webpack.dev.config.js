const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devServer: {
    host: '0.0.0.0',
    compress: true,
    historyApiFallback: true,
    contentBase: path.resolve('static'),
    publicPath: '/',
    before: function(app, server, compiler) {
      app.use(require('body-parser').json());
      app.post('/vuestro-dev-console/:level', function(req, res) {
        if (req.body[0] === null | req.body[0] === undefined) {
          console[req.params.level](`[${req.ip}] [${req.params.level}]`, 'null or undefined');
        } else {
          console[req.params.level](`[${req.ip}] [${req.params.level}]`, ...req.body);
        }
        res.json({});
      });
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
    }),
  ],
  optimization: {
    noEmitOnErrors: true,
  },
});
