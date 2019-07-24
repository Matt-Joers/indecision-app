console.log('utils.js is running');

export const square = (x) => (x * x);

export const add = (a, b) => (a + b);
// exports - default export - named exports
// export { square, add };
// const subtract  = (a, b) => a-b;

export default (a, b) => a-b;;

