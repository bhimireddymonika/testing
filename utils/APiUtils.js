class APiUtils
{
    constructor(apicontext,loginPlayLoad)
    {
        this.apicontext = apicontext;
        this.loginPlayLoad= loginPlayLoad;
    }
    async getToken()
    {
        const loginResponse = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
            data:this.loginPlayLoad
            })
             const loginResponseJson= await loginResponse.json();
             const token =  loginResponseJson.token;
             console.log(token);
             return token;      
    }

    async createOrder(orderPlayLoad)
    {
    let response = {};
     response.token =  await this.getToken();
    const orderResponse = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
          data:orderPlayLoad,
          headers:
          {
            'Authorization':response.token,
            'Content-Type':'application/json'
          },
        })
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
         const orderId = orderResponseJson.orders[0];
         response.orderId = orderId;
         return response;
    }
}
module.exports= {APiUtils};
