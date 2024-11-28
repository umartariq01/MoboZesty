// const { expect } = require('@wdio/globals')
// import { remote } from 'webdriverio';
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')
// const SignupPage = require('../pageobjects/signup.page')
// const ForgetPage = require('..forgetpassword.page')
// const ForgetPage = require('../pageobjects/forgetpassword.page')
import ForgetPage from '../pageobjects/forgetpassword.page.js';
// import createSession from '../pageobjects/createsession.js';

const forgetPage = new ForgetPage(); //Creating instance of the class

describe('My Login application', () => {
    new Promise(resolve => setTimeout(resolve, 20000));
    before(async () => {
        //Initilizing Session
        console.log("Creating Session...")
        await forgetPage.CreateSession();
    });

    after (async () => {
        //Deleting Session
        if  (forgetPage.client)
            {
                await forgetPage.client.deleteSession();
            } 
    });

    it('should login with valid credentials', async () => {
        // await ForgetPage.open()
        await forgetPage.Forget_Password('umart4767@gmail.com');
        const expectedText = "A password reset link has been sent to the email." ;
        await forgetPage.Assert_Success_message(expectedText);
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
            // expect.stringContaining('You logged into a secure area!'))
        // await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
});
