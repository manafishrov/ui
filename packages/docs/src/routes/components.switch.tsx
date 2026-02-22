import type { Component } from 'solid-js';

import { Switch, SwitchControl, SwitchThumb, SwitchLabel } from '@manafish/ui/switch';
import { createFileRoute } from '@tanstack/solid-router';

const SwitchDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Switch</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the Switch component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Switch>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
        <SwitchLabel>Airplane Mode</SwitchLabel>
      </Switch>
    </div>
  </div>
);

export const Route = createFileRoute('/components/switch')({
  component: SwitchDocPage,
});
