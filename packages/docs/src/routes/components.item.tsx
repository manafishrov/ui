import type { Component } from 'solid-js';

import { Button } from '@manafish/ui/button';
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
} from '@manafish/ui/item';
import { createFileRoute } from '@tanstack/solid-router';

const ItemDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Item</h1>
      <p class='mt-2 text-muted-foreground'>
        A layout component used to display a generic item with actions.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <ItemGroup class='w-[400px]'>
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
            <div class='h-10 w-10 bg-green-100 flex items-center justify-center rounded-full'>
              2
            </div>
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
  </div>
);

export const Route = createFileRoute('/components/item')({
  component: ItemDocPage,
});
