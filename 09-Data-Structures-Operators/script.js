'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// ---------------------------------------------------------------------------------------------------------------------------------------


// !! array destructuring => unpacking values of srray into variables 
      -Take values out of the array, left to right, and put them into variables

// example 
 const arr = [10, 20, 30];
 const[a,b,c] = arr;
 console.log(a , b , c);   // o/p => 10 , 20 , 30

 // we want to  skip the  value 

 const[d , , e] = arr;  // second  value will get skip 
 console.log(d ,e);     // o/p => 10 , 30 

 // we can assign default value also incase if value is  not present in the array it will automatically assign to it 

const[f=15 , g] = [ ,3 ];
console.log(f,g);      // o/p =>  15, 3;

// swap varriable 
[f,g] = [g,f] 
console.log(f,g) // o/p => 3, 15


// destructuring with function 

function getCoordinates() {
  return [10, 20];
}

const [x, y] = getCoordinates();


// nested array destructuring

const ar = [1, [2, 3]];

const [w, [v, z]] = ar;


// destructuring and rest operator 

const a = [1,2,3,4];
const [first , secon ,...third ] = [1,2,3,4];

console.log(first , secon , third) ;   // o/p => 1 2 [ 3, 4 ]

*/

// --------------------------------------------------------------------------------------------------------------------------------------------------

// object destructuring => extracting properties from object to a variable 
//  here , property matter very much , it should be right 
const user   = {
  name: "aditya",
  age: 23
};


// instead of 
// const  FirstName = user.name ;
// const Age = user.age;
// console.log(FirstName, Age);

// we  can do 

const{name , age} = user ;
console.log(name,age);

// renaming variable & default value 
const{name : firstName = "no name " , age : myAge = 18 , duty: job ="unemployed"} = user ;
console.log(firstName , myAge , job );

// nested destructuring 
const user1 = {
  name: "A",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

const {
  address: { city, pin }
} = user1 ;


console.log(city , pin);


// object destructuring in function 

function user3({name, address:{city,pin}}){
  console.log(name , city , pin);
}
user3(user1);

// rest  operator with object 

const{ name:firstname , ...rest}  = user1;
console.log( firstname , rest) ;
// oo/p => firstname will contain name and  rest of  the properties are contained by rest ;