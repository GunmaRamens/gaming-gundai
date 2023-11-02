const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = module.exports = (env) => {
    merge(common(env), {
        mode: "development",

        devtool: "source-map",
    });
};
