import { component$, $, type QRL } from '@builder.io/qwik';
import styles from './CreateTodo.module.css';
import type { Todo } from '~/types';
import { Form, type ActionStore } from '@builder.io/qwik-city';

interface ChildProps {
  //todos: Todo[];
  onChange: QRL<(todo: Omit<Todo, 'id'>) => void>;
  createTodoAction$: ActionStore<{}, Record<string, unknown>, true>;
}
export default component$<ChildProps>(({ onChange, createTodoAction$ }) => {

  const handleChange = $((ev: SubmitEvent) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log("ev", formData);
    let name = '';
    const n = formData.get('name');
    if (n !== null) {
      name = n.toString();
    }
    const input = form.querySelector('input[name="name"]') as HTMLInputElement;
    input.value = '';
    onChange({ name, done: false })
  })

  return (
    <div class={styles.createForm}>
      <Form action={createTodoAction$} preventdefault:submit onSubmit$={handleChange}>
        <label>
          <div class={styles.labelText}>Create new todo</div>
          <input type="text" name="name" />
        </label>
      </Form>
    </div>
  );

})

