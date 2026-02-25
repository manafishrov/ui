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
  AlertDialogPositioner,
  AlertDialogOverlay,
} from '@manafishrov/ui/alert-dialog';
import { Button } from '@manafishrov/ui/button';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const AlertDialogDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Alert Dialog</H1>
      <Lead>{m.docs_component_alert_dialog_description()}</Lead>
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
        <AlertDialogOverlay />
        <AlertDialogPositioner>
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
        </AlertDialogPositioner>
      </AlertDialog>
    </div>
  </div>
);

export const Route = createFileRoute('/components/alert-dialog')({
  component: AlertDialogDocPage,
});
