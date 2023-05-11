const name = 'index'
const path = require("path")

module.exports = {
    mode: "development",
    entry: "index.jsx",
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 200,
        poll: 100,
      },
    output: {
        path: path.resolve(__dirname, "./"),
        filename: [name] + '.react.jsx'
    },
    target: "web",
    devServer: {
        port: "5500",
        static: ["."],
        open: true,
        hot: true ,
        liveReload: true,
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,    
                exclude: /node_modules/,
                use:  'babel-loader' 
            }
        ]
    }
}