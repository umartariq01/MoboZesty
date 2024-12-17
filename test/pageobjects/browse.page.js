import { remote } from 'webdriverio';
import assert from 'assert';
import { $, browser, driver } from '@wdio/globals' ;
import CheckLoginPage from '../pageobjects/checklogin.page.js';

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
        await browser.releaseActions();
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
        await browser.releaseActions();
    }

    async scrollUp_fun()
{
    const strategy = '-android uiautomator'; 
    const selector = 'new UiSelector().className("android.view.ViewGroup").instance(26)';
    const direction = 'up';
    
    await browser.execute("mobile: scroll", { 
        strategy: strategy,
        selector: selector,
        direction: direction
    });

    const stop = $(selector);
    if(await  stop.isDisplayed())
    {
        return true;
    }
    else
    {
        return false;
    }    
}
 
    async option_btn_click()
    {
        await this.option_btn.click();
    }

    async my_fav_text(expected_value)
    {
        await this.my_fav.waitForDisplayed({timeout:2000});
        const actual_value = await this.my_fav.getText();
        assert.strictEqual(actual_value, expected_value, "My favourite text is not verified!")
    }

    async share_text(expected_value_1)
    {
        await this.share.waitForDisplayed();
        const actual_value_1 = await this.share.getText();
        assert.strictEqual(actual_value_1, expected_value_1, "Share text is not verified!");
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

    // ============ Main Function =================

    async run_browse(expected_value, expected_value_1, expected_value_2)
    {
        CheckLoginPage.login();
        await this.click_browse_tab();
        await this.scrollScreen();
        await this.option_btn_click();
        await this.my_fav_text(expected_value);
        await this.share_text(expected_value_1);
        await this.report_text(expected_value_2);
        await this.tapScreen(540,812);
        await this.check_thumbs_up();
        await this.check_double_thumbs_up();
        await this.check_thumbs_down();
        await this.check_comment();
        // await this.scroll_1();
        // await browser.execute("mobile: scrollGesture", { 
        //     strategy: '-android uiautomator',
        //     selector: 'new UiSelector().className("android.view.ViewGroup").instance(32)',
        //     direction: 'up'
        //  });
        // await browser.execute("mobile: scroll", { direction: 'up' });
        // await driver.execute('mobile: scroll', { direction: 'up' });

        await this.scrollUp_fun();


    }
}

export default new Browse();