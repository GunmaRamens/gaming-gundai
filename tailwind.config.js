/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}", "node_modules/daisyui/dist/**/*.js", "node_modules/react-daisyui/dist/**/*.js"],
    theme: {
        extend: {
            minWidth: {
                "1/2": "50%",
                "1/3": "33.3%",
            },
        },
    },
    daisyui: {
        themes: ["dark"],
        //prefix: "daisy-", // React daisyUI does not support prefix
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-all", "& *");
        },
    ],
};
