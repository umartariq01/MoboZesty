import ForgetPage from '../pageobjects/forgetpassword.page.js';

describe('My Login application', () => {


    it('should login with valid credentials', async () => {

        const expected_error =  "Please enter a valid email address" ;
        const expected_text = "Success" ;
        await ForgetPage.Forget_Password('umart4767@gmail.com', expected_error, expected_text);
        
    })
});
