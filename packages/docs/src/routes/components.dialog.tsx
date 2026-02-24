import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogCloseTrigger,
  DialogOverlay,
  DialogPositioner,
  DialogContent,
  DialogCloseButton,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@manafishrov/ui/dialog';
import { createFileRoute } from '@tanstack/solid-router';

const DialogDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Dialog</h1>
      <p class='mt-2 text-muted-foreground'>
        A window overlaid on either the primary window or another dialog window.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Dialog>
        <DialogTrigger
          asChild={(props) => (
            <Button variant='outline' {...props()}>
              Edit Profile
            </Button>
          )}
        />
        <DialogOverlay />
        <DialogPositioner>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div class='gap-4 py-4 grid'>
              <div class='gap-4 grid grid-cols-4 items-center'>
                <span class='text-sm text-right'>Name</span>
                <input
                  class='h-9 px-3 py-1 text-sm shadow-sm col-span-3 flex w-full rounded-md border border-input bg-transparent transition-colors'
                  value='Pedro Duarte'
                />
              </div>
            </div>
            <DialogFooter>
              <DialogCloseTrigger
                asChild={(props) => (
                  <Button variant='outline' {...props()}>
                    Cancel
                  </Button>
                )}
              />
              <Button type='submit'>Save changes</Button>
            </DialogFooter>
            <DialogCloseButton
              asChild={(props) => (
                <Button
                  variant='ghost'
                  size='icon'
                  class='right-4 top-4 h-6 w-6 absolute'
                  {...props()}
                >
                  ✕
                </Button>
              )}
            />
          </DialogContent>
        </DialogPositioner>
      </Dialog>
    </div>
  </div>
);

export const Route = createFileRoute('/components/dialog')({
  component: DialogDocPage,
});
