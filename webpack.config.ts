import CopyPlugin from "copy-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import fs from "fs";
import HtmlPlugin from "html-webpack-plugin";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { Configuration, DefinePlugin } from "webpack";

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

    const isDev = argv.mode === "development";
    const isProd = argv.mode === "production";
    const isChrome = env.browser === "chrome";
    const isFirefox = env.browser === "firefox";

    return {
        entry: {
            popup: "./src/popup/index.tsx",
            options: "./src/options/index.tsx",
            ...loadFilesInScripts(),
        },

        output: {
            path: path.join(__dirname, "dist"),
            clean: true,
            filename: "[name].js",
            chunkFilename: "[name].chunk.js",
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
            minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
            splitChunks: {
                chunks: "all",
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        name: "vendors",
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                    },
                    default: false,
                },
            },
        },

        plugins: [
            isProd
                ? new DefinePlugin({
                      "process.env.NODE_ENV": JSON.stringify("production"),
                  })
                : new DefinePlugin({
                      "process.env.NODE_ENV": JSON.stringify("development"),
                  }),
            new ESLintPlugin({ extensions: ["js", "jsx", "ts", "tsx"] }),
            new CopyPlugin({
                patterns: [
                    {
                        from: ".",
                        to: ".",
                        context: "public",
                        priority: 0,
                        noErrorOnMissing: true,
                        globOptions: {
                            ignore: ["chrome", "firefox"].map((browser) => {
                                const ignoreFile = path.posix.join(__dirname, `public/manifest_${browser}.json`);
                                //console.log(ignoreFile);
                                return ignoreFile;
                            }),
                        },
                    },
                    {
                        from: ".",
                        to: "./assets",
                        context: "src/assets",
                        priority: 0,
                    },
                    {
                        from: isChrome
                            ? "./public/manifest_chrome.json"
                            : isFirefox
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

        devtool: isDev ? "source-map" : false,
    };
};
