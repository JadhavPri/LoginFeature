import {Locator, Page} from '@playwright/test'
import BasePage from './basePage';

export class SignInPage extends BasePage{
    
    // Variables initialized for 3 buttons
    readonly page:Page;
    private userName:Locator;
    private userPassword:Locator;
    private submitButton:Locator;
    readonly warningMessage: Locator;

    // To access 3 locators and methods we need constrcutor
    constructor(page:Page){
        super(page)
        // Email button locator
        this.userName = page.locator('/* Add your username locator here */');

        // Password button locator
        this.userPassword = page.locator('/* Add your password locator here */');

        // Sign in button locator
        this.submitButton = page.locator('/* Add your submit button locator here */');

        // Update with the actual selector
        this.warningMessage = page.locator('selector-for-warning-message'); 
    }   

    
    // Enter Email function with try-catch-finally
    async enterEmailId(emailId: string) {
        try {
            await this.fillFormField(this.userName, emailId);
        } catch (error) {
            console.error('Failed to enter the email ID:', error);
        } finally {
            console.log('Attempted to enter email ID.');
        }
    }

    // Enter Password function with try-catch-finally
    async enterPassword(password: string) {
        try {
            await this.fillFormField(this.userPassword, password);
        } catch (error) {
            console.error('Failed to enter the password:', error);
        } finally {
            console.log('Attempted to enter password.');
        }
    }

    // Sign in button click function with try-catch-finally
    async clickSubmitButton() {
        try {
            await this.clickElement(this.submitButton);
        } catch (error) {
            console.error('Failed to click the submit button:', error);
        } finally {
            console.log('Attempted to click the submit button.');
        }
    }

     

}