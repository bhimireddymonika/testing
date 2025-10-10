const {test,expect}= require('@playwright/test');

 test.only('browser context Playwright Test',async ({browser})=>
{
const context= await browser.newContext();
 const page= await context. newPage();
 const titless =  page.locator(".card-body b");
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("[routerlink='/auth/register']").click();
  await page.locator("#firstName").fill("Bhimireddy");
  await page.locator("#lastName").fill("Monika");
  await page.locator("#userEmail").fill("Bhimireddymonika@gmail.com");
  await page.locator("#userMobile").fill("7989591313");
  await page.locator(".custom-select ").selectOption({value:"1: Doctor"});
  await page.locator("[value='Female']").check();
  await page.locator("#userPassword").fill("Monika2004");
  await page.locator("#confirmPassword").fill("Monika2004");
  await page.locator("[type='checkbox']").check();
  await page.locator("#login").click();
  await page.locator(".text-reset").click();
  await page.locator("#userEmail").fill("Bhimireddymonika@gmail.com");
  await page.locator("#userPassword").fill("Monika2004");
  await page.locator("#login").click();
  await page.waitForLoadState('networkidle');
   console.log (await titless .first().textContent());
   console.log (await titless .nth(1).textContent());
   const alltitles = await titless.allTextContents();
    console.log(alltitles);
     await page.pause();
});
 