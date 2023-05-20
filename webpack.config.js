const path = require("path");


module.exports={
   
    mode: "development",   
    entry: "./src/index.jsx", 
    output: {

        path: path.resolve(__dirname, "./runtime"),
        
        filename: "index.react.js"
    },
    
    target: "web",
    devServer: {
        port: "9500",
        
        static: ["./"],
       
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
