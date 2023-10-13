/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    entry: {
        sso: "./src/content_sso.ts",
        moodle: "./src/content_moodle.ts",
        kyomu: "./src/content_kyomu.ts",
        background: "./src/background.ts",
    },

    output: {
        path: Path.join(__dirname, "dist"),
        clean: true,
    },

    resolve: {
        extensions: [".ts", ".js"],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.(css|sass|scss)/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { url: false },
                    },
                    {
                        loader: "sass-loader",
                        options: {},
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: ".", to: ".", context: "public" },
                { from: ".", to: "./assets", context: "src/assets" },
            ],
        }),
        new ESLintPlugin(),
    ],
    //devtool: "source-map",
};
