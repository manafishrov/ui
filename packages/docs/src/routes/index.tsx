import type { Component } from 'solid-js';

import { createFileRoute, Link } from '@tanstack/solid-router';

const components = [
  {
    name: 'Accordion',
    to: '/components/accordion',
    description: 'Documentation for the Accordion component.',
  },
  // {
  //   name: 'AlertDialog',
  //   to: '/components/alert-dialog',
  //   description: 'Documentation for the AlertDialog component.',
  // },
  // {
  //   name: 'AspectRatio',
  //   to: '/components/aspect-ratio',
  //   description: 'Documentation for the AspectRatio component.',
  // },
  // {
  //   name: 'Avatar',
  //   to: '/components/avatar',
  //   description: 'Documentation for the Avatar component.',
  // },
  // {
  //   name: 'Badge',
  //   to: '/components/badge',
  //   description: 'A small label component for status or counts.',
  // },
  // {
  //   name: 'Breadcrumb',
  //   to: '/components/breadcrumb',
  //   description: 'Documentation for the Breadcrumb component.',
  // },
  // {
  //   name: 'Button',
  //   to: '/components/button',
  //   description: 'A clickable button component with multiple variants.',
  // },
  // {
  //   name: 'Card',
  //   to: '/components/card',
  //   description: 'A container component for displaying content.',
  // },
  // {
  //   name: 'Carousel',
  //   to: '/components/carousel',
  //   description: 'Documentation for the Carousel component.',
  // },
  // {
  //   name: 'Checkbox',
  //   to: '/components/checkbox',
  //   description: 'Documentation for the Checkbox component.',
  // },
  // {
  //   name: 'Collapsible',
  //   to: '/components/collapsible',
  //   description: 'Documentation for the Collapsible component.',
  // },
  // {
  //   name: 'Combobox',
  //   to: '/components/combobox',
  //   description: 'Documentation for the Combobox component.',
  // },
  // {
  //   name: 'DatePicker',
  //   to: '/components/date-picker',
  //   description: 'Documentation for the DatePicker component.',
  // },
  // {
  //   name: 'Dialog',
  //   to: '/components/dialog',
  //   description: 'Documentation for the Dialog component.',
  // },
  // {
  //   name: 'Empty',
  //   to: '/components/empty',
  //   description: 'Documentation for the Empty component.',
  // },
  // {
  //   name: 'Field',
  //   to: '/components/field',
  //   description: 'Documentation for the Field component.',
  // },
  // {
  //   name: 'HoverCard',
  //   to: '/components/hover-card',
  //   description: 'Documentation for the HoverCard component.',
  // },
  // {
  //   name: 'Input',
  //   to: '/components/input',
  //   description: 'Documentation for the Input component.',
  // },
  // {
  //   name: 'Item',
  //   to: '/components/item',
  //   description: 'Documentation for the Item component.',
  // },
  // {
  //   name: 'Kbd',
  //   to: '/components/kbd',
  //   description: 'Documentation for the Kbd component.',
  // },
  // {
  //   name: 'Label',
  //   to: '/components/label',
  //   description: 'Documentation for the Label component.',
  // },
  // {
  //   name: 'Link',
  //   to: '/components/link',
  //   description: 'Documentation for the Link component.',
  // },
  // {
  //   name: 'Marquee',
  //   to: '/components/marquee',
  //   description: 'Documentation for the Marquee component.',
  // },
  // {
  //   name: 'Menu',
  //   to: '/components/menu',
  //   description: 'Documentation for the Menu component.',
  // },
  // {
  //   name: 'NavigationMenu',
  //   to: '/components/navigation-menu',
  //   description: 'Documentation for the NavigationMenu component.',
  // },
  // {
  //   name: 'NumberInput',
  //   to: '/components/number-input',
  //   description: 'Documentation for the NumberInput component.',
  // },
  // {
  //   name: 'Pagination',
  //   to: '/components/pagination',
  //   description: 'Documentation for the Pagination component.',
  // },
  // {
  //   name: 'PasswordInput',
  //   to: '/components/password-input',
  //   description: 'Documentation for the PasswordInput component.',
  // },
  // {
  //   name: 'PinInput',
  //   to: '/components/pin-input',
  //   description: 'Documentation for the PinInput component.',
  // },
  // {
  //   name: 'Popover',
  //   to: '/components/popover',
  //   description: 'Documentation for the Popover component.',
  // },
  // {
  //   name: 'Progress',
  //   to: '/components/progress',
  //   description: 'Documentation for the Progress component.',
  // },
  // {
  //   name: 'RadioGroup',
  //   to: '/components/radio-group',
  //   description: 'Documentation for the RadioGroup component.',
  // },
  // {
  //   name: 'ScrollArea',
  //   to: '/components/scroll-area',
  //   description: 'Documentation for the ScrollArea component.',
  // },
  // {
  //   name: 'Select',
  //   to: '/components/select',
  //   description: 'Documentation for the Select component.',
  // },
  // {
  //   name: 'Separator',
  //   to: '/components/separator',
  //   description: 'Documentation for the Separator component.',
  // },
  // {
  //   name: 'Sheet',
  //   to: '/components/sheet',
  //   description: 'Documentation for the Sheet component.',
  // },
  // {
  //   name: 'Skeleton',
  //   to: '/components/skeleton',
  //   description: 'Documentation for the Skeleton component.',
  // },
  // {
  //   name: 'Slider',
  //   to: '/components/slider',
  //   description: 'Documentation for the Slider component.',
  // },
  // {
  //   name: 'Spinner',
  //   to: '/components/spinner',
  //   description: 'Documentation for the Spinner component.',
  // },
  // {
  //   name: 'Switch',
  //   to: '/components/switch',
  //   description: 'Documentation for the Switch component.',
  // },
  // {
  //   name: 'Table',
  //   to: '/components/table',
  //   description: 'Documentation for the Table component.',
  // },
  // {
  //   name: 'Tabs',
  //   to: '/components/tabs',
  //   description: 'Documentation for the Tabs component.',
  // },
  // {
  //   name: 'TagsInput',
  //   to: '/components/tags-input',
  //   description: 'Documentation for the TagsInput component.',
  // },
  // {
  //   name: 'Textarea',
  //   to: '/components/textarea',
  //   description: 'Documentation for the Textarea component.',
  // },
  // {
  //   name: 'TextInput',
  //   to: '/components/text-input',
  //   description: 'Documentation for the TextInput component.',
  // },
  // {
  //   name: 'Toaster',
  //   to: '/components/toaster',
  //   description: 'Documentation for the Toaster component.',
  // },
  // {
  //   name: 'Toggle',
  //   to: '/components/toggle',
  //   description: 'Documentation for the Toggle component.',
  // },
  // {
  //   name: 'Tooltip',
  //   to: '/components/tooltip',
  //   description: 'Documentation for the Tooltip component.',
  // },
  // {
  //   name: 'TreeView',
  //   to: '/components/tree-view',
  //   description: 'Documentation for the TreeView component.',
  // },
  {
    name: 'Typography',
    to: '/components/typography',
    description: 'Documentation for the Typography component.',
  },
];

const HomePage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <h1 class='text-4xl font-bold tracking-tight'>Manafish UI</h1>
      <p class='text-lg text-muted-foreground'>
        A component library for SolidJS built with Ark UI, Tailwind CSS, and TanStack Form.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-2xl font-semibold'>Components</h2>
      <div class='gap-4 md:grid-cols-2 lg:grid-cols-3 grid'>
        {components.map((component) => (
          <Link
            to={component.to}
            class='p-4 block rounded-lg border border-border transition-colors hover:border-primary hover:bg-muted/50'
          >
            <h3 class='font-semibold'>{component.name}</h3>
            <p class='text-sm mt-1 text-muted-foreground'>{component.description}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/')({
  component: HomePage,
});
