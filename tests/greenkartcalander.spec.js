const{test,expect}=require("@playwright/test");

test("@web calander validations",async({page})=>
{
    const monthNumber ="7";
    const date="21";
    const year="2026";
    const expectedlist= [monthNumber,date,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__tile").nth(Number(monthNumber)-1).click();
     await page.locator("//abbr[text()='"+date+"']").click();
     const inputs = page.locator(".react-date-picker__inputGroup__input");
     for(let i=0;i<expectedlist.length;i++)
     {
       const value = await  inputs.nth(i).inputValue();
       expect(value).toEqual(expectedlist[i]);

     }
})