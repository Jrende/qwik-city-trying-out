//import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { type Todo } from '~/types';

import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./todos.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      done INTEGER
    )
`)
})

export function createTodo(name: string): Promise<Number> {
  return new Promise((resolve) => {
    const stmt = db.prepare("INSERT INTO todos (name, done) VALUES (?, 0)");
    stmt.run([name], function() {
      console.log("Todo with id", this.lastID, "inserted");
      resolve(this.lastID);
    });
    stmt.finalize();
  });
}

export async function getAllTodos(): Promise<Todo[]> {
  return new Promise((resolve, reject) => {
    db.all("SELECT id, name, done FROM todos", (err: any, rows: any[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows.map(row => ({ id: row.id, name: row.name, done: row.done === 1 })))
      }
    })
  })
}

export async function deleteTodo(id: number) {
  const stmt = db.prepare("DELETE FROM todos WHERE id=?");
  stmt.run([id]);
  stmt.finalize();
}


export async function updateTodoState( id: number, done: boolean) {
  const stmt = db.prepare("UPDATE todos SET done=? WHERE id=?");
  stmt.run([done ? 1 : 0, id]);
  stmt.finalize();
}

export async function updateTodoName( id: number, name: string) {
  const stmt = db.prepare("UPDATE todos SET name=? WHERE id=?");
  stmt.run([name, id]);
  stmt.finalize();
}

export async function updateTodo(todo: Todo) {
  const stmt = db.prepare("UPDATE todos SET name=?, done=? WHERE id=?");
  stmt.run([todo.name, todo.done, todo.id]);
  stmt.finalize();
}
