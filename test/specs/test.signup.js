const { expect } = require('@wdio/globals')
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')
// const SignupPage = require('../pageobjects/signup.page')
import SignupPage from '../pageobjects/signup.page.js' ;


describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await SignupPage.signup('Umar Tariq', 'umart4767@gmail.com', 'Myzesty123', 'Myzesty123');
        expected_text_1 = 'Sign up' ;
        expected_text_2 = 'Create your account' ;
        expected_policy_1 = 'By using our service, you agree to our ' ;
        expected_policy_2 = 'Terms of Service' ;
        expected_policy_3 = ' and ' ;
        expected_policy_4 = 'acknowledge receipt of our ' ;
        expected_policy_5 = 'Privacy Policy' ;
        expected_policy_6 = 'Already have an account?' ;
        expected_policy_7 = 'Login' ;



        await SignupPage.Assert_SignUp_Text(expected_text_1, expected_text_2, expected_policy_1, expected_policy_2, expected_policy_3, 
            expected_policy_4, expected_policy_5, expected_policy_6, expected_policy_7)
    })
})
