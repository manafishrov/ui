import type { Component } from 'solid-js';

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from '@manafish/ui/avatar';
import { createFileRoute } from '@tanstack/solid-router';

const AvatarDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Avatar</h1>
      <p class='mt-2 text-muted-foreground'>
        An image element with a fallback for representing the user.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Avatar>
        <AvatarImage src='https://github.com/solidjs.png' alt='@solidjs' />
        <AvatarFallback>SJ</AvatarFallback>
        <AvatarBadge class='bg-green-500' />
      </Avatar>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Group</h2>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <AvatarGroupCount count={3} />
      </AvatarGroup>
    </div>
  </div>
);

export const Route = createFileRoute('/components/avatar')({
  component: AvatarDocPage,
});
