const webpack = require('webpack');

module.exports = {
    entry : [
        "./src/index.js"    
    ],
    output: {
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        publicPath: '/',
        host: '0.0.0.0',
        port: 4000,
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loaders: [ 'babel-loader' ]
        }] 
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
};

