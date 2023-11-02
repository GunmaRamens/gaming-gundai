/** @type {import("prettier").Config} */
export default {
    tabWidth: 4,
    singleQuote: false,
    trailingComma: "all",
    semi: true,
    endOfLine: "lf",
    printWidth: 130,
    htmlWhitespaceSensitivity: "ignore",
    plugins: ["stylelint-prettier", "prettier-plugin-sh"],
};
