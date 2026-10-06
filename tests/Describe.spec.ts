
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.techlearn.in/');5
  await page.getByRole('link', { name: 'Enroll Now' }).click();

  await page.getByRole('textbox', { name: 'Full name' }).fill('sai krishna');
  await page.getByRole('textbox', { name: 'Full name' }).press('Tab');

  await page.getByRole('textbox', { name: 'Phone number' }).fill('87457845894589');
  await page.getByRole('textbox', { name: 'Phone number' }).press('Tab'); await page.getByRole('textbox', { name: 'Email address' }).fill('saikrishna@gmail.com');

  await page.getByRole('textbox', { name: 'Email address' }).press('Tab');

  await page.getByLabel('Course of interest').selectOption('api');

  await page.getByRole('textbox', { name: 'Your message' }).click();

  await page.getByRole('textbox', { name: 'Your message' }).fill('I want to become successful in life ');

  await page.getByRole('button', { name: 'Send Enquiry' }).click();

  test.skip('Describe', async({page})=>{
    await page.goto('https://www.tehlearn.in/');
   // await page.getByRole('')
  })

});

