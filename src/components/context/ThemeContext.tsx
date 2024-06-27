import { type Signal, component$, useSignal, Slot, useStore } from '@builder.io/qwik';
import {
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';


export type Theme = 'light'| 'dark'| 'dim'| 'purple';
export interface ThemeStore {
  selectedTheme: Theme
  availableThemes: Theme[]
}
const themeContext = createContextId<ThemeStore>(
  'docs.theme-context'
);
const ThemeContextProvider = component$(() => {
  const theme = useStore({
    selectedTheme: 'dark',
    availableThemes: ['light', 'dark', 'dim', 'purple']
  });
  useContextProvider(themeContext, theme);
  return (
    <>
      <Slot />
    </>
  );
});

export default themeContext;
export { ThemeContextProvider }
