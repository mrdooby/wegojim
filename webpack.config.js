const path = require('path');

module.exports = {
  mode: "development",
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["babel-plugin-styled-components"]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
}