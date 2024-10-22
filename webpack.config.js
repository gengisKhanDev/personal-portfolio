const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js', // La entrada de tu proyecto
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Para que las rutas funcionen correctamente
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/, // Procesa imágenes y fuentes
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Usa tu archivo HTML de la carpeta public
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: 'dist' }, // Copia todos los archivos de 'public' a 'dist'
      ],
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
