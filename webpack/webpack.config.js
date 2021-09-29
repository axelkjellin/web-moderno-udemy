const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    // mode: 'production', aqui cria no dist o arquivo minificado no develop cria diferente
    entry: './src/principal.js',
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    output : {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization : {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/, // arquivos com final css
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', //adicionando CSS a Dom injetando a tag <style></style>
                    'css-loader', // interpreta o @import, url() ...
                    'sass-loader'
                ]
            }
        ]
    }
}

//comand npm start (pq ta la no package.json) && node dist/main.js