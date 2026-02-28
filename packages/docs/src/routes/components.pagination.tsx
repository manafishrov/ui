import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationContext,
} from '@manafishrov/ui/pagination';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import { type Component, For } from 'solid-js';

import * as m from '@/paraglide/messages';

const PaginationDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Pagination</H1>
      <Lead>{m.docs_component_pagination_description()}</Lead>
    </div>

    <Pagination count={100} pageSize={10} siblingCount={1}>
      <PaginationContext>
        {(api) => (
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <For each={api().pages}>
              {(page, index) =>
                page.type === 'page' ? (
                  <PaginationItem>
                    <PaginationLink value={page.value} type='page'>
                      {page.value}
                    </PaginationLink>
                  </PaginationItem>
                ) : (
                  <PaginationItem>
                    <PaginationEllipsis index={index()} />
                  </PaginationItem>
                )
              }
            </For>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        )}
      </PaginationContext>
    </Pagination>
  </div>
);

export const Route = createFileRoute('/components/pagination')({
  component: PaginationDocPage,
});
