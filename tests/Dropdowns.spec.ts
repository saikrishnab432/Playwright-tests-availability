import{test, expect} from '@playwright/test';

test('Dropdowns', async({page})=>{
    await page.goto('https://www.redmine.org');
    await page.locator('//*[@id="account"]/ul/li[2]/a').click();
    await page.locator('#user_language').selectOption('lt');
});