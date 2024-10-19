const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // La entrada de tu proyecto
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Esto asegura que los archivos sean servidos desde la raíz
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Asegúrate de que este es tu archivo HTML
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Sirve archivos desde 'public'
    },
    port: 3000,
    historyApiFallback: true, // Para manejar rutas en aplicaciones SPA
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
