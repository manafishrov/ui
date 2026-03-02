import {
  TagsInput,
  TagsInputClearTrigger,
  TagsInputContext,
  TagsInputControl,
  TagsInputHiddenInput,
  TagsInputInput,
  TagsInputItemInput,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputLabel,
} from '@manafishrov/ui/tags-input';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import { type Component, For } from 'solid-js';

import * as m from '@/paraglide/messages';

const TagsInputDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Tags Input</H1>
      <Lead>{m.docs_component_tags_input_description()}</Lead>
    </div>
    <div class='gap-4 flex flex-wrap'>
      <TagsInput class='w-full max-w-md' defaultValue={['SolidJS', 'TypeScript']}>
        <TagsInputLabel>Technologies</TagsInputLabel>
        <TagsInputControl>
          <TagsInputContext>
            {(context) => (
              <For each={context().value}>
                {(value, index) => (
                  <TagsInputItem index={index()} value={value}>
                    <TagsInputItemPreview>
                      <TagsInputItemText>{value}</TagsInputItemText>
                      <TagsInputItemDeleteTrigger />
                    </TagsInputItemPreview>
                    <TagsInputItemInput />
                  </TagsInputItem>
                )}
              </For>
            )}
          </TagsInputContext>
          <TagsInputInput placeholder='Add tag...' />
          <TagsInputClearTrigger />
        </TagsInputControl>
        <TagsInputHiddenInput />
      </TagsInput>
    </div>
  </div>
);
export const Route = createFileRoute('/components/tags-input')({
  component: TagsInputDocPage,
});
