import { Button } from '@manafishrov/ui/button';
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
import { createSignal, type Component } from 'solid-js';

import * as m from '@/paraglide/messages';

const ProgressDocPage: Component = () => {
  const [progress, setProgress] = createSignal(33);

  const incrementProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const resetProgress = () => {
    setProgress(0);
  };

  return (
    <div class='space-y-8'>
      <div class='space-y-2'>
        <H1>Progress</H1>
        <Lead>{m.docs_component_progress_description()}</Lead>
      </div>

      <div class='space-y-4'>
        <H2 class='pb-0 border-none'>{m.docs_example_linear()}</H2>
        <Progress value={progress()} class='w-[60%]'>
          <ProgressLabel>Downloading...</ProgressLabel>
          <ProgressTrack>
            <ProgressIndicator />
          </ProgressTrack>
          <ProgressValue />
        </Progress>
        <div class='flex gap-2'>
          <Button size='sm' onClick={incrementProgress}>
            Increment
          </Button>
          <Button size='sm' variant='outline' onClick={resetProgress}>
            Reset
          </Button>
        </div>
      </div>

      <div class='space-y-4'>
        <H2 class='pb-0 border-none'>{m.docs_example_circular()}</H2>
        <div class='flex items-center gap-8'>
          <Progress value={progress()}>
            <ProgressLabel>Loading...</ProgressLabel>
            <ProgressCircle class='size-10'>
              <ProgressCircleTrack />
              <ProgressCircleRange />
            </ProgressCircle>
            <ProgressValue />
          </Progress>

          <Progress value={progress()}>
            <ProgressCircle class='size-12'>
              <ProgressCircleTrack />
              <ProgressCircleRange />
            </ProgressCircle>
          </Progress>

          <Progress value={progress()}>
            <ProgressCircle class='size-16'>
              <ProgressCircleTrack />
              <ProgressCircleRange />
            </ProgressCircle>
          </Progress>

          <Progress value={progress()}>
            <ProgressCircle class='size-20'>
              <ProgressCircleTrack />
              <ProgressCircleRange />
            </ProgressCircle>
          </Progress>
        </div>
      </div>

      <div class='space-y-4'>
        <H2 class='pb-0 border-none'>{m.docs_example_indeterminate()}</H2>
        <Progress class='w-[60%]'>
          <ProgressLabel>Loading...</ProgressLabel>
          <ProgressTrack>
            <ProgressIndicator />
          </ProgressTrack>
        </Progress>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/components/progress')({
  component: ProgressDocPage,
});
