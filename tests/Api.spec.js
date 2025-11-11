const {test,expect,request}=require('@playwright/test');
const { APiUtils } = require('../utils/APIUtils');
 const loginPlayLoad = {userEmail:"bhimireddymonika@gmail.com",userPassword:"Monika2004"}
const orderPlayLoad = {orders:[{country:"cuba",productOrderedId:"68a961959320a140fe1ca57e"}]}
let token;
let response;
test.beforeAll(  async()=>
{
 const apicontext =  await request.newContext();
 const apiUtils = new APiUtils(apicontext,loginPlayLoad);
 response = await apiUtils.createOrder(orderPlayLoad);
//  const loginResponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
//     {
//     data:loginPlayLoad
//     })
//      expect(loginResponse.ok()).toBeTruthy();
//      const loginResponseJson= await loginResponse.json();
//       token =  loginResponseJson.token;
//      console.log(token);


//     const orderResponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
//         {
//           data:orderPlayLoad,
//           headers:
//           {
//             'Authorization':token,
//             'Content-Type':'application/json'
//           },
//         })
//         const orderResponseJson = await orderResponse.json();
//         console.log(orderResponseJson);
//          orderId = orderResponseJson.orders[0];
});
 
// test.beforeEach(  ()=>
// {



// });





 test('@web place the order',async ({page})=>
{
    // APiUtils = new APiUtils(apicontext,loginPlayLoad);
    // const orderId = createOrder(orderPlayLoad);
    page.addInitScript(value =>
    {
        window.localStorage.setItem('token',value);
    },response.token);
 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
 await page.locator("button[routerlink='/dashboard/myorders']").click();
 await page.locator("tbody tr").first().waitFor();
const rows = await page.locator("tbody tr");
for(let i=0;i< await rows.count();++i)
{
  const rowOrderId= await rows.nth(i).locator("th").textContent();
  if (response.orderId.includes(rowOrderId))
  {
    await rows.nth(i).locator("button").first().click();
    break;
  }
}
const orderIdDetails = await page.locator(".col-text").textContent();
await page.pause();
expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
 await page.pause();
});
