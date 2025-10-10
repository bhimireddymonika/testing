const {test,expect}= require('@playwright/test');

test.only('browser context Playwright Test',async ({browser})=>
{
 const context= await browser.newContext();
 const page= await context. newPage();
 await  page.goto("http://www.rahulshettyacademy.com/");
 console.log(await page.title());
 await page.locator("[class='icon fa fa-user']").click();
 await page.locator("#name").fill("Bhimireddy Monika");
 await page.locator("#email").fill("bhimireddymonika@gmail.com");
 await page.locator("#allowMarketingEmails").check();
 await page.locator("#otp-login-btn").click();
 await page.locator("[class='uni-ml-4 troubleShootBtn']").click();
 await page.locator("#email").fill("Bhimireddymonika@gmail.com");
 await page.locator("#otp-login-btn").click();
 await page.pause();
});


  