import type { Component } from 'solid-js';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@manafishrov/ui/input-group';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const InputGroupDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Input Group</H1>
      <Lead>{m.docs_component_input_group_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_basic()}</H2>
      <div class='gap-4 flex flex-wrap'>
        <InputGroup class='max-w-xs'>
          <InputGroupAddon>
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder='Username' />
        </InputGroup>
      </div>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_with_icon()}</H2>
      <div class='gap-4 flex flex-wrap'>
        <InputGroup class='max-w-xs'>
          <InputGroupInput placeholder='Search...' />
          <InputGroupAddon align='inline-end'>
            <InputGroupButton variant='ghost' size='icon-xs'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <circle cx='11' cy='11' r='8' />
                <path d='m21 21-4.3-4.3' />
              </svg>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/input-group')({
  component: InputGroupDocPage,
});
