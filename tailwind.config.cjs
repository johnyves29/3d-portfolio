/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // "hero-pattern": "url('https://th.bing.com/th/id/R.ecb456125d721a750b37f9c7cb0f9373?rik=fS0Yf3YCAs2y2w&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2f4%2f5%2f615809.jpg&ehk=kwfkp%2fW%2bmWIDAMcQ6h4g1xq8b7H48SoXAAehKJqFhMY%3d&risl=&pid=ImgRaw&r=0')",
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
