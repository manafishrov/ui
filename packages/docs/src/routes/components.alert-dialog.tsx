import type { Component } from 'solid-js';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@manafishrov/ui/alert-dialog';
import { Button } from '@manafishrov/ui/button';
import { createFileRoute } from '@tanstack/solid-router';

const AlertDialogDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>AlertDialog</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the AlertDialog component.</p>
    </div>

    <div class='space-y-4'>
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
