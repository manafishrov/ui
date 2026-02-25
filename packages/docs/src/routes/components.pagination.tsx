import type { Component } from 'solid-js';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@manafishrov/ui/pagination';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const PaginationDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Pagination</H1>
      <Lead>{m.docs_component_pagination_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <Pagination count={100} pageSize={10} siblingCount={1}>
        {({ pages }) => (
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            {pages.map((page, index) =>
              page.type === 'page' ? (
                <PaginationItem>
                  <PaginationLink value={page.value}>{page.value}</PaginationLink>
                </PaginationItem>
              ) : (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              ),
            )}
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        )}
      </Pagination>
    </div>
  </div>
);

export const Route = createFileRoute('/components/pagination')({
  component: PaginationDocPage,
});
