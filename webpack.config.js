const webpack = require('webpack');
// const MinifyPlugin = require("babel-minify-webpack-plugin");
module.exports = {
    module: {
        rules: [
            {test: /.js$/, loader: 'babel-loader',exclude: /node_modules/}
        ]
    },
    plugins: [
        // new MinifyPlugin()
    ]
};