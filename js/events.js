console.log('I Hate Money');
// option:1
function makeAqua() {
    document.body.style.backgroundColor = 'aqua';
}

// option:2
const makePurpleButton = document.getElementById('make-purple')
makePurpleButton.onclick = makePurple

function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// Option:3

const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// others
const makeGrayButton = document.getElementById('make-gray');
makeGrayButton.addEventListener('click', makeGray);

function makeGray() {
    document.body.style.backgroundColor = "gray";
}

// make yellow
function makeYellow() {
    document.body.style.backgroundColor = 'yellow'
}

// make-green

const makeGreenbutton = document.getElementById('make-green');
makeGreenbutton.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green'
}

// make-red
const makeRedbutton = document.getElementById('make-red');
makeRedbutton.addEventListener('click', makeRed);
function makeRed() {
    document.body.style.backgroundColor = 'red'
}