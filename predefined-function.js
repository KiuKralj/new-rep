//console.log(parseInt('FF', 16))
//console.log(parseInt('23.55'))
//console.log(Math.round('23.55'))
//console.log(parseFloat('ghgf23'))
//console.log(isNaN('5'))
//console.log((7..toString(2));
//var a = 'shss'; var b = 'fgfd'
//console.log(`Varijabla ${a} i ${b}`);
//console.log(isFinite(11))
//console.log(a.concat(' ',b))
//console.log(Number('55'))
//console.log(Number.isInteger(36))

// Task 1

 var niz1 = ['1', '21', undefined, '42', '1e+3', Infinity]

function konvertujNiz(niz) {
    var noviNiz = [];
    var index = 0;
    for(var i = 0; i < niz.length; i++){
      var num = Number(niz[i])
       
         if(!isNaN(num) && isFinite(num)){
            noviNiz[index] = num;
            index++
         }

         
    }
    return noviNiz
} 


