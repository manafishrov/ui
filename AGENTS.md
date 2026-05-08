# AGENTS.md

## Purpose

`@manafishrov/ui` — opinionated SolidJS + Tailwind component library used by
the Manafish app. Bun workspace with `lib` (the package) and `docs` (preview
site).

## Stack

- Bun + TypeScript, Vite, SolidJS
- Tailwind v4, oxlint, oxfmt
- Nix flake for the dev shell
- semantic-release (automated publishing)

## Foundations

The library is a thin styled layer over a few primitive sources. Match these
when adding components — don't reinvent behaviour that already exists:

- **`@ark-ui/solid`** — headless, accessible primitives (state machines,
  ARIA, focus management). Most components in `packages/lib/src/components/`
  are styled wrappers around an Ark primitive (Accordion, Combobox, Dialog,
  Menu, Select, Slider, Tabs, TagsInput, Tooltip, TreeView, …). Reach for
  Ark first; only build from scratch if no primitive fits.
- **`tailwind-variants`** — variant API for component styling. Used for all
  variant/size/state combinations.
- **`tailwind-merge`** — class merging via the shared `cn` helper.
- **`tw-animate-css`** — animation utilities for Tailwind v4.
- **`@tanstack/solid-form`** — backs the `form` export.
- **`@tanstack/solid-router`** — backs the `link` export.
- **`unplugin-icons` + `@iconify-json/material-symbols`** — icon set used
  across components.
- **Fonts**: `@fontsource-variable/google-sans-{code,flex}`,
  `@fontsource/chakra-petch`, `@fontsource/rajdhani` — exposed through
  `theme.css`.
- **`packages/lib/src/primitives/`** — internal building blocks shared
  across components. New cross-component logic belongs here, not duplicated
  in component files.

## Structure

- `packages/lib/` — published library (`@manafishrov/ui`)
  - `src/components/` — public components (one file per component, plus
    folders for multi-file ones: `form/`, `marquee/`, `sidebar/`,
    `toaster/`)
  - `src/primitives/` — internal helpers shared across components
  - `src/Theme.tsx`, `src/Locale.tsx` — providers re-exported from
    `index.ts`
  - `src/theme.css` — Tailwind layer + design tokens (exported as
    `@manafishrov/ui/theme`)
- `packages/docs/` — Vite docs/preview site
- Peer deps consumers must install: `solid-js`, `tailwindcss`,
  `@tanstack/solid-router`, `@tanstack/solid-form`, `unplugin-icons`,
  `@iconify-json/material-symbols`

## Commands

- Install: `bun install`
- Dev (docs): `bun run dev`
- Build everything: `bun run build` (`build:lib`, `build:docs`)
- Preview docs: `bun run preview`

### Quality (must pass before considering work done)

```sh
bun run fmt:check
bun run lint           # oxlint, --deny-warnings, type-aware
```

Auto-fix variants: `fmt`, `lint:fix`. There are no tests yet — exercise
changes via the docs site.

## Rules

- Library code stays in `packages/lib/src/`. Don't put runtime logic in `docs`.
- Keep peer deps as peer deps; don't bundle them.
- Match existing component patterns and Tailwind conventions.
- Use strict types; never `as any`, `@ts-ignore`, or `@ts-expect-error`.
- Don't add dependencies without reason.
- Don't push without being asked. Pushing to `main` *is* releasing (see
  below).

## Releases

Releases for `@manafishrov/ui` are **fully automated**.

- `.github/workflows/release.yaml` runs on every push to `main` and invokes
  `semantic-release` from `packages/lib/`. It analyses Conventional Commits
  since the last tag, decides the version bump, writes
  `packages/lib/package.json`, publishes to npm with provenance, creates the
  GitHub release, and deploys the docs to GitHub Pages.
- **Don't hand-edit `packages/lib/package.json`'s `version`** — semantic-
  release owns it.
- Therefore: commit messages drive releases. `feat:` → minor, `fix:` →
  patch, `BREAKING CHANGE:` in the body or `!` after the type → major.
  `chore:`/`docs:`/`refactor:` → no release.
- Don't tag manually. Don't push without being asked — every push to `main`
  may publish.

## Commits

Conventional Commits, focused on **why**.

```
<type>(<scope>): <subject>

[body explaining why, ~72 char wrap]
```

- Types: `feat`, `fix`, `refactor`, `perf`, `docs`, `chore`, `ci`, `build`,
  `revert`. `chore(deps)` reserved for Renovate.
- Scopes: `lib`, `docs`, `theme`, `flake`, `ci`, or a component name.
- Subject: imperative, lowercase, ≤72 chars, no period.

## Keep this file useful

If you add a workspace package, change scripts, add tests, or alter the
quality gates — update this file in the same commit.
