var numberZero = '0';
var numberOne = '1';
var numberTwo = '2';
var numberThree = '3';
var numberFour = '4';
var numberFive = '5';
var numberSix = '6';
var numberSeven = '7';
var numberEight = '8';
var numberNine = '9';

var firstDigitArray = [numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight];

var firstDigit = document.getElementById('firstDigit');

firstDigit.innerHTML = numberZero;

var i = 0;

function step(event) {
    if (i === 0) {
        firstDigit.innerHTML = firstDigitArray[0];
        i = 1;
    }
    else if (i === 1) {
        firstDigit.innerHTML = firstDigitArray[1];
        i = 2;
    }
    else if (i === 2) {
        firstDigit.innerHTML = firstDigitArray[2];
        i = 3;
    }
    else if (i === 3) {
        firstDigit.innerHTML = firstDigitArray[3];
        i = 4;
    }
    else if (i === 4) {
        firstDigit.innerHTML = firstDigitArray[4];
        i = 5;
    }
    else if (i === 5) {
        firstDigit.innerHTML = firstDigitArray[5];
        i = 6;
    }
    else if (i === 6) {
        firstDigit.innerHTML = firstDigitArray[6];
        i = 7;
    }
    else if (i === 7) {
        firstDigit.innerHTML = firstDigitArray[7];
        i = 0;
    }
}

setInterval(step, 10);
