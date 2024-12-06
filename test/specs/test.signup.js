 import SignupPage from '../pageobjects/signup.page.js' ;


describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        const expected_text_1 = 'Sign up' ;
        const expected_text_2 = 'Create your account' ;
        const expected_policy_1 = 'By using our service, you agree to our ' ;
        const expected_policy_2 = 'Terms of Service' ;
        const expected_policy_3 = ' and ' ;
        const expected_policy_4 = 'acknowledge receipt of our ' ;
        const expected_policy_5 = 'Privacy Policy' ;
        const expected_policy_6 = 'Already have an account?' ;
        const expected_policy_7 = 'Login' ;
        await SignupPage.signup('Umar Tariq', 'umart4767@gmail.com', 'Myzesty123', 'Myzesty123', expected_text_1, expected_text_2, expected_policy_1, expected_policy_2,
                expected_policy_3, expected_policy_4, expected_policy_5, expected_policy_6, expected_policy_7);



        // await SignupPage.AssertSignUpText(expected_text_1, expected_text_2, expected_policy_1, expected_policy_2,
        //     expected_policy_3, expected_policy_4, expected_policy_5, expected_policy_6, expected_policy_7)
    })
})
