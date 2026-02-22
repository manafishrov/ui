import type { Component } from 'solid-js';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@manafish/ui/carousel';
import { createFileRoute } from '@tanstack/solid-router';

const CarouselDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Carousel</h1>
      <p class='mt-2 text-muted-foreground'>A carousel with motion and swipe built using Embla.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <div class='max-w-xs mx-auto w-full'>
        <Carousel>
          <CarouselContent>
            <CarouselItem class='basis-full'>
              <div class='p-1'>
                <div class='p-6 flex aspect-square items-center justify-center rounded-xl border bg-card'>
                  <span class='text-4xl font-semibold'>1</span>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem class='basis-full'>
              <div class='p-1'>
                <div class='p-6 flex aspect-square items-center justify-center rounded-xl border bg-card'>
                  <span class='text-4xl font-semibold'>2</span>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  </div>
);

export const Route = createFileRoute('/components/carousel')({
  component: CarouselDocPage,
});
