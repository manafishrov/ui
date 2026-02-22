import type { JSX } from 'solid-js';
import { createRootRoute, Outlet, Link } from '@tanstack/solid-router';
import '../styles.css';

const RootComponent = (): JSX.Element => (
  <div class="min-h-screen bg-background">
    <header class="border-b border-border">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex items-center gap-6">
          <Link to="/" class="text-lg font-semibold hover:text-primary">
            Manafish UI
          </Link>
          <Link to="/" class="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link to="/components/button" class="text-sm text-muted-foreground hover:text-foreground">
            Components
          </Link>
        </nav>
      </div>
    </header>
    <main class="container mx-auto px-4 py-8">
      <Outlet />
    </main>
  </div>
);

export const Route = createRootRoute({
  component: RootComponent,
});
