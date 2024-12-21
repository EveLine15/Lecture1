//Task1
alert('Task1');
let name = prompt('Input your name');
alert('Hello, '+name);

//Task2
alert('Task2');
let numberTask2 = prompt('Input a number');
let power = prompt('Input a power');
if(isNaN(numberTask2) || isNaN(power)){
    console.log('Invalid values');
} else {
    console.log('Your result: '+ numberTask2**power);
}

//Task4
alert('Task4');
let myText = prompt('Input a word');
const someText = 'Apple';
const anotherText = 'Peach';
if(myText == someText){
    myText = anotherText;
} else {
    myText = someText;
}
console.log(myText);

//Task5
alert('Task5');
let numberTask5 = prompt('Input a number');
if(isNaN(numberTask5)) console.log('Invalid values');
else if(numberTask5 == 0) numberTask5 = 1;
else if(numberTask5 < 0) numberTask5 = 'Less then zero';
else numberTask5 *= 10;
console.log(numberTask5);

//Task6
alert('Task6');
let number = prompt('Input a number');
let result;
if(number < 5){
    result = '0';
} else if (number > 5) {
    result = '1';
} else {
    result = '5';
}
console.log(result);

//Task7
alert('Task7');
let number1Task7 = prompt('Input number1');
let number2Task7 = prompt('Input number2');
if(isNaN(number1Task7) || isNaN(number2Task7)) console.log('Invalid values');
else if(number1Task7 === number2Task7) console.log('Numbers equal');
else if(number1Task7 > number2Task7) console.log(number1Task7 + ' is bigger');
else console.log(number2Task7 + ' is bigger'); 

//Task8
alert('Task8');
let number1Task8 = prompt('Input number1');
let number2Task8 = prompt('Input number2');
if(isNaN(number1Task8) || isNaN(number2Task8)) console.log('Invalid values');
else if(number1Task8 % number2Task8 == 0) console.log('Is divided without remainder');
else console.log('Remainder: ' + number1Task8 % number2Task8);

//Task9
alert('Task9');
let mark = prompt('Input your mark');
if(isNaN(mark) || mark > 10 || mark < 1) console.log('Invalid mark');
else if(mark < 5) console.log('Bad mark');
else if(mark > 8) console.log('Good mark');
else console.log('Acceptable mark');

//Task10
alert('Task10');
let score = prompt('Input your score');
let projectNumber = prompt('Input a number of your projects');
if(isNaN(score) || score > 100 || score < 1 || projectNumber < 0) console.log('Invalid values');
else if(score >= 90 && projectNumber > 9) console.log('Your final score is 100');
else if(score >= 75 && projectNumber > 4) console.log('Your final score is 90');
else if(score >= 50 && projectNumber > 1) console.log('Your final score is 75');
else console.log('Your final score is 0');

//Task11
alert('Task11');
let days = prompt('Input the amount of days you are going to book a car for');
const amountForDay = 40;
let price;
if(isNaN(days) || days < 0){
    price = 'error- invalid value';
} 
else if(days >= 7) price = (days*amountForDay)-50;
else if(days >= 3) price = (days*amountForDay)-20;
else price = days*amountForDay;
console.log('Price: ' + price);


