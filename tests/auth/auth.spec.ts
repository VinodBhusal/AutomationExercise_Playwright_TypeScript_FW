import { test } from '../../fixtures/baseTest';
import { getNewUSerData } from '../../test-data/userData';
import { expect } from '@playwright/test';
test.describe('Auth Tests', () => {

    test.only('Register User', async ({ registrationPage, page }) => {
        const user = getNewUSerData();
        await registrationPage.goto()
        await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
        await expect(registrationPage.newUserSignUpHeading).toBeVisible();
        await registrationPage.SignUpUser(user.userName, user.newUserEmailInputBox);
        await expect(registrationPage.enterAccountInfoText).toHaveText('Enter Account Information');
        await registrationPage.UserDetails(user);
        await expect(registrationPage.accountCreated).toHaveText('Account Created!')
    });

    test('Login with valid credentials', async ({ loginPage }) => {
        // valid login
    });

    test('Login with invalid credentials', async ({ loginPage }) => {
        // negative case
    });

    test('Logout User', async ({ homePage }) => {
        // logout
    });

    test('Register with existing email', async ({ registrationPage }) => {
        // negative register
    });

});