// var person = {
//     name: 'Uros', // property (key: value)
//     surname: 'Jovanovic',
//     age: 32,
//     height: 180,
//     siblings: ['Ivana', 'Nevena', 'Branko'],
//     married: false,
//     hobbies: ['tenis', 'stoni-tenis', 'fudbal'],
//     sayName: function(){
//         console.log(person.name) // this (umesto person)
//     }, // get metoda
//   changeName: function(changedName){
//     person.name = changedName;
//   } // set metoda

// }

// //console.log(person.hobbies)
// person.sayName()
// person.changeName('Branko')
// console.log(person.name)

// person.name = 'Legolas';
// person.sayName()

// person.newProperty = 'Novi properti'
// console.log(person)

// class Person{
//     constructor(name, surname, married){

//     }
// }

// Task 1

// var coffee = {
//     name: 'Espresso',
//     strength: 'strong',
//     milk: false,
//     sugar: 2,
//     temp: 'hot'
// }

// console.log(coffee.milk)

// Task 2

// var favoriteMovie = {
//     title: 'Pirates Of Caribian',
//     actors: ['Johnny Dep', 'Orlando Bloom', 'Penelope Cruz'],
//     director: 'Gore Verbinski',
//     genre: 'Adventure, Fantasy',
//     popularity: 8.0
// }

// console.log(favoriteMovie)

// Task 3

// function createProject(description, language, git, status) {
//      var obj = {}
//     obj.description = description;
//     obj.language = language;
//     obj.git = git;
//     obj.status = status;
//     obj.printGit = function () {
//         console.log(obj.git)
//     }
//     obj.checkLanguage = function () {
//         if (obj.language.toLowerCase() === "javascript" || obj.language === "js") {
//             return true;
//         }
//         return false;
//     }
//     obj.checkStatus = function () {
//         if (obj.status) {
//             return true;
//         }
//         return false;
//     }
//     return obj
// }

// var project = createProject("neki opis", "js", "https://gitneki.com", false);
// project.printGit()

// Task 4

// function createRecipe(
//   name,
//   cuisine,
//   complexity,
//   ingredients,
//   prepTime,
//   instructions
// ) {
//   var recipe = {};

//   recipe.name = name;
//   recipe.cuisine = cuisine;
//   recipe.complexity = complexity;
//   recipe.ingredients = ingredients;
//   recipe.prepTime = prepTime;
//   recipe.instructions = instructions;

//   recipe.printIngredients = function () {
//     for (var i = 0; i < recipe.ingredients.length; i++) {
//       console.log(recipe.ingredients[i]);
//     }
//   };

//   recipe.canBePrepared = function () {
//     if (recipe.prepTime < 15) {
//       return true;
//     }
//     return false;
//   };

//   recipe.changeCuisine = function (newCuisine) {
//     recipe.cuisine = newCuisine;
//   };

//   recipe.deleteIngredient = function (ingredients){
//     var newIngredients = [];
//     var index = 0;

//     for(var i = 0; i < recipe.ingredients.length; i++){
//         if(recipe.ingredients[i] !== ingredients){
//             newIngredients[newIngredients.length] = recipe.ingredients[i]
//             index++
//         }
//     }
//     recipe.ingredients = newIngredients;
//   }

// return recipe;

// }

// var myRecipe = createRecipe(
//     'Sandwich',
//     'Fast food',
//     1,
//     ['bread', 'ham', 'cheese', 'lettuce'],
//     5,
//     'Postavi sastojke izmedju kriski hleba'
// )

// myRecipe.printIngredients();
// myRecipe.deleteIngredient('cheese');
// myRecipe.printIngredients();

// Vezba


function createMeal (name, cuisine, complexity, ingredients,prepTime, instructions){
    var meal = {}

    meal.name = name;
    meal.cuisine = cuisine;
    meal.complexity = complexity;
    meal.ingredients = ingredients;
    meal.prepTime = prepTime;
    meal.instructions = instructions;

   meal.printIngredients = function (){
    for(var i = 0; i < meal.ingredients.length; i++){
        console.log(meal.ingredients[i])
    }
   };

   meal.prepInless = function (){
     if(meal.prepTime < 30) {
        return true
     }
     return false
   };


   meal.deleteIngredients = function (ingredientsToDelete){
  var newIngredients = [];

  for(var i = 0; i < meal.ingredients.length; i++){
    if(meal.ingredients[i] !== ingredientsToDelete){
      newIngredients[newIngredients.length] = meal.ingredients[i]
      
  }
 
}
meal.ingredients = newIngredients;
   }
   return meal

}

var myMeal = createMeal (
    'Chicken Salad',
    'main meal',
    2,
    ['chicken', 'green salat','olive oil', 'pepper'],
    20,
    'Mix all ingredints in a large bowl'
);

myMeal.printIngredients();
console.log(myMeal.prepInless())

myMeal.deleteIngredients('pepper');
myMeal.printIngredients();


