
const myArray = [ 1, 3, 5, 7, 9 ];

// Example 1:
// with find were trying to find an element or item that returns true based on a conditional
// and below we want to find the element or item that is equal to 5
myArray.find( ( element ) => element === 5 );

// the return value in the console is " 5 "

// once we find a condition that is true then the find function call stops running

// Example 2:
myArray.find( ( element ) => element > 4 );

// the return value in the console is " 5 "

// let's say we had an array of objects, find is a great way to find a specific object

// Example 3:
const peopleArray = [ { id : 1 }, { id : 4 }, { id : 7 } ];

// if we want to find the person with an ID of 4, we would do the following:
peopleArray.find( ( person ) => person.id === 4 );

// the return value in the console is " { id : 4 } "



