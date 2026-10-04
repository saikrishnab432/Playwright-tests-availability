import{test, expect} from '@playwright/test';

test('Dropdowns', async({page})=>{
    await page.goto('https://www.redmine.org');
    await page.locator('//*[@id="account"]/ul/li[2]/a').click();
    await page.locator('#user_language').selectOption('lt');

    // this is to check whether the git has redirected this line to the repository or not
    //this is to check whether this line is reflecting on the vs code when I pull it
    // this is to  check the same thing usiing the github desktop app
    // now this is the same thing pulling through the desktop application
});
