// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // 👈 your test folder
  timeout: 30 * 1000,
  retries: 1,
  reporter: [['html', { outputFolder: 'playwright-report' }]],

  use: {
    headless: true,
    baseURL: 'https://playwright.dev/',
    trace: 'on-first-retry', // collect trace on first retry for debugging
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});