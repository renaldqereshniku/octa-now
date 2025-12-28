var one = '1';
var two = '2';
var three = '3';
var four = '4';
var five = '5';
var six = '6';
var seven = '7';
var eight = '8';

var firstNumberArray = [one, two, three, four, five, six, seven, eight];

var firstNumber = document.getElementById('firstNumber');

firstNumber.innerHTML = firstNumberArray[0];

var i = 0;

function step (event) {
    if (i === 0) {
        firstNumber.innerHTML = firstNumberArray[0];
        i = 1;
    }
    else if (i === 1) {
        firstNumber.innerHTML = firstNumberArray[1];
        i = 2;
    }
    else if (i === 2) {
        firstNumber.innerHTML = firstNumberArray[2];
        i = 3;
    }
    else if (i === 3) {
        firstNumber.innerHTML = firstNumberArray[3];
        i = 4;
    }
    else if (i === 4) {
        firstNumber.innerHTML = firstNumberArray[4];
        i = 5;
    }
    else if (i === 5) {
        firstNumber.innerHTML = firstNumberArray[5];
        i = 6;
    }
    else if (i === 6) {
        firstNumber.innerHTML = firstNumberArray[6];
        i = 7;
    }
    else if (i === 7) {
        firstNumber.innerHTML = firstNumberArray[7];
        i = 0;
    }
}

setInterval(step, 1600);
