// function hello(callback, lastname) {
//   console.log(callback)
//   console.log('hello' + callback(lastname));
// }

// function getname() {
//   return 'code mafia';
// }

// // function getfirstname() {
// //   return 'code';
// // }
// // hello(getname);

// const getfirstname = function() {
//   return 'code';
// }

// hello(function(name) {
//   return 'code' + name;
// }, 'mafia');

function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a,b) {
  return a * b;
}

function plus(a,b) {
  return a + b;
}
doSomething(2,3,plus);
doSomething(2,2,multiply);
