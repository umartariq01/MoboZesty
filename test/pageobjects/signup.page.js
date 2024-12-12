import { $ } from '@wdio/globals' ;
import assert from 'assert' ;

class SignupPage{

    get preiumCloseBtn () {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
    }

    get profiletab()
    {
        return $('//android.view.View[@content-desc="navi-profile-button"]');
    }

    get signupTab()
    {
        return $('//android.widget.Button[@content-desc="signup-button-main-menu"]')
    }

    get Name()
    {
        return $('//android.widget.EditText[@content-desc="name-input"]')
    }

    get Email()
    {
        return $('//android.widget.EditText[@content-desc="email-input"]')
    }

    get Password()
    {
        return $('//android.widget.EditText[@content-desc="password-input"]')
    }

    get ConfirmPassword()
    {
        return $('//android.widget.EditText[@content-desc="password-confirm-input"]')
    }

    get Signup_Button()
    {
        return $('//android.widget.Button[@content-desc="sign-up-button"]')
    }

    get signup_text_1()
    {
        return $('//android.widget.TextView[@content-desc="sign-up-text"]')
    }

    get signup_text_2()
    {
        return $('//android.widget.TextView[@content-desc="create-your-account"]')
    }

    get Policy_text_1() // By using our service, you agree to our 
    {
        return $('//android.widget.TextView[@text="By using our service, you agree to our "]')
    }

    get Policy_text_2() // Terms of Service
    {
        return $('//android.widget.TextView[@text="Terms of Service"]')
    }

    get Policy_text_3() //  and 
    {
        return $('//android.widget.TextView[@text=" and "]')
    }

    get Policy_text_4() // acknowledge receipt of our 
    {
        return $('//android.widget.TextView[@text="acknowledge receipt of our "]')
    }

    get Policy_text_5() // Privacy Policy
    {
        return $('//android.widget.TextView[@text="Privacy Policy"]')
    }

    get Policy_text_6() // Already have an account?
    {
        return $('//android.widget.TextView[@text="Already have an account?"]')
    }

    get Policy_text_7() // Login
    {
        return $('//android.widget.TextView[@text="Login"]')
    }

    get create_account()
    {
        return $('//android.widget.TextView[@text="Create an Account"]');
    }

    get settiing()
    {
        return $('//android.widget.TextView[@text="Settings"]');
    }

    get logout()
    {
        return $('//android.widget.Button[@content-desc="settings-log-out-button"]');
    }
    // When all input fields are empty
    get invalid_name()
    {
        return $('//*[@text="Please enter a valid name"]') ;
    }
    // Error alert Ok buttton 
    get error_ok()
    {
        return $('//*[@text="Ok"]') ;
    }

    get short_name()
    {
        return $('//*[@text="Name must be between 5 and 80 characters"]') ;
    }

    get invalid_email_alert()
    {
        return $('//*[@text="Please enter a valid email address"]') ;
    }



    //================ Calling the Function to perform Actions ================== 

    async Invalid_Emial_Error(expected_error_2)
    {
        await this.invalid_email_alert.waitForDisplayed({timeout:2000});
        const actual_error_2 = await this.invalid_email_alert.getText();
        assert.strictEqual(actual_error_2, expected_error_2, "Please enter a valid email text not verified!")
    }
    async Short_name_alert(expected_error_1)
    {
        await this.short_name.waitForDisplayed({timeout:2000});
        const actual_error_1 = await this.short_name.getText();
        assert.strictEqual(actual_error_1, expected_error_1, "Short name error is not verified!");
    }

    // Error alert Ok button
    async Click_error_Ok()
    {
        await this.error_ok.click();
    }
    async Name_Error(expected_error)
    {
        await this.invalid_name.waitForDisplayed();
        const actual_error = await this.invalid_name.getText();
        assert.strictEqual(actual_error, expected_error, "Please enter a valid name Error not verified!")
    }

    async Close_Premium()
    {
        await this.preiumCloseBtn.waitForDisplayed({timeout:5000});
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

    async Profile_Tab()
    {
        await this.profiletab.click();
    }

    async SignUp()
    {
        await this.signupTab.click();
    }

    async EnterName(name)
    {
        await this.Name.setValue(name);
    }

    async EnterInvalidName(invalid_username)
    {
        await this.Name.setValue(invalid_username) ;
    }

    async EnterInvalidEmail(invalid_email)
    {
        await this.Email.setValue(invalid_email);
    }

    async Enter_Email(email)
    {
        await this.Email.setValue(email);
    }

    async Enter_Password(password)
    {
        await this.Password.setValue(password);
    }

    async Confirm_Password(confirmpassword)
    {
        await this.ConfirmPassword.setValue(confirmpassword);
    }

    async SignUp_btn()
    {
        await this.Signup_Button.click()
    }

    async Text_1(expected_text_1)
    {
        await this.signup_text_1.waitForDisplayed({timeout:5000});
        const actual_text_1 = await this.signup_text_1.getText();
        assert.strictEqual(actual_text_1, expected_text_1, "Signup Assertion 1 Failed!")
        console.log("Signup assertion 1 passed...")
    }

    async Text_2(expected_text_2)
    {
        await this.signup_text_2.waitForDisplayed({timeout:5000});
        const actual_text_2 = await this.signup_text_2.getText();
        assert.strictEqual(actual_text_2, expected_text_2, "Signup Assertion 1 Failed2");
        console.log("Signup assertion 2 passed...")
    }


    async Term_1(expected_policy_1)
    {
        await this.Policy_text_1.waitForDisplayed({timeout:2000});
        const actual_policy_1 = await this.Policy_text_1.getText();
        assert.strictEqual(actual_policy_1, expected_policy_1, "Term 1 assertion Failed!");
        console.log("Term 1 assertion passed...")
    }

    async Term_2(expected_policy_2)
    {
        await this.Policy_text_2.waitForDisplayed({timeout:2000});
        const actual_policy_2 = await this.Policy_text_2.getText();
        assert.strictEqual(actual_policy_2, expected_policy_2, "Term 2 assertion Failed!");
        console.log("Term 2 assertion passed...")
    }

    async Term_3(expected_policy_3)
    {
        await this.Policy_text_3.waitForDisplayed({timeout:2000});
        const actual_policy_3 = await this.Policy_text_3.getText();
        assert.strictEqual(actual_policy_3, expected_policy_3, "Term 3 assertion Failed!");
        console.log("Term 3 assertion passed...")
    }

    async Term_4(expected_policy_4)
    {
        await this.Policy_text_4.waitForDisplayed({timeout:2000});
        const actual_policy_4 = await this.Policy_text_4.getText();
        assert.strictEqual(actual_policy_4, expected_policy_4, "Term 4 assertion Failed!");
        console.log("Term 4 assertion passed...")
    }

    async Term_5(expected_policy_5)
    {
        await this.Policy_text_5.waitForDisplayed({timeout:2000});
        const actual_policy_5 = await this.Policy_text_5.getText();
        assert.strictEqual(actual_policy_5, expected_policy_5, "Term 5 assertion Failed!");
        console.log("Term 5 assertion passed...")
    }

    async Term_6(expected_policy_6)
    {
        await this.Policy_text_6.waitForDisplayed({timeout:2000});
        const actual_policy_6 = await this.Policy_text_6.getText();
        assert.strictEqual(actual_policy_6, expected_policy_6, "Term 6 assertion Failed!");
        console.log("Term 6 assertion passed...")
    }

    async Term_7(expected_policy_7)
    {
        await this.Policy_text_7.waitForDisplayed({timeout:2000});
        const actual_policy_7 = await this.Policy_text_7.getText();
        assert.strictEqual(actual_policy_7, expected_policy_7, "Term 7 assertion Failed!");
        console.log("Term 7 assertion passed...")
    }

    async Create_Account_Link()
    {
        await this.create_account.waitForExist({timeout:3000});
    }

    async click_setting()
    {
        await this.settiing.click();
    }

    async click_logout()
    {
        await this.logout.click();
    }

    async check_validation(expected_error,invalid_username,expected_error_1,name,invalid_email,expected_error_2)
    {
        await this.SignUp_btn();
        // Checking validation when fields are empty
        await this.Name_Error(expected_error)
        await this.Click_error_Ok();
        // Checking validation when Name is short
        // console.log("===================Check Validation>>", invalid_username)
        await this.EnterInvalidName(invalid_username);
        await this.SignUp_btn();
        // await this.Short_name_alert(expected_error_1);
        await this.Click_error_Ok();
        // Checking validation by entering invalid email
        await this.EnterName(name);
        await this.EnterInvalidEmail(invalid_email);
        await this.SignUp_btn();
        await this.Invalid_Emial_Error(expected_error_2)
        await this.Click_error_Ok();
    }

    async Logout_Myzesty(name, email, password, confirmpassword, expected_text_1, expected_text_2 ,expected_policy_1, expected_policy_2,
        expected_policy_3, expected_policy_4, expected_policy_5, expected_policy_6, expected_policy_7, 
        expected_error, invalid_username, expected_error_1, invalid_email, expected_error_2)
    {
        await this.click_setting();
        await this.click_logout();
        await this.Close_Premium();
        await this.Profile_Tab();
        await this.SignUp();
        await this.check_validation(expected_error, invalid_username, expected_error_1, name, invalid_email, expected_error_2);
        await this.EnterName(name);
        await this.Enter_Email(email);
        await this.Enter_Password(password);
        await this.Confirm_Password(confirmpassword);
        await this.Text_1(expected_text_1);
        await this.Text_2(expected_text_2);
        await this.Term_1(expected_policy_1);
        await this.Term_2(expected_policy_2);
        await this.Term_3(expected_policy_3);
        await this.Term_4(expected_policy_4);
        await this.Term_5(expected_policy_5);
        await this.Term_6(expected_policy_6);
        await this.Term_7(expected_policy_7);
        await this.SignUp_btn();
    }

    async Signup_Account(name, email, password, confirmpassword,  expected_text_1, expected_text_2 ,expected_policy_1, expected_policy_2,
        expected_policy_3, expected_policy_4, expected_policy_5, expected_policy_6, expected_policy_7, 
        expected_error, invalid_username, expected_error_1, invalid_email, expected_error_2)
    {
        await this.SignUp();
        await this.check_validation(expected_error, invalid_username, expected_error_1, name, invalid_email, expected_error_2);
        await this.EnterName(name);
        await this.Enter_Email(email);
        await this.Enter_Password(password);
        await this.Confirm_Password(confirmpassword);
        await this.Text_1(expected_text_1);
        await this.Text_2(expected_text_2);
        await this.Term_1(expected_policy_1);
        await this.Term_2(expected_policy_2);
        await this.Term_3(expected_policy_3);
        await this.Term_4(expected_policy_4);
        await this.Term_5(expected_policy_5);
        await this.Term_6(expected_policy_6);
        await this.Term_7(expected_policy_7);
        await this.SignUp_btn();
    }

    async signupToMyZesty(name, email, password, confirmpassword, expected_text_1, expected_text_2 ,expected_policy_1, expected_policy_2,
        expected_policy_3, expected_policy_4, expected_policy_5, expected_policy_6, expected_policy_7, 
        expected_error, invalid_username, expected_error_1, invalid_email, expected_error_2) 
    {
        if(await this.create_account.isDisplayed())
        {
            await this.Signup_Account(name, email, password, confirmpassword,expected_text_1, expected_text_2 ,expected_policy_1, expected_policy_2,
                expected_policy_3, expected_policy_4, expected_policy_5, expected_policy_6, expected_policy_7, 
                expected_error, invalid_username, expected_error_1, invalid_email, expected_error_2);
                
        }

        else if (await this.settiing.isDisplayed())
        {
            await this.Logout_Myzesty(name, email, password, confirmpassword,expected_text_1, expected_text_2 ,expected_policy_1, expected_policy_2,
                expected_policy_3, expected_policy_4, expected_policy_5, expected_policy_6, expected_policy_7, 
                expected_error, invalid_username, expected_error_1, invalid_email, expected_error_2);
                
        }
    }
  
    async signup (name, email, password, confirmpassword, expected_text_1, expected_text_2 ,expected_policy_1, expected_policy_2,
        expected_policy_3, expected_policy_4, expected_policy_5, expected_policy_6, expected_policy_7, 
        expected_error, invalid_username, expected_error_1, invalid_email, expected_error_2) 
    {
        await this.Close_Premium();
        await this.Profile_Tab();
        await this.signupToMyZesty(name, email, password, confirmpassword, expected_text_1, expected_text_2 ,expected_policy_1, expected_policy_2,
        expected_policy_3, expected_policy_4, expected_policy_5, expected_policy_6, expected_policy_7, 
        expected_error, invalid_username, expected_error_1, invalid_email, expected_error_2);

    }


}
export default new SignupPage();
