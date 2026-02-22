import type { Component } from 'solid-js';

import { createFileRoute, Link } from '@tanstack/solid-router';

const components = [
  {
    name: 'Button',
    to: '/components/button',
    description: 'A clickable button component with multiple variants.',
  },
  {
    name: 'Card',
    to: '/components/card',
    description: 'A container component for displaying content.',
  },
  {
    name: 'Badge',
    to: '/components/badge',
    description: 'A small label component for status or counts.',
  },
];

const HomePage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <h1 class='text-4xl font-bold tracking-tight'>Manafish UI</h1>
      <p class='text-lg text-muted-foreground'>
        A component library for SolidJS built with Ark UI, Tailwind CSS, and TanStack Form.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-2xl font-semibold'>Components</h2>
      <div class='gap-4 md:grid-cols-2 lg:grid-cols-3 grid'>
        {components.map((component) => (
          <Link
            to={component.to}
            class='p-4 block rounded-lg border border-border transition-colors hover:border-primary hover:bg-muted/50'
          >
            <h3 class='font-semibold'>{component.name}</h3>
            <p class='text-sm mt-1 text-muted-foreground'>{component.description}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/')({
  component: HomePage,
});
