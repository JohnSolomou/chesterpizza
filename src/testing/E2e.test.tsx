import puppeteer from "puppeteer";
describe("go to website", () => {
  let browser: any;
  let page: any;

  beforeAll(async function () {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 50,
      devtools: false,
    });
    page = await browser.newPage();

    await page.setDefaultTimeout(50000);
    await page.setDefaultNavigationTimeout(30000);
  });
  it("should select pizza toppings", async function () {
    jest.setTimeout(60000);
    await page.goto("http://localhost:3000/");
    await page.waitForSelector("#prod");
    await page.click("#prod");
    await page.click("#small");
    await page.click("#green-peppers");
    await page.click("#grilled-chicken");
    await page.click("#bbq");
  });
  afterAll(async function () {
    await browser.close();
  });
});
