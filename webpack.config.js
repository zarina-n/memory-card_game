const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    entry: {
        choice: './src/js/level_choice.ts',
        game: './src/js/game_screen.ts',
        style: './src/css/style.css',
    },
    mode: isProduction ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
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
    resolve: {
        extensions: ['.ts', '.js'],
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
            chunks: ['choice', 'style'],
        }),
        new HtmlWebpackPlugin({
            filename: 'game-screen.html',
            template: './game-screen.html',
            chunks: ['game', 'style'],
        }),
        new MiniCssExtractPlugin(),
    ],
    devtool: isProduction ? 'hidden-source-map' : 'source-map',
}
