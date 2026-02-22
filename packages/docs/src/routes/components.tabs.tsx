import type { Component } from 'solid-js';

import { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator } from '@manafish/ui/tabs';
import { createFileRoute } from '@tanstack/solid-router';

const TabsDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Tabs</h1>
      <p class='mt-2 text-muted-foreground'>
        A set of layered sections of content—known as tab panels—that are displayed one at a time.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Tabs defaultValue='account' class='w-[400px]'>
        <TabsList>
          <TabsIndicator />
          <TabsTrigger value='account'>Account</TabsTrigger>
          <TabsTrigger value='password'>Password</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <div class='p-4 mt-2 rounded-md border'>Account settings here.</div>
        </TabsContent>
        <TabsContent value='password'>
          <div class='p-4 mt-2 rounded-md border'>Password settings here.</div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
);

export const Route = createFileRoute('/components/tabs')({
  component: TabsDocPage,
});
