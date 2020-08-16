function onload() {
    let header = document.getElementById('header');
    let header2 = document.getElementById('header2');
    let header3 = document.getElementById('header3');
    header.style.opacity = '1';
    header2.style.opacity = '1';
    header3.style.opacity = '1';
    let circleManager = new CircleManager();
    window.setInterval(circleManager.circleGlows, Math.floor(Math.random() * 1000 + 1000));
    // positionSubHeaders();
    document.addEventListener('scroll', hideToTop);
    // document.addEventListener('resize', positionSubHeaders);
}

class Circle {
    constructor(left, top, color, id) {
        this.setId(id);
        this.setPosition(left, top);
        this.setColor(color);
    }

    setId(id) {
        this.id = `circle${id}`;
    }

    setPosition(left, top) {
        this.left = left;
        this.top = top;
        
        // position element
        let circle = document.getElementById(this.id);
        circle.style.top = `${top}vh`;
        circle.style.left = `${left}vw`;
    }

    leftPos() {
        return this.left;
    }

    topPos() {
        return this.top;
    }

    setColor(color) {
        this.color = color;
        document.getElementById(this.id).addEventListener('mouseover', () => {
            let circle = document.getElementById(this.id);
            circle.style.borderColor = `var(--${color})`;
            circle.style.color = `var(--${color})`;
        });
        document.getElementById(this.id).addEventListener('mouseleave', () => {
            let circle = document.getElementById(this.id);
            circle.style.borderColor = 'var(--circle-color)';
            circle.style.color = 'var(--circle-color)';
        })
    }
 
    id() {
        return this.id;
    }

    setGlow() {
        let cls = `circle${this.color}`;
        let circle = document.getElementById(this.id);
        if (circle.classList.contains(cls)) {
            circle.classList.remove(cls);
        }
        circle.classList.add(cls);
        // console.log(circle.classList);
    }
}

class CircleManager {
    constructor() {
        this.circles = [
            new Circle(3,0,'pink', 0),
            new Circle(5, 30, 'blue', 3),
            new Circle(20, 35, 'mint', 1),
            new Circle(35, 20, 'purple', 2),
            new Circle(20, 12, 'red', 4)
        ];
        // console.log(this.circles);
    }

    circleGlows = () => {
        let i = Math.floor(Math.random() * 5);
        this.circles[i].setGlow();
    }
}

function scrollToSection(id) {
    let projects = document.getElementById(id.toString());
    let scrollY = projects.getBoundingClientRect().y;

    window.scrollTo(0,scrollY);
}

function sparkle() {
    let colors = ['blue', 'mint', 'purple', 'red', 'pink'];
    let index = Math.floor(Math.random() * 75);
    let letter = document.getElementById(index.toString());
    let ogColor = letter.style.color;
    let sparkleColor = colors[Math.floor(Math.random() * 5)];
    // console.log(letter, ogColor, sparkleColor);
    letter.animate('redanimation', {
        duration: 1000,
        easing: "ease-in"
    }
    );
}

function hideToTop() {
    let link = document.getElementById('links');
    if (Math.round(window.scrollY) < 5) {
        link.style.opacity = '0';
    } else if (link.style.opacity == 0 && window.scrollY > 5) {
        link.style.opacity = '1';
    }
}