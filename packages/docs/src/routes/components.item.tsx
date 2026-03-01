import type { Component } from 'solid-js';

import { Button } from '@manafishrov/ui/button';
import {
  ItemGroup,
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from '@manafishrov/ui/item';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const BasicItemExample: Component = () => (
  <Item variant='outline'>
    <ItemContent>
      <ItemTitle>Basic Item</ItemTitle>
      <ItemDescription>A simple item with title and description.</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button variant='outline' size='sm'>
        Action
      </Button>
    </ItemActions>
  </Item>
);

const VerifiedProfileExample: Component = () => (
  <Item variant='outline' size='sm'>
    <ItemMedia>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='size-5'
      >
        <path d='M12 2 9.3 4.6 5.6 5.1 5.1 8.8 2.5 11.5 5.1 14.2 5.6 17.9 9.3 18.4 12 21 14.7 18.4 18.4 17.9 18.9 14.2 21.5 11.5 18.9 8.8 18.4 5.1 14.7 4.6 12 2Z' />
        <path d='m9 12 2 2 4-4' />
      </svg>
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Your profile has been verified.</ItemTitle>
    </ItemContent>
    <ItemActions>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='size-4'
      >
        <path d='m9 18 6-6-6-6' />
      </svg>
    </ItemActions>
  </Item>
);

const ItemDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Item</H1>
      <Lead>{m.docs_component_item_description()}</Lead>
    </div>

    <ItemGroup class='max-w-md gap-6'>
      <BasicItemExample />
      <VerifiedProfileExample />
    </ItemGroup>
  </div>
);

export const Route = createFileRoute('/components/item')({
  component: ItemDocPage,
});
