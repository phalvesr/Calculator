const zero      = document.getElementById('zeroDigit');
const one       = document.getElementById('oneDigit');
const two       = document.getElementById('twoDigit');
const three     = document.getElementById('threeDigit');
const four      = document.getElementById('fourDigit');
const five      = document.getElementById('fiveDigit');
const six       = document.getElementById('sixDigit');
const seven     = document.getElementById('sevenDigit');
const eight     = document.getElementById('eightDigit');
const nine      = document.getElementById('nineDigit');
const plus      = document.getElementById('plusDigit');
const minus     = document.getElementById('minusDigit');
const division  = document.getElementById('divisionDigit');
const times     = document.getElementById('timesDigit');
const dot       = document.getElementById('dot');
const openP     = document.getElementById('openParentheses');
const closeP    = document.getElementById('closeParentheses');
const display   = document.getElementById('display');
const clearB    = document.getElementById('clearButton');
const igualsB   = document.getElementById('igualsToDigit');
const inverseOf = document.getElementById('inverseOf');

var values = "";
var newEnter = true;

function setPosition() {
    var largura = window.innerWidth;
    var altura  = window.innerHeight;

     calculadora = document.getElementById('calculadora');
    calculadora.style.position = 'absolute';
    calculadora.style.left = ((largura/2) - 190) + 'px';
    calculadora.style.top = ((altura/2) - 100) + 'px';
}


// Zero key
zero.addEventListener('click', pressedKey);
zero.addEventListener('mouseenter', changeColorIn);
zero.addEventListener('mouseleave', changeColorOut);

// One key
one.addEventListener('click', pressedKey);
one.addEventListener('mouseenter', changeColorIn);
one.addEventListener('mouseleave', changeColorOut);

// Two key
two.addEventListener('click', pressedKey);
two.addEventListener('mouseenter', changeColorIn);
two.addEventListener('mouseleave', changeColorOut);

// Three key
three.addEventListener('click', pressedKey);
three.addEventListener('mouseenter', changeColorIn);
three.addEventListener('mouseleave', changeColorOut);

// Four key
four.addEventListener('click', pressedKey);
four.addEventListener('mouseenter', changeColorIn);
four.addEventListener('mouseleave', changeColorOut);

// Five key
five.addEventListener('click', pressedKey);
five.addEventListener('mouseenter', changeColorIn);
five.addEventListener('mouseleave', changeColorOut);

// Six key
six.addEventListener('click', pressedKey);
six.addEventListener('mouseenter', changeColorIn);
six.addEventListener('mouseleave', changeColorOut);

// Seven key
seven.addEventListener('click', pressedKey);
seven.addEventListener('mouseenter', changeColorIn);
seven.addEventListener('mouseleave', changeColorOut);

// Eight key
eight.addEventListener('click', pressedKey);
eight.addEventListener('mouseenter', changeColorIn);
eight.addEventListener('mouseleave', changeColorOut);

// Nine key
nine.addEventListener('click', pressedKey);
nine.addEventListener('mouseenter', changeColorIn);
nine.addEventListener('mouseleave', changeColorOut);

// Plus key
plus.addEventListener('click', pressedKey);
plus.addEventListener('mouseenter', changeColorIn);
plus.addEventListener('mouseleave', changeColorOut);

// Minus key
minus.addEventListener('click', pressedKey);
minus.addEventListener('mouseenter', changeColorIn);
minus.addEventListener('mouseleave', changeColorOut);

// Division key
division.addEventListener('click', pressedKey);
division.addEventListener('mouseenter', changeColorIn);
division.addEventListener('mouseleave', changeColorOut);

// Times key
times.addEventListener('click', pressedKey);
times.addEventListener('mouseenter', changeColorIn);
times.addEventListener('mouseleave', changeColorOut);

// Dot key
dot.addEventListener('click', pressedKey);
dot.addEventListener('mouseenter', changeColorIn);
dot.addEventListener('mouseleave', changeColorOut);

// Open parentheses
openP.addEventListener('click', pressedKey);
openP.addEventListener('mouseenter', changeColorIn);
openP.addEventListener('mouseleave', changeColorOut);

// Close parentheses
closeP.addEventListener('click', pressedKey);
closeP.addEventListener('mouseenter', changeColorIn);
closeP.addEventListener('mouseleave', changeColorOut);

// Clear Button
clearB.addEventListener('click', clearDisplay);
clearB.addEventListener('mouseenter', changeColorIn);
clearB.addEventListener('mouseleave', changeColorOut);

// Iguals to
igualsB.addEventListener('click', calculateAnswers);
igualsB.addEventListener('mouseenter', changeColorIn);
igualsB.addEventListener('mouseleave', changeColorOut);

// Inverse of
inverseOf.addEventListener('click', calculateAnswers);
inverseOf.addEventListener('mouseenter', changeColorIn);
inverseOf.addEventListener('mouseleave', changeColorOut);

window.addEventListener('load', setPosition);
window.addEventListener('resize', setPosition);

function changeColorIn(e) {
    if(typeof(this) == "object") {
        this.style.backgroundColor = "#828282";
    }
}

function changeColorOut(e) {
    if (typeof(this) == "object") {
        this.style.backgroundColor = "#252525"
    }
}

function pressedKey(e) {                   // Funcao para quando uma tecla é pressionada
     if(newEnter) {
         clearDisplay();
         newEnter = false;
     }
    printDisplay(this.innerHTML);
}

function printDisplay(newDigit) {
    if(newDigit === '÷') {
        display.innerHTML += '&#247';
        newDigit = '/';
    }
    else if (newDigit === '×') {
        display.innerHTML += '&#215';
        newDigit = '*';
    }
    else if(newDigit === ',') {
        display.innerHTML += ',';
        newDigit = '.';
    }
    else {
        display.innerHTML += newDigit;
    }
    setNewValue(newDigit);
}

function clearDisplay() {
    display.innerHTML = "";
    values = "";
}

function setNewValue(addDigit) {
    values += addDigit;
}

function calculateAnswers(e) {
    if(this.innerHTML === '1/x') {
        var invert = 1/(parseFloat(display.innerHTML));
        display.innerHTML = invert
    }
    else {
        display.innerHTML = eval(values);
        newEnter = true;
    }
}
