// ES5 Function - square a number 
// const square = function (x) {
//   return x * x;
// };
// console.log(square(6));

// ES6 Function - square a number
// const squareArrow = (x) => { 
//   return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(6));

// const getFirstName = (fullName) => fullName.split(' ')[0];
// console.log(getFirstName('Matt Joers'));

/////////////////////

// argument object - no longer bound with arrow functions
// this keyword - no longer bound with arrow functions

// const add = function (a, b) {
//   console.log(arguments);
//   return a + b;
// }
// console.log(add(55, 30));

const add =  (a, b) => {

    return a + b;
  }
  console.log(add(55, 30));

const user = {
  name: 'Matt',
  cities: ['West Bend', 'Menomonie', 'Oconomowoc', 'Ashippun'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
  }
};

    // older way of getting each item:
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
//};
console.log(user.printPlacesLived());


const multiplier = {
  numbers: [5, 10, 15, 20],
  multipleBy: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multipleBy);
  }
};
console.log(multiplier.multiply());
