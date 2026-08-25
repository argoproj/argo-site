# Argo website

Source for the Argo **landing site** (Gatsby, MDX in [`content/pages/`](content/pages/)).

- **[argoproj.github.io](https://argoproj.github.io)** — built and deployed from this repo.
- **[argoproj.io](https://argoproj.io)** — redirects to argoproj.github.io.

Product docs (Argo CD, Workflows, Rollouts, Events) are external sites hosted by ReadTheDocs.

## Local development

Requires Node.js and Yarn (CI uses Node 22 — [`.github/workflows/gh-pages.yaml`](.github/workflows/gh-pages.yaml)).

```bash
yarn install
yarn start
```

Open http://localhost:8000.

## Publishing

Merging to `master` triggers [`.github/workflows/gh-pages.yaml`](.github/workflows/gh-pages.yaml), which builds the site and pushes `./public` to [argoproj/argoproj.github.io](https://github.com/argoproj/argoproj.github.io). There is no manual deploy step.

## Domains

This repo deploys **[argoproj.github.io](https://argoproj.github.io)** via GitHub Pages. **[argoproj.io](https://argoproj.io)** currently redirects there. DNS for `*.argoproj.io` is not in this repo — it lives in [argoproj/argoproj-deployments](https://github.com/argoproj/argoproj-deployments). **[blog.argoproj.io](https://blog.argoproj.io)** is a [Medium](https://blog.argoproj.io) publication, not built from here.

* **Site changes** → this repo.
* **DNS changes** → [argoproj-deployments](https://github.com/argoproj/argoproj-deployments).
* **Blog content** → Medium.
