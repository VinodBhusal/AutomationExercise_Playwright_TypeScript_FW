import { test } from '../fixtures/baseTest';

import { getContactUsData } from '../test-data/contactUsFormData';

test.only('verifyConatctUsPage', async ({ contactUsPage}) => {
    const contactUSdata = getContactUsData();
  await contactUsPage.verifyContactUsForm(contactUSdata);
  await contactUsPage.verifyContactUsFormSubmition();

});