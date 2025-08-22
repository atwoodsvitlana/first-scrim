const homeOne = document.getElementById("home-one");
const homeTwo = document.getElementById("home-two");
const homeThree = document.getElementById("home-three");

const guestOne = document.getElementById("guest-one");
const guestTwo = document.getElementById("guest-two");
const guestThree = document.getElementById("guest-three");

const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
let countHome = 0;
let countGuest = 0;

function addOneHome() {
    countHome++;
    homeScore.textContent = countHome;
}
function addOneGuest() {
    countGuest++;
    guestScore.textContent = countGuest;
}


function addTwoHome() {
    countHome += 2;
    homeScore.textContent = countHome;
}
function addTwoGuest() {
    countGuest += 2;
    guestScore.textContent = countGuest;
}


function addThreeHome() {
    countHome += 3;
    homeScore.textContent = countHome;
}
function addThreeGuest() {
    countGuest += 3;
    guestScore.textContent = countGuest;
}