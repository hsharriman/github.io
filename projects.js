if (window.innerWidth <= 1000) {
    let textEnd = document.getElementById('right-section').getBoundingClientRect().bottom;
    let pics = document.getElementsByClassName('left-section')[0];
    pics.style.top = `${textEnd + 200}px`;
}