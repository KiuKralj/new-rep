/* var a= 5;
var b = 10;
var rez = 0;

for(var i=0; i<b; i++){
  rez +=a
}
console.log(rez) */

// Task 3

var min = Infinity;
var index = 0;
var array = [4, 2, 2, -1, 6] 

for (var i = 0; i< array.length; i++) {
    if(array[i] < min) {
        min = array[i]
        index = i;
    }
}

console.log(min, index)