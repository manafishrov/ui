import type { Component } from 'solid-js';

import { Card, CardDescription, CardHeader, CardTitle } from '@manafishrov/ui/card';
import { Link } from '@manafishrov/ui/link';
import { H1, H3, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import { components } from '@/componentCatalog';
import * as m from '@/paraglide/messages';

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
                <CardDescription>{m[component.descriptionKey]()}</CardDescription>
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
