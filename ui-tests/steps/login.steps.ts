import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { loginPage, dashboardPage } from '../support/hooks';

Given('the user is on the login page', async () => {
  await loginPage.navigate();
});

When('the user logs in with valid credentials', async () => {
  await loginPage.login('testuser', 'password123');
});

Then('the dashboard header should be visible', async () => {
  const visible = await dashboardPage.isDashboardVisible();
  expect(visible).toBeTruthy();
});
