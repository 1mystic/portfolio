# Techy Portfolio — UI/UX Recreation

A modern, interactive portfolio site built with **Vite + React + TypeScript**, styled with **Tailwind CSS** and **shadcn/ui** components.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 (SWC) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Components | shadcn/ui (Radix UI primitives) |
| Routing | React Router DOM v6 |
| Data fetching | TanStack Query v5 |
| Testing | Vitest + Testing Library |
| E2E Testing | Playwright |
| Package manager | Bun |

---

## Project Structure

```
src/
├── components/
│   ├── sections/        # Page sections (Hero, Skills, Projects, etc.)
│   ├── ui/              # shadcn/ui component primitives
│   ├── NavLink.tsx
│   └── SideNav.tsx
├── hooks/               # Custom React hooks
├── lib/
│   └── utils.ts         # Utility helpers (cn, etc.)
├── pages/
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 page
├── test/                # Unit tests
├── App.tsx
└── main.tsx
```

---

## Local Setup (Bun)

### Prerequisites

- **Bun** v1.0 or later — install from [bun.sh](https://bun.sh)

```bash
# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"

# macOS / Linux
curl -fsSL https://bun.sh/install | bash
```

Verify your installation:

```bash
bun --version
```

---

### 1. Install dependencies

```bash
cd ui-ux-recreation-main
bun install
```

### 2. Start the development server

```bash
bun run dev
```

The app will be available at **[http://localhost:8080](http://localhost:8080)**.

Hot Module Replacement (HMR) is enabled — changes in `src/` reflect instantly in the browser.

---

### 3. Other available commands

| Command | Description |
|---|---|
| `bun run dev` | Start dev server on port 8080 |
| `bun run build` | Production build → `dist/` |
| `bun run build:dev` | Development build (unminified) |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint |
| `bun run test` | Run unit tests (Vitest) |
| `bun run test:watch` | Run unit tests in watch mode |

---

### 4. Production build

```bash
bun run build
```

Output is written to `dist/`. You can preview it locally with:

```bash
bun run preview
```

---

## Path Aliases

The `@` alias maps to `src/`:

```ts
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```

---

## Adding shadcn/ui components

This project uses the [shadcn/ui](https://ui.shadcn.com/) component pattern. Component primitives live in `src/components/ui/`. To add new ones, follow the shadcn/ui docs — copy the component source directly into that directory (no CLI required).
