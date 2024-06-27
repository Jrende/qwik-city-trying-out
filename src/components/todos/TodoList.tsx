import styles from './TodoList.module.scss';
import { type Todo } from '../../types';
import { component$, type QRL } from '@builder.io/qwik';
import TodoItem from './TodoItem';
interface ChildProps {
  todos: Todo[];
  onChange: QRL<(todo: Todo) => void>;
}
export default component$<ChildProps>(({ todos, onChange}) => {
  return (
    <>
      <ul class={styles.todoList} >
        {
          todos.map((todo) =>
            <li key={todo.id}>
              <TodoItem todo={todo} onChange={onChange} />
            </li>
          )
        }
      </ul>
    </>
  );
});
