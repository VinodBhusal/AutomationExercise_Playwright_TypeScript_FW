import { Locator, type Page } from '@playwright/test';
import { UniqueGenerator } from '../utils/UniqueGenerator';
import { UserData } from '../test-data/userData';


export class RegistrationPage {
  readonly page: Page;
  readonly signUpLoginBtn: Locator;
  newUserSignUpHeading: Locator;
  readonly userName: Locator;
  readonly newUserEmailInputBox: Locator;
  readonly signupSubmitBtn: Locator;
  readonly enterAccountInfoText: Locator;
  readonly genderRadioBtn: Locator;
  readonly password: Locator;
  readonly birthDay: Locator;
  readonly birthMonth: Locator;
  readonly birthYear: Locator;
  readonly newsLetterBox: Locator;
  readonly optinBox: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly comapanyName: Locator;
  readonly addressOne: Locator;
  readonly addressTwo: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipcode: Locator;
  readonly mobileNumber: Locator;
  readonly createAccountBtn: Locator;
  accountCreated:Locator;
  constructor(page: Page) {

    this.page = page;

    this.signUpLoginBtn = this.page.getByRole('link', { name: /Signup \/ Login/i });
    this.userName = this.page.getByPlaceholder('Name')
    this.newUserEmailInputBox = this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
    this.signupSubmitBtn = this.page.getByRole('button', { name: 'Signup' });
    this.newUserSignUpHeading = this.page.getByRole('heading', { name: 'New User Signup!' });
    this.enterAccountInfoText = this.page.getByText('Enter Account Information', { exact: true });
    this.genderRadioBtn = this.page.getByLabel('Mr.');;
    this.password = this.page.getByRole('textbox', { name: 'Password *' });
    this.birthDay = this.page.locator('#days');
    this.birthMonth = this.page.locator('#months');
    this.birthYear = this.page.locator('[name="years"]');
    this.newsLetterBox = this.page.locator('#newsletter');
    this.optinBox = this.page.locator('#optin');
    this.firstName = this.page.getByRole('textbox', { name: 'First name *' });
    this.lastName = this.page.getByRole('textbox', { name: 'Last name *' });
    this.comapanyName = this.page.locator('#company');
    this.addressOne = this.page.getByRole('textbox', { name: 'Address * (Street address, P.O. Box, Company name, etc.)' });
    this.addressTwo = this.page.getByLabel('Address 2');
    this.country = this.page.getByLabel('Country *');
    this.state = this.page.locator('#state');
    this.city = this.page.locator('#city');
    this.zipcode = this.page.locator('[name="zipcode"]');
    this.mobileNumber = this.page.getByRole('textbox', { name: 'Mobile Number *' });
    this.createAccountBtn = this.page.getByText('Create Account', { exact: true });
    this.accountCreated= this.page.getByText('Account Created!', { exact: true });

  }
async goto(){
  this.page.goto('/login');
}
  async SignUpUser(name: string, email: string): Promise<void> {
    await this.userName.fill(name);
    await this.newUserEmailInputBox.fill(email);
    await this.signupSubmitBtn.click();
  }

  async UserDetails(user: UserData) {

    await this.genderRadioBtn.click();
    await this.password.fill(user.password)
    await this.birthDay.selectOption({value:'4'})
    await this.birthMonth.selectOption({label:'February'})
    await this.birthYear.selectOption({value:'1996'})
    await this.newsLetterBox.click();
    await this.optinBox.click();
    await this.firstName.fill(user.fisrtName);
    await this.lastName.fill(user.lastName)
    await this.comapanyName.fill(user.comapanyName)
    await this.addressOne.fill(user.addressOne);
    await this.addressTwo.fill(user.addressTwo);
    await this.country.selectOption({label:'Australia'})
    await this.state.fill(user.state)
    await this.city.fill(user.city)
    await this.zipcode.fill(user.zipcode)
    await this.mobileNumber.fill(user.mobileNumber);
    await this.createAccountBtn.click();



  }


}