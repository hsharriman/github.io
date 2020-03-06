
function bubblePopped(evt) {
    let hoverObject =evt.target;
    if (evt.propertyName == 'opacity') {
        hoverObject.style.top = `${Math.round(Math.random() * 100)}%`;   //string formatting. number 0-100 that has percentage at end
        hoverObject.style.left = `${Math.round(Math.random() * 95)}%`;

        hoverObject.classList.remove('bubble-pop');
        hoverObject.removeEventListener('transitionend', bubblePopped);
    }
}

function popBubble(event) {
    let hoverObject = event.target;
    if (hoverObject.classList.contains('bubble')) {
        hoverObject.classList.add('bubble-pop');

        hoverObject.addEventListener('transitionend', bubblePopped);
    }
}

function popBubbles(event) {
    let bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(function (bubble) {
        bubble.classList.add('pop');
        bubble.addEventListener('transitionend', bubblePopped);
    });
}
//this section runs on load of html document

let bubbleWrapper = document.querySelector('#bubble-container');
let glass = document.querySelector('#glass');
// bubbleWrapper.addEventListener('mouseover', popBubble);

glass.addEventListener('click', popBubbles);

for (var i=0; i<50; i++) {
    let bubble = document.createElement('div');
    bubble.className = "bubble";
    bubble.style.top = `${Math.round(Math.random() * 100)}%`;   //string formatting. number 0-100 that has percentage at end
    bubble.style.left = `${Math.round(Math.random() * 95)}%`;

    bubbleWrapper.append(bubble);
}
