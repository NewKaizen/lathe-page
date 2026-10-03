import { test, expect } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

for (const width of [1440, 768, 375]) {
  test(`layout, assets e âncoras em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    const externalRequests: string[] = [];
    page.on('request', request => { if (!request.url().startsWith('http://127.0.0.1:4300')) externalRequests.push(request.url()); });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('O mundo físico.Uma nova leitura.');
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty('complete', true);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await expect(page.getByText('Valores sintéticos para apresentação.', { exact: false })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const assets = await page.locator('img').evaluateAll(images => images.map(image => ({ src: image.getAttribute('src'), valid: image.complete && image.naturalWidth > 0 })));
    expect(assets.every(asset => asset.valid)).toBe(true);
    expect(await page.evaluate(() => document.fonts.check('400 16px "IBM Plex Sans"'))).toBe(true);
    for (const anchor of await page.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute('href')!.slice(1)))) {
      expect(await page.locator(`[id="${anchor}"]`).count()).toBe(1);
    }
    await mkdir('docs/screenshots', { recursive: true });
    await page.screenshot({ path: `docs/screenshots/landing-${width}.png`, fullPage: true });
    await page.screenshot({ path: `docs/screenshots/hero-${width}.png` });
    if (width < 901) {
      const menu = page.locator('button[aria-controls="nav-principal"]');
      await menu.click();
      await expect(menu).toHaveAttribute('aria-expanded', 'true');
      await page.keyboard.press('Escape');
      await expect(menu).toHaveAttribute('aria-expanded', 'false');
      await expect(menu).toBeFocused();
      await menu.click();
      await page.getByRole('navigation', { name: 'Navegação principal', exact: true }).getByRole('link', { name: 'Recursos', exact: true }).click();
      await expect(menu).toHaveAttribute('aria-expanded', 'false');
      await expect(page).toHaveURL(/#recursos$/);
    }
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.getByRole('link', { name: 'Explore o gêmeo digital' }).click();
    await expect(page).toHaveURL(/#preview$/);
    const targetY = await page.locator('#preview').evaluate(element => element.getBoundingClientRect().top);
    expect(targetY).toBeGreaterThanOrEqual(width < 601 ? 64 : width < 901 ? 72 : 80);
    expect(targetY).toBeLessThan(150);
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
    expect(errors).toEqual([]);
    expect(externalRequests).toEqual([]);
  });
}

test('teclado, idioma e rótulos de demonstração', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Ir para o conteúdo' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#conteudo$/);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.getByText('Demonstração visual', { exact: true })).toBeVisible();
  await expect(page.getByText('Integração em desenvolvimento', { exact: true })).toBeVisible();
  await expect(page.getByText('Espaço reservado', { exact: true })).toBeVisible();
  await expect(page.locator('app-skeleton [aria-hidden="true"]')).toHaveCount(1);
});
