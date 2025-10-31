# OWTF Website

This repository contains the marketing website for the Offensive Web Testing Framework (OWTF). The site is powered by
[Next.js](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/) and styled using [Tailwind CSS](https://tailwindcss.com/).

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to preview the site.

## Available scripts

| Command        | Description                |
| -------------- | -------------------------- |
| `npm run dev`  | Start the Next.js dev server |
| `npm run build`| Create an optimized production build |
| `npm run start`| Run the production build locally |
| `npm run lint` | Lint the project using ESLint |

## Project structure

```
app/            # Next.js App Router pages and layout
components/     # Reusable UI components
public/         # Static assets
```

## Deployment

The production build outputs to the `.next` directory. Use `npm run build` followed by `npm run start` or deploy via any platform that
supports Next.js (e.g., Vercel, Netlify, or a custom Node.js server).
