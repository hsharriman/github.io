
var time = new Date();
console.log(time);
console.log(time.getTime(), time.getHours(), time.getMinutes(), time.getSeconds());


function checkTime() {
    var time = new Date();
    var secs = time.getSeconds();
    console.log(secs);
    if (secs == 0 || secs == 30) {
        changeToDay();
    } else if (secs == 15 || secs == 45) {
        changeToNight();
    }
    setTimeout(checkTime, 1000);
}

// function getTime() {
//     while (true) {

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
//     }
// }

function changeToNight() {
    var sun = document.getElementById('sun');
    var sky = document.getElementById('page-container');
    sun.classList.remove('sun-glow');
    sun.classList.add('moon-glow');
    sky.style.backgroundColor = "var(--night-sky)";
}

function changeToDay() {
    var sun = document.getElementById('sun');
    var sky = document.getElementById('page-container');
    sun.classList.remove('moon-glow');
    sun.classList.add('sun-glow');
    sky.style.backgroundColor = "var(--day-sky)";
}