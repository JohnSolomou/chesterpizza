var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import puppeteer from "puppeteer";
describe("go to website", () => {
    let browser;
    let page;
    beforeAll(function () {
        return __awaiter(this, void 0, void 0, function* () {
            browser = yield puppeteer.launch({
                headless: true,
                slowMo: 50,
                devtools: false,
            });
            page = yield browser.newPage();
            yield page.setDefaultTimeout(50000);
            yield page.setDefaultNavigationTimeout(30000);
        });
    });
    it("should select pizza toppings", function () {
        return __awaiter(this, void 0, void 0, function* () {
            jest.setTimeout(60000);
            yield page.goto("http://localhost:3000/");
            yield page.waitForSelector("#prod");
            yield page.click("#prod");
            yield page.click("#small");
            yield page.click("#green-peppers");
            yield page.click("#grilled-chicken");
            yield page.click("#bbq");
        });
    });
    afterAll(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser.close();
        });
    });
});
