const {test,expect}= require('@playwright/test');

 test.only('UI controls',async ({browser})=>
 {
 const context= await browser.newContext();
 const page= await context. newPage();
 const userName = page.locator("#username");
 const signin = page.locator ("#signInBtn");
 const cardtitle = page.locator(".card-body a");
 page.on('request', request =>console.log(request.url()));
 page.on('response', response=>console.log(response.url(),response.status()));
 const documentLink=page.locator("[href*='documents-request']");
 const documentLinks=page.locator("[href*='qasummit']");
 const dropdown = page.locator("select.form-control");
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/"    );
 console.log(await page.title());
 await userName.fill("Monika");
 await page.locator("#password").fill("MOnika 2004");
 await signin.click();
 console.log(await page.locator ("[style*='block']").textContent());
 await expect(page.locator ("[style*='block']")).toContainText("Incorrect");
 await userName.fill("");
 await userName.fill("rahulshettyacademy");
 await page.locator("#password").fill("learning");
 await page.locator(".radiotextsty").last().click();
 await page.locator("#okayBtn").click();
 console.log( await page.locator(".radiotextsty").last().isChecked());
 expect( await page.locator(".radiotextsty").last().isChecked());
 await dropdown.selectOption("consult");
 await page.locator("#terms").check();
 expect( await page.locator("#terms").isChecked());
 await page.locator("#terms").uncheck();
 expect( await page.locator("#terms").isChecked()).toBeFalsy();
 await page.locator("#terms").check();
 expect( await page.locator("#terms").isChecked());
 await expect(documentLink).toHaveAttribute("class","blinkingText");
//  await expect(documentLinks).toHaveAttribute("class","blinkingText");
 await signin.click();
 console.log(await cardtitle. first().textContent());
 console.log(await cardtitle. nth(1).textContent());
 const alltitles =await cardtitle.allTextContents();
 console.log(alltitles);
//  await page.pause();
 });
 test('child windows hadl', async({browser})=>
{
    const context= await browser.newContext();
    const page= await context. newPage();
    const userName = page.locator("#username");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink=page.locator("[href*='documents-request']");
    const [newpage] = await Promise.all(
    [
        context.waitForEvent('page'),
        documentLink.click(),
    ]);
    const text= await newpage.locator("[class='im-para red']").textContent();
    const arraytext = text.split("@")
    const domain = arraytext[1].split(" ")[0]
    console.log(domain);
    await page.locator("#username").type(domain);
    const value = await page.evaluate(() => document.querySelector('#username').value);
    console.log(value);  
     await page.pause();
 
})
