import { test, expect } from '@playwright/test';

test.describe('Portfolio - Page basics', () => {
  test('has correct page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Subhajit Mahata/);
  });

  test('meta description mentions Infosys', async ({ page }) => {
    await page.goto('/');
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute('content', /Infosys/);
  });
});

test.describe('Portfolio - Navbar', () => {
  test('shows nav links', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation').first();
    await expect(nav.getByRole('link', { name: /About/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /Experience/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /Skills/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /Projects/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /Contact/i })).toBeVisible();
  });

  test('does not show Hire Me button', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a.nav-cta')).toHaveCount(0);
  });
});

test.describe('Portfolio - Hero section', () => {
  test('shows name Subhajit', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.highlight').filter({ hasText: 'Subhajit' })).toBeVisible();
  });

  test('shows Specialist Programmer at Infosys role', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.hero-role')).toContainText('Specialist Programmer at Infosys');
  });

  test('does not show Available for work badge', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.hero-badge')).not.toBeAttached();
  });

  test('shows LinkedIn and GitHub social links', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('#home, .hero-section, section').first();
    const linkedin = page.locator('a[href*="linkedin.com/in/subhajitmahata"]').first();
    const github = page.locator('a[href*="github.com/subhajitkp007"]').first();
    await expect(linkedin).toBeVisible();
    await expect(github).toBeVisible();
  });
});

test.describe('Portfolio - About section', () => {
  test('about section is visible', async ({ page }) => {
    await page.goto('/');
    await page.locator('#about').scrollIntoViewIfNeeded();
    await expect(page.locator('#about')).toBeVisible();
  });

  test('shows correct domain highlights', async ({ page }) => {
    await page.goto('/');
    await page.locator('#about').scrollIntoViewIfNeeded();
    const section = page.locator('#about');
    await expect(section).toContainText('AI & GenAI');
    await expect(section).toContainText('Cloud (GCP)');
    await expect(section).toContainText('Big Data');
    await expect(section).toContainText('Architecture');
  });

  test('mentions Infosys as India-based company', async ({ page }) => {
    await page.goto('/');
    await page.locator('#about').scrollIntoViewIfNeeded();
    await expect(page.locator('#about')).toContainText('Infosys');
  });
});

test.describe('Portfolio - Experience section', () => {
  test('experience section is visible', async ({ page }) => {
    await page.goto('/');
    await page.locator('#experience').scrollIntoViewIfNeeded();
    await expect(page.locator('#experience')).toBeVisible();
  });

  test('shows London UK role', async ({ page }) => {
    await page.goto('/');
    await page.locator('#experience').scrollIntoViewIfNeeded();
    await expect(page.locator('#experience')).toContainText('London');
  });

  test('shows Berlin Germany role', async ({ page }) => {
    await page.goto('/');
    await page.locator('#experience').scrollIntoViewIfNeeded();
    await expect(page.locator('#experience')).toContainText('Berlin');
  });

  test('shows Hyderabad India role', async ({ page }) => {
    await page.goto('/');
    await page.locator('#experience').scrollIntoViewIfNeeded();
    await expect(page.locator('#experience')).toContainText('Hyderabad');
  });

  test('shows RKMGEC education', async ({ page }) => {
    await page.goto('/');
    await page.locator('#experience').scrollIntoViewIfNeeded();
    await expect(page.locator('#experience')).toContainText('Ramkrishna Mahato Government Engineering College');
  });
});

test.describe('Portfolio - Skills section', () => {
  test('skills section is visible', async ({ page }) => {
    await page.goto('/');
    await page.locator('#skills').scrollIntoViewIfNeeded();
    await expect(page.locator('#skills')).toBeVisible();
  });

  test('shows AI & GenAI category', async ({ page }) => {
    await page.goto('/');
    await page.locator('#skills').scrollIntoViewIfNeeded();
    await expect(page.locator('#skills')).toContainText('AI & GenAI');
  });

  test('shows Data & Cloud category', async ({ page }) => {
    await page.goto('/');
    await page.locator('#skills').scrollIntoViewIfNeeded();
    await expect(page.locator('#skills')).toContainText('Data & Cloud');
  });

  test('shows Google BigQuery skill', async ({ page }) => {
    await page.goto('/');
    await page.locator('#skills').scrollIntoViewIfNeeded();
    await expect(page.locator('#skills')).toContainText('Google BigQuery');
  });

  test('shows Apache Spark skill', async ({ page }) => {
    await page.goto('/');
    await page.locator('#skills').scrollIntoViewIfNeeded();
    await expect(page.locator('#skills')).toContainText('Apache Spark');
  });
});

test.describe('Portfolio - Contact section', () => {
  test('contact section is visible', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('shows contact heading', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await expect(page.locator('#contact')).toContainText('Get In Touch');
  });
});
