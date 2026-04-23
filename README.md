# Turborepo: React + Vite + NestJS

Monorepo managed with [Turborepo](https://turbo.build/) and [pnpm workspaces](https://pnpm.io/workspaces).

## Structure

```
.
├── apps
│   ├── web     # React + Vite frontend
│   └── api     # NestJS backend
└── packages
    ├── ui                # Shared React components (@repo/ui)
    ├── shared            # Shared types/constants (@repo/shared)
    └── typescript-config # Shared tsconfig presets (@repo/typescript-config)
```

## Getting started

Install dependencies at the repo root:

```bash
pnpm install
```

Run everything in dev mode (API on :3000, web on :5173 with `/api` proxy):

```bash
pnpm dev
```

Or individually:

```bash
pnpm --filter api dev
pnpm --filter web dev
```

Build everything:

```bash
pnpm build
```

## Requirements

- Node.js 18+
- pnpm 10+
