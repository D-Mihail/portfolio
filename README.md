# portfolio

Personal site and CV for mihaildimoski.dev. Career data lives once in `src/content/`; the site and the
`/cv/<variant>` print pages both render from it.

```bash
bun install
bun run dev          # http://localhost:3000
bun test             # unit tests
bun run build && bun run start -p 3100   # then, in another terminal:
bun run cv:export    # writes public/cv/*.pdf, fails unless each is exactly one page
```
