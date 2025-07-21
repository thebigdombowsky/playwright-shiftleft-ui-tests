import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { expectNoA11yViolations } from '../utils/a11yHelper';

test('Login and a11y test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate();
    await loginPage.login('testuser', 'password123');
    expect(await dashboardPage.isDashboardVisible()).toBeTruthy();

    await expectNoA11yViolations(page);
});
