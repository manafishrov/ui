import type { Component } from 'solid-js';

import { Button } from '@manafish/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '@manafish/ui/card';
import { createFileRoute } from '@tanstack/solid-router';

const CardDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Card</h1>
      <p class='mt-2 text-muted-foreground'>A container component for displaying content.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Card class='w-[350px]'>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <div class='h-20 flex items-center justify-center rounded-md border border-dashed text-muted-foreground'>
            Form goes here
          </div>
        </CardContent>
        <CardFooter class='flex justify-between'>
          <CardAction
            asChild={(props) => (
              <Button variant='outline' {...props()}>
                Cancel
              </Button>
            )}
          />
          <CardAction asChild={(props) => <Button {...props()}>Deploy</Button>} />
        </CardFooter>
      </Card>
    </div>
  </div>
);

export const Route = createFileRoute('/components/card')({
  component: CardDocPage,
});
