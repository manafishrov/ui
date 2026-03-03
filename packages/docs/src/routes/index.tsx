import type { Component } from 'solid-js';

import { Card, CardDescription, CardHeader, CardTitle } from '@manafishrov/ui/card';
import { Link } from '@manafishrov/ui/link';
import { H1, H3, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

type MessageKey = Exclude<keyof typeof m, 'm'>;

const components = [
  {
    name: 'Accordion',
    to: '/components/accordion',
    descriptionKey: 'docs_component_accordion_description',
  },
  {
    name: 'Alert Dialog',
    to: '/components/alert-dialog',
    descriptionKey: 'docs_component_alert_dialog_description',
  },
  {
    name: 'Aspect Ratio',
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
  {
    name: 'Breadcrumb',
    to: '/components/breadcrumb',
    descriptionKey: 'docs_component_breadcrumb_description',
  },
  {
    name: 'Button',
    to: '/components/button',
    descriptionKey: 'docs_component_button_description',
  },
  {
    name: 'Card',
    to: '/components/card',
    descriptionKey: 'docs_component_card_description',
  },
  {
    name: 'Carousel',
    to: '/components/carousel',
    descriptionKey: 'docs_component_carousel_description',
  },
  {
    name: 'Checkbox',
    to: '/components/checkbox',
    descriptionKey: 'docs_component_checkbox_description',
  },
  {
    name: 'Collapsible',
    to: '/components/collapsible',
    descriptionKey: 'docs_component_collapsible_description',
  },
  {
    name: 'Combobox',
    to: '/components/combobox',
    descriptionKey: 'docs_component_combobox_description',
  },
  {
    name: 'Date Picker',
    to: '/components/date-picker',
    descriptionKey: 'docs_component_date_picker_description',
  },
  {
    name: 'Dialog',
    to: '/components/dialog',
    descriptionKey: 'docs_component_dialog_description',
  },
  {
    name: 'Empty',
    to: '/components/empty',
    descriptionKey: 'docs_component_empty_description',
  },
  {
    name: 'Field',
    to: '/components/field',
    descriptionKey: 'docs_component_field_description',
  },
  {
    name: 'Form',
    to: '/components/form',
    descriptionKey: 'docs_component_form_description',
  },
  {
    name: 'Hover Card',
    to: '/components/hover-card',
    descriptionKey: 'docs_component_hover_card_description',
  },
  {
    name: 'Input Group',
    to: '/components/input-group',
    descriptionKey: 'docs_component_input_description',
  },
  {
    name: 'Item',
    to: '/components/item',
    descriptionKey: 'docs_component_item_description',
  },
  {
    name: 'Kbd',
    to: '/components/kbd',
    descriptionKey: 'docs_component_kbd_description',
  },
  {
    name: 'Link',
    to: '/components/link',
    descriptionKey: 'docs_component_link_description',
  },
  {
    name: 'Marquee',
    to: '/components/marquee',
    descriptionKey: 'docs_component_marquee_description',
  },
  {
    name: 'Menu',
    to: '/components/menu',
    descriptionKey: 'docs_component_menu_description',
  },
  {
    name: 'Menu Combobox',
    to: '/components/menu-combobox',
    descriptionKey: 'docs_component_menu_combobox_description',
  },
  {
    name: 'Navigation Menu',
    to: '/components/navigation-menu',
    descriptionKey: 'docs_component_navigation_menu_description',
  },
  {
    name: 'Number Input',
    to: '/components/number-input',
    descriptionKey: 'docs_component_number_input_description',
  },
  {
    name: 'Pagination',
    to: '/components/pagination',
    descriptionKey: 'docs_component_pagination_description',
  },
  {
    name: 'Password Input',
    to: '/components/password-input',
    descriptionKey: 'docs_component_password_input_description',
  },
  {
    name: 'Pin Input',
    to: '/components/pin-input',
    descriptionKey: 'docs_component_pin_input_description',
  },
  {
    name: 'Popover',
    to: '/components/popover',
    descriptionKey: 'docs_component_popover_description',
  },
  {
    name: 'Progress',
    to: '/components/progress',
    descriptionKey: 'docs_component_progress_description',
  },
  {
    name: 'Radio Group',
    to: '/components/radio-group',
    descriptionKey: 'docs_component_radio_group_description',
  },
  {
    name: 'Scroll Area',
    to: '/components/scroll-area',
    descriptionKey: 'docs_component_scroll_area_description',
  },
  {
    name: 'Select',
    to: '/components/select',
    descriptionKey: 'docs_component_select_description',
  },
  {
    name: 'Select Tabs',
    to: '/components/select-tabs',
    descriptionKey: 'docs_component_select_tabs_description',
  },
  {
    name: 'Separator',
    to: '/components/separator',
    descriptionKey: 'docs_component_separator_description',
  },
  {
    name: 'Sheet',
    to: '/components/sheet',
    descriptionKey: 'docs_component_sheet_description',
  },
  {
    name: 'Sidebar',
    to: '/components/sidebar',
    descriptionKey: 'docs_component_sidebar_description',
  },
  {
    name: 'Skeleton',
    to: '/components/skeleton',
    descriptionKey: 'docs_component_skeleton_description',
  },
  {
    name: 'Slider',
    to: '/components/slider',
    descriptionKey: 'docs_component_slider_description',
  },
  {
    name: 'Spinner',
    to: '/components/spinner',
    descriptionKey: 'docs_component_spinner_description',
  },
  {
    name: 'Splitter',
    to: '/components/splitter',
    descriptionKey: 'docs_component_splitter_description',
  },
  {
    name: 'Switch',
    to: '/components/switch',
    descriptionKey: 'docs_component_switch_description',
  },
  {
    name: 'Table',
    to: '/components/table',
    descriptionKey: 'docs_component_table_description',
  },
  {
    name: 'Tabs',
    to: '/components/tabs',
    descriptionKey: 'docs_component_tabs_description',
  },
  {
    name: 'Tags Input',
    to: '/components/tags-input',
    descriptionKey: 'docs_component_tags_input_description',
  },
  {
    name: 'Tags Input Combobox',
    to: '/components/tags-input-combobox',
    descriptionKey: 'docs_component_tags_input_combobox_description',
  },
  {
    name: 'Text Input',
    to: '/components/text-input',
    descriptionKey: 'docs_component_text_input_description',
  },
  {
    name: 'Toaster',
    to: '/components/toaster',
    descriptionKey: 'docs_component_toaster_description',
  },
  {
    name: 'Toggle',
    to: '/components/toggle',
    descriptionKey: 'docs_component_toggle_description',
  },
  {
    name: 'Tooltip',
    to: '/components/tooltip',
    descriptionKey: 'docs_component_tooltip_description',
  },
  {
    name: 'Tree View',
    to: '/components/tree-view',
    descriptionKey: 'docs_component_tree_view_description',
  },
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
          <Link to={component.to}>
            <Card class='h-full cursor-pointer transition-all hover:bg-muted/50 hover:ring-primary'>
              <CardHeader>
                <CardTitle>{component.name}</CardTitle>
                <CardDescription>{m[component.descriptionKey as MessageKey]()}</CardDescription>
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
