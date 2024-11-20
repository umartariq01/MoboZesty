const { $ } = require('@wdio/globals')
// const Page = require('./page');
// const Locators = require('./locator') ;
// import { Locators } from ('./locator') ;
// const locator = new Locators()
import locators from './locator';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    
    // Getting the value using xpaths/accessibility ID
    get ClosePremiumScreen()
    {
        return $(locators.Landing_Close_Button)
    }

    //Navigation Account Tab
    get Profile_Tab()
    {
        return $(locators.Profile_Button)
    }

    //Login Button
    get Login()
    {
        return $(locators.Login_Account)
    }

    //Enter Email
    get inputEmail () {
        return $(locators.UserEmail)
       // return $('email-input');
    }

    //Enter Password
    get inputPassword () {
        return $(locators.UserPassword)
       // return $('password-input');
    }

    //Login Button
    get btnLogin () {
        return $(locators.LoginButton)
       // return $('login-button');
    }

    /*
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    // open () {
    //     return super.open('login');
    // }
}

// module.exports = new LoginPage();
export default new LoginPage();
