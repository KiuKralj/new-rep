// Task 1
// My random string,    //"JS"
/*function insertString(mainString, insertString, position = 0) {
  newString = "";
  for (var i = 0; i < mainString.length; i++) {
    if (i == position && position == 0) {
      newString += insertString + " ";
    } else if (i === position) {
      newString += " " + insertString + " " + mainString[i];
    } else {
      newString += mainString[i];
    }
  }
  return newString;
}

//insertString('My random string','JS ', 10)
console.log(insertString("My random string", "JS"));
console.log(insertString("My random string", "JS", 10)); */

// Task 2 Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

/* var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function joinStr(array) {
    newStr = '';

    for(var i = 0; i < array.length; i++ ){
        var element = array[i];
        if (element !== element && element !== Infinity && element !== undefined && element !== null){
            newStr += element;
        }
    }
    return newStr
}


console.log(joinStr(arr)) 

// Task 3

var array =  [NaN, 0, 15, false, -22, '', undefined, 47, null];
  var newArr =[];

function fValues(array) {
    for(var i = 0; i < array.length; i++){
        var element = array[i];
        if(element) {
            newArr += element
        }
    }
   return newArr
}

console.log(fValues(array)) */

// Task 5

/*var array = [7, 9, 0, -2];

function lastElement(array, n) {
      if(n === undefined){
        return array[array.length - 1]
      }
    } 

    console.log(lastElement(array, n))*/

    // Zadatak 1

     /*function ubaciString(string, insertString, pozicija){
      var newString = [];
      for(var i = 0; i < string.length; i++) {
          newString[i] = string[i]
          
      }
      var finalString = '';
 for(var i = 0; i < newString.length; i++) {
  if(i === pozicija){
     finalString += insertString
     
  }
  finalString += newString[i]
  
 }
      return finalString
     }

  


 console.log(ubaciString(' My random string ', 'JS',10));*/

 // Zadatak 3


 /*var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function joinStr(array) {
    newStr = '';

    for(var i = 0; i < array.length; i++ ){
        var element = array[i];
        if (element !== element || element === Infinity || element === undefined || element === null){
            
        } else {
          newStr += element;
    } 
    }
    return newStr
}


console.log(joinStr(arr)) */

 // zadatak 5


 /*function reverseNum(number) {
  strNumber = number + '';
  reverseStrNumber = ''
    for(var i = strNumber.length - 1; i > 0; i-- ) {
     reverseStrNumber += strNumber[i]
    }
    return reverseStrNumber * 1
 }*/
/*var a = [5, -4.2, 3, 7]; var e = 3;
 function elementInArray(a, e) {
    for(var i = 0; i < a.length; i++){
      if(a[i] === e){
        return true
      }
      
    }
    return false
 }

 console.log(elementInArray(a, e));*/


 /*var inputArray = [-3, 11, 5, 3.4, -8];
 var newArr = [];

 function arr(array) {
  for(var i = 0; i < array.length; i++) {
    var element = array[i]
    if (element > 0){
        newArr[i] = element * 2
    } else {
      newArr[i] = element
    }
  }
 }
arr(inputArray)
 console.log(newArr)*/

 // Zadatak 5

 /*var array = [3, 11, -5, -3, 2, 5]; var sum = 0;

 function sumOfpositive(arr){
    for(var i = 0; i < arr.length; i++){
      element = arr[i]
      if(element > 0){
        sum += element;
      }
      
    }
    return sum
 }
console.log(sumOfpositive(array))*/

/*var niz1 = [4, 5, 6, 2]; var niz2 = [3, 8, 11, 9]; 


function arrays (niz1, niz2) {
 var rezultat = [];
  for(var i = 0; i < niz1.length; i++){
    rezultat[rezultat.length] = niz1[i];
    rezultat[rezultat.length] = niz2[i]
  }
  return rezultat
} 
 var rezultat = arrays(niz1, niz2)
 console.log(rezultat)*/

 // ZADATAK 7

 /*var niz = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

 function spojSlova(array){
  var str = '';
  for (var i = 0; i < niz.length; i++){
    if(typeof array[i] !== 'string'){
      continue;
  }
  var rec = array[i];
  if(rec.length > 1){
      str  = str + rec[0] + rec[1];
  }
 }
 return str
}

console.log(spojSlova(niz))*/

function isPalindrome (str) {
  var newStr = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] !== ' '){
      newStr += str[i]
    }
  }
  console.log(newStr)
}

isPalindrome('a nut for a jar of tuna')

for(var j = 0; j < newStr.length; j++){
  
}