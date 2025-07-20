import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

setDefaultTimeout(60 * 1000);

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;
export let loginPage: LoginPage;
export let dashboardPage: DashboardPage;

Before(async () => {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
});

After(async () => {
    await context.close();
    await browser.close();
});
