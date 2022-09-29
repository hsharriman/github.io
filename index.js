function onload(txtPath) {
  loadText(txtPath);
  setGalleryHeight();
  window.addEventListener("resize", setGalleryHeight);
  fadeIn();
}

function onloadHome() {
  new CircleManager();
  fadeIn();
}

function onloadTextOnly(txtPath) {
  loadText(txtPath);
  fadeIn();
}

function fadeIn() {
  let i = 0;
  for (let ele of document.getElementsByClassName("fade")) {
    ele.style.transitionDelay = `${0.5 * i}s`;
    ele.style.transform = "translateY(0rem)";
    ele.style.opacity = 1;
    i++;
  }
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
      const [right, down, color] = arr;
      return new Circle(right, down, color, i);
    });
  }
}

function sparkle() {
  let colors = [
    "var(--blue)",
    "var(--mint)",
    "var(--purple)",
    "var(--red)",
    "var(--pink)",
  ];
  let index = Math.floor(Math.random() * 65);
  let letter = document.getElementById(index.toString());
  let ogColor = letter.style.color;
  let sparkleColor = colors[Math.floor(Math.random() * 5)];

  letter.animate([{ color: sparkleColor }, { color: ogColor }], {
    duration: 3000,
    easing: "ease-in",
  });
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

function loadText(md) {
  let converter = new showdown.Converter();
  let html = converter.makeHtml(md);
  document.getElementById("txt-container").innerHTML = html;
}

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
