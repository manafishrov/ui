import type { Component } from 'solid-js';

import {
  ProgressCircle,
  ProgressCircleRange,
  ProgressCircleTrack,
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from '@manafishrov/ui/progress';
import { H1, H2, Lead } from '@manafishrov/ui/typography';
import { createFileRoute } from '@tanstack/solid-router';

import * as m from '@/paraglide/messages';

const ProgressDocPage: Component = () => (
  <div class='space-y-8'>
    <div class='space-y-2'>
      <H1>Progress</H1>
      <Lead>{m.docs_component_progress_description()}</Lead>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_linear()}</H2>
      <Progress value={33} class='w-[60%]'>
        <ProgressLabel>Downloading...</ProgressLabel>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
        <ProgressValue />
      </Progress>
    </div>

    <div class='space-y-4'>
      <H2 class='pb-0 border-none'>{m.docs_example_circular()}</H2>
      <Progress value={33}>
        <ProgressLabel>Loading...</ProgressLabel>
        <ProgressCircle>
          <ProgressCircleTrack />
          <ProgressCircleRange />
        </ProgressCircle>
      </Progress>
    </div>
  </div>
);

export const Route = createFileRoute('/components/progress')({
  component: ProgressDocPage,
});
