import type { Component, JSXElement } from 'solid-js';

export type WithTrailingAddonProps = {
  addon?: JSXElement;
  children: JSXElement;
};

export const WithTrailingAddon: Component<WithTrailingAddonProps> = (props) => (
  <Show when={props.addon} fallback={props.children}>
    <div class='gap-2 flex items-center'>
      {props.children}
      {props.addon}
    </div>
  </Show>
);
