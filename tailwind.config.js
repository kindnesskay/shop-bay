import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      ...defaultTheme.screens,
      xs: "420px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
