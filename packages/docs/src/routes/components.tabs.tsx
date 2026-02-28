import type { Component } from 'solid-js';

import { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator } from '@manafishrov/ui/tabs';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const TabsDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Tabs</H1>
      <Lead>{m.docs_component_tabs_description()}</Lead>
    </div>

    <Tabs defaultValue='account' class='max-w-sm'>
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
);

export const Route = createFileRoute('/components/tabs')({
  component: TabsDocPage,
});
