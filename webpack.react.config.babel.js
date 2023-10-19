import CopyPlugin from "copy-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import fs from "fs";
import HtmlPlugin from "html-webpack-plugin";
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

module.exports = () => {
    return {
        entry: {
            popup: "./src/popup/index.tsx",
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
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: { url: false },
                        },
                        "postcss-loader",
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
            new ESLintPlugin(),
            new CopyPlugin({
                patterns: [
                    {
                        from: ".",
                        to: ".",
                        context: "public",
                        priority: 0,
                    },
                    {
                        from: "manifest.react.json",
                        to: "manifest.json",
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
        ],

        performance: {
            hints: false,
        },

        devtool: "source-map",
    };
};