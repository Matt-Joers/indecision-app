export const isAdult = (age) => age >= 18;
export const canDrink = (drink) => drink >=21;

export default (age) => age >= 65;
// long hand expressions
// export const isAdult = (age) => {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false
//   }
// };

// export const canDrink = (drink) => {
//   if (drink >= 21) {
//     return true;
//   } else {
//     return false;
//   }
// };