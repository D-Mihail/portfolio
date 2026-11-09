# portfolio

The source of [mihaildimoski.dev](https://mihaildimoski.dev): my CV, the site and the
[ATS rebuild case study](https://mihaildimoski.dev/case/ats-rebuild), a multi-tenant recruiting platform taken from a
15-second WordPress backend to sub-second GraphQL, measured in production.

Career data lives once in `src/content/`; the site and the `/cv/<variant>` print pages both render from it, and the
export fails unless each CV is exactly one page. Design notes and plans are under `docs/`.

```bash
bun install
bun run dev          # http://localhost:3000
bun test             # unit tests
CV_INCLUDE_TAILORED=1 bun run build && bun run start -p 3100   # then, in another terminal:
bun run cv:export    # general → public/cv, tailored → docs/applications/cv (gitignored); fails unless each is one page
```
