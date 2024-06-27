import fs from 'node:fs/promises'
import { type Todo } from '~/types';

async function readDatabase(): Promise<Todo[]> {
  const file = await fs.readFile('./data/todos.json', { encoding: 'utf-8' });
  return JSON.parse(file) as Todo[];
}

async function writeDatabase(todos: Todo[]) {
  await fs.writeFile('./data/todos.json', JSON.stringify(todos));
}

export async function getTodos(): Promise<Todo[]> {
  return readDatabase();
}


export async function createTodo(newTodo: Todo): Promise<number> {
  const todos = await readDatabase()
  const id = todos.length + 1;
  writeDatabase([...todos, {...newTodo, id}]);
  return id;
}

export async function updateTodo(newTodo: Todo) {
  const todos = await readDatabase()
   const newDb = todos.map((todo) =>
    todo.id === newTodo.id ? newTodo : todo
  );
  writeDatabase(newDb);
}
