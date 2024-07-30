import {Locator, Page} from '@playwright/test'
import BasePage from './basePage';

export class HomePage extends BasePage{
    
    // Variables initialized
    readonly page:Page;
    private signInButton:Locator;
   

    // To access locators and methods we need constrcutor
    constructor(page:Page){
        super (page);
        // Sign in button locator
        this.signInButton = page.locator('/* Add your locator here */');
    }   

    // Sign in button click function
    async clickSignInButton(){
    
        try {
            await this.clickElement(this.signInButton);
        } catch (error) {
            console.error('Failed to click the sign in button:', error);
        } finally {
            // Any cleanup or final steps can be added here
            console.log('Attempted to click the sign in button.');
        }



    }

    

}