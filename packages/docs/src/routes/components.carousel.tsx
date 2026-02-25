import type { Component } from 'solid-js';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@manafishrov/ui/carousel';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const CarouselDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Carousel</H1>
      <Lead>{m.docs_component_carousel_description()}</Lead>
    </div>

    <div class='space-y-4'>
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
