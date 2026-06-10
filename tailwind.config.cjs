/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Roboto",
          "LXGW WenKai",
          "Noto Sans CJK SC",
          "PingFang SC",
          "Microsoft YaHei",
          ...defaultTheme.fontFamily.sans,
        ],
        display: [
          "Iowan Old Style",
          "Songti SC",
          "Noto Serif CJK SC",
          "STSong",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
