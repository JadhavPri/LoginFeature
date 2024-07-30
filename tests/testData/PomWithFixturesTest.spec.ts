
import { test, expect } from '../../fixtures/pomFixtures';


test('Login conduit using POM for all pages', async({page, homePage, signinPage }) => {

    // Go to url
    await page.goto('https://react-redux.realworld.io/#/?_k=wjvpna');


    // With home page object, click settings
    await homePage.clickSignInButton();

    
    // With Sign in page object, enter email
    await signinPage.enterEmailId('/* Add your email  here */');

    // With Sign in page object, enter password
   await signinPage.enterPassword('/* Add your invalid password here */');

    // With Sign in page object, click sign in
    await signinPage.clickSubmitButton();
    await expect(signinPage.warningMessage).toBeVisible();
    await expect(signinPage.warningMessage).toHaveText('Username and password do not match any user in this system');

   
    await page.close();

})


test('Login conduit using POM 2 for home page', async({page, homePage }) => {

    // Go to url
    await page.goto('/* Add your url here */');


    // With landing page object, click sign in button
    await homePage.clickSignInButton();
    
   // Close the page 
    await page.close();

})
