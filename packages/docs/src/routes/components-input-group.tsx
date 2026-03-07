import type { Component } from 'solid-js';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@manafishrov/ui/input-group';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import SearchIcon from '~icons/material-symbols/search';

import * as m from '@/paraglide/messages';

const SearchWithResultsExample: Component = () => (
  <InputGroup class='max-w-xs'>
    <InputGroupInput placeholder='Search...' />
    <InputGroupAddon>
      <SearchIcon class='size-5' />
    </InputGroupAddon>
    <InputGroupAddon align='inline-end'>
      <InputGroupText>12 results</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

const EmailExample: Component = () => (
  <InputGroup class='max-w-xs'>
    <InputGroupInput type='email' placeholder='Enter your email' />
    <InputGroupAddon>
      <InputGroupText>@</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

const CardNumberExample: Component = () => (
  <InputGroup class='max-w-xs'>
    <InputGroupInput placeholder='Card number' />
    <InputGroupAddon>
      <InputGroupText>****</InputGroupText>
    </InputGroupAddon>
    <InputGroupAddon align='inline-end'>
      <InputGroupText>✓</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

const CurrencyExample: Component = () => (
  <InputGroup class='max-w-xs'>
    <InputGroupAddon>
      <InputGroupText>$</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput placeholder='0.00' />
    <InputGroupAddon align='inline-end'>
      <InputGroupText>USD</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

const UrlExample: Component = () => (
  <InputGroup class='max-w-xs'>
    <InputGroupAddon>
      <InputGroupText>https://</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput placeholder='example' class='pl-0.5!' />
    <InputGroupAddon align='inline-end'>
      <InputGroupText>.com</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

const InputGroupDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Input Group</H1>
      <Lead>{m.docs_component_input_group_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_basic()}</H2>
      <div class='gap-4 flex flex-wrap'>
        <SearchWithResultsExample />
      </div>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_with_icon()}</H2>
      <div class='max-w-sm gap-4 grid w-full'>
        <EmailExample />
        <CardNumberExample />
        <CurrencyExample />
        <UrlExample />
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components-input-group')({
  component: InputGroupDocPage,
});
