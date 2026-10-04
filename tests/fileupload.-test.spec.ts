import { test, expect } from '@playwright/test';

test('file upload', async ({ page }) => {
    await page.goto('https://www.w3schools.com/howto/howto_html_file_upload_button.asp');

    await page.locator('//input[@id="myFile"]')
        .setInputFiles('D:/Lib/AllaboutPlayWright/Playwright_Folder_Structure_Notes.docx');
});