const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    "home": path.resolve(__dirname, 'src/entries/home.js'),
    "redux": path.resolve(__dirname, 'src/entries/redux.js'),
    "prueba": path.resolve(__dirname, 'src/entries/prueba.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    port: 9000,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets : ['@babel/preset-react'],
            plugins: [require('@babel/plugin-proposal-class-properties')]
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          }
        }
      },
    ]
  }
}
