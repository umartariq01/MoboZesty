const { expect } = require('@wdio/globals')
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')
const SignupPage = require('../pageobjects/signup.page')


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await SignupPage.open()

        await SignupPage.signup('Umar Tariq', 'umart4767@gmail.com', 'Myzesty123', 'Myzesty123')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
            // expect.stringContaining('You logged into a secure area!'))
        // await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
})
