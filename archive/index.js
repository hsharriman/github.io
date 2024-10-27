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

const eve = new Event("cssLoaded");

document.addEventListener("cssLoaded", (e) => {
  document.querySelector("#loader").style.display = "none";
  document.querySelector("body").style.visibility = "visible";
}, false);

// TODO: this function needs to be faster, we also need event listener to see if new CSS needs to be loaded.
// TODO: loader needs to be loaded statically and not rely on CSS, HTML should be hidden until loading is complete.
// probably need to define a custom event to fire once load() completes

function loadCSS(pageType) {
  const load = (path) => {
    // https://www.geeksforgeeks.org/how-to-load-css-files-using-javascript/
    let head = document.getElementsByTagName('HEAD')[0];

    let link = document.createElement('link');

    // set the attributes for link element
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = path;

    // Append link element to HTML head
    head.appendChild(link);
  };

  // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
  const mobileCheck = () => {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check; // TODO add check for min viewport width
  }

  if (mobileCheck()) {
    if (pageType === "index") load('style/mobile.css');
    if (pageType === "proj") load('../style/mobile-projects.css');
    if (pageType === "proj-textonly") load('../style/mobile-proj-textonly.css');
  } else {
    if (pageType === "index") {
      load('style/index.css');
      load('style/about.css');
      load('style/lists.css');
      load('style/style.css');
    }
    if (pageType === "proj") load('../style/projectpgs.css');
    if (pageType === "proj-textonly") load('../style/proj-textonly.css');
  }
  document.dispatchEvent(eve);
}

// ON LOAD FUNCTIONS
function onload(txtPath) {
  // loadCSS("proj");
  loadText(txtPath);
  setGalleryHeight();
  window.addEventListener("resize", setGalleryHeight);
  fadeIn();
}

function onloadHome() {
  // loadCSS("index");
  NUM_SPARKLE_LETTERS = createSparkleLetters();
  new CircleManager();
  fadeIn();
}

function onloadTextOnly(txtPath) {
  // loadCSS("proj-textonly");
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
        if (idCount === 34) {
          let lineBreak = document.createElement("span");
          lineBreak.className = "mobilelinebreak";
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
      [15, 30, "blue"], // about
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