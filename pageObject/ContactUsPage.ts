import { expect, Locator, type Page } from '@playwright/test';

export class ContactUsPage {
    readonly page: Page;
    readonly contactUsBtn: Locator
    readonly getIntouchHeading: Locator
    readonly contactName: Locator
    readonly contactEmail: Locator
    readonly subject: Locator
    readonly messageBox: Locator
    readonly chooseFile: Locator
    readonly sumitContactForm: Locator

    constructor(page: Page) {

        this.page = page;
        this.contactUsBtn = page.getByRole('link', { name: 'Contact us' });
        this.getIntouchHeading = page.getByRole('heading', { name: 'Get In Touch' });
        this.contactName = page.locator('[data-qa="name"]');
        this.contactEmail = page.locator('[data-qa="email"]');
        this.subject = page.locator('[data-qa="subject"]');
        this.messageBox = page.getByPlaceholder('Your Message Here');
        this.chooseFile = page.locator(`//input[@name='upload_file']`);
        this.sumitContactForm = page.locator(`//input[@name='submit']`);
    }

    async verifyContactUsForm(){
        await this.page.goto('https://automationexercise.com/')
        await this.contactUsBtn.click();
        await expect( this.getIntouchHeading).toBeVisible();
        await this.contactName.fill('');
        await this.contactEmail.fill('');
        await this.messageBox.fill('');
        await this.messageBox.fill('');
        await this.chooseFile.click();
        await this.sumitContactForm.click();
    }
}