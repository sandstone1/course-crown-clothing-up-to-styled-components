
const myArray = [ 1, 2, 3, 4, 5 ];

// Example 1:
// let's say we wanted to add all the vales inside myArray, how would we
// do this? reduce is a great array method to use if we want to end up with
// one single value

// array.reduce() takes 2 arguments and the first one is a function and the
// function takes 2 parameters: the first parameter is called the accumulator and
// the accumulator and the accumulator is the accumulated value of calling this function
// on every element before the element were currently on and second parameter is the
// element itself or the element were iterating over at the current moment

// if we wanted to add all the numbers in myArray together we would do as follows and
// rememmber the initial value of accumulator is " 0 " and that is indicated by the " 0 "
// below which is our second argument inside the arrow function and if we want to add all
// the array values together then starting at 0 makes sense
myArray.reduce( ( accumulator, currentElement ) =>
    accumulator + currentElement, 0
);

// the return value in the console is " 15 "

// let's walk through how this function works so the first time the arrow function gets
// called the accumulator is 0 so the
// first iteration  : 0 + 1 = 1
// second iteration : 1 + 2 = 3
// third iteration  : 3 + 3 = 6
// fourth iteration : 6 + 4 = 10
// fifth iteration  : 10 + 5 = 15

// remember there are a lot more complicated ways to use reduce but the example above
// shows the basics of how to use reduce and understanding reduce and knowing when to
// use it will be a powerful tool as we write our apps