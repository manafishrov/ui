import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '@manafishrov/ui/card';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const CardDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Card</H1>
      <Lead>{m.docs_component_card_description()}</Lead>
    </div>

    <div class='space-y-4'>
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
