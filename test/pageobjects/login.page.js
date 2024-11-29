// const { $ } = require('@wdio/globals')
import { remote } from 'webdriverio';
import locators from './locator.js';
import createSession from './createsession.js';
import assert from 'assert';

class LoginPage {

    // Create Session
    async CreateSession()
    {
        try 
        {
            this.client = await createSession();
            console.log("Session created Successfully...")
            new Promise(resolve => setTimeout(resolve, 10000));
        } 
        catch (error) 
        {
            console.error("Error crating Session:",error);
            throw error;
        }
    }
    
    // Getting the value using xpaths/accessibility ID
    get ClosePremiumScreen()
    {
        return this.client.$(locators.Landing_Close_Button)
    }

    //Navigation Account Tab
    get Profile_Tab()
    {
        return this.client.$(locators.Profile_Button)
    }

    //Login Button
    get Login()
    {
        return this.client.$(locators.Login_Account)
    }

    //Assert Login Page Text 1
    get Login_Text_1()
    {
        return this.client.$(locators.Login_text_1)
    }

    //Assert Login Page Text 1
    get Login_Text_2()
    {
        return this.client.$(locators.Login_text_2)
    }

    //Enter Email
    get inputEmail () 
    {
        return this.client.$(locators.UserEmail)
    }

    //Enter Password
    get inputPassword () 
    {
        return this.client.$(locators.UserPassword)
    }

    //Login Button
    get btnLogin () 
    {
        return this.client.$(locators.LoginButton)
    }

    //Notification Tab
    get Notification_Tab()
    {
        return this.client.$(locators.Notification)
    }

    async login () 
    {
        try
        {
            await this.ClosePremiumScreen.click();
            await this.Profile_Tab.click();
            await this.Login.click();
            await this.Login_Text_1.waitForDisplayed({timeout : 10000});
            await this.Login_Text_2.waitForDisplayed({timeout : 10000});
        //     await this.inputEmail.setValue(username);
        //     await this.inputPassword.setValue(password);
        //     await this.btnLogin.click();
        }
        catch(error)
        {
            console.error("Error occur in Function calling:", error)
            throw error;
        }
    }

    //Function for Assertiion

    async Assert_Login_Text(expected_text_1, expected_text_2, username, password)
    {
        const actual_text_1 = await this.Login_Text_1.getText();
        assert.strictEqual(actual_text_1, expected_text_1, "Assertion 1 not Passed!");
        console.log("Text 1 assertion passed successfully...");

        const actual_text_2 = await this.Login_Text_2.getText();
        assert.strictEqual(actual_text_2, expected_text_2, "Assertion 2 not Passed!" );
        console.log("Text 2 assertion passed successfully...");

        //Call function that need to be executed after assertion
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await this.Notification_Tab.waitForDisplayed({timeout:5000});
    }

}

// module.exports = new LoginPage();
export default LoginPage;
