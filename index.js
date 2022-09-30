//GLOBALS
let NUM_SPARKLE_LETTERS = 0;

getNumSparkle = () => {
  return NUM_SPARKLE_LETTERS;
};

// CONSTS
const SPARKLE_TEXT = [
  { str: "HWEI-SHIN", containerId: "landing-name" },
  { str: "HARR-IMAN", containerId: "landing-name" },
  { str: "Software Engineer & Designer", containerId: "landing-subtitle" },
  { str: "ABOUT", dashes: 1, containerId: "about-title" },
  { str: "PUBLICATIONS", dashes: 1, containerId: "publications-title" },
  { str: "PROJECTS", dashes: 1, containerId: "projects-title" },
];

const COLORS = ["blue", "mint", "purple", "red", "pink"];

// ON LOAD FUNCTIONS
function onload(txtPath) {
  loadText(txtPath);
  setGalleryHeight();
  window.addEventListener("resize", setGalleryHeight);
  fadeIn();
}

function onloadHome() {
  NUM_SPARKLE_LETTERS = createSparkleLetters();
  new CircleManager();
  fadeIn();
}

function onloadTextOnly(txtPath) {
  loadText(txtPath);
  fadeIn();
}

// ON LOAD HELPERS
function fadeIn() {
  let i = 0;
  for (let ele of document.getElementsByClassName("fade")) {
    ele.style.transitionDelay = `${0.5 * i}s`;
    ele.style.transform = "translateY(0rem)";
    ele.style.opacity = 1;
    i++;
  }
}

function createSparkleLetters() {
  let idCount = 0;
  SPARKLE_TEXT.map((obj, objInd) => {
    const container = document.getElementById(obj.containerId);

    obj.str.split("").map((char) => {
      if (char === " ") {
        let spanEle = document.createElement("span");
        spanEle.innerHTML = "&nbsp;";
        container.appendChild(spanEle);
      } else {
        //additional linebreak spans
        if (idCount === 4 || idCount === 9 || idCount === 14) {
          container.appendChild(document.createElement("br"));
        }
        if (idCount === 35 || idCount === 55 || idCount === 66) {
          let lineBreak = document.createElement("span");
          lineBreak.className = "secondlinebreak";
          lineBreak.appendChild(document.createElement("br"));
          container.appendChild(lineBreak);
        }
        let letter = createLetterSpan(char, idCount);
        container.appendChild(letter);
        idCount++;
      }
    });

    // add dashes if necessary
    if (obj.dashes) {
      for (let i = 0; i < obj.dashes; i++) {
        let mdash = createLetterSpan("_", idCount);
        container.appendChild(mdash);
        idCount++;
      }
    }
  });
  return idCount;
}

function createLetterSpan(innerHTML, idCount) {
  let letter = document.createElement("span");
  letter.innerHTML = innerHTML;
  letter.className = randomColor();
  letter.id = idCount.toString();
  return letter;
}

class Circle {
  constructor(left, top, color, id) {
    this.id = `circle${id}`;
    this.setPosition(left, top);
    this.setColor(color);
  }

  setPosition(left, top) {
    let circle = document.getElementById(this.id);
    circle.style.top = `${top}rem`;
    circle.style.left = `${left}vw`;
  }

  setColor(color) {
    document.getElementById(this.id).addEventListener("mouseover", () => {
      let circle = document.getElementById(this.id);
      circle.style.color = `var(--${color})`;
    });
    document.getElementById(this.id).addEventListener("mouseleave", () => {
      let circle = document.getElementById(this.id);
      circle.style.color = "var(--circle-color)";
    });
  }
}

class CircleManager {
  constructor() {
    const circle_info = [
      [3, 15, "pink"], // engr
      [18, 58, "mint"], // design
      [15, 28, "blue"], // about
      [8, 50, "purple"], // resume
      [30, 25, "mint"], // contact
      [13, 68, "purple"], // illustrations
      [20, 40, "red"], // research
    ];
    this.circles = circle_info.map((arr, i) => {
      const [left, top, color] = arr;
      return new Circle(left, top, color, i);
    });
  }
}

function loadText(md) {
  let converter = new showdown.Converter();
  let html = converter.makeHtml(md);
  document.getElementById("txt-container").innerHTML = html;
}

function setGalleryHeight() {
  if (window.innerWidth <= 1000) {
    let textEnd = document
      .getElementById("right-section")
      .getBoundingClientRect().bottom;
    let pics = document.getElementsByClassName("left-section")[0];
    pics.style.top = `${textEnd + 100}px`;
    console.log(pics.style.top);
  }
}

const sparkle = () => {
  let index = Math.floor(Math.random() * NUM_SPARKLE_LETTERS);
  let letter = document.getElementById(index.toString());
  let ogColor = letter.style.color;

  letter.animate([{ color: `var(--${randomColor()})` }, { color: ogColor }], {
    duration: 3000,
    easing: "ease-in",
  });
};

// UTILITY FUNCTIONS
const randomColor = () => COLORS[Math.floor(Math.random() * 5)];

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
