const {test,expect}= require('@playwright/test');
let webContext;

test.beforeAll(async({browser}) =>
{
 const context =  await browser.newContext();
 const Page = await context.newPage();
   await Page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await Page.locator("#userEmail").fill("Bhimireddymonika@gmail.com");
   await Page.locator("#userPassword").fill("Monika2004");
   await Page.getByRole('button',{name:'Login'}).click();
   await Page.waitForLoadState('networkidle');
   await context.storageState({path:'state.json'});
  webContext =  await browser.newContext({storageState:'state.json'});
})


 test('shop app login',async ()=>
{
// const context= await browser.newContext();
//  const page= await context. newPage();
//  const email="Bhimireddymonika@gmail.com";
//  const productname='ADIDAS ORIGINAL';
//   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
//   await page.locator("[routerlink='/auth/register']").click();
//   await page.locator("#firstName").fill("Bhimireddy");
//   await page.locator("#lastName").fill("Monika");
//   await page.locator("#userEmail").fill(email);
//   await page.locator("#userMobile").fill("7989591313");
//   await page.locator(".custom-select ").selectOption({value:"1: Doctor"});
//   await page.locator("[value='Female']").check();
//   await page.locator("#userPassword").fill("Monika2004");
//   await page.locator("#confirmPassword").fill("Monika2004");
//   await page.locator("[type='checkbox']").check();
//   await page.locator("#login").click();
//   await page.locator(".text-reset").click();
//   await page.locator("#userEmail").fill("Bhimireddymonika@gmail.com");
//   await page.locator("#userPassword").fill("Monika2004");
//   await page.getByRole('button',{name:'Login'}).click();
  // await page.locator("#login").click();
//   await page.waitForLoadState('networkidle');
const email="Bhimireddymonika@gmail.com";
 const productname='ADIDAS ORIGINAL';
//   await page.waitForSelector(".card-body b");
 const page =await webContext.newPage();
 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  const products =  page.locator(".card-body b");
   console.log (await products .first().textContent());
   console.log (await products .nth(1).textContent());
   const alltitles = await products.allTextContents();
    console.log(alltitles);
     const count = await products.count();
    //  await page.locator(".card-body b").filter({hastext:"ZARA COAT 3"}).getByRole("button",{name:"Add to Cart"}).click();
    const card = page.locator('.card:has-text("ZARA COAT 3")');
     await card.locator('button:has-text("Add to Cart")').waitFor({ state: 'visible' });
     await card.locator('button:has-text("Add to Cart")').click();
     await page.getByRole("listitem").getByRole('button',{name:"cart"}).click();
  // for (let i = 0; i < count; ++i) {
  //   const name = (await products.nth(i).textContent()).trim();
  //   if (name === productname) {
  //     const addToCartButton = products.nth(i).locator("xpath=ancestor::div[contains(@class,'card-body')]//button[contains(text(),'Add To Cart')]");
  //     await addToCartButton.waitFor({ state: 'visible' });
  //     await addToCartButton.click();
  //     console.log(`✅ Added ${productname} to cart`);
  //     break;
  //   }
  // }
 await page.locator("[routerlink='/dashboard/cart']").click();
 await page.locator("div li").first().waitFor();
 await expect(page.getByText("ZARA COAT 3")).toBeVisible();
//   const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
//  expect(bool).toBeTruthy();
 await page.getByRole("button",{name:"Checkout"}).click();
 await page.locator("//div[@class='payment__type payment__type--cc active']").click();
 await page.locator("[class='input txt text-validated']").first().fill("123456789123");
 await page.locator("[class='input ddl']").first().selectOption("10");
 await page.locator("[class='input ddl']").last().selectOption("08");
 await page.locator("[class='input txt']").first().fill("123");
  await page.locator("[class='input txt']").last().fill("Monika");
await page.getByPlaceholder("Select Country").pressSequentially("ind");
await page.getByRole("button",{name:"India"}).nth(1).click();

// const dropdown = page.locator(".ta-results");
// await dropdown.waitFor();
//   const optionsCount = await dropdown.locator("button").count();
//  for (let i = 0; i < optionsCount; ++i) {
//      const text = await dropdown.locator("button").nth(i).textContent();
//    if (text === " India")
//    {
//      await dropdown.locator("button").nth(i).click();
//      break;
//    }
//  }
//  expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
 await page.getByText("PLACE ORDER").click();
 await  expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
 const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
 console.log(orderId);
 await page.locator("button[routerlink='/dashboard/myorders']").click();
 await page.locator("tbody tr").first().waitFor();
const rows = await page.locator("tbody tr");
for(let i=0;i< await rows.count();++i)
{
  const rowOrderId= await rows.nth(i).locator("th").textContent();
  if (orderId.includes(rowOrderId))
  {
    await rows.nth(i).locator("button").first().click();
    break;
  }
}
const orderIdDetails = await page.locator(".col-text").textContent();
expect(orderId.includes(orderIdDetails)).toBeTruthy();
 await page.pause();
});


test('test case 2',async ()=>
{
const email="Bhimireddymonika@gmail.com";
 const productname='ADIDAS ORIGINAL';
//   await page.waitForSelector(".card-body b");
 const page =await webContext.newPage();
 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  const products =  page.locator(".card-body b");
   console.log (await products .first().textContent());
   console.log (await products .nth(1).textContent());
   const alltitles = await products.allTextContents();
    console.log(alltitles);
});