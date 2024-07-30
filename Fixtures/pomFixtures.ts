import {test as baseTest} from '@playwright/test'

import { SignInPage } from '../tests/pages/signInPage'  
import { HomePage } from '../tests/pages/homePage' 


type pages = {

    homePage : HomePage,
    signinPage : SignInPage
}

const testPages = baseTest.extend<pages>({


    homePage: async({page}, use)=>{
        await use(new HomePage(page));
    },

    signinPage: async({page}, use)=>{
        await use(new SignInPage(page));
    }


})

export const test = testPages;
export const expect = testPages.expect;
