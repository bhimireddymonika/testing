const { expect } = require('@playwright/test');

class OrdersReviewPage {
  constructor(page) {
    this.page = page;
    this.country = page.locator("[placeholder*='Country']");
    this.dropdown = page.locator("//input[@placeholder='Select Country']");
    this.emailId = page.locator(".user__name [type='text']").first();
    this.submit = page.locator("//a[normalize-space()='Place Order']");
    this.orderConfirmationText = page.locator(".hero-primary");
    this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
  }
  async searchCountryAndSelect(countryCode, countryName) {
     await this.page.locator("//div[@class='payment__type payment__type--cc active']").click();
 await this.page.locator("[class='input txt text-validated']").first().fill("123456789123");
 await this.page.locator("[class='input ddl']").first().selectOption("10");
 await this.page.locator("[class='input ddl']").last().selectOption("08");
 await this.page.locator("[class='input txt']").first().fill("123");
  await this. page.locator("[class='input txt']").last().fill("Monika");
await this.page.getByPlaceholder("Select Country").pressSequentially("ind");
await this.page.getByRole("button",{name:"India"}).nth(1).click();
//     await this.page.locator("[class='input txt text-validated']").first().fill("123456789123");
//  await this.page.locator("[class='input ddl']").first().selectOption("10");
//  await this.page.locator("[class='input ddl']").last().selectOption("08");
//  await this.page.locator("[class='input txt']").first().fill("123");
//   await this.page.locator("[class='input txt']").last().fill("Monika");

    // await this.country.fill(countryCode, { delay: 100 });
 
    // await this.dropdown.waitFor({ state: 'visible', timeout: 10000 });
    // await this.page.fill("//input[@placeholder='Select Country']","India");
   
  }

  async VerifyEmailId(username) {
    await expect(this.emailId).toHaveText(username);
  }

  async SubmitAndGetOrderId() {
   
    await Promise.all([
      this.page.waitForSelector("//a[normalize-space()='Place Order']", { state: 'visible', timeout: 10000 }),
      this.submit.click()
    ]);
 
    await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ", { timeout: 7000 });
    return (await this.orderId.textContent()).trim();
  }
  
}

module.exports = { OrdersReviewPage };
