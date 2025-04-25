const { test, expect } = require('@playwright/test');

test.describe('Exchange Widget Tests', () => {
    test.beforeEach(async ({ page }) => {
        // Переходим на тестовую страницу
        await page.goto('http://localhost:1313/posts/test-widget/');
    });

    test('Widget container exists', async ({ page }) => {
        const container = await page.locator('.exchange-widget-container');
        await expect(container).toBeVisible();
    });

    test('Widget iframe exists and has correct dimensions', async ({ page }) => {
        const iframe = await page.locator('iframe[title="ChangeNOW Exchange Widget"]');
        await expect(iframe).toBeVisible();

        // Проверяем размеры контейнера
        const container = await page.locator('.exchange-widget-container');
        const containerBox = await container.boundingBox();
        expect(containerBox.width).toBeGreaterThan(0);
        expect(containerBox.height).toBeGreaterThan(0);

        // Проверяем размеры iframe
        const iframeBox = await iframe.boundingBox();
        expect(iframeBox.width).toBe(containerBox.width);
        expect(iframeBox.height).toBe(356);
    });

    test('Widget parameters are correct', async ({ page }) => {
        const iframe = await page.locator('iframe[title="ChangeNOW Exchange Widget"]');
        const src = await iframe.getAttribute('src');
        const urlParams = new URLSearchParams(src.split('?')[1]);

        // Проверяем обязательные параметры
        expect(urlParams.has('amount')).toBeTruthy();
        expect(urlParams.has('from')).toBeTruthy();
        expect(urlParams.has('to')).toBeTruthy();
        expect(urlParams.has('link_id')).toBeTruthy();

        // Проверяем значения по умолчанию
        expect(urlParams.get('from')).toBe('btc');
        expect(urlParams.get('to')).toBe('eth');
        expect(urlParams.get('amount')).toBe('0.5');
    });

    test('Widget is responsive', async ({ page }) => {
        const container = await page.locator('.exchange-widget-container');
        const iframe = await page.locator('iframe[title="ChangeNOW Exchange Widget"]');

        // Проверяем при разных размерах экрана
        const viewports = [
            { width: 320, height: 568 },  // Mobile
            { width: 768, height: 1024 }, // Tablet
            { width: 1366, height: 768 }, // Desktop
        ];

        for (const viewport of viewports) {
            await page.setViewportSize(viewport);
            
            const containerBox = await container.boundingBox();
            const iframeBox = await iframe.boundingBox();

            // Проверяем, что iframe заполняет контейнер
            expect(Math.abs(containerBox.width - iframeBox.width)).toBeLessThan(5);
            expect(iframeBox.height).toBe(356);
        }
    });

    test('Widget script is loaded', async ({ page }) => {
        const script = await page.locator('script[src*="stepper-connector.js"]');
        await expect(script).toHaveAttribute('src', 'https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js');
    });
}); 