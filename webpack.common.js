const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const fs = require("fs");
const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");

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
    entry: {
        popup: "./src/popup/index.tsx",
        options: "./src/options/index.tsx",
        ...loadFilesInScripts(),
    },

    output: {
        path: path.join(__dirname, "dist"),
        clean: true,
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        roots: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "src")],
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.(css|sass|scss|pcss)/,
                use: [
                    CssMinimizerPlugin.loader,
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { url: false },
                    },
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },

    plugins: [
        new ESLintPlugin({ extensions: ["js", "jsx", "ts", "tsx"] }),
        new CopyPlugin({
            patterns: [
                {
                    from: ".",
                    to: ".",
                    context: "public",
                    priority: 0,
                },
                {
                    from: ".",
                    to: "./assets",
                    context: "src/assets",
                },
            ],
        }),
        new HtmlPlugin({
            template: "./src/popup/index.html",
            filename: "popup.html",
            chunks: ["popup"],
        }),
        new HtmlPlugin({
            template: "./src/options/index.html",
            filename: "options.html",
            chunks: ["options"],
        }),
    ],

    performance: {
        maxEntrypointSize: 2000000,
        maxAssetSize: 2000000,
    },
};
