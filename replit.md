# Overview

This is a personal portfolio/artist website for **Michael Spartano**, an Italian artist whose work spans visual arts, non-dualism practice, music, and education. The site is built as a full-stack TypeScript application with a React frontend and Express backend. It's primarily a content-driven, multi-page website with smooth page transitions and an elegant, minimalist design aesthetic.

The site is structured around Italian-language sections: Opere (Works), Pratica (Practice), Educazione (Education), Spazio Sorgente (Source Space), and Contatti (Contacts). The typography uses Cormorant Garamond (serif) and Raleway (sans-serif) fonts for an artistic, refined feel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing library)
- **Styling**: Tailwind CSS v4 with CSS variables for theming, using shadcn/ui component library (new-york style)
- **Animations**: Framer Motion for page transitions and element animations (fade-in, slide-up effects)
- **State Management**: TanStack React Query for server state (though minimal API usage currently)
- **Component Library**: Full shadcn/ui component set installed with Radix UI primitives
- **Build Tool**: Vite with React plugin, Tailwind CSS Vite plugin, and custom Replit plugins

The frontend lives in `client/src/` with pages in `client/src/pages/`, reusable components in `client/src/components/`, and UI primitives in `client/src/components/ui/`. Path aliases are configured: `@/` maps to `client/src/`, `@shared/` to `shared/`, and `@assets/` to `attached_assets/`.

Pages follow a consistent pattern: full-screen layout with a shared `Navigation` component, Framer Motion page transitions, and serif typography. Many sub-pages under `/pratica` and `/opere` use either dedicated components or a generic `Placeholder` component.

### Backend Architecture
- **Framework**: Express 5 on Node.js with TypeScript (using tsx for development)
- **HTTP Server**: Node.js `http.createServer` wrapping Express
- **Development**: Vite dev server middleware integrated with Express for HMR
- **Production**: Static file serving from `dist/public` with SPA fallback
- **Build**: Custom build script using esbuild for server bundling and Vite for client bundling

The server is minimal — `server/routes.ts` has a placeholder for API routes (prefixed with `/api`), and `server/storage.ts` provides an in-memory storage implementation with a basic user CRUD interface.

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` — currently only a `users` table with id, username, and password
- **Validation**: Drizzle-Zod for generating Zod schemas from Drizzle table definitions
- **Storage Pattern**: An `IStorage` interface in `server/storage.ts` with a `MemStorage` in-memory implementation. This is designed to be swapped for a database-backed implementation (using Drizzle + PostgreSQL via `DATABASE_URL` env var)
- **Migrations**: Drizzle Kit configured with `drizzle-kit push` command, migrations output to `./migrations`

### Navigation Structure
The site has a hierarchical navigation with nested sub-menus:
- Opere → Performance, Disegni, Poesie, Oggetti
- Pratica → Non-Dualismo (Sessione individuale, Seminario, Meditazione), Arte (Il Fiore della Vita, Land Art, Corpo Natura, Tracce di fango, Dipingere Naturalmente, Stone balancing), Musica
- Educazione
- Spazio Sorgente
- Contatti

## External Dependencies

- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable for Drizzle ORM)
- **Fonts**: Google Fonts (Cormorant Garamond, Raleway) loaded via CDN
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev only)
- **Session Store**: `connect-pg-simple` is listed as a dependency for PostgreSQL-backed sessions (not yet wired up)
- **No external APIs** are currently integrated, though the build script allowlist suggests potential future use of OpenAI, Stripe, Nodemailer, and Google Generative AI