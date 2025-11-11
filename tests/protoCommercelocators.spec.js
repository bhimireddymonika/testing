import{ test,expect} from "@playwright/test";

test('playwright special locators',async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
     await page.locator("[minlength='2']").fill("bhimireddy monika");
    await page.locator("[name='email']").fill("Bhimireddymonika@gmail.com");
    // await page.locator("#exampleInputPassword1").fill("Monika2004");
    await page.getByPlaceholder("Password").fill("Monika2004");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Employed").check();
    //await page.getByPlaceholder("Password").fill("Monika2004");
    await page.locator("[name='bday']").fill("2004-07-21");
    await page.getByRole("button",{name:"Submit"}).click();
    await page.getByText("Success! The Form has been submitted successfully!").isVisible();
    await page.getByRole("link",{name:"Shop"}).click();
    await page.locator("app-card").filter({hasText:'Blackberry'}).getByRole("button").click();
    await page.pause();

})