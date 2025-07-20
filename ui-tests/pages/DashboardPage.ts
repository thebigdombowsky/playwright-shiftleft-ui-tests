import { Page } from '@playwright/test';

export class DashboardPage {
    constructor(private page: Page) {}

    async isDashboardVisible(): Promise<boolean> {
        return this.page.locator('h1:has-text("Dashboard")').isVisible();
    }

    async runAccessibilityCheck(): Promise<any> {
        const axeSource = require('axe-core').source;
        await this.page.addScriptTag({ content: axeSource });
        return await this.page.evaluate(async () => {
            return await (window as any).axe.run();
        });
    }
}
