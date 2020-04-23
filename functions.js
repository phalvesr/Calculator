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

function setPosition() {
    var largura = window.innerWidth;
    var altura  = window.innerHeight;

    console.log(largura, altura);
    var calculadora = document.getElementById('calculadora');
    calculadora.style.position = 'absolute';
    calculadora.style.left = ((largura/2) - 190) + 'px';
    calculadora.style.top = ((altura/2) - 100) + 'px';
}


// Zero key
zero.addEventListener('click', function(){pressedKey(0)});
zero.addEventListener('mouseenter', function(){changeColorIn(zero)});
zero.addEventListener('mouseleave', function(){changeColorOut(zero)});

// One key
one.addEventListener('click', function(){pressedKey(1)});
one.addEventListener('mouseenter', function(){changeColorIn(one)});
one.addEventListener('mouseleave', function(){changeColorOut(one)});

// Two key
two.addEventListener('click', function(){pressedKey(2)});
two.addEventListener('mouseenter', function(){changeColorIn(two)});
two.addEventListener('mouseleave', function(){changeColorOut(two)});

// Three key
three.addEventListener('click', function(){pressedKey(3)});
three.addEventListener('mouseenter', function(){changeColorIn(three)});
three.addEventListener('mouseleave', function(){changeColorOut(three)});

// Four key
four.addEventListener('click', function(){pressedKey(4)});
four.addEventListener('mouseenter', function(){changeColorIn(four)});
four.addEventListener('mouseleave', function(){changeColorOut(four)});

// Five key
five.addEventListener('click', function(){pressedKey(5)});
five.addEventListener('mouseenter', function(){changeColorIn(five)});
five.addEventListener('mouseleave', function(){changeColorOut(five)});

// Six key
six.addEventListener('click', function(){pressedKey(6)});
six.addEventListener('mouseenter', function(){changeColorIn(six)});
six.addEventListener('mouseleave', function(){changeColorOut(six)});

// Seven key
seven.addEventListener('click', function(){pressedKey(7)});
seven.addEventListener('mouseenter', function(){changeColorIn(seven)});
seven.addEventListener('mouseleave', function(){changeColorOut(seven)});

// Eight key
eight.addEventListener('click', function(){pressedKey(8)});
eight.addEventListener('mouseenter', function(){changeColorIn(eight)});
eight.addEventListener('mouseleave', function(){changeColorOut(eight)});

// Nine key
nine.addEventListener('click', function(){pressedKey(9)});
nine.addEventListener('mouseenter', function(){changeColorIn(nine)});
nine.addEventListener('mouseleave', function(){changeColorOut(nine)});

// Plus key
plus.addEventListener('click', function(){pressedKey('+')});
plus.addEventListener('mouseenter', function(){changeColorIn(plus)});
plus.addEventListener('mouseleave', function(){changeColorOut(plus)});

// Minus key
minus.addEventListener('click', function(){pressedKey('-')});
minus.addEventListener('mouseenter', function(){changeColorIn(minus)});
minus.addEventListener('mouseleave', function(){changeColorOut(minus)});

// Division key
division.addEventListener('click', function(){pressedKey('/')});
division.addEventListener('mouseenter', function(){changeColorIn(division)});
division.addEventListener('mouseleave', function(){changeColorOut(division)});

// Times key
times.addEventListener('click', function(){pressedKey('*')});
times.addEventListener('mouseenter', function(){changeColorIn(times)});
times.addEventListener('mouseleave', function(){changeColorOut(times)});

// Dot key
dot.addEventListener('click', function(){pressedKey('.')});
dot.addEventListener('mouseenter', function(){changeColorIn(dot)});
dot.addEventListener('mouseleave', function(){changeColorOut(dot)});

// Open parentheses
openP.addEventListener('click', function(){pressedKey('(')});
openP.addEventListener('mouseenter', function(){changeColorIn(openP)});
openP.addEventListener('mouseleave', function(){changeColorOut(openP)});

// Close parentheses
closeP.addEventListener('click', function(){pressedKey(')')});
closeP.addEventListener('mouseenter', function(){changeColorIn(closeP)});
closeP.addEventListener('mouseleave', function(){changeColorOut(closeP)});

// Clear Button
clearB.addEventListener('click', clearDisplay);
clearB.addEventListener('mouseenter', function(){changeColorIn(clearB)});
clearB.addEventListener('mouseleave', function(){changeColorOut(clearB)});

// Iguals to
igualsB.addEventListener('click', function(){calculateAnswers ('=')});
igualsB.addEventListener('mouseenter', function(){changeColorIn(igualsB)});
igualsB.addEventListener('mouseleave', function(){changeColorOut(igualsB)});

// Inverse of
inverseOf.addEventListener('click', function(){calculateAnswers ('-1')});
inverseOf.addEventListener('mouseenter', function(){changeColorIn(inverseOf)});
inverseOf.addEventListener('mouseleave', function(){changeColorOut(inverseOf)});

window.addEventListener('load', setPosition);
window.addEventListener('resize', setPosition);

function changeColorIn(object) {
    if(typeof(object) == "object") {
        object.style.backgroundColor = "#828282";
    }
}

function changeColorOut(object) {
    if (typeof(object) == "object") {
        object.style.backgroundColor = "#252525"
    }
}

function pressedKey(keyPressed) {                   // Funcao para quando uma tecla é pressionada
    printDisplay(keyPressed);
}

function printDisplay(newDigit) {
    if(newDigit == '/')    {
        display.innerHTML += '&#247';
        setNewValue(newDigit);
    }
    else if (newDigit == '*') {
        display.innerHTML += '&#215';
        setNewValue(newDigit);
    }
    else {
        display.innerHTML += newDigit;
        setNewValue(newDigit);
    }
}

function clearDisplay() {
    display.innerHTML = "";
    values = "";
}

function setNewValue(newDigit) {
    values += newDigit;
}

function calculateAnswers(decidesExpression) {
    if(decidesExpression == '-1') {
        var invert = 1/(parseFloat(display.innerHTML));
        //console.log(invert);
        display.innerHTML = invert
    }
    else display.innerHTML = eval(values)
}
