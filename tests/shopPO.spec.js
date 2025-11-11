
 const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));
test('@web shop App login', async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(dataset.username, dataset.password);

  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductAddCart(dataset.productName);
  await dashboardPage.navigateToCart();

  const cartPage = poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(dataset.productName);
  await cartPage.Checkout();

  const ordersReviewPage = poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("ind", "India");
  const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log('OrderId:', orderId);

  // await dashboardPage.navigateToOrders();
  const ordersHistoryPage = poManager.getOrdersHistoryPage();
  // await ordersHistoryPage.searchOrderAndSelect(orderId);
  // const fetchedOrderId = await ordersHistoryPage.getOrderId();
  // expect(orderId.includes(fetchedOrderId)).toBeTruthy();
});


 



 

