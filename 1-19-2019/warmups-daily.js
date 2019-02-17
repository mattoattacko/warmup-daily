//Arrays

// Create an array of numbers, 1 through 10
// Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.
// Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.
// Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.

forLoop = (array) => {
  for(let i = 0; i <= array.length; i++) {
      console.log('This is our for loops index position', i);
  }
}
forLoop([1,2,3,4,5,6,7,8,9,10]);
whileLoop = (array) => {
  let i = 0;
  while(i < array.length) {
      console.log('This is our while loops index position', array[i]);
      i++
  }
}
whileLoop([1,2,3,4,5,6,7,8,9,10]);

map = (array) => {
  let mapped = array.map(function(index) {
      return index * 1
  });
  console.log('is it mapped yo?', mapped);
}
map([1,2,3,4,5,6,7,8,9,10]);
filter = (array) => {
  let filter = array.filter(number => number >= 1);
  console.log('is it filtered yo?', filter);
}
filter([1,2,3,4,5,6,7,8,9,10]);

reduce = (array) => {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(array.reduce(reducer));
}
reduce([1,2,3,4,5,6,7,8,9,10]);


 //Objects

//  Begin with the starter code below …
// Using spread and destructuring assignment, create a new array called newPeople', which is a copy of the people` array, with a person named ‘Odie’ added to the beginning and one named ‘Garfield’ added to the end.
// Using spread and destructuring assignment, create a new object called newStuff', which is a copy of the stuff object, with a new car added to the end of the cars` array within it
// Create a state object with keys of people and stuff that contain the people and stuff data.
// Do this using object destructuring assignment
// Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)
// Prove that the original people, stuff, and state are unchanged.

// Hello darkness my old friend

const people = ['Kookla','Fran','Ollie'];

let newPeople = ['Odie', ...people, 'Garefield'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let newStuff = {...stuff};
newStuff.cars = [...newStuff.cars, 'Nissan Maxima'];
let state = {...[people], ...stuff};
state.people
let newState = {...[['Odie', ...people, 'Garefield']], ...{...stuff}};
newState.cars = [...newState.cars, 'Nissan Maxima'];

console.log('og people', people)
console.log('new people', newPeople);
console.log('og stuff', stuff);
console.log('new stuff', newStuff);
console.log('og state', state);
console.log('new state', newState);