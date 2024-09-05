import { test, expect, type Page } from "@playwright/test";

async function takeScreenshot(page: Page, name: string) {
	await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
}

test.describe("Layout Selector", () => {
	test("Mobile Layout", async ({ page }) => {
		await page.setViewportSize({ width: 768, height: 1024 });
		await page.goto("http://localhost:3000/");

		await page.waitForSelector("main");

		await takeScreenshot(page, "mobile-layout");
		await expect(page.locator("main")).toBeVisible();
	});

	test("Tablet Layout", async ({ page }) => {
		await page.setViewportSize({ width: 1024, height: 1366 });
		await page.goto("http://localhost:3000/");

		await page.waitForSelector("main");

		await takeScreenshot(page, "tablet-layout");
		await expect(page.locator("main")).toBeVisible();
	});

	test("Laptop Layout", async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto("http://localhost:3000/");

		await takeScreenshot(page, "laptop-layout");
		await expect(page.locator("div.font-semibold")).toContainText(
			"No desktop allowed :(",
		);
	});

	test("Desktop Layout", async ({ page }) => {
		await page.setViewportSize({ width: 1920, height: 1080 });
		await page.goto("http://localhost:3000/");

		await takeScreenshot(page, "desktop-layout");
		await expect(page.locator("div.font-semibold")).toContainText(
			"No desktop allowed :(",
		);
	});
});
