# Sreeya Chandrapati — Portfolio

Editorial-style personal site. Built with **React + Vite + Tailwind CSS**, animated with **Framer Motion**. White-dominant palette with cobalt-blue accents.

## Local development

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:5173>.

## Build & preview

```bash
npm run build      # outputs to /dist
npm run preview    # serves the production build locally
```

## Deploy to GitHub Pages

This repo is set up to deploy to a **user site** (`Sreeya003.github.io`) via GitHub Actions.

1. Push the contents of this folder to the `main` branch of `https://github.com/Sreeya003/Sreeya003.github.io`.
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Each push to `main` will run `.github/workflows/deploy.yml`, build the Vite app, and deploy `dist/` to Pages.

The site will be live at <https://sreeya003.github.io>.

## Editing content

All resume content (bio, jobs, projects, education, etc.) lives in a single file:

```
src/data/content.js
```

Update the structured data there — components automatically reflect the changes. No content is hardcoded inside JSX.

## Replacing assets

- `public/photo.png` — profile photo shown in the hero.
- `public/Sreeya_Chandrapati_Resume.pdf` — file downloaded from the **Resume** / **Download CV** buttons.
- `public/favicon.svg` — browser tab icon.

## Structure

```
portfolio/
├── public/                    static assets (photo, resume, favicon)
├── src/
│   ├── components/            section components (Hero, About, Projects, …)
│   ├── data/content.js        single source of truth for resume content
│   ├── App.jsx                page composition
│   ├── main.jsx               React entry
│   └── index.css              Tailwind + global styles
├── .github/workflows/deploy.yml
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```
