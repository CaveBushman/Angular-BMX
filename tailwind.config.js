module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  darkMode: "media",
  plugins: [require("flowbite/plugin"), require("@tailwindcss/line-clamp"), require('flowbite/plugin')],
};
