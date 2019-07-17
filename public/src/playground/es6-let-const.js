var nameVar = 'Matt';
nameVar = 'Mike';
console.log('nameVar: ', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet: ', nameLet);

const nameConst = 'Matt';
console.log('nameConst: ', nameConst);

function getPetName() {
  const petName = 'Hal';
  return petName;
}

getPetName();
console.log(getPetName());

// block scoping - scoped to the specific block of code / function

var fullName = 'Matthew Joers';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);