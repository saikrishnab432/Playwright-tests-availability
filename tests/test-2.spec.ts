import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://www.techlearn.in/admin');
});