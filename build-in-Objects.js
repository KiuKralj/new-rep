// TASK 1
// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

// var duplicateElements = function (array){
//     var result = [];

//    array.forEach(function(element) {
//         result.push(element, element)
//     });
//     return result;
// }

// var array = [2, 4, 7, 11, -2, 1];

// console.log(duplicateElements(array));

// Vezba!

// function duplicateWords(strings){
//     var result = [];

//     strings.forEach(element => {
//         result.push(element, element)
//     });
//     return result
// };

// var strings = ["hello", "world", "JavaScript"];

// console.log(duplicateWords(strings));

// Task 2
// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

// var removeDuplicates = function (array){
//     var newArray = [];

//     array.forEach(function(element){
//         if(newArray.indexOf(element) === -1){
//             newArray.push(element)
//         }
// newArray.sort(function(a,b){return a-b});

//     });
//     return newArray
// }

// var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

// console.log(removeDuplicates(array))

// Vezba!

// function removeDuplicates(strings){
//     var result = [];

//     strings.forEach(element => {
//         if(result.indexOf(element) === -1){
//              result.push(element)
//         }
//     });
//     return result;
// }

// var strings = ['apple', 'banana', 'apple', 'orange', 'banana', 'kiwi']

// console.log(removeDuplicates(strings))

// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// /a)

// function isOdd(array){

//     return array.length % 2 !== 0;
// };

// var array = [1, 2, 9, 2, 1];
// console.log(isOdd(array));

//b

// function numOfelements (array){
//     if(array.length % 2 === 0){
//         console.log('Error message');
//         return;
//     }

//   var middleIndex = Math.floor(array.length / 2);
//   var middleElement = array[middleIndex];

//   var counter = 0;

//   array.forEach(function(element){
//     if(element < middleElement){
//         counter++
//     }
//   });


// return counter;

// }

// var array = [-1, 8.1, 3, 6, 2.3, 44, 2.11]

// console.log(numOfelements(array))

//Task 4

// 4. 
// Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

// function smallestElement(array){
//    var minValue = Math.min(...array);
//    var lastIndex = array.lastIndexOf(minValue);

//    return {minValue, lastIndex}
// }
// var array = [1, 4, -2, 11, 8, 1, -2, 3];
// console.log(smallestElement(array));

// Task 4 - bez metoda!

// function smallestElement(array){
//     var min = [0];
//     var lastIndex = 0;

//     for(var i = 0; i < array.length; i++){
//         if(array[i] < min){
//             min = array[i]
//             lastIndex = i;
//         } else if (array[i] === min){
//             lastIndex = i;
//         }
//     }
//     return {min, lastIndex}
// }

// var array = [1, 4, -2, 11, 8, 1, -2, 3];
// console.log(smallestElement(array));

// Vezba

// Zadatak:

// Napiši funkciju koja pronalazi najveći element u datom nizu i njegov prvi indeks (poziciju) u nizu. 
// Funkcija treba da vrati objekat koji sadrži najveću vrednost i njen prvi indeks.

// function findMax (array){
//     var max = Math.max(...array);
//     var firstIndex = array.indexOf(max)
    
//     return {max, firstIndex};
// }

// console.log(findMax([3, 7, 2, 11, 7, 11, 5]))

// Bez metoda!

// function findMax(array) {
//     var max = array[0];
//     var firstIndex = 0;

//     for (let i = 0; i < array.length; i++) {
//         if(array[i] > max){
//             max = array[i]
//             firstIndex = i
//         }
        
//     }
//     return {max, firstIndex}
// }

// console.log(findMax([3, 7, 2, 11, 7, 11, 5]))

// 5.

// a. 

// Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

// function lessThanAgiven(array, e){
//     var newArray = [];

//     array.forEach(element => {             MOZE i ==> :  return array.filter(element => element < e)
//         if(element < e){
//             newArray.push(element)
//         }
//     });
//     return newArray;
// };

// console.log(lessThanAgiven([2, 3, 8, -2, 11, 4], 6));

// b.

// Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

//function startsWith (array){
//     var newArray = []

//    array.forEach(element => {
//     if(element.toLowerCase().indexOf('pro') !== -1){  PRVI NACIN!!
//         newArray.push(element)
//     }
// })

//return array.filter(element => element.toLowerCase().indexOf('pro') !== -1)      //DRUGI NACIN!!

//return newArray
//}

//console.log(startsWith(['JavaScript', 'Programming', 'fun', 'product']));

//c.

// function filterOut(array, callback){
//     return callback(array);
// }

// console.log(filterOut(['JavaScript', 'Programming', 'fun', 'product'], startsWith));

// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [

// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}

var products = {
    {name: 'apples', price: 100},
    {name: 'milk', price: 80},
    {name:'bananas', price: 150}
}

function totalPrice(products){
   var total = 0;

   
}




