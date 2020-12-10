const todos = [
  {
    id: 1,
    title: 'go to school',
    completed: true
  },
  {
    id: 2,
    title: 'go to museum',
    completed: true
  },
  {
    id: 3,
    title: 'go to shopping',
    completed: false
  }
]

for(let i in todos) {
  let todo = todos[i];
  if(todo.completed === true) {
    console.log(i, todo.title);

  }
}