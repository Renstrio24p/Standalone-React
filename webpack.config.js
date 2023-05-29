
const path = require("path");

module.exports={
   
    mode: "development",   
    entry: "./src/index.jsx", 
    output: {

        path: path.resolve(__dirname, "runtime/"),
        
        filename: "index.js"
    },
    
    target: "web",
    devServer: {
        port: "0",
        
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
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              }
        ],
    },
}
