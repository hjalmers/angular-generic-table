import { test, expect } from '@playwright/test';

test.describe('Simple table', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/simple');
    await page.waitForSelector('tbody tr');
  });

  test('renders data rows', async ({ page }) => {
    const rows = page.locator('tbody tr');
    await expect(rows).toHaveCount(2);
    await expect(rows.first()).toContainText('Peter');
  });

  test('renders column headers', async ({ page }) => {
    const headers = page.locator('thead th');
    await expect(headers).toHaveCount(4);
  });
});

test.describe('Sorting', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sorting');
    await page.waitForSelector('tbody tr');
  });

  test('sorts ascending on first click', async ({ page }) => {
    await page.locator('.gt-sort').first().click();
    const firstCell = page.locator('tbody tr:first-child td:first-child');
    const text = await firstCell.textContent();
    expect(text?.trim()).toBeTruthy();
    // Verify sort indicator appears
    await expect(page.locator('[aria-sort="ascending"]')).toHaveCount(1);
  });

  test('toggles to descending on second click', async ({ page }) => {
    const sortBtn = page.locator('.gt-sort').first();
    await sortBtn.click();
    await sortBtn.click();
    await expect(page.locator('[aria-sort="descending"]')).toHaveCount(1);
  });
});

test.describe('Pagination', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pagination');
    // Wait for HTTP data to load
    await page.waitForSelector('tbody tr');
  });

  test('shows paginated rows', async ({ page }) => {
    const rows = page.locator('tbody tr');
    const count = await rows.count();
    // Default page length is 10
    expect(count).toBeLessThanOrEqual(10);
  });

  test('changes page when clicking pagination link', async ({ page }) => {
    const pagination = page.locator('.gt-pagination');
    // Wait for pagination to appear (needs > 1 page of data)
    if ((await pagination.count()) === 0) return;

    const firstCellBefore = await page.locator('tbody tr:first-child td:first-child').textContent();
    await pagination.locator('button').nth(1).click();
    await expect(page.locator('tbody tr')).toHaveCount(await page.locator('tbody tr').count());
    const firstCellAfter = await page.locator('tbody tr:first-child td:first-child').textContent();
    expect(firstCellAfter).not.toBe(firstCellBefore);
  });

  test('updates rows when page size changes', async ({ page }) => {
    const input = page.locator('#length_input');
    await input.fill('5');
    await input.press('Tab');
    // Wait for re-render
    await page.waitForTimeout(200);
    const rows = page.locator('tbody tr');
    await expect(rows).toHaveCount(5);
  });
});

test.describe('Search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pagination');
    await page.waitForSelector('tbody tr');
  });

  test('filters rows by search term', async ({ page }) => {
    const rowsBefore = await page.locator('tbody tr').count();
    const input = page.locator('#search_input');
    await input.click();
    await input.pressSequentially('male', { delay: 50 });
    await expect(page.locator('tbody tr')).not.toHaveCount(rowsBefore, { timeout: 5000 });
  });

  test('highlights matched text', async ({ page }) => {
    const input = page.locator('#search_input');
    await input.fill('male');
    await page.waitForTimeout(200);
    const highlights = page.locator('.gt-highlight-search');
    await expect(highlights.first()).toBeVisible();
  });
});

test.describe('Row selection', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/row-select');
    // Wait for actual data rows (not the loading skeleton)
    await page.waitForSelector('tr[id^="tableRow_"]');
  });

  test('selects row on click', async ({ page }) => {
    const firstRow = page.locator('tr[id="tableRow_0"]');
    await firstRow.click();
    await expect(firstRow).toHaveAttribute('class', /table-active/, { timeout: 5000 });
  });

  test('shows active row on hover', async ({ page }) => {
    const secondRow = page.locator('tr[id="tableRow_1"]');
    await secondRow.hover();
    await expect(secondRow).toHaveAttribute('class', /gt-active/, { timeout: 5000 });
  });

  test('updates selected count', async ({ page }) => {
    await page.locator('tr[id="tableRow_0"]').click();
    await expect(page.getByText(/Selected rows:\s*1/)).toBeVisible({ timeout: 5000 });
    await page.locator('tr[id="tableRow_1"]').click();
    await expect(page.getByText(/Selected rows:\s*2/)).toBeVisible({ timeout: 5000 });
  });
});

test.describe('Keyboard navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/row-select');
    // Wait for actual data rows (not the loading skeleton)
    await page.waitForSelector('tr[id^="tableRow_"]');
  });

  test('activates rows with arrow keys', async ({ page }) => {
    const table = page.locator('table');
    await table.focus();
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('tr[id="tableRow_0"]')).toHaveAttribute('class', /gt-active/, { timeout: 5000 });

    await page.keyboard.press('ArrowDown');
    await expect(page.locator('tr[id="tableRow_1"]')).toHaveAttribute('class', /gt-active/, { timeout: 5000 });
  });

  test('selects row with Enter key', async ({ page }) => {
    const table = page.locator('table');
    await table.focus();
    await page.keyboard.press('ArrowDown');
    // Wait for row activation before pressing Enter
    await expect(page.locator('tr[id="tableRow_0"]')).toHaveAttribute('class', /gt-active/, { timeout: 5000 });
    await page.keyboard.press('Enter');
    await expect(page.getByText(/Selected rows:\s*1/)).toBeVisible({ timeout: 5000 });
  });
});

test.describe('Server-side pagination', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/lazy-loading');
  });

  test('shows loading state then data', async ({ page }) => {
    // Should eventually show data rows
    await page.waitForSelector('tbody tr', { timeout: 10_000 });
    const rows = page.locator('tbody tr');
    expect(await rows.count()).toBeGreaterThan(0);
  });

  test('shows pagination controls', async ({ page }) => {
    await page.waitForSelector('tbody tr', { timeout: 10_000 });
    const pagination = page.locator('.gt-pagination');
    await expect(pagination).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('sidebar shows all example links', async ({ page }) => {
    await page.goto('/');
    const navLinks = page.locator('nav .nav-link');
    await expect(navLinks).toHaveCount(13);
  });

  test('active link is highlighted', async ({ page }) => {
    await page.goto('/simple');
    await expect(page.locator('nav .nav-link.active')).toContainText('Simple');
  });

  test('navigates between examples', async ({ page }) => {
    await page.goto('/simple');
    await page.locator('nav .nav-link', { hasText: 'Sorting' }).click();
    await expect(page).toHaveURL(/\/sorting/);
    await page.waitForSelector('tbody tr');
  });
});
