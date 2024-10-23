/*function sum (a, b) {
     return a + b
}
var c = sum (3, 2)
console.log(c);

function findMinimum (input) {
    var minimum = Infinity
    for(var i = 0; i < input.length; i++) {
        if(input[i] < minimum) {
            minimum = input[i];
        }
    }
    return minimum
}

console.log(findMinimum([4,2,2,-1,6])

)

function findSecondMinimum(array) {
    var minimum = findMinimum[array]
    var secondMinimum = Infinity;
     for(var i = 0; i < array.length; i++) {
        if(array[i] <secondMinimum && array[i] > minimum) {
            secondMinimum = array[i]
        }
     }
     return secondMinimum
}

var result = findSecondMinimum([4,2,2,-1,6])

console.log(result) 

// Task 1

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}



var nr1 = 20;
var nr2 = 15
console.log(max(nr1, nr2));


// Task 2

var num = 7;

function oddNumber(number){
    if(number % 2 !== 0) {
        return true;
    } else {
        return false;
    
} 
}


console.log(num + ' je neparan', oddNumber(num))

//Task 3

var nr = 999;

function issThreeDigit(number) {
    if(number >= 100 && number <= 999){
        return true
    } else {
        return false
    }
}

// drugi nacin zadatka 3

function is3diggitNumber(x){
    var stringNumber = x + ''
   if(stringNumber.length === 3) {
    return true
   }
   return false
}

console.log(is3diggitNumber(444))



console.log(issThreeDigit(nr)) 

// Task 4

function calcMid(a, b, c, d) {
    var sum = a+b+c+d;
    var mid = sum / calcMid.length
    return mid
}

var result = calcMid(10, 20, 30, 40)
console.log(result) 

//drugi nacin zadatka 4

function calculateMean(){
      var mean;
      var sum = 0;
      for(var i = 0; i < arguments.length; i++){
        var element = arguments[i]
        sum += element;
      }
      mean = sum / arguments.length;
      return mean;
}

console.log(calculateMean(1,2,3,4,5))

// Zadatak 7

function calculateNumDiggits(x) {
    var stringNumber = x + ''
    return stringNumber.length
    //return (x+'').length  // samo ovo, je skraceno
}
console.log(calculateNumDiggits(9999));

function calculateNumDiggits(x) { // 765    // tezi nacin
    var i = 1;
    while(x > 10) {
        var cj = x % 10; // 765 % 10 = 5
        x -= cj; // 760
        x /= 10; // 76
        i++
    }
    return i;
}

console.log(calculateNumDiggits(765))  */


// Task 8

 /*var a = [2, 4, 7, 8, 7, 7, 1]; e = 7;

function num(a, e) {
  var counter = 0;
  for(var i = 0; i < a.length; i++) {
    if(a[i] === e) {
        counter++
    }
  }
  return counter
}

console.log(num(a,e)) 

 // drugi nacin



//Task 9

var a = [1, 2, 3, 4, 5, 6, 7];

function oddNumberSum (a) {
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        if(a[i] % 2 === 1) {
            sum += a[i]
        }
    }
    return sum
}

console.log(oddNumberSum(a))

// Task 10

var givenString = 'Abrakadabra';

function counting(givenString){
    var counter = 0;
    for(var i = 0; i < givenString.length; i++) {
        if(givenString[i] === 'a' || givenString[i] === 'A'){
            counter++
        }
    }
    return counter;
}
*/


/*var niz = [1,2,3]
var nizb = niz;
nizb = 17;
console.log(niz, nizb) 

function imeFunkcije (a, b) { //parametri
    var rezultat = a+b
    return rezultat
}

var rezFunk = imeFunkcije() // argumenti
console.log(rezFunk) 


 // Zadatak 9 
 
 function sumOfOdd (array) {   ///isOdd funk smo odradili ranije, naci u resenjima
    var suma = 0;
    for(var i = 0; i < array.length; i++) {
        var element = array[i];
        if (isOdd(element)) {
            suma += element
        }
        return suma
    }
 }

 console.log(sumOfOdd(1,2,3,4,5,6,7)) 

 // zadatak 10

 function calculateAppereance (str) {
    var brojac = 0;
     for(var i = 0; i < str.length; i++){
        var element = str[i];
        if(element === 'a' || element === 'A') {
            brojac++;
        }
     }

    return brojac;
 }

 console.log(calculateAppereance('AhahaahAhahahaha')) 

// Zadatak 11

function concatenates(str, broj) {
    var konkateniranString = ''
     for(var i = 0; i < broj; i++) {
        konkateniranString += str;
     }

    return konkateniranString
}

console.log(concatenates('abc', 4)); 

// Zadatak 5 



var array = [3, 500, -10, 149, 53, 414, 1, 19 ]; var newArr = [];

for(var i = 0; i < array.length; i ++){
    
    var result = (array[i] / 2) + 5;

    if(result === 0) {
        result = 20;

    }
    
   //newArr[i] = result
   newArr[newArr.length] = result
    
}
console.log(newArr) */

// Zadatak 8 neke strane

/*
var _string = 'BIT';
var newString = '';

for(var i = _string.length -1; i >= 0; i--){
   newString += _string[i] // prvi nacin
   newString += _string[i];

}

console.log(newString)

// Drugi nacin kroz niz []

var _string = 'BIT';  var _string2 = '';
var newString = [];


for(var i = _string.length -1; i >= 0; i--){
   newString[newString.length] = _string[i]


}

console.log(newString)

for (var i = 0; i < newString.length; i++){
     _string2 += newString[i]
}

console.log(_string2) */
