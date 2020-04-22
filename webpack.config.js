const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, parameters) => ({
  output: {
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
});