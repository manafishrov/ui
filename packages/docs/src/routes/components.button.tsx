import type { Component } from 'solid-js';

import { Button, ButtonGroup, ButtonGroupText, ButtonGroupSeparator } from '@manafishrov/ui/button';
import { createFileRoute } from '@tanstack/solid-router';

const ButtonDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Button</h1>
      <p class='mt-2 text-muted-foreground'>A clickable button component with multiple variants.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Variants</h2>
      <div class='gap-4 flex flex-wrap'>
        <Button variant='default'>Default</Button>
        <Button variant='destructive'>Destructive</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='link'>Link</Button>
      </div>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Sizes</h2>
      <div class='gap-4 flex flex-wrap items-center'>
        <Button size='sm'>Small</Button>
        <Button size='default'>Default</Button>
        <Button size='lg'>Large</Button>
      </div>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Group</h2>
      <ButtonGroup>
        <Button variant='outline'>First</Button>
        <ButtonGroupText>Or</ButtonGroupText>
        <Button variant='outline'>Second</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant='outline'>Archive</Button>
        <Button variant='outline'>Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant='secondary' size='sm'>
          Copy
        </Button>
        <ButtonGroupSeparator />
        <Button variant='secondary' size='sm'>
          Paste
        </Button>
      </ButtonGroup>
    </div>
  </div>
);

export const Route = createFileRoute('/components/button')({
  component: ButtonDocPage,
});
