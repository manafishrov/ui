import type { Component } from 'solid-js';

import {
  TagsInput,
  TagsInputHiddenInput,
  TagsInputLabel,
  TagsInputControl,
  TagsInputInput,
  TagsInputClearTrigger,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
} from '@manafish/ui/tags-input';
import { createFileRoute } from '@tanstack/solid-router';

const TagsInputDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>TagsInput</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the TagsInput component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <div class='gap-4 flex flex-wrap'>
        <TagsInput>Example</TagsInput>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/tags-input')({
  component: TagsInputDocPage,
});
