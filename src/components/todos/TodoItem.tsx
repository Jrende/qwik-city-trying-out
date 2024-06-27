import styles from './TodoItem.module.scss';
import { RiCheckboxCircleLine, RiCheckboxCircleFill, RiCheckboxBlankCircleLine } from '../icons';
import type { Todo } from '../../types';
import type { QRL } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

interface ChildProps {
  todo: Todo,
  onChange: QRL<(todo: Todo) => void>
}
export default component$<ChildProps>(({ todo, onChange}) => {
  return (
    <label class={styles.checkbox}>
      <input type="checkbox" checked={todo.done} onChange$={(ev) => onChange({ ...todo, done: (ev.target as HTMLInputElement).checked })} />
      {todo.done && (
        <div class={styles.checked}><RiCheckboxCircleFill /></div>
      )}
      {!todo.done && (
        <div class={styles.unchecked}><RiCheckboxBlankCircleLine /></div>
      )}
      <div>{todo.name}</div>
    </label>
  )
})
