import type { Component } from 'solid-js';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogOverlay,
  AlertDialogPositioner,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@manafish/ui/alert-dialog';
import { Button } from '@manafish/ui/button';
import { createFileRoute } from '@tanstack/solid-router';

const AlertDialogDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>AlertDialog</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the AlertDialog component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <AlertDialog>
        <AlertDialogTrigger
          asChild={(props) => (
            <Button variant='outline' {...props()}>
              Show Dialog
            </Button>
          )}
        />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  </div>
);

export const Route = createFileRoute('/components/alert-dialog')({
  component: AlertDialogDocPage,
});
