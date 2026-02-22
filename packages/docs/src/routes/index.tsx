import type { JSX } from 'solid-js';
import { createFileRoute, Link } from '@tanstack/solid-router';

const components = [
  { name: 'Button', to: '/components/button', description: 'A clickable button component with multiple variants.' },
  { name: 'Card', to: '/components/card', description: 'A container component for displaying content.' },
  { name: 'Badge', to: '/components/badge', description: 'A small label component for status or counts.' },
];

const HomePage = (): JSX.Element => (
  <div class="space-y-8">
    <div class="space-y-2">
      <h1 class="text-4xl font-bold tracking-tight">Manafish UI</h1>
      <p class="text-lg text-muted-foreground">
        A component library for SolidJS built with Ark UI, Tailwind CSS, and TanStack Form.
      </p>
    </div>
    
    <div class="space-y-4">
      <h2 class="text-2xl font-semibold">Components</h2>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Link
            to={component.to}
            class="block rounded-lg border border-border p-4 hover:border-primary hover:bg-muted/50 transition-colors"
          >
            <h3 class="font-semibold">{component.name}</h3>
            <p class="text-sm text-muted-foreground mt-1">{component.description}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/')({
  component: HomePage,
});
