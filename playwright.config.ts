import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/specs',
  retries: 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
