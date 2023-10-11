/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");


module.exports = {
    entry: {
        content: "./src/content.ts",
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
        ],
    },

    plugins: [
        new CopyPlugin({
            patterns: [{ from: ".", to: ".", context: "public" }],
        }),
        new ESLintWebpackPlugin(),
    ],
};
