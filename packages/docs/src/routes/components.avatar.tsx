import type { Component } from 'solid-js';

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from '@manafishrov/ui/avatar';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const AvatarDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Avatar</H1>
      <Lead>{m.docs_component_avatar_description()}</Lead>
    </div>

    <Avatar>
      <AvatarImage src='https://github.com/michaelbrusegard.png' alt='@michaelbrusegard' />
      <AvatarFallback>SJ</AvatarFallback>
      <AvatarBadge class='bg-green-500' />
    </Avatar>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_group()}</H2>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+2</AvatarGroupCount>
      </AvatarGroup>
    </div>
  </div>
);

export const Route = createFileRoute('/components/avatar')({
  component: AvatarDocPage,
});
