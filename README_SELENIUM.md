# 🧪 Selenium UI Test — MERN Chat App Login Page

This document explains how to run the **Selenium automated UI test** (`test.js`) for the MERN Chat App Login Page.

> ⚡ The test is **UI-only** — it does NOT require a running backend or MongoDB.

---

## 📋 Prerequisites

Before running the test, make sure you have the following installed:

| Requirement       | Version / Notes                          |
|-------------------|------------------------------------------|
| Node.js           | v14 or higher                            |
| npm               | Comes with Node.js                       |
| Google Chrome     | Latest stable version                    |
| ChromeDriver      | Must match your Chrome version           |
| React Frontend    | Running on `http://localhost:3000`        |

---

## 📦 Install Selenium WebDriver

Run the following command inside the **project root**:

```bash
npm install selenium-webdriver
```

> **Note:** `chromedriver` is automatically managed by `selenium-webdriver` in recent versions.  
> If you face issues, install it manually:
```bash
npm install chromedriver
```

---

## 🚀 Step-by-Step: How to Run the Selenium Test

### Step 1 — Start the React Frontend

Open a terminal and run:

```bash
cd client
npm install
npm start
```

> ✅ The React app must be running at **http://localhost:3000** before the test.

---

### Step 2 — Open a Second Terminal at Project Root

Navigate back to the root of the project:

```bash
cd ..
```

---

### Step 3 — Run the Selenium Test

```bash
node test.js
```

---

## 📊 What the Test Does (Step by Step)

| Step | Action                                | Expected Console Output                         |
|------|---------------------------------------|-------------------------------------------------|
| 1    | Launch Chrome browser                 | Chrome window opens automatically               |
| 2    | Navigate to `http://localhost:3000`   | `✔ Opened http://localhost:3000`                |
| 3    | Wait for page to load (up to 10s)    | `✔ Page loaded`                                 |
| 4    | Locate the **username** input field   | —                                               |
| 5    | Enter dummy username: `testuser`      | `✔ Entered username: testuser`                  |
| 6    | Locate the **password** input field   | —                                               |
| 7    | Enter dummy password: `123456`        | `✔ Entered password: 123456`                    |
| 8    | Click the **Login button**            | `✔ Clicked login button`                        |
| 9    | Wait 3 seconds (UI observation)       | `✔ Waited 3 seconds after click`               |
| 10   | Print the current URL                 | `✔ Current URL after login attempt: ...`        |
| 11   | Print test result                     | `✅ Test Passed`                                |
| 12   | Close the browser                     | `✔ Browser closed`                             |

---

## ✅ Expected Output

```
✔ Opened http://localhost:3000
✔ Page loaded
✔ Entered username: testuser
✔ Entered password: 123456
✔ Clicked login button
✔ Waited 3 seconds after click
✔ Current URL after login attempt: http://localhost:3000/
✅ Test Passed
✔ Browser closed
```

---

## ❌ Common Errors & Fixes

| Error                                        | Cause                                    | Fix                                              |
|----------------------------------------------|------------------------------------------|--------------------------------------------------|
| `ChromeDriver not found`                     | chromedriver not installed               | Run `npm install chromedriver`                   |
| `SessionNotCreatedException`                 | Chrome vs ChromeDriver version mismatch  | Update Chrome or use `chromedriver-autoinstaller`|
| `No such element`                            | Input field selector not matching        | Check input field HTML in browser DevTools       |
| `Connection refused http://localhost:3000`   | React app not running                    | Run `npm start` inside `/client` folder          |
| `TimeoutException`                           | Page load took too long                  | Increase timeout value in `test.js`              |

---

## 🔧 Headless Mode (Optional)

To run Chrome without opening a visible browser window, uncomment this line in `test.js`:

```js
// options.addArguments('--headless');
```

Change to:

```js
options.addArguments('--headless');
```

---

## 📂 File Reference

```
DevOps_Practicalexam/
└── test.js       ← Selenium test script (run with: node test.js)
```

---

## 🔗 Related Documentation

- [Selenium WebDriver Docs](https://www.selenium.dev/documentation/)
- [ChromeDriver Downloads](https://chromedriver.chromium.org/downloads)
- [Node.js selenium-webdriver npm](https://www.npmjs.com/package/selenium-webdriver)
