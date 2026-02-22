import type { Component } from 'solid-js';

import { Button } from '@manafish/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@manafish/ui/card';
import { createFileRoute } from '@tanstack/solid-router';

const CardPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Card</h1>
      <p class='mt-2 text-muted-foreground'>
        A container component for displaying content in a structured way.
      </p>
    </div>

    <div class='gap-6 md:grid-cols-2 grid'>
      <Card>
        <CardHeader>
          <CardTitle>Simple Card</CardTitle>
          <CardDescription>A basic card with header and content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the card content area.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>A card with actions.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card includes a footer with action buttons.</p>
        </CardContent>
        <CardFooter>
          <Button size='sm'>Action</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
);

export const Route = createFileRoute('/components/card')({
  component: CardPage,
});
