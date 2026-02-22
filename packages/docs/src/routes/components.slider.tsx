import type { Component } from 'solid-js';

import {
  Slider,
  SliderLabel,
  SliderValueText,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SliderMarkerGroup,
  SliderMarker,
} from '@manafish/ui/slider';
import { createFileRoute } from '@tanstack/solid-router';

const SliderDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Slider</h1>
      <p class='mt-2 text-muted-foreground'>Documentation for the Slider component.</p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Default</h2>
      <Slider defaultValue={[33]} max={100} step={1} class='w-[60%]'>
        <SliderLabel>Volume</SliderLabel>
        <SliderControl>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </Slider>
    </div>
  </div>
);

export const Route = createFileRoute('/components/slider')({
  component: SliderDocPage,
});
