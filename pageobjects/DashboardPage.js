
// // class DashboardPage
// // {
// // constructor(page)
// // {
// //     this.page = page;
// //     this.products = page.locator(".card-body");
// //     this.productsText = page.locator(".card-body b");
// //     this.cart =  page.locator("[routerlink*='cart']");
// //     this.orders = page.locator("button[routerlink*='myorders']");

// // }

// // async searchProductAddCart(productName)
// // {
   
// //     const titles= await this.productsText.allTextContents();
// //     console.log(titles);
// //     const count = await this.products.count();
// //     for(let i =0; i < count; ++i)
// //     {
// //     if(await this.products.nth(i).locator("b").textContent() === productName)
// //     {
// //         //add to cart
// //         await this.products.nth(i).locator("//div[@class='row']//div[2]//div[1]//div[1]//button[1]").click();
// //         break;
// //      }
// //     }
// // }

// // async navigateToOrders()
// // {
// //     await this.orders.click();
// // }


// // async navigateToCart()
// // {
// //     await this.cart.click();
// // }

// // }
// // module.exports = {DashboardPage};
// class DashboardPage {
//   constructor(page) {
//     this.page = page;
//     this.products = page.locator(".card-body");
//     this.productsText = page.locator(".card-body b");
//     this.cart = page.locator("[routerlink*='cart']");
//     this.orders = page.locator("button[routerlink*='myorders']");
//   }

//   async searchProductAddCart(productName) {
//     // Wait for products to load
//     await this.page.waitForSelector('.card-body b', { state: 'visible', timeout: 10000 });
//     const count = await this.products.count();

//     for (let i = 0; i < count; ++i) {
//       const title = (await this.products.nth(i).locator('b').textContent()).trim();
//       if (title === productName) {
//         // click the "Add to Cart" button within the product card
//         await Promise.all([
//           this.page.waitForLoadState('networkidle'),
//           this.products.nth(i).locator("button:has-text('Add to Cart')").click()
//         ]);
//         break;
//       }
//     }
//   }

//   async navigateToCart() {
//     // Click cart and wait for an element unique to the cart page (product header h3)
//     await Promise.all([
//       this.page.waitForSelector('h3', { state: 'visible', timeout: 10000 }),
//       this.cart.click()
//     ]);
//   }

//   async navigateToOrders() {
//     // clicking Orders button shows orders view — wait for orders table
//     await Promise.all([
//       this.page.waitForSelector('tbody', { state: 'visible', timeout: 10000 }),
//       this.orders.click()
//     ]);
//   }
// }

// module.exports = { DashboardPage };
// ...existing code...
class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator('.card');
        this.productsText = page.locator('.card-body b');
        this.cart = page.locator("[routerlink*='cart']");
         this.orders = page.locator("//button[@routerlink='/dashboard/myorders']");

    }

    async searchProductAddCart(productName) {
        await this.page.waitForSelector('.card', { state: 'visible', timeout: 10000 });
        console.log(await this.productsText.first().textContent());
        console.log(await this.productsText.nth(1).textContent());
        console.log(await this.productsText.allTextContents());

        // find the card by text (Playwright :has-text is case-insensitive)
        const card = this.page.locator(`.card:has-text("${productName}")`);
        const addBtn = card.locator('button:has-text("Add")'); // generic "Add" to match "Add To Cart"
        await addBtn.waitFor({ state: 'visible', timeout: 5000 });

        // click and wait for network/navigation (avoid racing)
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            addBtn.click()
        ]);
    }
    async navigateToOrders()
{
    await this.orders.click();
    await this.page.pause();
}

    async navigateToCart() {
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.cart.click()
        ]);
    }
}
module.exports = { DashboardPage };
