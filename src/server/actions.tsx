import { globalAction$, routeLoader$ } from "@builder.io/qwik-city";
import * as db from '../db/db';

export const useCreateTodoAction = globalAction$(async (data) => {
  return await db.createTodo(data.name.toString());
});


export const useToggleTodoAction = globalAction$(async (data) => {
  const id = parseInt(data.id.toString());
  const done = data.done === 'false';
  return await db.updateTodoState(id, done);
});

export const useUpdateTodoAction = globalAction$(async (data) => {
  const id = parseInt(data.id.toString());
  const name = data.name.toString()

  if (name === "") {
    return await db.deleteTodo(Number(data.id.valueOf()));
  }
  return await db.updateTodoName(id, name);
});

