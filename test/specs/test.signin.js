import LoginPage from '../pageobjects/login.page.js';

describe('My Login application', () => {


    it('should login with valid credentials', async () => {


        const expected_text_1 = 'Login' ;
        const expected_text_2 = 'Log in to your account' ;
        await LoginPage.login(expected_text_1, expected_text_2, "umart4767@gmail.com", "Myzesty123")
        

    })
})

