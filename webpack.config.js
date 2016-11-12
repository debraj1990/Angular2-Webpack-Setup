var webpack = require("webpack");
var HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: "./dist",
        filename: "app.bundle.js"
    },
    module : {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts'
        }]
    },
    resolve: {
        extensions: ["", ".js", ".ts"]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}
