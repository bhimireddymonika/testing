
// // // pageobjects/loginPage.js
// // class LoginPage {
// //   constructor(page) {
// //     this.page = page;            // store the Playwright page instance
// //     this.emailInput = '#userEmail';
// //     this.passwordInput = '#userPassword';
// //     this.loginButton = '#login';
// //   }

// //   async goTO() {
// //     // use this.page (not page)
// //     await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login', { waitUntil: 'networkidle' });
// //   }

// //   async validLogin(username, password) {
// //     await this.page.fill(this.emailInput, username);
// //     await this.page.fill(this.passwordInput, password);
// //     await this.page.click(this.loginButton);
// //     await this. page.waitForLoadState('networkidle');

// //     // wait for something that proves login succeeded (dashboard/products)
// //     await this.page.waitForSelector('.card-body b'); // adjust selector if needed
// //   }
// // }

// // module.exports = { LoginPage };
// class LoginPage {

// constructor(page)
// {
//     this.page = page;
//     this.signInbutton= page.locator("[value='Login']");
//     this.userName = page.locator("#userEmail");
//     this.password = page.locator("#userPassword");

// }

// async goTo()
// {
//     await this.page.goto("https://rahulshettyacademy.com/client");
// }

// async validLogin(username,password)
// {
//     await  this.userName.type(username);
//      await this.password.type(password);
//      await this.signInbutton.click();
//      await this.page.waitForLoadState('networkidle');

// }

// }
// module.exports = {LoginPage};
class LoginPage {
  constructor(page) {
    this.page = page;
    this.signInbutton = page.locator("[value='Login']");
    this.userName = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
  }

  async goTo() {
    await this.page.goto("https://rahulshettyacademy.com/client");
    // ensure page loaded
    await this.page.waitForLoadState('networkidle');
  }

  async validLogin(username, password) {
    await this.userName.fill(username);
    await this.password.fill(password);
    // click and wait for navigation/route change (app is SPA so wait for networkidle)
    await Promise.all([
      this.page.waitForLoadState('networkidle'),
      this.signInbutton.click()
    ]);
  }
}

module.exports = { LoginPage };
