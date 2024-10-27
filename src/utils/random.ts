// CONSTS=======================================

const COLORS = [
  "text-themeBlue",
  "text-themeMint",
  "text-themePurple",
  "text-themeRed",
  "text-themePink",
];

// RANDOM COLOR UTIL FUNCTIONS =======================================

export const randomColor = () => COLORS[Math.floor(Math.random() * 5)];

export const randomTextColor = () => "text-" + randomColor();

export const initRandomClrArr = (len: number) =>
  new Array(len).fill("").map(() => randomColor());

export const numCharsInArr = (arr: string[]) =>
  arr.reduce((prev, curr) => {
    return prev + curr.length;
  }, 0);

export const initBoolArr = (len: number) => new Array(len).fill(false);

export const randomSparkleCallback = (
  num: number,
  last: boolean[],
  setStateFn: (newState: boolean[]) => void
) =>
  setInterval(() => {
    // reset old active letter
    const idx = Math.floor(Math.random() * num);
    last[idx] = true;
    // set new active
    setStateFn(last);
    setTimeout(() => {
      // reset the active letter
      last[idx] = false;
      setStateFn(last);
    }, 1000);
  }, 300);

export const hoverTextClr = (clr: string) => {
  switch (clr) {
    case "blue":
      return "hover:text-themeBlue";
    case "mint":
      return "hover:text-themeMint";
    case "purple":
      return "hover:text-themePurple";
    case "red":
      return "hover:text-themeRed";
    case "pink":
      return "hover:text-themePink";
    default:
      return "hover:text-white";
  }
};
