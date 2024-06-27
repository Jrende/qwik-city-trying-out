import { component$ } from '@builder.io/qwik';
import styles from './Navbar.module.css';
import ThemeSwitcher from './ThemeSwitcher';
export default component$(() => {
  return (
    <nav class={`${styles.navbar} full`}>
      <ThemeSwitcher />
    </nav>
  );
});


