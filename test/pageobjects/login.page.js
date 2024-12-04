import { $ } from '@wdio/globals' ;
import { remote } from 'webdriverio';
// import locators from './locator.js';
// import createSession from './createsession.js';
import assert from 'assert';

//Locators

// let Login_text = 'login-to-your-account' ; // Need to verify text
// let UserEmail = '//android.widget.EditText[@content-desc="email-input"]' ;
// UserPassword = '//android.widget.EditText[@content-desc="password-input"]' ;
// LoginButton = '//android.widget.Button[@content-desc="login-button"]' ;
// Create_an_Account = '//android.widget.TextView[@text="Create an Account"]' ;
// // Wrong Login Cridentials Error Alert
// Login_Failed = 'error-message' ; // The email or password you entered is incorrect. Please try again.
// Xpath
// ForgetPassword = '//android.widget.TextView[@text="Forgot Password?"]' ;
// // Forget Password Screen(accessibility ID)
// ResetEmail = '//android.widget.EditText[@content-desc="reset-email-input"]' ;
// ResetButton = '//android.widget.Button[@content-desc="reset-button"]' ;
// // Error Alert (Accessibility ID)
// Error_text = 'error-message' ; // Email not found
// Success_text = '//android.widget.TextView[@content-desc="error-message"]' ; //A password reset link has been sent to the email.
// Success_alert_Ok_button = '//android.widget.TextView[@text="Ok"]' ; // On Reset password screen
// Ok_Button = '//android.widget.TextView[@text="Ok"]' ; //xpath
// Go_Back_Arrow = '//android.widget.TextView[@text=""]' ;
// // Premium Screen
// Landing_Close_Button = '//android.widget.ImageButton[@content-desc="Close"]' ;
// //Landing Screen
// Profile_Button = '//android.view.View[@content-desc="navi-profile-button"]' ;
// Login_Account = '(//android.widget.TextView[@text="Login"])[2]' ;
// Login_text_1 = '//android.widget.TextView[@content-desc="login-text"]' ;
// Login_text_2 = '//android.widget.TextView[@content-desc="login-to-your-account"]' ;



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
        await this.passwordinput.setValue(password);
    }

    async Login_Button()
    {
        await this.loginbtn.click();
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





    // //To check if the Login 
    // async Check_LoggedIn()
    // {
    //     try
    //     {
    //         await this.Profile_Account.waitForDisplayed({timeout : 5000});
    //         return true;
    //     }
    //     catch(error)
    //     {
    //         return false;
    //     }
    // }

    // //Check if Not SignedIn
    // async Not_SignedIn()
    // {
    //     try
    //     {
    //         await this.Login.waitForDisplayed({timeout:5000});
    //         return true;
    //     }
    //     catch(error)
    //     {
    //         return false;
    //     }
    // }

    async login (expected_text_1, expected_text_2, username, password ) 
    {
        try
        {
            await this.ClosePremiumScreen();
            await this.Profile_Tab();
            await this.Login_Tab();
            await this.getSignin_text_1(expected_text_1);
            await this.getSignin_text_2(expected_text_2);
            await this.Enter_Email(username);
            await this.Enter_Password(password);
            await this.Login_Button();
        }
            

    //         if(this.Check_LoggedIn())
    //         {
    //             // await this.ClosePremiumScreen.click();
    //             // await this.Profile_Tab.click();
    //             await this.Setting_Tab.click();
    //             await this.LogOut.click();
    //             await this.ClosePremiumScreen.waitForDisplayed({setTimeout : 50000}).click();
    //             await this.Profile_Tab.click();
    //             await this.Login.click();
    //             await this.Login_Text_1.waitForDisplayed({timeout : 10000});
    //             await this.Login_Text_2.waitForDisplayed({timeout : 10000});

    //         }
    //         else if (this.Not_SignedIn())
    //         {
    //             // await this.Profile_Tab.click();
    //             await this.Login.click();
    //             await this.Login_Text_1.waitForDisplayed({timeout : 10000});
    //             await this.Login_Text_2.waitForDisplayed({timeout : 10000});
    //         }
    //         else
    //         {
    //             console.log("Error Check Login/Logout...")
    //         }
            
    //     }
        catch(error)
        {
            console.error("Error occur in Function calling:", error)
            throw error;
        }
    }

    // //Function for Assertiion

    async Assert_Login_Text(expected_text_1, expected_text_2, username, password)
    {
        // const actual_text_1 = await this.Signin_text_1.getText();
        // assert.strictEqual(actual_text_1, expected_text_1, "Assertion 1 not Passed!");
        // console.log("Text 1 assertion passed successfully...");

        // const actual_text_2 = await this.Signin_text_2.getText();
        // assert.strictEqual(actual_text_2, expected_text_2, "Assertion 2 not Passed!" );
        // console.log("Text 2 assertion passed successfully...");

        //Call function that need to be executed after assertion
        await this.Enter_Email.setValue(username);
        await this.Enter_Password.setValue(password);
        await this.Login_Button.click();
        // await this.Notification_Tab.waitForDisplayed({timeout:5000});
    }

}

// module.exports = new LoginPage();
export default new LoginPage ();
