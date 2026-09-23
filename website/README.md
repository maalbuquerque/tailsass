# Tailsass docs site

Next.js static site for Tailsass documentation. Deploys to GitHub Pages from `main`.

## Local

```bash
cd website
npm install
npm run dev
```

Open http://localhost:3010

`predev` / `prebuild` sync `../dist/tailsass.css` into `src/vendor/`.

## Production build (GitHub Pages paths)

```bash
# PowerShell
$env:GITHUB_PAGES='true'; npm run build

# bash
GITHUB_PAGES=true npm run build
```

Output is in `website/out`.

## Publish to GitHub Pages

1. Commit and push these changes to `main` (includes `.github/workflows/deploy-docs.yml`).
2. In the repo: **Settings → Pages → Build and deployment → Source** = **GitHub Actions**.
3. After the workflow runs, the site is at:
   https://maalbuquerque.github.io/tailsass/
