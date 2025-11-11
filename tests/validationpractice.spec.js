
const { test, expect } = require('@playwright/test');

test("popup validations", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://google.com");
    // await page.goBack();
    // await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect (page.locator("#displayed-text")).toBeHidden();
   
    // await page.pause();
    page.on('dialog',dialog =>dialog.accept());
    await page.locator("#confirmbtn").click();
  await page.locator("#mousehover").hover();
 await page.waitForSelector('iframe#courses-iframe', { state: 'attached' });
 const framesPage = page.frameLocator('iframe#courses-iframe');
 const link = framesPage.locator("li a[href*='lifetime-access']").first();
await link.waitFor({ state: 'visible' });
  await link.click();
 const textcheck = await framesPage.locator('.text h2').textContent();
 console.log(textcheck.split(' ')[1]);
});


test("screenshot &visual comparison", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     await expect(page.locator("#displayed-text")).toBeVisible();
     await page.locator("#displayed-text").screenshot({path:'element.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path:'screenshot.png'});
    await expect (page.locator("#displayed-text")).toBeHidden();
   
})

test.only('visual', async ({page})=>
{
  await page.goto("https://google.com");
  expect (await page.screenshot()).toMatchSnapshot('landing.png');
})