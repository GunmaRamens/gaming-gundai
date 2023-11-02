const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = (env) => {
    return merge(common(env), {
        mode: "production", // 本番モード
    });
};
