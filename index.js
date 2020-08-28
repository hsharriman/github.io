function onload() {
    setGalleryHeight();
    window.addEventListener("resize", setGalleryHeight);
    fadeIn();
}

function onloadHome() {
    new CircleManager();
    fadeIn();
}

function onloadTextOnly() {
    fadeIn();
}

function fadeIn() {
    let i=0;
    for (let ele of document.getElementsByClassName('fade')) {
        ele.style.transitionDelay = (`${0.5*i}s`);
        ele.style.transform = 'translateY(0rem)';
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
        document.getElementById(this.id).addEventListener('mouseover', () => {
            let circle = document.getElementById(this.id);
            circle.style.color = `var(--${color})`;
        });
        document.getElementById(this.id).addEventListener('mouseleave', () => {
            let circle = document.getElementById(this.id);
            circle.style.color = 'var(--circle-color)';
        })
    }
}

class CircleManager {
    constructor() {
        this.circles = [
            new Circle(3,15,'pink', 0),
            new Circle(8, 35, 'blue', 3),
            new Circle(25, 50, 'mint', 1),
            new Circle(35, 35, 'red', 2),
            new Circle(30, 25, 'blue', 4),
            new Circle(14, 65, 'purple', 5)
        ];
    }
}

function sparkle() {
    let colors = ['var(--blue)', 'var(--mint)', 'var(--purple)', 'var(--red)', 'var(--pink)'];
    let index = Math.floor(Math.random() * 69);
    let letter = document.getElementById(index.toString());
    let ogColor = letter.style.color;
    let sparkleColor = colors[Math.floor(Math.random() * 5)];

    letter.animate([
        { color: sparkleColor},
        { color: ogColor }
    ], {
        duration: 3000,
        easing: 'ease-in'
    });
}

function setGalleryHeight() {
    if (window.innerWidth <= 1000) {
        let textEnd = document.getElementById('right-section').getBoundingClientRect().bottom;
        let pics = document.getElementsByClassName('left-section')[0];
        pics.style.top = `${textEnd + 100}px`;
        console.log(pics.style.top);
    }
}

document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector("#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector("#loader").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
 };