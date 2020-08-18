function onload(fades) {
    fadeIn(fades);
    let circleManager = new CircleManager();
    document.addEventListener('scroll', hideToTop);

}

function fadeIn(fades) {
    for (let i=0; i<fades; i++) {
        let id= `fade${i.toString()}`;
        let ele = document.getElementById(id);
        ele.style.transitionDelay = (`${0.5*i}s`);
        ele.style.transform = 'translateY(0rem)';
        ele.style.opacity = 1;
    }
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

    setColor(color) {
        this.color = color;
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
            new Circle(3,10,'pink', 0),
            new Circle(8, 30, 'blue', 3),
            new Circle(25, 40, 'mint', 1),
            new Circle(35, 25, 'red', 2),
            new Circle(20, 15, 'blue', 4),
            new Circle(14, 50, 'purple', 5)
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

function hideToTop() {
    let link = document.getElementById('links');
    if (Math.round(window.scrollY) < 5) {
        link.style.opacity = '0';
    } else if (link.style.opacity == 0 && window.scrollY > 5) {
        link.style.opacity = '1';
    }
}

// function setHoverImgs(section) {
//     function showImg(id) {
//         let thumb = document.getElementById(`thumb${id}`);
//         thumb.style.transform = 'scaleY(1)';
//         // thumb.animate([
//         //     { height: '0' },
//         //     { height: '200px' }
//         // ], {
//         //     duration: 500,
//         //     easing: 'linear',
//         //     direction: 'normal'
//         // });
//         // thumb.style.opacity = '1';
//     }

//     function hideImg(id) {
//         let thumb = document.getElementById(`thumb${id}`);
//         thumb.style.transform = 'scaleY(0)';
//         // thumb.animate([
//         //     { height: '200px'},
//         //     { height: 0 }
//         // ], {
//         //     duration: 1000,
//         //     easing: 'linear',
//         //     direction: 'backwards'
//         // });
//         // thumb.style.opacity = '0';
//     }
//     var lis = document.getElementById(section).getElementsByTagName("li");
//     for (let i=0; i<lis.length; i++) {
//         let li = document.getElementById(lis[i]);
//         li.addEventListener('mouseover', () => {showImg(li.id)});
//         li.addEventListener('mouseleave', () => {hideImg(li.id)});
//     }
// }
document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector("#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector("#loader").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
 };