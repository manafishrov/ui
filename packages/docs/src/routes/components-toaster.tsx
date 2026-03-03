import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import { toast, Toaster } from '@manafishrov/ui/toaster';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const toastTypes = ['success', 'info', 'warning', 'error', 'loading'] as const;

const ToasterDocPage: Component = () => {
  const getRandomType = () => toastTypes[Math.floor(Math.random() * toastTypes.length)];

  return (
    <div class='space-y-8'>
      <div class='space-y-2'>
        <H1>Toaster</H1>
        <Lead>{m.docs_component_toaster_description()}</Lead>
      </div>

      <div class='gap-4 flex flex-wrap'>
        <Button
          onClick={() =>
            toast.create({
              type: getRandomType(),
              title: 'Event created',
              description: 'Your event has been scheduled.',
            })
          }
        >
          Show Toast
        </Button>
        <Toaster />
      </div>
    </div>
  );
};

export const Route = createFileRoute('/components-toaster')({
  component: ToasterDocPage,
});
