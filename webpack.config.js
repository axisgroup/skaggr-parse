var webpack = require("webpack");

var config = {
    // context: __dirname,
    entry: {
        app: './src/index.js',
    },
    output: {
        path: __dirname + "/dist", // `dist` is the destination
        filename: "skaggr-parse.js",
        libraryTarget: "umd",
        library: "skaggrParse",
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    /*
    resolve: {
        root: "./",
        extensions: ["",".js"]
    }
    */
};

module.exports = config;