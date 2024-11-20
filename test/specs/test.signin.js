const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')
// const SignupPage = require('../pageobjects/signup.page')


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('umart4767@gmail.com', 'Myzesty123')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
            // expect.stringContaining('You logged into a secure area!'))
        // await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
})
