import type { Component } from 'solid-js';

import {
  ProgressCircle,
  ProgressCircleRange,
  ProgressCircleTrack,
  ProgressView,
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from '@manafish/ui/progress';
import { createFileRoute } from '@tanstack/solid-router';

const ProgressDocPage: Component = () => (
  <div class='space-y-8'>
    <div>
      <h1 class='text-3xl font-bold'>Progress</h1>
      <p class='mt-2 text-muted-foreground'>
        Displays an indicator showing the completion progress of a task.
      </p>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Linear</h2>
      <Progress value={33} class='w-[60%]'>
        <ProgressLabel>Downloading...</ProgressLabel>
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
        <ProgressValueText />
      </Progress>
    </div>

    <div class='space-y-4'>
      <h2 class='text-xl font-semibold'>Circular</h2>
      <ProgressCircle value={33}>
        <ProgressLabel>Loading...</ProgressLabel>
        <ProgressCircleTrack />
        <ProgressCircleRange />
      </ProgressCircle>
    </div>
  </div>
);

export const Route = createFileRoute('/components/progress')({
  component: ProgressDocPage,
});
