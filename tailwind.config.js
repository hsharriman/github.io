/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ["Noto Sans", "Helvetica", "sans-serif"],
        notoSerif: ["Noto Serif", "Georgia", "serif"],
        ibmMono: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        themeBlue: "rgb(68, 133, 231)",
        themePink: "rgb(252, 151, 218)",
        themePurple: "rgb(145, 106, 253)",
        themePurpleLight: "rgb(195, 173, 255)",
        themeMint: "rgb(97, 243, 219)",
        themeRed: "rgb(255, 67, 67)",
        themeDarkBlue: "rgb(32, 61, 98)",
        themeBackgroundBlue: "rgb(8, 8, 29)",
      },
      // that is animation class
      animation: {
        fade: "fadeOut 3s ease-in",
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.red.300") },
          "100%": { backgroundColor: theme("colors.white") },
        },
      }),
    },
  },
  plugins: [],
};
