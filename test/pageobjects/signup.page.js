const { $ } = require('@wdio/globals')
// const Page = require('./page');
import locators from './locator';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage{
    /**
     * define selectors using getter methods
     */
    
    // Getting the value using xpaths

    get Name () {
        return  $(locators.Name)
        // return $('name-input');
    }

    get Email () {
        return $(locators.Email)
        // return $('email-input');
    }

    get Password () {
        return $(locators.Password)
        // return $('password-input');
    }

    get ConfirmPassword () {
        return $(locators.ConfirmPassword)
        // return $('password-confirm-input');
    }

    get signupButton(){
        return $(locators.SignupButton)
        // return $('sign-up-button')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signup (name, email, password1, confirmpassword) {
        await this.Name.setValue(name)
        await this.Email.setValue(email);
        await this.Password.setValue(password1);
        await this.ConfirmPassword.setValue(confirmpassword);
        await this.signupButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    // open () {
    //     return super.open('login');
    // }
}

module.exports = new SignupPage();
