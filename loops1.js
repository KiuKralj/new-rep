/*for(var i = 1; i <= 15 ; i++){
    if(i % 2 === 0){
        console.log(i + ' je paran')
    } else {
        console.log(i + ' je neparan')
    }
}*/
/*var sum =0;
for(var i = 1; i <1000; i++){
    if(i % 3 === 0 || i % 5 === 0){
        sum += i
    }
}

console.log(sum)*/

/*var array = [1, 2, 3, 4];
var sum = 0;
var product = 1;

for(var i = 0; i < array.length; i++) {
       sum += array[i]
       product *= array[i]
}

console.log(sum, product)*/

 /*var x = ['1','A', 'B', 'c', 'r', true, NaN, undefined];
 var y = '';
for(var i = 0; i < x.length; i++){
    y += x[i]
}

console.log(y) */

/*var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];
    
    for(var i = 0; i < a.length; i++){
        for(var j = 0; j < a[i].length; j++){
            console.log(a[i][j])
        }
    } */

    /*var sum = 0;
    for (var i = 1; i <= 20; i++){
        sum += i * i
    }

    console.log(sum)*/

    /*var students = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95] , ['Thomas', 68]]; var grade = ''; var average = 0; var sum = 0;

       for(var i = 0; i < students.length; i++){
        for(var j = 0; j < students[i].length; j++){
            if(j === 1){
               sum += students[i][j]

            }
        }
       }

       console.log(sum)

       average = sum / students.length
       console.log(sum, average)*/

/*if (average >= 90) {
    grade = 'A';
} else if (average >= 80) {
    grade = 'B';
} else if (average >= 70) {
    grade = 'C';
} else if (average >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log('prosek je ' + average)
console.log('ocena je ' + grade) */


// drugi list
/*var found = false;
var e = 5; var a = [5, -4.2, 3, 7];

for (var i = 0; i < a.length; i++){
    if(e === a[i]) {
        found = true
        break;
    } 
}
if (found) {
    console.log(true); 
} else {
    console.log(false)
}*/

/*for(var i = 1; i <= 100; i ++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    }
    else if(i % 3 === 0){
        console.log('FIZZ')
    } else if (i % 5 === 0){
        console.log('Buzz')
    }
}*/

/*var niz = [1,2,3,4,5,6,7,8,9,10]; var sum = 0;
  for(var i = 0; i < niz.length; i++){
    sum += niz[i]
  }
  console.log(sum)*/

  /*var e = 3; var a = [5, -4.2, 18, 7]; var found = false;

    for(var i = 0; i < a.length; i++) {
        if(a[i] === e){
            found = true;
            break
            
        } 
    }

    if(found){
        console.log('yes')
    } else {
        console.log('no')
    }*/

    /*var a = [-3, 11, 5, 3.4, -8]; var sum = [];

    for(var i = 0; i < a.length; i++) {
        if(a[i] > 0){
            sum[i] = a[i] * 2
        } else {
            sum[i] = a[i]
        }
    }

    console.log(sum)*/

    /*var a = [4, 2, 2, -1, 6]; var min = a[0]; var index =0;
     for(var i = 0; i < a.length; i++){
        if(a[i] < min){
            min = a[i]
            index = i;
        }
     } 
     console.log(min, index);*/

/*var a = [4, 2, 2, -1, 6]; var min = a[0]; var firstGreaterThanMin;
  for(var i = 1; i < a.length; i++) {
    if(a[i] < min){
        min = a[i]
    }
  }

  for(var i = 0; i < a.length; i++){
    if(a[i] > min && a[i] !== 4){
        firstGreaterThanMin = a[i]
        break;
    }
  }

  console.log(firstGreaterThanMin)*/

  /*var a = [3, 11, -5, -3, 2]; var sum = 0; 
    for(var i = 0; i < a.length; i++) {
        if(a[i] > 0){
            sum += a[i]
        }
    }
console.log(sum)*/

/*var a = [2, 4, -2, 7, -2, 4, 2]; var simetrican = true;

for(var i = 0; i < a.length /2; i++) {
    if(a[i] !== a[a.length - 1 - i]){
        simetrican = false;
        break;
    }
}

if(simetrican) {
    console.log('niz je simetrican')
} else {
    console.log('niz nije simetrican')
}*/

/*var niz1 = [4, 5, 6, 2]; var niz2 = [3, 8, 11, 9]; var noviNiz = [];
  for(var i = 0; i < niz1.length; i++){
    noviNiz[noviNiz.length] = niz1[i]
    noviNiz[noviNiz.length] = niz2[i]
  }

  console.log(noviNiz)*/

 /* var niz1 = [4, 5, 6, 2]; var niz2 = [3, 8, 11, 9]; var noviNiz = [];

  for(var i = 0; i < niz1.length; i++){
    noviNiz[noviNiz.length] = niz1[i]
  }
  
   for(var i = 0; i < niz2.length; i++) {
    noviNiz[noviNiz.length] = niz2[i]
   }

   console.log(noviNiz)*/
      /*var e = 2; var a = [4, 6, 2, 8, 2, 2]; var niz = [];

      for(var i = 0; i < a.length; i++){
        if(a[i] !== e) {
           niz[niz.length] = a[i]
        } 
      }

      console.log(niz)*/

      /*var a = [2, -2, 33, 12, 5, 8]; e = 78; p = 3; 

for(var i = 0; i < a.length; i++){
    if(p > a.length){
        console.log('Error: Position is greater than the array length')
    } else {
        noviNiz = [];

        for(var i = 0; i < p; i++){
            noviNiz[noviNiz.length] = a[i]
          }

          noviNiz[noviNiz.length] = e

          for(i = p; i < a.length; i++){
            noviNiz[noviNiz.length] = a[i];
          }

    }
}
console.log(noviNiz)*/

/*var a = [2, 4, -2, 7, 5, -2, 4, 2]; simetric = true;
  for(var i = 0 ; i < a.length; i++){
    if(a[i] !== a[a.length - 1 - i]) {
        simetric = false
        break;
    }
  }

  console.log(simetric)
  









    





    


