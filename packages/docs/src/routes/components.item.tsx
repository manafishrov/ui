import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  ItemGroup,
  ItemSeparator,
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
} from '@manafishrov/ui/item';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const ItemDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Item</H1>
      <Lead>{m.docs_component_item_description()}</Lead>
    </div>

    <ItemGroup class='max-w-sm'>
      <Item>
        <ItemMedia>
          <div class='h-10 w-10 bg-blue-100 flex items-center justify-center rounded-full'>1</div>
        </ItemMedia>
        <ItemContent>
          <ItemHeader>
            <ItemTitle>Notification title</ItemTitle>
            <ItemDescription>2 hours ago</ItemDescription>
          </ItemHeader>
          <ItemFooter>
            <span class='text-xs text-muted-foreground'>System message</span>
          </ItemFooter>
        </ItemContent>
        <ItemActions>
          <Button variant='ghost' size='sm'>
            Mark read
          </Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia>
          <div class='h-10 w-10 bg-green-100 flex items-center justify-center rounded-full'>2</div>
        </ItemMedia>
        <ItemContent>
          <ItemHeader>
            <ItemTitle>Update available</ItemTitle>
            <ItemDescription>1 day ago</ItemDescription>
          </ItemHeader>
        </ItemContent>
      </Item>
    </ItemGroup>
  </div>
);

export const Route = createFileRoute('/components/item')({
  component: ItemDocPage,
});
