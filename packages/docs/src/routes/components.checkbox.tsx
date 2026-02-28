import type { Component } from 'solid-js';

import {
  CheckboxGroup,
  Checkbox,
  CheckboxControl,
  CheckboxIndicator,
  CheckboxLabel,
} from '@manafishrov/ui/checkbox';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const CheckboxDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Checkbox</H1>
      <Lead>{m.docs_component_checkbox_description()}</Lead>
    </div>

    <Checkbox>
      <CheckboxControl>
        <CheckboxIndicator />
      </CheckboxControl>
      <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
    </Checkbox>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_group()}</H2>
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
