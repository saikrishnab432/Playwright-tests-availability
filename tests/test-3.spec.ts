import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('banner').getByText('Ben Ten').click();
  await page.getByRole('menuitem', { name: 'About' }).click();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('sai krishna');
  await page.getByRole('textbox').nth(1).press('Tab');
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('RJ');
  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('div:nth-child(2) > .oxd-table-row > div > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click();
  await page.locator('div:nth-child(5) > .oxd-table-row > div > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({
    modifiers: ['ControlOrMeta']
  });
  await page.locator('div:nth-child(6) > .oxd-table-row > div > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click();
  await page.locator('div:nth-child(2) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)').click();
  await page.locator('div').filter({ hasText: /^Admin$/ }).nth(3).click();
  await page.locator('div').filter({ hasText: /^Admin$/ }).nth(3).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('link', { name: 'Maintenance' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});