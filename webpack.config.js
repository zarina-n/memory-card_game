const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'development'

module.exports = {
    entry: './src/js/index.js',
    mode: isProduction ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'static',
                    to: 'static',
                    noErrorOnMissing: true,
                },
            ],
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'game-screen.html',
            template: './game-screen.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    devtool: isProduction ? 'hidden-source-map' : 'source-map',
}
