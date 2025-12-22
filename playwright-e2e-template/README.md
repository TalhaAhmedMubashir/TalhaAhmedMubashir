# Playwright E2E Template (TypeScript)

Production-style Playwright framework with Page Objects, CI-ready workflows, and helpful defaults for fast, reliable end-to-end testing.

## Quick start

```bash
# install
npm ci

# install browsers
npx playwright install --with-deps

# run all tests
npm test

# open UI mode
npm run test:ui

# show last HTML report
npm run test:report
```

## Features

- Page Object Model (POM) under `src/pages`
- Parallel, sharded CI with artifacts (HTML report, traces, screenshots)
- Retries, trace on first retry, screenshots/videos on failure
- Projects for Chromium, Firefox, WebKit
- Base URL via `BASE_URL` env var
- Reusable GitHub Actions workflow and issue/PR templates

## CI: Matrix example

See `.github/workflows/e2e.yml` for a shard × browser matrix.

## Reusable workflow

Call `.github/workflows/playwright-reusable.yml` from another repo:

```yaml
name: call-e2e
on: [workflow_dispatch]
jobs:
  chromium:
    uses: TalhaAhmedMubashir/playwright-e2e-template/.github/workflows/playwright-reusable.yml@main
    with:
      browser: chromium
    secrets:
      BASE_URL: ${{ secrets.BASE_URL }}
```

## Structure

- `playwright.config.ts` – global config, reporters, projects
- `tests/` – spec files
- `src/pages/` – page objects
- `.github/workflows/` – CI workflows (matrix + reusable)

## Notes

- Set `BASE_URL` in CI for real projects.
- For cross-browser/device clouds (e.g., BrowserStack), extend `projects` or use their service runner.

Maintained by: [@TalhaAhmedMubashir](https://github.com/TalhaAhmedMubashir)

## Contact

Need help integrating this template into your project or CI pipeline?

- Email: talhaahmedmubashir@gmail.com
- LinkedIn: https://www.linkedin.com/in/talha-ahmed-mubashir
