import {
  TagsInput,
  TagsInputClearTrigger,
  TagsInputContext,
  TagsInputControl,
  TagsInputHiddenInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputLabel,
} from '@manafishrov/ui/tags-input';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import { type Component, Index } from 'solid-js';

import * as m from '@/paraglide/messages';
const TagsInputDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Tags Input</H1>
      <Lead>{m.docs_component_tags_input_description()}</Lead>
    </div>
    <div class='gap-4 flex flex-wrap'>
      <TagsInput defaultValue={['SolidJS', 'TypeScript']}>
        <TagsInputLabel>Technologies</TagsInputLabel>
        <TagsInputControl>
          <TagsInputContext>
            {(context) => (
              <Index each={context().value}>
                {(value, index) => (
                  <TagsInputItem index={index} value={value()}>
                    {value()}
                    <TagsInputItemDeleteTrigger />
                  </TagsInputItem>
                )}
              </Index>
            )}
          </TagsInputContext>
          <TagsInputInput placeholder='Add tag...' />
        </TagsInputControl>
        <TagsInputHiddenInput />
        <TagsInputClearTrigger>Clear all</TagsInputClearTrigger>
      </TagsInput>
    </div>
  </div>
);
export const Route = createFileRoute('/components/tags-input')({
  component: TagsInputDocPage,
});
