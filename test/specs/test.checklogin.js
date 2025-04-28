import LoginPage from '../pageobjects/checklogin.page.js';

describe('My Login application', () => {


    it('should login with valid credentials', async () => {

        await LoginPage.login("umart4767@gmail.com", "Myzesty123")
        

    })
})

