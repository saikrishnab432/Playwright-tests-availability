import {test, expect} from '@playwright/test';

test('has title', async({page})=>{

    await page.goto('https://www.techlearn.in/admin');

    await page.locator('#user_login').fill('saikrishna');

    await page.locator('//*[@id="user_pass"]').fill('vu6dftgvyuk');

    await page.locator('//*[@id="rememberme"]').click();

    await page.locator('//*[@id="wp-submit"]').click();

});
