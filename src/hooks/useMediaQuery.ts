import { createSignal, onCleanup, onMount } from 'solid-js';

export const useMediaQuery = (query: string): (() => boolean) => {
  const [matches, setMatches] = createSignal(false);

  onMount(() => {
    const media = globalThis.matchMedia(query);
    const listener = (): void => {
      setMatches(media.matches);
    };
    media.addEventListener('change', listener);
    setMatches(media.matches);

    onCleanup(() => {
      media.removeEventListener('change', listener);
    });
  });

  return matches;
};
