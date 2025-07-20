// tests/utils/axeHelper.ts
import { Page } from '@playwright/test';
const axeSource = require('axe-core').source;

export async function runAxe(page: Page): Promise<any> {
    await page.addScriptTag({ content: axeSource });
    return await page.evaluate(async () => {
        return await (window as any).axe.run();
    });
}
