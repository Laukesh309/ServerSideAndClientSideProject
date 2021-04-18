

const path = require('path')
// const nodeExternals = require('webpack-node-externalscl')

module.exports={
    target:'node',
    entry:"./src/index.js",
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    mode:"development",
    watch: true,
    module: {
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
// module.exports =server