import { $ } from '@wdio/globals' ;
import { remote } from 'webdriverio';
import assert from 'assert';


class LoginPage {

    // Get Function calling to return element

    // Close Premium Screen
    get preiumCloseBtn () {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
    }

    get profiletab()
    {
        return $('//android.view.View[@content-desc="navi-profile-button"]');
    }

    get logintab()
    {
        return $('(//android.widget.TextView[@text="Login"])[2]');
    }

    get emailinput()
    {
        return $('//android.widget.EditText[@content-desc="email-input"]');
    }

    get passwordinput()
    {
        return  $('//android.widget.EditText[@content-desc="password-input"]');
    }

    get loginbtn()
    {
        return  $('//android.widget.Button[@content-desc="login-button"]');
    }

    get login_text_1()
    {
        return $('//android.widget.TextView[@content-desc="login-text"]');
    }

    get login_text_2()
    {
        return $('//android.widget.TextView[@content-desc="login-to-your-account"]');
    }

    get settiing()
    {
        return $('//android.widget.TextView[@text="Settings"]');
    }

    get logout()
    {
        return $('//android.widget.Button[@content-desc="settings-log-out-button"]');
    }

    get create_account()
    {
        return $('//android.widget.TextView[@text="Create an Account"]');
    }
    // Calling Function to perform actions
    async ClosePremiumScreen() 
    {
        await this.preiumCloseBtn.click();
    }

    async Profile_Tab()
    {
        await this.profiletab.click();
    }

    async Login_Tab()
    {
        await this.logintab.click();
    }

    async Enter_Email(username)
    {
        await this.emailinput.setValue(username);
    }

    async Enter_Password(password)
    {
        await  this.passwordinput.click();
        await this.passwordinput.addValue(password);

    }

    async Login_Button()
    {
        await this.loginbtn.click();
    }

    async Create_Account_Link()
    {
        await this.create_account.waitForExist({timeout:3000});
    }

    async getSignin_text_1(expected_text_1)
    {
        await this.login_text_1.waitForDisplayed({timeout:5000});
        const actual_text_1 = await this.login_text_1.getText();
        assert.strictEqual(actual_text_1, expected_text_1, "Assertion 1 not Passed!");
        console.log("Text 1 assertion passed successfully...");
        
    }

    async getSignin_text_2(expected_text_2)
    {
        await this.login_text_2.waitForDisplayed({timeout:5000});
        const actual_text_2 = await this.login_text_2.getText();
        assert.strictEqual(actual_text_2, expected_text_2, "Assertion 2 not Passed!" );
        console.log("Text 2 assertion passed successfully...");
    }

    async click_setting()
    {
        await this.settiing.click();
    }

    async click_logout()
    {
        await this.logout.click();
    }

    async Login_Myzesty(expected_text_1, expected_text_2, username, password)
    {
        await this.Login_Tab();
        await this.getSignin_text_1(expected_text_1);
        await this.getSignin_text_2(expected_text_2);
        await this.Enter_Email(username);
        await this.Enter_Password(password);
        await this.Login_Button();
    }

    async Logout_Myzesty(expected_text_1, expected_text_2, username, password)
    {
        await this.click_setting();
        await this.click_logout();
        await this.ClosePremiumScreen();
        await this.Profile_Tab();
        await this.Login_Tab();
        await this.getSignin_text_1(expected_text_1);
        await this.getSignin_text_2(expected_text_2);
        await this.Enter_Email(username);
        await this.Enter_Password(password);
        await this.Login_Button();
    }

    async loginToMyZesty(expected_text_1, expected_text_2, username, password) 
    {
        if(await this.create_account.isDisplayed())
        {
            await this.Login_Myzesty(expected_text_1, expected_text_2, username, password);
        }

        else if (await this.settiing.isDisplayed())
        {
            await this.Logout_Myzesty(expected_text_1, expected_text_2, username, password);
        }
    }
   

    async login (expected_text_1, expected_text_2, username, password ) 
    {
        await this.ClosePremiumScreen();
        await this.Profile_Tab();
        await this.loginToMyZesty(expected_text_1, expected_text_2, username, password);
        // await this.Login_Button();

       
    }

}

// module.exports = new LoginPage();
export default new LoginPage ();
