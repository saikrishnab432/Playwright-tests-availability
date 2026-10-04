import {test, expect} from'@playwright/test';

test.skip('has title', async({page})=>{
    await page.goto('https://www.google.com/');
    await page.getByRole('combobox', {name:'Search'}).fill('playwright latest version')
    

});

test.only('has body', async({page})=>{
    await page.goto('https://www.instagram.com/');
    //await page.getByRole('combobox', {name:'Search'}).fill('playwright latest version')
    

});

