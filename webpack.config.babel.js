import CopyPlugin from "copy-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import fs from "fs";
import path from "path";

const loadFilesInScripts = function () {
    const dir = path.join(__dirname, "src/scripts");
    const files = fs.readdirSync(dir);
    const entry = {};
    files.forEach(function (file) {
        const name = file.replace(".ts", "").replace("content_", "");
        entry[name] = path.join(dir, file);
    });
    return entry;
};

module.exports = {
    entry: loadFilesInScripts(),

    output: {
        path: path.join(__dirname, "dist"),
        clean: true,
    },

    resolve: {
        extensions: [".ts", ".js"],
        roots: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "src")],
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

    devtool: "source-map",
};
