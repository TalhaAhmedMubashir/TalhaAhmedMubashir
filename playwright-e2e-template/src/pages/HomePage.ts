import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}
  async goto() {
    await this.page.goto('/');
  }
  async clickGetStarted() {
    await this.page.getByRole('link', { name: 'Get started' }).click();
  }
}
