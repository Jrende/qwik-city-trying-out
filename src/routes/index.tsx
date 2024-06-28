import { component$, useComputed$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead} from "@builder.io/qwik-city";
import TodoList from "~/components/todos/TodoList";
import type { Todo } from "~/types";
import styles from "./app.module.scss";
import CreateTodo from "~/components/todos/CreateTodo";
import * as R from "ramda";
import { getAllTodos } from "~/db/db";

export const useTodosLoader = routeLoader$(async () => {
 return await getAllTodos();
});

export default component$(() => {
  const todos = useTodosLoader();

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
        <CreateTodo />

        <div>{unfinished.value.length} tasks left</div>
        <TodoList todos={unfinished.value} />

        <div>{finished.value.length} tasks finished</div>
        <TodoList todos={finished.value} />
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
