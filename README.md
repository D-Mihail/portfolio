# portfolio

Personal site and CV for mihaildimoski.dev. Career data lives once in `src/content/`; the site and the
`/cv/<variant>` print pages both render from it.

```bash
bun install
bun run dev          # http://localhost:3000
bun test             # unit tests
CV_INCLUDE_TAILORED=1 bun run build && bun run start -p 3100   # then, in another terminal:
bun run cv:export    # general → public/cv, tailored → docs/applications/cv (gitignored); fails unless each is one page
```
