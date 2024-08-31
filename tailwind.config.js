/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        icewhite: "#ebebeb",
        grey: "#5d5d5d",
        lightblue: "#00f2ff",
        darkblue: "#1a2238",
        blackblue: "#0c1220",
        blue: "#0088fb ",
        tastycolor: "#70B9BE",
        silentmooncolor: "#FFD5BD",
        instorcolor: "#E3964A",
      },
    },
  },
  plugins: [],
};
