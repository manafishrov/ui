import {
  AngleSlider,
  AngleSliderLabel,
  AngleSliderControl,
  AngleSliderThumb,
  AngleSliderMarkerGroup,
  AngleSliderMarker,
  AngleSliderValueText,
} from '@manafishrov/ui/angle-slider';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';
import { For, type Component } from 'solid-js';

import * as m from '@/paraglide/messages';

const AngleSliderDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Angle Slider</H1>
      <Lead>{m.docs_component_angle_slider_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_basic()}</H2>
      <AngleSlider defaultValue={45}>
        <AngleSliderLabel>Rotation</AngleSliderLabel>
        <AngleSliderControl>
          <AngleSliderMarkerGroup>
            <For each={[0, 45, 90, 135, 180, 225, 270, 315]}>
              {(value) => <AngleSliderMarker value={value} />}
            </For>
          </AngleSliderMarkerGroup>
          <AngleSliderThumb />
        </AngleSliderControl>
        <AngleSliderValueText />
      </AngleSlider>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_with_label()}</H2>
      <AngleSlider defaultValue={90}>
        <AngleSliderLabel>Degrees</AngleSliderLabel>
        <AngleSliderControl>
          <AngleSliderMarkerGroup>
            <For each={[0, 90, 180, 270]}>
              {(value) => <AngleSliderMarker value={value}>{value}°</AngleSliderMarker>}
            </For>
          </AngleSliderMarkerGroup>
          <AngleSliderThumb />
        </AngleSliderControl>
        <AngleSliderValueText />
      </AngleSlider>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_disabled()}</H2>
      <AngleSlider defaultValue={180} disabled>
        <AngleSliderLabel>Disabled</AngleSliderLabel>
        <AngleSliderControl>
          <AngleSliderMarkerGroup>
            <For each={[0, 90, 180, 270]}>{(value) => <AngleSliderMarker value={value} />}</For>
          </AngleSliderMarkerGroup>
          <AngleSliderThumb />
        </AngleSliderControl>
        <AngleSliderValueText />
      </AngleSlider>
    </div>
  </div>
);

export const Route = createFileRoute('/components/angle-slider')({
  component: AngleSliderDocPage,
});
