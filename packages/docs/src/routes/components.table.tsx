import type { Component } from 'solid-js';

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@manafishrov/ui/table';
import { createFileRoute } from '@tanstack/solid-router';

const TableDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Table</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the Table component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <div class='gap-4 flex flex-wrap'>
        <Table>Example</Table>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/table')({
  component: TableDocPage,
});
