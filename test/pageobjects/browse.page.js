import { remote } from 'webdriverio';
import assert from 'assert';
import { $, browser, driver } from '@wdio/globals' ;
import Sliders from '../pageobjects/sliders.page.js';
import Subscription from '../pageobjects/BuyPremium.page.js';

class Browse
{
    // ============ Get function ============
    get browse_tab()
    {
        return $('//android.view.View[@content-desc="navi-browse-screen-button"]');
    }

    get option_btn()
    {
        return $('(//android.widget.TextView[@text=""])[1]');
    }

    get my_fav() // My favorites
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-my-favorites-text"]');
    }

    get edit_collection()
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-edit-collection-text"]') ;
    }

    get save_media()
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-save-media-text"]');
    }


    get share() // Share
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-share-text"]');
    }

    get report() // Report
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-report-text"]');
    }

    get content()
    {
        return $('(//android.widget.ImageView[@content-desc="feed-screen-content"])[1]');
    }

    get thumbs_up()
    {
        return $('//android.widget.TextView[@text=""]');
    }

    get double_thumbs_up()
    {
        return $('//android.widget.TextView[@text=""]')
    }

    get thumbs_down()
    {
        return $('//android.widget.TextView[@text=""]');
    }

    get comment()
    {
        return $('//android.widget.TextView[@text=""]');
    }

    get delete()
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-delete-text"]') ;
    }

    //=========================== Check Login Functionality =================================

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
    //=======================================================================================

    // ========================= Login Function Action ======================================
    
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
    
        async click_setting()
        {
            await this.settiing.click();
        }
    
        async click_logout()
        {
            await this.logout.click();
        }
    
    // ======================================================================================


    // ========== Action perfom function =========
    async click_browse_tab()
    {
        await  this.browse_tab.click()
    }

    async scrollScreen()
    {
        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 512, y: 166 },
                { type: 'pointerDown', button: 0 },
                // { type: 'pause', duration: 1000 },
                { type: 'pointerMove', duration: 1000, origin: 'pointer', x: 525, y: 1234 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        
    }

    async tapScreen(x, y) {
        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: x, y: y },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        
    }

    async option_btn_click()
    {
        await this.option_btn.click();
    }

    async my_fav_text(expected_value)
    {
        await this.my_fav.waitForDisplayed();
        const actual_value = await this.my_fav.getText();
        assert.strictEqual(actual_value, expected_value, "My favourite text is not verified!")
    }

    async Edit_My_Collection(expected_collection)
    {
        await this.edit_collection.waitForDisplayed();
        const actual_collection = await this.edit_collection.getText();
        assert.strictEqual(actual_collection, expected_collection, "Edit My Collection text not asserted.")
    }

    async Save_Media_Device(expected_media)
    {
        await this.save_media.waitForDisplayed();
        const actual_media = await this.save_media.getText();
        assert.strictEqual(actual_media, expected_media, "Save media to your device text not asserted.")
    }

    async share_text(expected_value_1)
    {
        await this.share.waitForDisplayed();
        const actual_value_1 = await this.share.getText();
        assert.strictEqual(actual_value_1, expected_value_1, "Share text is not verified!");
    }

    async Delete_Text(expected_delete)
    {
        await this.delete.waitForDisplayed();
        const actual_delete = await this.delete.getText();
        assert.strictEqual(actual_delete, expected_delete, "Delete text not asserted." )
    }

    async report_text(expected_value_2)
    {
        await  this.report.waitForDisplayed();
        const actual_value_2 = await this.report.getText();
        assert.strictEqual(actual_value_2, expected_value_2, "Report text is not verified!")
    }

    async check_thumbs_up()
    {
        if(this.thumbs_up.isDisplayed())
        {
            console.log("Thumbs Up is present.");
        }
        else
        {
            console.log("Error in finding Thumbs Up!")
        }
        
    }


    async check_double_thumbs_up()
    {
        if(this.double_thumbs_up.isDisplayed())
        {
            console.log("Double thumbs Up is present.");
        }
        else
        {
            console.log("Error in finding double Thumbs Up!");
        }
    }

    async check_thumbs_down()
    {
        if(this.thumbs_down.isDisplayed())
        {
            console.log("Thumbs down is present.")
        }
        else
        {
            console.log("Error finding thumbd down!")
        }
    }

    async check_comment()
    {
        if(this.comment.isDisplayed())
        {
            console.log("Comment is present.");
            browser.pause(5000);
        }
        else
        {
            console.log("Error finding comment!");
            browser.pause(5000);
        }
    }

    
    async Logout_Browse(expected_value, expected_value_1, expected_value_2)
    {
        await this.click_browse_tab();
        await this.scrollScreen();
        await browser.pause(2000);
        await this.option_btn_click();
        await this.my_fav_text(expected_value);
        await this.share_text(expected_value_1);
        await this.report_text(expected_value_2);
        await this.tapScreen(540,812);
        await this.check_thumbs_up();
        await this.check_double_thumbs_up();
        await this.check_thumbs_down();
        await this.check_comment();
        await Sliders.scrollScreen(500, 2000, 500, 300, 2)
    }

    async Login_Browse(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete)
    {
        await this.click_browse_tab();
        await this.scrollScreen();
        await browser.pause(2000);
        await this.option_btn_click();
        await this.my_fav_text(expected_value);
        await this.Edit_My_Collection(expected_collection);
        await this.Save_Media_Device(expected_media);
        await this.share_text(expected_value_1);
        await this.Delete_Text(expected_delete);
        await this.tapScreen(540,812);
        await this.check_thumbs_up();
        await this.check_double_thumbs_up();
        await this.check_thumbs_down();
        await this.check_comment();
        await Sliders.scrollScreen(500, 2000, 500, 300, 2)


    }

    async loginToMyZesty(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete)
    {
        if(await this.create_account.isDisplayed())
        {
            await this.Logout_Browse(expected_value, expected_value_1, expected_value_2);
        }

        else if (await this.settiing.isDisplayed())
        {
            await this.Login_Browse(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete)
        }
    }

    // ============ Main Function =================

    async run_browse(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete)
    {
        await Subscription.Check_Subscription('Processing');
        await this.Profile_Tab();
        await this.loginToMyZesty(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete);

    }
}

export default new Browse();