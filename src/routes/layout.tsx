import { component$, Slot, useContext, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import themeContext from "~/components/context/ThemeContext";

import global from "./styles/styles.scss?inline";
import Navbar from "~/components/Navbar";
import styles from './app.module.scss';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const theme = useContext(themeContext)
  const {  selectedTheme } = theme;

  useStyles$(global);
  return (
    <>
      <div class={styles.bg} color-scheme={selectedTheme}>
        <main class={`${styles.App} page-layout`}>
          <Navbar />
          <Slot />
        </main>
      </div>
    </>
  );
});
