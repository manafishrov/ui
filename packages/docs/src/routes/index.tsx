import type { Component } from 'solid-js';

import { Card, CardDescription, CardHeader, CardTitle } from '@manafishrov/ui/card';
import { H1, H3, Lead } from '@manafishrov/ui/typography';
import { createFileRoute, Link } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';
const components = [
  {
    name: 'Accordion',
    to: '/components/accordion',
    descriptionKey: 'docs_component_accordion_description',
  },
  {
    name: 'AlertDialog',
    to: '/components/alert-dialog',
    descriptionKey: 'docs_component_alert_dialog_description',
  },
  {
    name: 'AspectRatio',
    to: '/components/aspect-ratio',
    descriptionKey: 'docs_component_aspect_ratio_description',
  },
  {
    name: 'Avatar',
    to: '/components/avatar',
    descriptionKey: 'docs_component_avatar_description',
  },
  {
    name: 'Badge',
    to: '/components/badge',
    descriptionKey: 'docs_component_badge_description',
  },
  // {
  //   name: 'Breadcrumb',
  //   to: '/components/breadcrumb',
  //   descriptionKey: 'docs_component_breadcrumb_description',
  // },
  {
    name: 'Button',
    to: '/components/button',
    descriptionKey: 'docs_component_button_description',
  },
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
  //   descriptionKey: 'docs_component_tree_view_description',
  // },
  {
    name: 'Typography',
    to: '/components/typography',
    descriptionKey: 'docs_component_typography_description',
  },
];

const HomePage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1 class='font-branding'>{m.docs_title()}</H1>
      <Lead>{m.docs_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <H3 class='pb-0 border-none'>{m.docs_components_title()}</H3>
      <div class='gap-4 md:grid-cols-2 lg:grid-cols-3 grid'>
        {components.map((component) => (
          <Link to={component.to} class='block'>
            <Card class='h-full cursor-pointer transition-all hover:bg-muted/50 hover:ring-primary'>
              <CardHeader>
                <CardTitle>{component.name}</CardTitle>
                <CardDescription>
                  {m[component.descriptionKey as Exclude<keyof typeof m, 'm'>]()}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/')({
  component: HomePage,
});
