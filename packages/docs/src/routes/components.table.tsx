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
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const TableDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Table</H1>
      <Lead>{m.docs_component_table_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <div class='gap-4 flex flex-wrap'>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead class='w-[100px]'>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead class='text-right'>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell class='font-medium'>INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell class='text-right'>$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class='font-medium'>INV002</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>PayPal</TableCell>
              <TableCell class='text-right'>$150.00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell class='text-right'>$400.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/table')({
  component: TableDocPage,
});
