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
} from '@manafishrov/ui/slider';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const SliderDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Slider</H1>
      <Lead>{m.docs_component_slider_description()}</Lead>
    </div>

    <div class='space-y-4'>
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
