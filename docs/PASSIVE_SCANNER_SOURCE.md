# Passive Scanner Implementation Scope

The scanner experience published in this repository is now a local implementation (Jekyll + Tailwind + vanilla JavaScript), served from:

- `/online-passive-scanner/`
- `/online-passive-scanner/report.html`

## Design goals

1. Keep scanner UI and report pages fully Jekyll-compatible for GitHub Pages.
2. Avoid legacy iframe embedding and legacy jQuery/Bootstrap dependencies.
3. Preserve compatibility for historical links via redirects:
   - `/passive-scanner/` redirects to `/online-passive-scanner/`
   - `/passive-scanner/report/` redirects to `/online-passive-scanner/report.html`

## Current scanner behavior

1. URL posture checks (scheme, credentials in URL, risky route patterns, sensitive query keys).
2. DNS posture checks through DNS-over-HTTPS (`dns.google/resolve`) for A/AAAA/CAA/MX/NS/TXT.
3. Risk scoring and findings rendering in-browser.

## Maintenance notes

1. Keep logic and UX inside repository-owned pages under `online-passive-scanner/`.
2. If upstream OWTF scanner work is reused, treat it as reference input and port intentionally rather than embedding legacy runtime directly.
