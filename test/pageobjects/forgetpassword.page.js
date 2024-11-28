// const { $ } = require('@wdio/globals');
import { remote } from 'webdriverio';
// const Page = require('./page');
import locators from './locator.js';
import createSession from './createsession.js';
import assert from 'assert';
// const locators = require('./locator');
// const createSession = require('./createsession');



class ForgetPassword{

    //Create Session
    async CreateSession()
    {
        try 
        {
            this.client = await createSession();
        } 
        catch (error) 
        {
            console.error("Error crating Session:",error);
            throw error;
        }
    }
    

    //Premium Screen Close Button
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

    //Forget Password
    get ForgetPassword()
    {
        return this.client.$(locators.ForgetPassword)
    }

    //Enter Reset Email
    get InputEmail()
    {
        return this.client.$(locators.ResetEmail)
    }

    //Reset Password Button
    get Resetbutton()
        {
            return this.client.$(locators.ResetButton)
        }

    //Verify Reset Success Message
    get Success_Alert()
    {
        return  this.client.$(locators.Success_text)
    }

    //Success Alert Ok Button
    get Close_Alert()
    {
        return this.client.$(locators.Success_alert_Ok_button)
    }

    async Forget_Password(username)
    {
        try 
        {
            await this.ClosePremiumScreen.click();
            await this.Profile_Tab.click();
            await this.Login.click();
            await this.ForgetPassword.click();
            await this.InputEmail.setValue(username);
            await this.Resetbutton.click();
            //  Wait untill the Success alert screen appears
            await this.Success_Alert.waitForDisplayed({timeout : 10000});
            // await this.Success_Alert.click();
        } 
        catch (error) 
        {
            console.error("Error occur in Function calling:", error)
            throw error;
        }
    }

    async Assert_Success_message(expectedText)
    {
        const actualText = await this.Success_Alert.getText();
        assert.strictEqual(actualText, expectedText, "Assertion not Passed!");
        console.log("Assertion passed successfully...") ;
        await this.Close_Alert.click();
    }
    
}

export default ForgetPassword;