# OWTF.github.io Website

This repository now uses a Jekyll source-first workflow for GitHub Pages.

## Local development

1. Install Ruby 3.2+ (see `.ruby-version`) and Bundler.
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Run locally:
   ```bash
   bundle exec jekyll serve
   ```
4. Open `http://127.0.0.1:4000`.

## Build

```bash
bundle exec jekyll build
```

The generated output is written to `_site/` and should not be committed.

## Content parity note

The initial Jekyll migration preserves existing OWTF landing page content and formatting. Modernization changes should be made incrementally after parity sign-off.

## Passive scanner routes

The online passive scanner is now implemented as a Jekyll-processed Tailwind + vanilla JS experience in this repository:

- `/online-passive-scanner/`
- `/online-passive-scanner/report.html`

Compatibility routes are kept for older links and redirect to the online scanner routes:

- `/passive-scanner/` -> `/online-passive-scanner/`
- `/passive-scanner/report/` -> `/online-passive-scanner/report.html`

See `/docs/PASSIVE_SCANNER_SOURCE.md` for implementation details and maintenance scope.
