const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans]
            },
            height: {
                container: "calc(100% - 3.5rem)"
            },
            transitionProperty: {
                width: "width"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
