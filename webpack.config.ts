import CopyPlugin from "copy-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import fs from "fs";
import HtmlPlugin from "html-webpack-plugin";
import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { Configuration } from "webpack";

const loadFilesInScripts = function () {
    const dir = path.join(__dirname, "src/scripts");
    const files = fs.readdirSync(dir);
    const entry = {} as {
        [key: string]: string;
    };
    files.forEach(function (file) {
        const name = file.replace(".ts", "").replace("content_", "");
        entry[name] = path.join(dir, file);
    });
    return entry;
};

interface Env {
    browser?: "chrome" | "firefox";
    WEBPACK_BUILD: boolean;
    WEBPACK_BUNDLE: boolean;
}

interface Argv {
    mode: "development" | "production";
    env: Env;
}

module.exports = (env: Env, argv: Argv): Configuration => {
    console.log("Build as " + argv.mode + " mode");

    if (env.browser === undefined) {
        throw new Error("Please set browser");
    }

    return {
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
            plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, "tsconfig.json") })],
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
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

        optimization: {
            minimizer: [new CssMinimizerPlugin()],
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
                        priority: 0,
                    },
                    {
                        from:
                            env.browser === "chrome"
                                ? "./public/manifest_chrome.json"
                                : env.browser === "firefox"
                                ? "./public/manifest_firefox.json"
                                : "./public/manifest_chrome.json",
                        to: "./manifest.json",
                        priority: 1,
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

        devtool: argv.mode !== "development" ? false : "source-map",
    };
};
