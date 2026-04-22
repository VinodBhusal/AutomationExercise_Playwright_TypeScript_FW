import { test as base } from '@playwright/test';
import { RegistrationPage } from '../pageObject/RegistrationPage';
import { HomePage } from '../pageObject/HomePage';
import { ProductPage } from '../pageObject/ProductPage';
import { CartPage } from '../pageObject/CartPage'
import { APIUtil } from '../utils/apiUtils';
import { LoginPage } from '../pageObject/LoginPage';


interface Fixtures {
    registrationPage: RegistrationPage;
    loginPage: LoginPage;
    homePage: HomePage;
    productPage: ProductPage;
    cartPage: CartPage;
    apiUtil: APIUtil

};

export const test = base.extend<Fixtures>({
    registrationPage: async ({ page }, use) => {
        const registrationPage = new RegistrationPage(page);
        await use(registrationPage);
    },
  loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
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

    apiUtil: async ({ request }, use) => {
        const apiUtil = new APIUtil(request);
        await use(apiUtil);
    }



});


