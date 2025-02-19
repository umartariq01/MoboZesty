 import SignupPage from '../pageobjects/signup.page.js' ;
 import { faker } from '@faker-js/faker';


describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        const name = faker.person.fullName() ;
        const email = faker.internet.email() ;
        const password = 'Myzesty123' ;
        const confirm_password = 'Myzesty123' ;
        const expected_text_1 = 'Sign up' ;
        const expected_text_2 = 'Create your account' ;
        const expected_policy_1 = 'By using our service, you agree to our ' ;
        const expected_policy_2 = 'Terms of Service' ;
        const expected_policy_3 = ' and ' ;
        const expected_policy_4 = 'acknowledge receipt of our ' ;
        const expected_policy_5 = 'Privacy Policy' ;
        const expected_policy_6 = 'Already have an account?' ;
        const expected_policy_7 = 'Login' ;
        const expected_error = 'Please enter a valid name' ;
        const expected_error_1 = 'Name must be between 5 and 80 characters' ;
        const invalid_username = 'Umer';
        const invalid_email = 'asad4767gmail.com' ;
        const expected_error_2 = 'Please enter a valid email address' ;
        await SignupPage.signup(
            name, email, password, confirm_password, expected_text_1,
            expected_text_2, expected_policy_1, expected_policy_2,
            expected_policy_3, expected_policy_4, expected_policy_5,
            expected_policy_6, expected_policy_7, expected_error,
            expected_error_1, invalid_username, invalid_email, expected_error_2
        )
    })
})

