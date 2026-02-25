import type { Component } from 'solid-js';

import { Switch, SwitchControl, SwitchThumb, SwitchLabel } from '@manafishrov/ui/switch';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const SwitchDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Switch</H1>
      <Lead>{m.docs_component_switch_description()}</Lead>
    </div>

    <div class='space-y-4'>
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
