// const { $ } = require('@wdio/globals');
import { remote } from 'webdriverio';
// const Page = require('./page');
import locators from './locator.js';
import createSession from './createsession.js';
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
    // get ClosePremiumScreen()
    // {
        // return this.client.$(locators.Landing_Close_Button)
    // }

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
    get Forget_Password()
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

    async Forget_Password(username)
    {
        try 
        {
            // await this.ClosePremiumScreen.click();
            await this.Profile_Tab.click();
            await this.Login.click();
            await this.Forget_Password.click();
            await this.InputEmail.sendKeys(username);
            await this.Resetbutton.click();
        } 
        catch (error) 
        {
            console.error("Error occur in Function calling:", error)
            throw error;
        }
    }
    
}

export default ForgetPassword;