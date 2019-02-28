const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    ]

  return {
    entry: {
      "home": path.resolve(__dirname, 'src/entries/home.js'),
      "redux": path.resolve(__dirname, 'src/entries/redux.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: path.resolve(__dirname, 'dist')+"/",
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
    },
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
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {}
              },
                'css-loader'
              ],
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}
