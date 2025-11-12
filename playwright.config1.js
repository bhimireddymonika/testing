// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  retries :3,
  workers:1,
   timeout :40*1000,
  expect:{
  timeout:40*1000,
  },
  reporter:'html',
  projects:[
    {
      name:'safari',
       use: {
      browserName:'webkit',
    headless: true,
    screenshot: 'off',
    trace: 'on',
    ...devices['iPhone 12 Pro Max'],
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  }
},
{
  name :'chrome',
  use: {
      browserName:'chromium',
    headless: true,
    screenshot: 'on',
    video:'retain-on-failure',
    ignoreHttpsErrors:true,
    permissions:['geolocation'],
    trace: 'on',
    // viewport :{width:720,height:720}
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  }
}]
    // use: {
// browserName:'webkit',
//     headless: true,
//     screenshot: 'on',
//     trace: 'on',
//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//   },]
  

});
module.exports=config;

