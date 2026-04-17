import { test as base, request } from '@playwright/test';

import{  RegistrationPage } from '../pageObject/RegistrationPage';
import { HomePage } from '../pageObject/HomePage';
import { ProductPage } from '../pageObject/ProductPage';
import{CartPage} from '../pageObject/CartPage'

    interface Fixtures{
        registrationPage: RegistrationPage;
        homePage: HomePage;
        productPage:ProductPage;
        cartPage:CartPage;
        
    };

export const test = base.extend<Fixtures>({
    registrationPage: async ({ page }, use) => {
        const registrationPage = new RegistrationPage(page);
        await use(registrationPage);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
 productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },

     cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },


    


});


