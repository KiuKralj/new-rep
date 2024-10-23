/*"use strict";
x = 3.2;
var counter = 1; // side effects

function test() {
  counter++;
}*/

/*var global = 123;

function myFunc() {
global = 5
console.log(global);

var global = 1;

console.log(global);

}

myFunc();

var getCounter = function (a){  // 
    return a + 1
}

console.log(typeof getCounter)

function testCounter(external){
    var a = 1
    a = external(a);
    return a;
}
console.log(testCounter(getCounter))*/

// Task 1

/*function countVowels(str){
    var counter = 0;
    vowels = 'aeiouAEIOU';

    for(var i = 0; i < str.length; i++){
        if(vowels.indexOf(str[i]) !== -1){
            counter++
        }
    }
  return counter
}

var str = 'go all the way'

console.log(countVowels(str))*/

// Task 1 drugi nacin

/*function countVowels (str) {
    var vowels = 'aeiouAEIOU';
    var counter = 0;
   
    var lowerStr = str.toLowerCase();
  
    for(var i = 0; i < lowerStr.length; i++){
      if(lowerStr[i] === 'a' || lowerStr[i] === 'e' || lowerStr[i] === 'i' || lowerStr[i] === 'o' || lowerStr[i] === 'u') {
          counter++
      }
    }
   return counter
  }
  
  var str = 'go all the way'
  
  console.log(countVowels(str))*/

// Task 2

/*function combine(array1,array2){
    var newArray = [];

    //for(var i = 0; i < array1.length; i++){  
        //newArray[newArray.length] = array1[i];
        //newArray[newArray.length] = array2[i];
    //}

    for(var i = 0; i < array1.length; i++){
        newArray.push(array1[i]);
        newArray.push(array2[i]);
    }

    return newArray
}

var array1 = ['a','b', 'c']; array2 = [1,2,3]

console.log(combine(array1,array2))*/

// Task 3

/*function rotates(array, k){
    var newArr = array.slice(k).concat(array.slice(0, k));

    return newArr
}

var array = [1,2,3,4,5,6]; k = 1;

console.log(rotates(array, k))*/

// Task 4

/*function arr(num){
   var strNum = num + ''; var newArray = [];

   for(var i = 0; i < strNum.length; i++){
      newArray[newArray.length] = +strNum[i] 
      
   }
  return newArray
}

var num = 12345;

console.log(arr(num))*/

// Task 5

/*function multi(n){
  var table = '';

  for( var i = 1; i <= n; i++) {
    for(var j = 1; j <= n; j++){
        table += `${i} x ${j} = ${i * j}\n `;
    }
      table += '\t'
  }


  return table
}

console.log(multi(12))*/

// Task 8

/*function findMaxMin(array){
    var max = array[0];
    var min = array[0];

    for(var i = 1; i < array.length; i++){
       if(array[i] > max){
        max = array[i]
       }
       if (array[i]<min){
        min = array[i];
       }
    }
    
    return {max, min}; // kao objekat
}


console.log(findMaxMin([1,2,3,-2,7]))*/

// Task 7

// function findMaxEl(array) {
  
//   var max = array[0]; // moze biti -Infinity
  
//   for (var i = 1; i < array.length; i++) {     // krece od 1 zbog max = array[0]
//     if (array[i] > max && isFinite(array[i])) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// var array = [1, 2, 3, 4, 5, undefined, NaN, null, false, Infinity];

// console.log(findMaxEl(array));

// Task 8 - JA

// function findMaxMin(array){
//   var max = array[0];
//   var min = [0];
//   for(var i = 1; i < array.length; i++){
//     if(array[i] > max){
//         max = array[i]
//     }

//     if(array[i] < min){
//         min = array[i]
//     }
//   }  

// return [max, min]

// }

// console.log(findMaxMin([1,2,3,-2,7]))

// Task 10 

// function findMostFreq(array) {
//     var sorted = array.sort((a, b) => a - b);
//     var mostFrequentElement = sorted[0];
//     var currentElement = sorted[0];
//     var currentCounter = 1;
//     var mostFrequentCounter = 1;


//     for(var i = 1; i < sorted.length; i++){
//         if(sorted[i] === currentElement){
//             currentCounter++;
//         } else {
//            currentElement = sorted[i];
//            currentCounter = 1;
//         }
    
//         if(currentCounter > mostFrequentCounter) {
//             mostFrequentCounter = currentCounter;
//             mostFrequentElement = currentElement
//         }
    
//     }
//     return mostFrequentElement
// }


// console.log(findMostFreq([3,3,5,1,4,14,8,9,2,5,6,5,5,3,3,3,3,3]));

// Task 1

// function checkElement (array, e) {
//    for(var i = 0; i < array.length; i++){
//     if(array[i] === e){
//         return true
//     } 
//    }
//    return false
// }
// var array = [5, -4.2, 3, 7]; e = 9;
// console.log(checkElement(array, e))

// Task 2

// function multi(array) {
//     var newArray = [];
//     for(var i = 0; i < array.length; i++){
//         if(array[i] > 0){
//            newArray[newArray.length] = array[i] * 2;
//         } else{
//             newArray[newArray.length] = array[i]
//         }
//     }
//     return newArray
// }

// console.log(multi([-3, 11, 5, 3.4, -8]))

// Task 3

// function findMin (array){
//     var min = array[0]
//     var index = 0
//     for(var i = 1; i < array.length; i++){
//         if(array[i] < min){
//             min = array[i]
//             index = i
//         }
//     }
//     return [min, index]
// }

// console.log(findMin([4, 2, 2, -1, 6]))

// Task 4

// function secondSmallest (array){
//     var min = array[0]
//     var secondSmallestNumber;

//     for(var i = 1; i < array.length; i++){
//         if(array[i] < min){
//             secondSmallestNumber = min
//             min = array[i]
//         } else if(array[i] > min && array[i] < secondSmallestNumber){
//             secondSmallestNumber = array[i]
//     } 

//     }
        
    
//     return secondSmallestNumber
// }
//     console.log(secondSmallest([4,2,2,-1,6]));

// Task 5

function positiveElem(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] > 0){
            sum += array[i];
        }
    }
    return sum
}
console.log(positiveElem([3, 11, -5, -3, 2]));