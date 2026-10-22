# Lemonade Stand

A lemonade profit counter and cocktail shop built with Next.js App Router.

## Getting Started

### Requirements

- Node.js (LTS recommended)
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To check the project or create a production build:

```bash
npm run lint
npm run build
```

## App routes

| Route | Description |
| --- | --- |
| `/` | Lemonade Stand profit counter |
| `/shop` | Cocktails fetched from TheCocktailDB |
| `/shop/[id]` | Details for a cocktail |
| `/cart` | Cart items and quantity controls |
| `/checkout` | Order summary and confirmation |
| `/api/cocktails` | `GET` endpoint returning the cocktail list as JSON |

The pages and shared layout are implemented with the Next.js App Router.
Internal navigation uses `next/link`. The shop requests cocktail data from
TheCocktailDB, and the `/api/cocktails` Route Handler exposes the same data as
JSON. If the upstream cocktail service is unavailable, the API returns a
`502` response.

The home page's **Sell Lemonade** and **Buy Lemons** buttons adjust profit by
`+$5` and `-$2`. Cart items can be added from the shop, adjusted in the cart,
and cleared after confirming an order.

## React and Next.js reflection

React provides the component model and client-side state used for the profit
counter and cart interactions. Next.js builds on React with file-based
routing, server-rendered pages, and Route Handlers. In this project, the shop
fetches its data on the server while interactive controls use client
components. Using Next.js means organizing pages and APIs around the `app/`
directory and choosing deliberately which parts need client-side JavaScript.

## Deployment

### GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds a static export
(`GITHUB_PAGES=true`, see `next.config.ts`) and publishes it on every push to
`master`. The site is served at
<https://stephaneiii.github.io/LemonadeStandNext/>. To test the export locally:

```bash
$env:GITHUB_PAGES="true"; npm run build   # PowerShell; output goes to out/
```

### Vercel

Import the repository into [Vercel](https://vercel.com/new) and deploy using the
detected Next.js settings. Without `GITHUB_PAGES` set, the app builds as a
regular Next.js server app.
