import styles from './TodoList.module.scss';
import { type Todo } from '../../types';
import { component$ } from '@builder.io/qwik';
import TodoItem from './TodoItem';
interface ChildProps {
  todos: Todo[];
}
export default component$<ChildProps>(({ todos }) => {
  return (
    <>
      <ul class={styles.todoList} >
        {
          todos.map((todo) =>
            <li key={todo.id}>
              <TodoItem todo={todo} />
            </li>
          )
        }
      </ul>
    </>
  );
});
