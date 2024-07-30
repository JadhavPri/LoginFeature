import { test, expect, Page, Locator } from '@playwright/test';
import * as loginData from'./loginCredentials.json'
import { SignInPage } from '../pages/signInPage';
import { HomePage } from '../pages/homePage'; 
import { describe } from 'node:test';

describe('Smoke Test Suite', () => {
    let homePage: HomePage;
    let signInPage: SignInPage;
    let warningMessage: Locator;
    let browserName: string;
    let tracePath: string;

    // Runs once before all tests in this suite
    test.beforeAll(async ({ browser }) => {
        browserName = process.env.BROWSER || 'default';
        console.log(`Running smoke tests with browser: ${browserName}`);
        tracePath = `./traces/trace-${Date.now()}.zip`; // Define the path for the trace files
    });

    // Runs before each test in this suite
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signInPage = new SignInPage(page);
        warningMessage = page.locator('/* Add your warnig message locator here */');
        await signInPage.navigateTo('/* Add your url here */');
        await page.context().tracing.start({ screenshots: true, snapshots: true });
    });

    // Test case with conditional skipping based on browser
    test('Login conduit using POM', async ({ page }) => {
        // Conditionally skip the test if the browser is WebKit
        if (browserName === 'webkit') {
            test.skip(true, 'This feature is not implemented for WebKit');
            return;
        }

        // Perform sign-in actions
        await signInPage.enterEmailId(loginData.validUsername); 
        await signInPage.enterPassword(loginData.invalidPassword); 
        await signInPage.clickSubmitButton();

        // Check for warning message
        await expect(warningMessage).toBeVisible();
        await expect(warningMessage).toHaveText('Username and password do not match any user in this system');
    });

    // Runs after each test in this suite
    test.afterEach(async ({ page }) => {
        await page.screenshot({ path: `screenshot-${Date.now()}.png` }); // Optional: Take a screenshot after each test
    });

    // Runs once after all tests in this suite
    test.afterAll(async () => {
        console.log('All smoke tests completed.');
    });
});
