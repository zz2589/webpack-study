const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        search: "./src/search.js",
        index: "./src/index.js",
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].sb.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /.js$/,
                use: "babel-loader",
            },
            {
                test: /.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10240,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
};
