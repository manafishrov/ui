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
import { createFileRoute } from '@tanstack/solid-router';

const PaginationDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Pagination</h1>
      <p class='mt-2 text-muted-foreground'>
        Pagination with page navigation, next and previous links.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
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
