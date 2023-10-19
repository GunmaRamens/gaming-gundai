/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            minWidth: {
                "1/2": "50%",
                "1/3": "33.3%",
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
        },
    ],
};
