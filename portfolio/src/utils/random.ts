const COLORS = [
  "text-themeBlue",
  "text-themeMint",
  "text-themePurple",
  "text-themeRed",
  "text-themePink",
];
export const randomColor = () => COLORS[Math.floor(Math.random() * 5)];

export const randomTextColor = () => "text-" + randomColor();
