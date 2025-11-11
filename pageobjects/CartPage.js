// const {test, expect} = require('@playwright/test');
// class CartPage
// {
// constructor(page)
// {
//     this.page = page;
//     this.cartProducts = page.locator("div li").first();
//     this.productsText = page.locator(".card-body b");
//     this.cart =  page.locator("[routerlink*='cart']");
//     this.orders = page.locator("button[routerlink*='myorders']");
//     this.checkout = page.locator("text=Checkout");

// }

// async VerifyProductIsDisplayed(productName)
// {
   
//     await this.cartProducts.waitFor();
//     const bool =await this.getProductLocator(productName).isVisible();
//     expect(bool).toBeTruthy();

// }

// async Checkout()
// {
//     await this.checkout.click();
// }

//  getProductLocator(productName)
// {
//     return  this.page.locator("h3:has-text('"+productName+"')");
// }

// }
// module.exports = {CartPage};
const { expect } = require('@playwright/test');
class CartPage {
    constructor(page) {
        this.page = page;
        this.cartList = page.locator('div[role="list"], tbody'); // more generic parent
        this.checkout = page.locator("text=Checkout");
    }

    async VerifyProductIsDisplayed(productName) {
        await this.page.waitForLoadState('networkidle');
        // fast-fail if explicit empty-cart message
        const empty = this.page.locator('text=No Products in Your Cart !');
        if (await empty.count() && await empty.isVisible()) {
            throw new Error(`Cart is empty. Product "${productName}" not found.`);
        }
        const productLocator = this.page.locator(`div li:has-text("${productName}")`);
        await productLocator.waitFor({ state: 'visible', timeout: 15000 });
        expect(await productLocator.isVisible()).toBeTruthy();
    }

    async Checkout() {
        await this.checkout.click();
    }
}
module.exports = { CartPage };
