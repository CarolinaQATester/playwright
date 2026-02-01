import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 60000, // timeout por teste

  expect: {
    timeout: 10000 // timeout dos expects
  },

  reporter: [['html', { open: 'never' }]],

  use: {
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
    baseURL: 'https://demoqa.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10000,   // click, fill, etc
    navigationTimeout: 30000
  }
});
