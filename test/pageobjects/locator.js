class Locators{
    

    // Sign Up Page Locators (Accessibility ID)

    Name = "name-input" ;
    Email = "email-input" ;
    Password = "password-input" ;
    ConfirmPassword = "password-confirm-input" ;
    SignupButton = "sign-up-button" ;

    Signup_text = 'create-your-account' ; // Need to verify this text
    Term_text = '//android.widget.TextView[@text="By using our service, you agree to our "]' ; // Need to verify this text
    Terms_Services = '//android.widget.TextView[@text="Terms of Service"]' ; //Need to Verift text
    And_word = '//android.widget.TextView[@text=" and "]' ; //Verify this text
    Acknowledge_text = '//android.widget.TextView[@text="acknowledge receipt of our "]' ; //need to verify text
    Privacy_Policy = '//android.widget.TextView[@text="Privacy Policy"]' ; // Need to verify text
    Account_exist = '//android.widget.TextView[@text="Already have an account?"]' ; //Need to verify text
    Signup_page_bottom_Login_Button = '//android.widget.TextView[@text="Login"]' ;
    Signup_error = '//android.widget.TextView[@content-desc="error-message"]' ; // Short Name error. Need to check validation
    


    // Login Page Locators (Accessibility ID)

    Login_text = 'login-to-your-account' ; // Need to verify text
    UserEmail = "email-input" ;
    UserPassword = "password-input" ;
    LoginButton = "login-button" ;
    Create_an_Account = '//android.widget.TextView[@text="Create an Account"]' ;

    // Wrong Login Cridentials Error Alert
    Login_Failed = 'error-message' ; // The email or password you entered is incorrect. Please try again.
    
    //Xpath
    ForgetPassword = '//android.widget.TextView[@text="Forgot Password?"]' ;
    // Forget Password Screen(accessibility ID)
    ResetEmail = '//android.widget.EditText[@content-desc="reset-email-input"]' ;
    ResetButton = '//android.widget.Button[@content-desc="reset-button"]' ;
    // Error Alert (Accessibility ID)
    Error_text = 'error-message' ; // Email not found
    Success_text = '//android.widget.TextView[@content-desc="error-message"]' ; //A password reset link has been sent to the email.
    Success_alert_Ok_button = '//android.widget.TextView[@text="Ok"]' ; // On Reset password screen
    Ok_Button = '//android.widget.TextView[@text="Ok"]' ; //xpath
    Go_Back_Arrow = '//android.widget.TextView[@text=""]' ;

    // Premium Screen
    Landing_Close_Button = '//android.widget.ImageButton[@content-desc="Close"]' ;

    //Landing Screen
    
    Profile_Button = '//android.view.View[@content-desc="navi-profile-button"]' ;
    Login_Account = '(//android.widget.TextView[@text="Login"])[2]' ;
    




}
export default new Locators();
// module.exports = new Locators()