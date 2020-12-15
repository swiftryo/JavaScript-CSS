const obj = {
  first_name: 'mafia',
  last_name: 'code',
  printFullName: function() {
    console.log('hello');
  }
}

class MyObj {
  constructor() {
    this.first_name = 'mafia';
    this.last_name = 'code';
  }
  printFullName() {
    console.log('hello');
  }
}

const obj2 = new MyObj();

obj.printFullName();
obj2.__proto__.printFullName();