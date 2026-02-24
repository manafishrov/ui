import type { Component } from 'solid-js';

import {
  CheckboxGroup,
  Checkbox,
  CheckboxControl,
  CheckboxIndicator,
  CheckboxLabel,
} from '@manafishrov/ui/checkbox';
import { createFileRoute } from '@tanstack/solid-router';

const CheckboxDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Checkbox</h1>
      <p class='mt-2 text-muted-foreground'>
        A control that allows the user to toggle between checked and not checked.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Checkbox>
        <CheckboxControl>
          <CheckboxIndicator />
        </CheckboxControl>
        <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
      </Checkbox>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Group</h2>
      <CheckboxGroup class='gap-2 flex flex-col' defaultValue={['react']}>
        <Checkbox value='react'>
          <CheckboxControl>
            <CheckboxIndicator />
          </CheckboxControl>
          <CheckboxLabel>React</CheckboxLabel>
        </Checkbox>
        <Checkbox value='solid'>
          <CheckboxControl>
            <CheckboxIndicator />
          </CheckboxControl>
          <CheckboxLabel>SolidJS</CheckboxLabel>
        </Checkbox>
      </CheckboxGroup>
    </div>
  </div>
);

export const Route = createFileRoute('/components/checkbox')({
  component: CheckboxDocPage,
});
