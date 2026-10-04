import{test, expect} from'@playwright/test';

test.skip('screenshot', async({page})=>{
    await page.goto('https://www.techlearn.in/');
    await page.screenshot({path: 'screenshot.png'});
});

test('full page screenshot', async({page})=>{
    await page.goto('https://www.selenium.dev/');
    await page.screenshot({path: 'fullpage.png', fullPage:true});
});

test('particular web element screenshot', async({page})=>{
    await page.goto('sss')
})