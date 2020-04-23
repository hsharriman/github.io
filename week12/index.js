var isDay = true;
// const timeMax = 86400000;
const interval = 4;
// const msPerInterval = timeMax / 2;

function checkTime() {
    const seconds = 60;
    var secsPerInterval = seconds / interval;

    var time = new Date();
    var secs = time.getSeconds();

    if (secs % secsPerInterval == 0) {
        if (isDay) {
            changeToNight(secsPerInterval);
            isDay = false;
        } else {
            changeToDay(secsPerInterval);
            isDay = true;
        }
    }
    setTimeout(checkTime, 1000);
}

// function getTime() {

//         var secs = time.getSeconds();
//         // console.log("check time");
//         // var hours = time.getHours();
//         // var mins = time.getMinutes();
//         //if the current time matches some predetermined time
//         // if (hours == 14 && mins == 27) {
//         if (secs == 10) {
//             changeToNight();
//         } 
//             //set timeout to change to night
//         //if the current time matches
//         // if (hours == 14 && mins == 28) {
//         if (secs == 40) {
//             changeToDay();
//         }
//             //set timeout to change to day
// }

function changeToNight(secsPerInterval) {
    var sun = document.getElementById('sun');
    var sky = document.getElementById('page-container');
    sun.style.transitionDuration = secsPerInterval.toString() + "s";
    sky.style.transitionDuration = secsPerInterval.toString() + "s";

    sun.classList.remove('sun-glow');
    sun.classList.add('moon-glow');
    sky.style.backgroundColor = "var(--night-sky)";
}

function changeToDay(secsPerInterval) {
    var sun = document.getElementById('sun');
    var sky = document.getElementById('page-container');

    sun.style.transitionDuration = secsPerInterval.toString() + "s";
    sky.style.transitionDuration = secsPerInterval.toString() + "s";

    sun.classList.remove('moon-glow');
    sun.classList.add('sun-glow');
    sky.style.backgroundColor = "var(--day-sky)";
}