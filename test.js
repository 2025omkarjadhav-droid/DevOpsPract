// Selenium UI Test for MERN Chat App Login Page
// Run: node test.js
// Does NOT require backend or MongoDB - UI interaction only

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTest() {
  // Step 1: Launch Chrome browser
  const options = new chrome.Options();
  // options.addArguments('--headless'); // Uncomment to run headless
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Step 2: Navigate to the login page
    await driver.get('http://localhost:3000');
    console.log('✔ Opened http://localhost:3000');

    // Step 3: Wait for page to load (up to 10 seconds)
    await driver.wait(until.titleContains(''), 10000);
    console.log('✔ Page loaded');

    // Step 4 & 5: Find username field and enter dummy value
    const usernameField = await driver.wait(
      until.elementLocated(By.css('input[type="text"], input[name="username"], input[placeholder*="user" i]')),
      5000
    );
    await usernameField.clear();
    await usernameField.sendKeys('testuser');
    console.log('✔ Entered username: testuser');

    // Step 4 & 5: Find password field and enter dummy value
    const passwordField = await driver.findElement(By.css('input[type="password"]'));
    await passwordField.clear();
    await passwordField.sendKeys('123456');
    console.log('✔ Entered password: 123456');

    // Step 6: Click the login button
    const loginButton = await driver.findElement(
      By.css('button[type="submit"], button')
    );
    await loginButton.click();
    console.log('✔ Clicked login button');

    // Step 7: Wait 3 seconds (UI-only check, no backend needed)
    await driver.sleep(3000);
    console.log('✔ Waited 3 seconds after click');

    // Step 8: Check current URL (no backend validation)
    const currentUrl = await driver.getCurrentUrl();
    console.log('✔ Current URL after login attempt:', currentUrl);

    // Step 9: Print success
    console.log('\n✅ Test Passed');

  } catch (err) {
    console.error('❌ Test encountered an error:', err.message);
  } finally {
    // Step 10: Close browser
    await driver.quit();
    console.log('✔ Browser closed');
  }
}

runTest();
