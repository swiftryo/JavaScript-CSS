function hello(callback) {
  console.log(callback)
  console.log('hello' + callback());
}

function getname() {
  return 'code mafia';
}

function getfirstname() {
  return 'code';
}
hello(getname);