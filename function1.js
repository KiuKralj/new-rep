/*let niz = [10, 12, 14]

for(let i = 0; i < niz.length; i++) {
   let element = niz[i]
   let max = - Infinity;
   if(element > max) {
    
    max = element;
}
}
console.log(max)

var niz2 = [1, 'pera peric', 2, 'uros', 3, '', 4, 'false', undefined, NaN, 0, null]; // ispisujemo samo stringove iz niza u novi niz
var kucaZaStringove = [];

for(var i = 0; i < niz2.length; i++){
    var element = niz2[i]
    if(typeof element == 'string') {
        kucaZaStringove[kucaZaStringove.length] = element
    }
}
console.log(kucaZaStringove)

var a = [1,2,3]; var b = [6,7,8]; var c = []; // spajamo stringove u jedan
   
   for(var i = 0; i < b.length; i++) {
    c[c.length] = a[i]
    c[c.length] = b[i]
   }

   console.log(c) 

   // Zadaci

   function najveciUnizu (array) {  // Trazimo najveci element u nizu kroz while
     var i = 1;
     var max = array[0]
     while (i < array.length) {
        var element = array[i]
       if(element > max) {
        max = element
       }
       i++;
     }
     return max
   }

   console.log(najveciUnizu([1,2,3,4,5,'66', '7', 13, undefined])) 

   function findMaxOf2(x, y){  
       // return x > y ? x : y  ako su jednaki, ternary nije dobro resenje
       if(x > y) {
        return x;

       } else if (y > x) {
        return y;
       }
        return 'jednaki su br'
   }
   console.log(findMaxOf2(10,10)) 

   function isOdd (x){
    return x % 2 !== 0 ? true : false
   }
   console.log(isOdd(-117)) */

 