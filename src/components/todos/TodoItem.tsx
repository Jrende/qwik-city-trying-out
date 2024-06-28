import styles from './TodoItem.module.scss';
import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine } from '../icons';
import { $ } from '@builder.io/qwik';
import type { Todo } from '../../types';
import { component$ } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';
import { useToggleTodoAction, useUpdateTodoAction } from '~/server/actions';

interface ChildProps {
  todo: Todo,
}
export default component$<ChildProps>(({ todo }) => {
  const toggleTodo = useToggleTodoAction();
  const updateTodo = useUpdateTodoAction();

  const handleSubmitCompleted = $((event: any) => {
    event.target.querySelector('[name="name"]').blur()
  });
  return (
    <div class={styles.form}>
      <Form action={toggleTodo}>
        <button class={styles.checkboxControl}>
          {todo.done && (
            <RiCheckboxCircleFill />
          )}
          {!todo.done && (
            <RiCheckboxBlankCircleLine />
          )}
        </button>
        <input hidden name="id" type="text" value={todo.id} />
        <input hidden name="done" type="text" value={`${todo.done}`} />
      </Form>
      <Form action={updateTodo} onSubmitCompleted$={handleSubmitCompleted}>
        <label class={`${styles.checkbox} ${todo.done ? styles.checked : styles.unchecked}`}>
          <input name="name" type="text" value={todo.name} class={styles.nameInput} />
          <input name="id" type="text" hidden value={todo.id} />
          <input type="submit" hidden />
        </label>
      </Form>
    </div>
  )
})
