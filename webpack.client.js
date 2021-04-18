
const path = require('path')


const client ={
    entry:"./src/client/client.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"public")
    },
    watch:true,
    mode:"development",
    module:{
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
      
}

module.exports = client