import type { Component } from 'solid-js';

import {
  Slider,
  SliderLabel,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from '@manafishrov/ui/slider';
import { H1, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const DEFAULT_VOLUME = 33;
const MAX_VOLUME = 100;
const VOLUME_STEP = 1;

const SliderDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Slider</H1>
      <Lead>{m.docs_component_slider_description()}</Lead>
    </div>

    <Slider defaultValue={[DEFAULT_VOLUME]} max={MAX_VOLUME} step={VOLUME_STEP} class='w-[60%]'>
      <SliderLabel>Volume</SliderLabel>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0} />
      </SliderControl>
    </Slider>
  </div>
);

export const Route = createFileRoute('/components/slider')({
  component: SliderDocPage,
});
