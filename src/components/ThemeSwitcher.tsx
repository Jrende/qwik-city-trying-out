import { component$, useContext } from '@builder.io/qwik';

import { Select } from '@qwik-ui/headless';
import styles from './ThemeSwitcher.module.scss';
import { RiCheckboxCircleFill } from './icons';
import themeContext, { type Theme } from './context/ThemeContext';


export default component$(() => {
  const theme = useContext(themeContext)
  const { availableThemes, selectedTheme } = theme;

  return (
    <Select.Root class={styles.select} value={selectedTheme} onChange$={(newTheme: string) => theme.selectedTheme = newTheme as Theme}>
      <Select.Trigger class={styles.selectTrigger}>
        <Select.DisplayValue class={styles.displayValue} placeholder="Select an option" />
      </Select.Trigger>
      <Select.Popover class={styles.selectContent}>
        <Select.Listbox class={styles.selectListbox}>
          {availableThemes.map((user) => (
            <Select.Item class={styles.selectItem} key={user}>
              <Select.ItemLabel>{user}</Select.ItemLabel>
              <Select.ItemIndicator>
                <RiCheckboxCircleFill />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Listbox>
      </Select.Popover>
    </Select.Root>
  );
});
