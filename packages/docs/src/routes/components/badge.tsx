import type { JSX } from 'solid-js';
import { createFileRoute } from '@tanstack/solid-router';
import { Badge } from 'manafish-ui/badge';

const BadgePage = (): JSX.Element => (
  <div class="space-y-8">
    <div>
      <h1 class="text-3xl font-bold">Badge</h1>
      <p class="text-muted-foreground mt-2">
        A small label component for displaying status, counts, or categories.
      </p>
    </div>

    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Variants</h2>
      <div class="flex flex-wrap gap-4">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    </div>

    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Use Cases</h2>
      <div class="flex flex-wrap items-center gap-4">
        <div class="flex items-center gap-2">
          <span>Notifications</span>
          <Badge>3</Badge>
        </div>
        <div class="flex items-center gap-2">
          <span>Status</span>
          <Badge variant="secondary">Active</Badge>
        </div>
        <div class="flex items-center gap-2">
          <span>Priority</span>
          <Badge variant="destructive">High</Badge>
        </div>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/badge')({
  component: BadgePage,
});
