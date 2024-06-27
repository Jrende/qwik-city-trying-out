import { component$, useSignal, $, useComputed$ } from "@builder.io/qwik";
import { routeLoader$, routeAction$, type DocumentHead } from "@builder.io/qwik-city";
import TodoList from "~/components/todos/TodoList";
import type { Todo } from "~/types";
import styles from "./app.module.scss";
import CreateTodo from "~/components/todos/CreateTodo";
import * as R from "ramda";
import { readFileSync } from 'fs';
import * as db from '../util/db';

export const useServerTodos = routeLoader$(async () => {
  const file = readFileSync('./data/todos.json', { encoding: 'utf-8' });
  return JSON.parse(file) as Todo[];
});

export const useCreateTodoAction = routeAction$(async (todo) => {
  return await db.createTodo(todo as Todo);
});

export const useUpdateTodoAction = routeAction$(async (todo) => {
  return await db.updateTodo(todo as Todo);
});

export default component$(() => {
  const serverTodos = useServerTodos();
  const clientTodos = useSignal<Todo[]>([])
  const todos = useComputed$(() => {
    const overrideIds = new Set<number>()
    const overridden = serverTodos.value.map(todo => {
      const ovr = clientTodos.value.find(t => t.id === todo.id);
      if (ovr !== undefined) {
        overrideIds.add(ovr.id);
      }
      return ovr !== undefined ? ovr : todo;
    })
    const append = clientTodos.value.filter(todo => !overrideIds.has(todo.id));
    const ret = [...overridden, ...append];
    console.log(ret);
    return ret;
  });
  const createTodoAction = useCreateTodoAction();
  const updateTodoAction = useUpdateTodoAction();

  const createNewTodo = $(async (todo: Omit<Todo, "id">) => {
    //const newTodoId = await createTodoAction.submit(todo);
    //const asd: Todo[] = [...clientTodos.value, { ...todo, id: newTodoId }];
  });

  const updateTodo = $((newTodo: Todo) => {
    console.log("update todo")
    if (serverTodos.value.find(todo => todo.id === newTodo.id) !== undefined) {
      createNewTodo(newTodo);
    } else {
      clientTodos.value = clientTodos.value.map((todo) =>
        todo.id === newTodo.id ? newTodo : todo
      );
    }
    updateTodoAction.submit(newTodo);
  });

  const todosByState = useComputed$(() =>
    R.partition((todo: Todo) => todo.done, todos.value)
  );

  const finished = useComputed$(() =>
    R.sortBy(R.prop("id"), todosByState.value[0])
  );

  const unfinished = useComputed$(() =>
    R.sortBy(R.prop("id"), todosByState.value[1])
  );

  return (
    <>
      <div class={`${styles.contentWrapper} content`}>
        <CreateTodo createTodoAction$={createTodoAction} onChange={createNewTodo} />

        <div>{unfinished.value.length} tasks left</div>
        <TodoList todos={unfinished.value} onChange={updateTodo} />

        <div>{finished.value.length} tasks finished</div>
        <TodoList todos={finished.value} onChange={updateTodo} />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
