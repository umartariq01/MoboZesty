// const { $ } = require('@wdio/globals');
import { remote } from 'webdriverio';
// const Page = require('./page');
import assert from 'assert';




class ForgetPassword{

    constructor(f_page)
    {
        this.f_page = f_page ;
        this.Premium_Screen_Close = '//android.widget.ImageButton[@content-desc="Close"]' ;
    }



    async Forget_Password(username)
    {
        try 
        {
            await this.f_page.click(this.Premium_Screen_Close);

        } 
        catch (error) 
        {
            console.error("Error occur in Function calling:", error)
            throw error;
        }
    }

    
}

export default  new ForgetPassword();