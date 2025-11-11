const { When, Then , Given } = require('@cucumber/cucumber') 
const { POManager } = require('../../pageobjects/POManager');
const {  expect } = require('@playwright/test');
const playwright = require('@playwright/test');

Given('a login to Ecommerce application with {string} and {string}',{timeout : 100*1000}, async function (username, password) {
           
             const loginPage = this.poManager.getLoginPage();
               await loginPage.goTo();
               await loginPage.validLogin(username,password);
         });
         When('Add {string} to cart', async function (productName) {
            this. dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProductAddCart(productName);
  await this.dashboardPage.navigateToCart();
  });
 Then('Verify"ZARA COAT {int}" is diaplayed in the cart', async function (productName) {
         const cartPage = this.poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(productName);
  await cartPage.Checkout();

         });
           When('Enter valid details and Place the Order', async function () {
           const ordersReviewPage = this.poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("ind", "India");
  const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log('OrderId:', orderId);
         });
//           Then('Verify order in present in the OrderHistory', async function () {
//            await ordersHistoryPage.searchOrderAndSelect(orderId);
//  const fetchedOrderId = await ordersHistoryPage.getOrderId();
//    expect(orderId.includes(fetchedOrderId)).toBeTruthy();
//          });
  Given('a login to Ecommerce2 application with {string} and {string}',async function (username, password) {
    const userName = this.page.locator("#username");
 const signin = this.page.locator ("#signInBtn");
          await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/"    );
 console.log(await this.page.title());
 await userName.fill(username);
 await this.page.locator("#password").fill(password);
 await signin.click();
         });
Then('verify Error message is displayed',async function(){
console.log(await this.page.locator ("[style*='block']").textContent());
 await expect(this.page.locator ("[style*='block']")).toContainText("Incorrect");
})