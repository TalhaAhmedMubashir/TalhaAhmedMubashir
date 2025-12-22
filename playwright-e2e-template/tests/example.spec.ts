import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';

test.use({ viewport: { width: 1280, height: 800 } });

test('homepage has title and get started link', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await expect(page).toHaveTitle(/Playwright/);
  await home.clickGetStarted();
  await expect(page).toHaveURL(/.*intro/);
});
