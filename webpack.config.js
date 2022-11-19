const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   entry: './client/index.js',
   output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundle.js'
   },
   mode: process.env.NODE_ENV,
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                         "@babel/preset-env", '@babel/preset-react'
                    ]
                    
                }
                
            },
         },
          {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      ]
   },
   plugins: [new HtmlWebpackPlugin({
    template: '/index.html'
   })],
   devServer: {
    // static: {
    //     directory: path.join(__dirname, '/build/bundle.js'),
    // },
    compress: true,
    port: 8080,
    proxy: {
        '/api': 'http://localhost:3000',
     },
    },
   
}

