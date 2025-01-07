import { remote } from 'webdriverio';
import assert from 'assert';
import { $ } from '@wdio/globals' ;

class ForgetPassword{

    // Close Premium Screen
    get preiumCloseBtn () 
    {
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

    get forgetpassword()
    {
        return $('//android.widget.TextView[@text="Forgot Password?"]');
    }

    get resetemail()
    {
        return $('//android.widget.EditText[@content-desc="reset-email-input"]');
    }

    get resetpassword()
    {
        return $('//android.widget.Button[@content-desc="reset-button"]');
    }

    get invalid_email() // Please enter a valid email address
    {
        return $('//android.widget.TextView[@content-desc="error-message"]') ;
    }

    get error_alert_ok_btn()
    {
        return $('//android.widget.TextView[@text="Ok"]');
    }

    get success_alert() // A password reset link has been sent to the email.
    {
        return $('//android.widget.TextView[@content-desc="error-title"]');
    } ////*[@text='A password reset link has been sent to the email.']

    get success_alert_ok_btn()
    {
        return $('//android.widget.TextView[@text="Ok"]')
    }

    //================= Function call to oerfoorm Action ================

    async Close_Premium()
    {
        const isDisplayed = await this.preiumCloseBtn.isDisplayed();
        if (isDisplayed)
        {
            await this.preiumCloseBtn.click();
        }
        else
        {
            console.log("Premium Screen not Displayed!")
        }
    }
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

    async Forget_Password_btn()
    {
        await this.forgetpassword.click();
    }

    async Enter_valid_Email(username)
    {
        await this.resetemail.setValue(username);
    }

    async Reset_Button()
    {
        await this.resetpassword.click();
    }

    async Check_Invalid_Email(expected_error) // Need to assert text
    {
        await this.invalid_email.waitForDisplayed({timeout:2000});
        const Error_alert = await this.invalid_email.getText();
        assert.strictEqual(Error_alert, expected_error, "Invalid email alert not asserted!");
        console.log("Invalid Email alert asserted successfully...")

    }

    async Error_alert_Ok_btn()
    {
        await this.error_alert_ok_btn.click();
    }

    async Success_Alert(expected_text) //  Need to assert text
    {
        await this.success_alert.waitForDisplayed({timeout:5000});
        const Success_alert = await this.success_alert.getText();
        assert.strictEqual(Success_alert, expected_text, "Success Alert not asserted!");
        console.log("Success alert asserted successfully...")
    }

    async Success_Alert_ok_btn()
    {
        await this.success_alert_ok_btn.click();
    }

    
   

    async Forget_Password(username, expected_error, expected_text)
    {
        try 
        {
            await this.Close_Premium();
            await this.Profile_Tab();
            await this.Login_Tab();
            await this.Forget_Password_btn();
            // Click on Reset button to Check Validation
            await this.Reset_Button();
            await this.Check_Invalid_Email(expected_error);
            await this.Error_alert_Ok_btn();
            // Enter email to check success Alert
            await this.Enter_valid_Email(username);
            await this.Reset_Button();
            await this.Success_Alert(expected_text);
            await this.Success_Alert_ok_btn();
        } 
        catch (error) 
        {
            console.error("Error occur in Function calling:", error)
            throw error;
        }
    }
    
}

export default  new ForgetPassword();