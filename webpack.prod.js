const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        search: "./src/search.js",
        index: "./src/index.js",
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name]_[chunkhash:8].js",
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /.js$/,
                use: "babel-loader",
            },
            {
                test: /.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },
            {
                test: /.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name]_[hash:8].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]_[contenthash:8].css",
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html"),
            filename: "index.html",
            chunks: ["index"],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeCommeents: false,
            },
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/search.html"),
            filename: "search.html",
            chunks: ["search"],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeCommeents: false,
            },
        }),
    ],
};
