/*var uslov = 2;
var finalResult = "";

switch (uslov) {
    case 1:
        finalResult = "Rezultat je 1"
        console.log(finalResult);
        break;

        case 2:
        finalResult = finalResult + "Rezultat je 2"
        console.log(finalResult);
        break;

        case 3:
        finalResult = "Rezultat je 3"
        console.log(finalResult);
        break;

        case "Uros":
        finalResult = "Rezultat je Uros"
        console.log(finalResult);
        break;

        default:
            finalResult = 'Nema rezultata'
            console.log(finalResult)
            


}
Task 1 
var dayOfWeek = '';
 switch (dayOfWeek) {
    case 1:
        console.log('Monday')
        break;

        case 2:
        console.log('Tuesday')
        break;

        case 3:
        console.log('Wednesday')
        break;

        case 4:
        console.log('Thursday')
        break;

        case 5:
        console.log('Friday')
        break;

        case 6:
        console.log('Saturday')
        break;

        case 7:
        console.log('Sunday')
        break;

        default:
            console.log('Invalid')


 } 

 Task 2 

 var dayOfWeek = 10;
 switch (dayOfWeek) {
    case 1:
        console.log('Monday')
        break;

        case 2:
        console.log('Tuesday')
        break;

        case 3:
        console.log('Wednesday')
        break;

        case 4:
        console.log('Thursday')
        break;

        case 5:
        console.log('Friday')
        break;

        case 6:
        console.log('Saturday')
        break;

        case 7:
        console.log('Sunday')
        break;

        case 8:
            console.log("Input must be a number between 1 and 7")
            break;
            
        case 9:
            console.log("Input must be a number between 1 and 7")
            break;

            case 10:
            console.log("Input must be a number between 1 and 7")
            break;

        default:
            console.log('Invalid')


 } 

 Task 3 

 var checkDay = 7;

 switch (checkDay) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('It\'s weekday');
        break;
    case 6:
    case 7:
        console.log('It\'s weekend”.')   
        break;
        
        default:
            console.log("Input must be a number between 1 and 7")
 }

 Task 4 


var dayOfMonth = 10;
 switch (dayOfMonth) {
    case 1:
        console.log('January')
        break;

        case 2:
        console.log('February')
        break;

        case 3:
        console.log('Marth')
        break;

        case 4:
        console.log('April')
        break;

        case 5:
        console.log('May')
        break;

        case 6:
        console.log('June')
        break;

        case 7:
        console.log('July')
        break;

        case 8:
        console.log('August')
        break;
        case 9:
        console.log('September')
        break;

        case 10:
        console.log('October')
        break;

        case 11:
        console.log('November')
        break;

        case 12:
        console.log('December')
         break;
         default:
            console.log("Input must be a number between 1 and 7")
 }

 Task 5 

 var season = 1;
 switch (season) {
    case 1:
    case 2:
    case 12: 
      console.log('Winter')       
      break;
    case 3:
    case 4:
    case 5: 
     console.log('Spring')       
      break;  
     case 6:
     case 7:
     case 8:
        console.log('Summer')    
        break; 
     case 9:
     case 10:
     case 11:
        console.log('Fall') 
         break;
        default:
            console.log('input must be a number between 1 and 12')
              
 } 

 Task 6 

 var grade = "F";

 switch (grade) {
 case "A":
    console.log("Good job")
    break;
 case "B":
    console.log("Pretty good") 
    break;
 case "C":
    console.log("Passed") 
    break;     
case "D":
    console.log("Not so good") 
    break; 
case "F":
    console.log("Failed")
    break;
    
    default:
        console.log("Unknown grade")
}

Task 7 

Raditi kroz fall-through, svaka zemlja x3 grada 

Task 8 

ARRAYS 


var niz = ['string', 2, true, null, undefined]
console.log(niz[3])

var prolazakKrozString = 'kneza milosa 82'
console.log(prolazakKrozString[6])

niz[1] = 222;
console.log(niz)

prolazakKrozString[6] = 'p'
console.log(prolazakKrozString[6]) 

var a = 'uros';
var b = a;

b = 'bit';
console.log(a, b) // Po vrednosti

var niz = [1, 2, 3]
var niz2 = niz;

niz[45] = 55;
niz2[niz2.length] = 5; // Po referenci
console.log(niz)


niz.push(1,2,3,)
console.log(niz)

niz.pop()
console.log(niz)

var nizNizova = [[1, 2 , 3], [4, 5, 6], 'uro']
console.log(nizNizova.length)
console.log(nizNizova[2][2]) // prints "u"

var drugiNacinPravljenjaNiza = new Array(5,6) // 
var drugiNacinPravljenjaNiza = new Array(5) // zauzima prazna mesta 

//Task 1

var months = ['jan', 'feb', 'mar', 'may', 'jun', 'avg', 'oct', 'dec']
console.log(months[4], months[6], months[0])

//Task 2

var days = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun']
console.log(days[6])

//Task 3

var negative = [2, -4, 5, -2, -11]
console.log(negative[1], negative[3], negative[4])

//Task 4

var a = [5, 15, -5, 12, 18, 72, 14, 9]
if (a[0] % 3 === 0) {
    console.log(a[0])
} if (a[1] % 3 === 0) {
    console.log(a[1])
} if (a[2] % 3 === 0) {
    console.log(a[2])
} if (a[3] % 3 === 0) {
    console.log(a[3])
} if (a[4] % 3 === 0) {
    console.log(a[4])
} if (a[5] % 3 === 0) {
    console.log(a[5])
} if (a[6] % 3 === 0) {
    console.log(a[6])
} if (a[7] % 3 === 0) {
    console.log(a[7])
}

// Task 5

var b = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
    10, 26, 7]];
console.log(b[0][3]);
console.log(b[2]);
console.log(b[2][1]); 


// While loop

var a = 5;
while (a > 0 ) {
    console.log('Variable a is' + a);
    a-- //da se petlja ne vrti beskonacno
}

// Do loop

var b = 5;

do 
{
    console.log('Variable b is' + b)
    b--

} while (b > 0);

// For loop

for (var c = 0; c <= 5; c++) {
    console.log('Variable c is ' + c);
}

for (var d = 5; d > 0; d--) {
    console.log('Variable d is ' + d);
}

var array = [2, -4, 5, -2, -11]

for (var index = 0; index < array.length; index++) {
    var element = array[index];

    if(element < 0) {
        console.log('Element at position ' + index + ' is negative with value ' + element)
    }
    
}


var i = 0
while (i < array.length) {
    var item = array[i];
    if(item < 0) {
        console.log('Element at position ' + index + ' is negative with value ' + item)
    }
    i++
}

var array2 = [5, 15, -5, 20, 12, 18, 72, 14, 9]
for(var index = 0; index < array2.length; index++) {
    var element = array2[index];
    if (index % 3 === 0) {
        console.log('Element value ' + element + ' at position ' + index)                   NIJE DOBRO
    }
} 
 

var matrix = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(var i = 0; i < matrix.length; i++) {
    var arrayItem = matrix[i];
    for (var j = 0; j <arrayItem.length; j++) {
        var item = arrayItem[j]
        if (item === 24)
        console.log('value 24 is in position ' + j + ' of array ' + 1)

    }
} 

//Zadatak 1

for(var i = 0; i <= 15; i++) {
    if(i % 2 === 0) {
        console.log('The number ' + i + ' is even')
    } else {
        console.log('The number ' + i + ' is odd')
    }
}

//Zadatak 2

var sum = 0;

for(var i = 1; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 ===0){
        sum += i;
    }
}
console.log('The sum of all numbers divisible by 3 or 5 that are less than 1000 is: ' + sum) 

//Zadatak 3

var sum = 0;
var product = 1;

var arr = [1, 2, 3, 4, 5]
for(var i = 0; i < arr.length; i++) {
    sum += arr[i]
    product *= arr[i]
}

console.log("The sum of the numbers in the array is: " + sum);
console.log("The product of the numbers in the array is: " + product);

//Zadatak 4 

var x = ['1', 'A', 'B', 'c', 'R' , true, NaN, undefined];
var r = '';

for(var i = 0 ; i < x.length; i++ ) {
    var element = x[i]
    r += element

}
console.log(r) 

// Zadatak 5

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
for(var i = 0; i < a.length; i++) {
    for(var j = 0; j < a[i].length; j++) {
        console.log(a[i][j])
    }
} 

//Zadatak 6


var sum = 0;
var a = 1;

for(var i = 0; i < 20; i++) {
   sum += a*a
   a++
}
  
console.log(sum) 

//Zadatak 7

var marks = [80, 77, 88, 95, 68];
var total = 0;
var numberOfStudents = marks.length


for(var i = 0; i < marks.length; i++){
    total += marks[i]
}

var average = total / numberOfStudents

//console.log(average)

var grade = '';
if (average < 60) {
    grade = 'F'
} else if (average < 70) {
    grade = 'D'
} else if (average < 80) {
    grade = 'C'
} else if (average < 90) {
    grade = 'B'
} else {
    grade = 'A'
}

console.log(average, grade) */























