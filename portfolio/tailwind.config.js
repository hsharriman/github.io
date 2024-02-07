/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    extend: {},
    colors: {
      blue: "rgb(68, 133, 231)",
      pink: "rgb(252, 151, 218)",
      purple: "rgb(145, 106, 253)",
      mint: "rgb(97, 243, 219)",
      red: "rgb(255, 67, 67)",
      darkblue: "rgb(32, 61, 98)",
      backgroundblue: "rgb(8, 8, 29)",
    },
    fontFamily: {
      sans: ["Noto Sans SC", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     screens: {
//       sm: "480px",
//       md: "768px",
//       lg: "976px",
//       xl: "1440px",
//     },

//     extend: {
//       spacing: {
//         128: "32rem",
//         144: "36rem",
//       },
//       borderRadius: {
//         "4xl": "2rem",
//       },
//     },
//   },
// };
