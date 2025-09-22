# EHC Todo — React + TypeScript + Vite

A small Todo app built with React, TypeScript, Vite, Vitest, and Tailwind CSS.

## Prerequisites

- Node.js v22 (22.x recommended)
- npm (comes with Node)

## Setup

```bash
npm install
```

## Local development

```bash
# Start the dev server with HMR
npm run dev
```

## Testing and linting

- Run tests in watch mode: `npm run test`
- Run tests once (CI style): `npm run test:run`
- Lint code: `npm run lint`
- Lint with auto-fix: `npm run lint:fix`

## Build and preview

```bash
# Build for production (type-check + Vite build)
npm run build

# Preview the production build locally
npm run preview
```

## Continuous Integration

This repo includes a GitHub Actions workflow (manual trigger) that can run lint, tests, and a production build, and optionally upload build artifacts. Start it from the Actions tab by running “CI Workflow”.

