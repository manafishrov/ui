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

const INITIAL_PROGRESS = 33;
const PROGRESS_STEP = 10;
const MAX_PROGRESS = 100;

const LinearProgressSection: Component<{
  progress: number;
  onIncrement: () => void;
  onReset: () => void;
}> = (props) => (
  <div class='space-y-4'>
    <H2 class='pb-0 border-none'>{m.docs_example_linear()}</H2>
    <Progress value={props.progress} class='w-[60%]'>
      <ProgressLabel>Downloading...</ProgressLabel>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
      <ProgressValue />
    </Progress>
    <div class='gap-2 flex'>
      <Button size='sm' onClick={props.onIncrement}>
        Increment
      </Button>
      <Button size='sm' variant='outline' onClick={props.onReset}>
        Reset
      </Button>
    </div>
  </div>
);

const CircularProgressSection: Component<{ progress: number }> = (props) => (
  <div class='space-y-4'>
    <H2 class='pb-0 border-none'>{m.docs_example_circular()}</H2>
    <div class='gap-8 flex items-center'>
      <Progress value={props.progress}>
        <ProgressLabel>Loading...</ProgressLabel>
        <ProgressCircle class='[--size:2.5rem]'>
          <ProgressCircleTrack />
          <ProgressCircleRange />
        </ProgressCircle>
        <ProgressValue />
      </Progress>

      <Progress value={props.progress}>
        <ProgressCircle class='[--size:3rem]'>
          <ProgressCircleTrack />
          <ProgressCircleRange />
        </ProgressCircle>
      </Progress>

      <Progress value={props.progress}>
        <ProgressCircle class='[--size:4rem]'>
          <ProgressCircleTrack />
          <ProgressCircleRange />
        </ProgressCircle>
      </Progress>

      <Progress value={props.progress}>
        <ProgressCircle class='[--size:5rem]'>
          <ProgressCircleTrack />
          <ProgressCircleRange />
        </ProgressCircle>
      </Progress>
    </div>
  </div>
);

const IndeterminateProgressSection: Component = () => (
  <div class='space-y-4'>
    <H2 class='pb-0 border-none'>{m.docs_example_indeterminate()}</H2>
    <Progress class='w-[60%]'>
      <ProgressLabel>Loading...</ProgressLabel>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  </div>
);

const ProgressDocPage: Component = () => {
  const [progress, setProgress] = createSignal(INITIAL_PROGRESS);

  const incrementProgress = (): void => {
    setProgress((prev) => Math.min(prev + PROGRESS_STEP, MAX_PROGRESS));
  };

  const resetProgress = (): void => {
    setProgress(0);
  };

  return (
    <div class='space-y-8'>
      <div class='space-y-2'>
        <H1>Progress</H1>
        <Lead>{m.docs_component_progress_description()}</Lead>
      </div>

      <LinearProgressSection
        progress={progress()}
        onIncrement={incrementProgress}
        onReset={resetProgress}
      />
      <CircularProgressSection progress={progress()} />
      <IndeterminateProgressSection />
    </div>
  );
};

export const Route = createFileRoute('/components-progress')({
  component: ProgressDocPage,
});
