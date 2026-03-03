import {
  Slider,
  SliderLabel,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SliderMarkerGroup,
  SliderMarker,
  SliderCircle,
  SliderCircleLabel,
  SliderCircleValueText,
  SliderCircleTrack,
  SliderCircleRange,
  SliderCircleThumb,
  SliderCircleMarkerGroup,
  SliderCircleMarker,
} from '@manafishrov/ui/slider';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import { For, type Component } from 'solid-js';

import * as m from '@/paraglide/messages';

const DEFAULT_VOLUME = 33;
const MAX_VOLUME = 100;
const VOLUME_STEP = 1;

const marks = [
  { value: 0, label: '0' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 75, label: '75' },
  { value: 100, label: '100' },
];

const sliderDocContent = (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Slider</H1>
      <Lead>{m.docs_component_slider_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_basic()}</H2>
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

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_with_label()}</H2>
      <Slider defaultValue={[DEFAULT_VOLUME]} max={MAX_VOLUME} step={VOLUME_STEP} class='w-[60%]'>
        <SliderLabel>Volume</SliderLabel>
        <SliderControl>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb index={0} />
        </SliderControl>
        <SliderMarkerGroup>
          <For each={marks}>
            {(mark) => <SliderMarker value={mark.value}>{mark.label}</SliderMarker>}
          </For>
        </SliderMarkerGroup>
      </Slider>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_circular()}</H2>
      <div class='gap-8 sm:grid-cols-2 grid'>
        <div class='space-y-3'>
          <p class='text-sm font-medium'>Without markers and labels</p>
          <SliderCircle defaultValue={45}>
            <SliderCircleTrack>
              <SliderCircleRange />
              <SliderCircleThumb />
            </SliderCircleTrack>
          </SliderCircle>
        </div>

        <div class='space-y-3'>
          <p class='text-sm font-medium'>With markers and labels</p>
          <SliderCircle defaultValue={45}>
            <SliderCircleLabel>Rotation</SliderCircleLabel>
            <SliderCircleTrack>
              <SliderCircleRange />
              <SliderCircleMarkerGroup>
                <For each={[0, 45, 90, 135, 180, 225, 270, 315]}>
                  {(value) => <SliderCircleMarker value={value} />}
                </For>
              </SliderCircleMarkerGroup>
              <SliderCircleThumb />
            </SliderCircleTrack>
            <SliderCircleValueText />
          </SliderCircle>
        </div>
      </div>
    </div>
  </div>
);

const SliderDocPage: Component = () => sliderDocContent;

export const Route = createFileRoute('/components-slider')({
  component: SliderDocPage,
});
