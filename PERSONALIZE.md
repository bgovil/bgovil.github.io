# Bharat Govil's al-folio website

This is the active al-folio migration in `bharat-govil-al-folio`. The obsolete `bharat-govil-site` directory and its local dependencies and build output were removed on October 5, 2026. Its complete committed source history is preserved in `../.website-backups/bharat-govil-site-20261005.bundle`; dependencies and generated files are not included in this backup.

The source is the actual al-folio v1 starter, pinned by its original Gemfile.lock and plugin versions. The homepage follows the structure of https://adrianhuang2002.github.io/: introduction with a portrait, Publications, Experience, Education, then Projects.

## First-time Windows setup

Install Docker Desktop from https://docs.docker.com/desktop/setup/install/windows-install/, start it, and use the WSL 2 backend. Ubuntu-22.04 is already installed on this computer. Enable its integration in Docker Desktop if working from WSL.

Open a new PowerShell terminal in this directory:

```powershell
npm.cmd run dev
```

The first run builds a local Docker image with Ruby, Bundler, Jekyll, and ImageMagick. Open **http://localhost:8080** after Jekyll reports that the server is running. Markdown changes update during preview. Restart the preview after changing `_config.yml`.

To stop:

```powershell
docker compose down
```

## Build and CV automation

```powershell
npm.cmd run build
npm.cmd run cv
```

The build command runs the al-folio upgrade audit and Jekyll build, then checks the expected pages, portrait, and CV. The CV script compiles the LaTeX files in the parent directory into `assets/pdf/Bharat_Govil_CV.pdf`.

With the preview running, check desktop/mobile layout, the portrait, section order, navigation, internal links, and CV:

```powershell
npx.cmd playwright install chromium
npm.cmd run test:preview
```

Screenshots are saved under `output/playwright/personal-site/` and excluded from the published website.

## Content

- `_pages/about.md`: biography and homepage section order
- `_data/experience.yml`: experience entries
- `_bibliography/papers.bib`: publication; also used by the Publications page
- `_projects/*.md`: project descriptions, used by both homepage and Projects page
- `_data/cv.yml`: web CV
- `assets/img/bharat-govil.jpg`: supplied portrait, copied without alteration
- `assets/pdf/Bharat_Govil_CV.pdf`: downloadable CV
- `_config.yml`: name, domain, feature flags, and al-folio settings

No gem-owned layouts, includes, or Sass were overridden. The homepage sections are ordinary content and Liquid loops in the about page.

## GitHub Pages

The prepared workflow in `.github/workflows/deploy-pages.yml` builds with Ruby 3.3.5 and uploads `_site` to GitHub Pages using GitHub Actions. Select **GitHub Actions** as the Pages source when publishing to `bgovil/bgovil.github.io`.

This local copy has no GitHub remote. Publishing still requires the public-upload approval requested earlier in the conversation.

## Upstream

al-folio source commit: d83066c21e6cdb9c0846e548a499064abe23e0ef.
MIT license retained in LICENSE.
