# AGENTS.md

## Required setup
- pnpm is enforced (preinstall blocks npm/yarn/bun); use `pnpm install`

## Commands
| Command | Action |
|:--------|:-------|
| `pnpm dev` | Start dev server at localhost:4321 |
| `pnpm build` | Build Astro site + run Pagefind (search index) |
| `pnpm check` | Astro type/check (runs `astro check`) |
| `pnpm format` | Biome format (writes to `./src`) |
| `pnpm lint` | Biome check with auto-fix |
| `pnpm new-post ` | Create new post in `src/content/posts/` |

## Verification order
`pnpm check -> pnpm format -> pnpm lint -> pnpm build`

## Architecture
- **Entry**: `src/pages/[...page].astro` (home), `src/pages/posts/[...slug].astro` (posts)
- **Config**: `src/config.ts` (site profile, navbar, theme)
- **Content**: Markdown/MDX in `src/content/posts/` with frontmatter
- **Integrations**: Tailwind, Svelte, Swup (page transitions), Expressive Code (code blocks), Pagefind (search)

## Content frontmatter
Required fields: `title`, `published`. Optional: `description`, `image`, `tags`, `category`, `draft`, `lang`

## Known constraints
- Site uses dark theme background for code blocks; choose light Expressive Code themes carefully
- `biome.json` enforces double quotes in JS, tab indentation, and strict lint rules
- Svelte and Astro files have relaxed lint rules (see biome.json overrides)
- CI runs on Node 22 and 23; minimum is Node 20 per badge