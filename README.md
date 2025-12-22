<h1 align="center">QA Automation Engineer for Web & Mobile</h1>
<h3 align="center">I help teams ship faster with reliable Playwright, API, and CI pipelines</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/talha-ahmed-mubashir" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin" />
  </a>
  <img src="https://komarev.com/ghpvc/?username=TalhaAhmedMubashir&style=for-the-badge" />
</p>

---

## 🔥 What I Deliver

- **Maintainable Playwright framework:** Page Object Model, fixtures, test data, env configs
- **Reliable runs:** tracing, video/screenshots, retries, auto-waiting, flaky test quarantine
- **Fast feedback:** parallelization, sharding, GitHub Actions matrix, BrowserStack grid
- **API coverage:** Postman/Newman and Playwright API for contract + integration tests
- **Actionable reporting:** HTML/Allure artifacts, PR summaries, failure triage signals
- **Dev-friendly setup:** preconfigured VS Code tasks, linting, helpful scripts

---

## 🧪 Services

- **Greenfield automation:** Design and build a Playwright E2E + API framework from scratch
- **CI/CD integration:** GitHub Actions with environment matrices and artifact uploads
- **Test strategy & audit:** Identify quick wins, stabilize flaky suites, improve coverage
- **Ongoing maintenance:** Keep tests green as product and environments evolve

---

## 🧰 Tech Stack

### Automation & Testing
![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge)
![Postman](https://img.shields.io/badge/Postman-orange?style=for-the-badge)
![BrowserStack](https://img.shields.io/badge/BrowserStack-black?style=for-the-badge)

### Languages & Tools
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge)
![Laravel](https://img.shields.io/badge/Laravel-red?style=for-the-badge)

---

## 🧭 How I Work

1. **Discovery:** Understand product, environments, and test goals
2. **Plan:** Minimal, high-impact test plan with milestones
3. **Build:** Ship a working MVP suite in days, not weeks
4. **Scale:** Parallelize, harden, and extend coverage
5. **Handoff or Maintain:** Clear docs, training, and ongoing support if needed

---

## 📌 Selected Work & Demos

- **Playwright E2E Framework:** Production-style setup with CI, tracing, artifacts, BrowserStack
- **API Testing (Postman/Newman):** Data-driven, environments, and scheduled runs
- **Manual Test Cases:** Real-world scenarios with validation and negative coverage

Explore pinned repositories on my profile: https://github.com/TalhaAhmedMubashir

---

## ⚙️ Example: Playwright CI Matrix (GitHub Actions)

```yaml
name: e2e
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        shard: [1/3, 2/3, 3/3]
        browser: [chromium, firefox]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test --project=${{ matrix.browser }} --shard ${{ matrix.shard }}
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report-${{ matrix.browser }}-${{ matrix.shard }}
          path: playwright-report
```

---

## 📊 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=TalhaAhmedMubashir&show_icons=true&theme=tokyonight" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=TalhaAhmedMubashir&theme=tokyonight" />
</p>

---

## 🤝 Work With Me

- **Email:** mailto:talhaahmedmubashir@gmail.com
- **Message on LinkedIn:** https://www.linkedin.com/in/talha-ahmed-mubashir
- **Project types:** Playwright frameworks, CI setup, audits, test maintenance
- **Availability:** Freelance and contract engagements

---