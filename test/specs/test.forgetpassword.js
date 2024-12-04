// const { expect } = require('@wdio/globals')
// import { remote } from 'webdriverio';
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')
// const SignupPage = require('../pageobjects/signup.page')
// const ForgetPage = require('..forgetpassword.page')
// const ForgetPage = require('../pageobjects/forgetpassword.page')
import ForgetPage from '../pageobjects/forgetpassword.page.js';
// import createSession from '../pageobjects/createsession.js';

// const forgetPage = new ForgetPage(); //Creating instance of the class

describe('My Login application', () => {


    it('should login with valid credentials', async () => {

        const expected_error =  "Please enter a valid email address" ;
        const expected_text = "A password reset link has been sent to the email." ;
        await ForgetPage.Forget_Password('umart4767@gmail.com', expected_error, expected_text);
        
    })
});
