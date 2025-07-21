import { Page } from '@playwright/test';
const axeSource = require('axe-core').source;

/**
 * Injects the axe-core library into the current page.
 * @param page Playwright Page object
 */
export async function injectAxe(page: Page): Promise<void> {
  await page.addScriptTag({ content: axeSource });
}

/**
 * Runs axe-core accessibility checks on the current page.
 * @param page Playwright Page object
 * @returns The result object containing any violations.
 */
export async function runA11yCheck(page: Page): Promise<any> {
  await injectAxe(page);
  return await page.evaluate(async () => {
    return await (window as any).axe.run();
  });
}

/**
 * Asserts there are no accessibility violations on the page.
 * @param page Playwright Page object
 */
export async function expectNoA11yViolations(page: Page): Promise<void> {
  const results = await runA11yCheck(page);
  if (results.violations.length > 0) {
    console.error("Accessibility violations:", results.violations);
    throw new Error(`Accessibility check failed with ${results.violations.length} violations`);
  }
}
