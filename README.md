# Grup Gerak Khas — Official Website

A modern, premium website for **Grup Gerak Khas** built with **Vite + TypeScript**. Features a dual-language interface (Bahasa Melayu / English), dark military theme with glassmorphism, smooth scroll animations, and auto-deployment to **GitHub Pages**.

## ⚡ Tech Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev) | Build tool & dev server |
| TypeScript | Type-safe components & i18n |
| Vanilla CSS | Premium dark theme, glassmorphism |
| GitHub Actions | CI/CD auto-deploy to gh-pages |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🌐 GitHub Pages Deployment

Deployments happen **automatically** on every push to `main` via GitHub Actions.

### Manual setup (first time only)

1. Go to your GitHub repo → **Settings** → **Pages**
2. Set **Source** to **Deploy from a branch** → branch: `gh-pages`, folder: `/ (root)`
3. Push to `main` — the workflow builds and publishes to `gh-pages`

### ⚠️ Update the base path

In [`vite.config.ts`](./vite.config.ts), update `base` to match your **exact** GitHub repository name:

```ts
// If your repo is github.com/yourname/my-repo, use:
base: '/my-repo/',
```

## 📁 Project Structure

```
/
├── .github/workflows/deploy.yml   # GitHub Actions → gh-pages
├── src/
│   ├── components/
│   │   ├── Header.ts              # Header + nav + language toggle
│   │   ├── Hero.ts                # Hero section
│   │   ├── About.ts               # Mission & vision
│   │   ├── Services.ts            # Services grid
│   │   ├── Contact.ts             # Contact info
│   │   └── Footer.ts              # Footer
│   ├── data/
│   │   └── info.ts                # Org data (typed)
│   ├── locales/
│   │   ├── ms.ts                  # Bahasa Melayu translations
│   │   └── en.ts                  # English translations
│   ├── styles/
│   │   └── main.css               # Premium dark CSS
│   ├── types/
│   │   └── index.ts               # Shared TS interfaces
│   ├── i18n.ts                    # Language switcher
│   └── main.ts                    # App entry point
├── index.html                     # Vite entry HTML
├── vite.config.ts                 # Vite config (base path)
├── tsconfig.json
└── package.json
```

## 🌍 Dual Language

Click the **BM / EN** button in the header to toggle languages. All text is fully typed via TypeScript interfaces in `src/types/index.ts`.

## 📄 License

MIT © 2024 Grup Gerak Khas