import { component$ } from '@builder.io/qwik';
import styles from './CreateTodo.module.css';
import { Form } from '@builder.io/qwik-city';
import { useCreateTodoAction } from '~/server/actions';

interface ChildProps {
}

export default component$<ChildProps>(() => {
  const create = useCreateTodoAction();
  return (
    <div class={styles.createForm}>
      <Form action={create} spaReset>
        <label>
          <div class={styles.labelText}>Create new todo</div>
          <input type="text" name="name" />
        </label>
      </Form>
    </div>
  );

})

