import { $, browser } from '@wdio/globals' ;
import { assert } from 'chai' ;
import Sliders from '../pageobjects/sliders.page.js';
import Bokeh_effect from '../pageobjects/Bokeh.page.js';
import Subscription from '../pageobjects/BuyPremium.page.js';


class Dehazer
{

    get preiumCloseBtn () 
    {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
    }

    get dehazer()
    {
        return $('//android.view.ViewGroup[@content-desc="Try Now, Dehazer"]/android.view.ViewGroup');
    }

    get img_tab()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/image_tab"]');
    }

    get video_tab()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/video_tab"]');
    }

    get img_1()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[1]');
    }

    get vid1()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[1]');
    }

    get sort()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/sorttype"]');
    }

    get dehaze2()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[2]');
    }

    get remove_dehaze()
    {
        return  $('//android.widget.ImageView[@resource-id="com.myzesty:id/reset"]');
    }

    get done_save()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/action_text"]');
    }

    get export_text()
    {
        return $('//android.widget.TextView[@text="Your media is saved to your phone gallery"]');
    }

    get export_done()
    {
        return $('//android.view.ViewGroup[@content-desc="Done"]');
    }

    get apply_dehazerr()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/done"]');
    }

    get export_vid()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/export"]');
    }

    get premium()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/icon_premium"])[1]');
    }

    get export_done()
    {
        return $('//android.view.ViewGroup[@content-desc="Done"]');
    }

    get rate_myzesty()
    {
        return $('//android.widget.TextView[@content-desc="enjoying-myzesty"]');
    }

    get export_progress()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/percLabel"]');
    }

    get close_Ratepopup()
    {
        return $('//android.widget.TextView[@text=""]');
    }


    async checkUploadedMedia() {
        // Check if a photo is uploaded and click Save
        const isSaveVisible = await this.done_save.isDisplayed();
        if (isSaveVisible) {
            console.log("Detected a photo upload. Clicking on the Save button.");
            await this.done_save.click();
        } else {
            // Check if a video is uploaded and click Export
            const isExportVisible = await this.export_vid.isDisplayed();
            if (isExportVisible) {
                console.log("Detected a video upload. Clicking on the Export button.");
                await this.export_vid.click();
            } else {
                console.log("Neither Save nor Export button is visible.");
            }
        }
    }
    
    async Verify_export(expected_export_text)
    {
        await this.export_text.waitForDisplayed();
        const actual_export_text = await this.export_text.getText();
        assert.strictEqual(actual_export_text, expected_export_text, "Export text not Asserted.");
    }
   

    async Check_rate_myzesty()
    {
        const Rate_myzesty_visible = await this.rate_myzesty.isDisplayed();
        if(Rate_myzesty_visible)
        {
            await this.close_Ratepopup.click();
        }
        else
        {
            console.log("Popup not Appeared.")
        }

    }

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

    async Try_dehazer()
    {
        await this.dehazer.click();
    }

    async select_img_tab()
    {
        await this.img_tab.click();
    }

    async select_video_tab()
    {
        await this.video_tab.click()
    }

    async select_img1()
    {
        await this.img_1.click();
    }

    async click_sort()
    {
        await this.sort.click();
    }

    async Select_vid1()
    {
        await  this.vid1.click();
    }

    async Click_dehaze2()
    {
        await this.dehaze2.waitForDisplayed();
        await this.dehaze2.click();
    }

    async Click_remove_dehaze()
    {
        await this.remove_dehaze.click();
    }

    async Click_done_save()
    {
        await this.done_save.click();
    }

    async Click_export_done()
    {
        await this.export_done.click();
    }

    async Click_apply_dehazer()
    {
        await this.apply_dehazerr.click();
    }

    async Check_export_progress() {
        console.log("Checking export progress...");
    
        let progress = 0;
    
        // Wait until the progress reaches 100%
        while (progress < 100) {
            // Get the text of the progress bar
            const progressText = await this.export_progress.getText();
    
            // Parse the progress percentage from the text
            progress = parseInt(progressText.replace('%', ''), 10);
            console.log(`Current progress: ${progress}%`);
    
            // Break if the progress reaches 100%
            if (progressText >= 100) {
                console.log("Export is complete!");
                break;
            }
    
            await browser.pause(1000);
        }
    
        console.log("Video successfully exported!");
    }

    // -----  Main Function -----

    async Run_Dehazer_imag(expected_text, expected_export_text)
    {
        await Subscription.Check_Subscription(expected_text)
        await this.Close_Premium();
        await this.Try_dehazer();
        await this.select_img_tab();
        await this.select_img1();
        await this.Click_dehaze2();
        await Sliders.Slider(driver, 7, 962, 1981, 2091, 0.5);
        await browser.pause(1000);
        await this.Click_remove_dehaze();
        await Sliders.CompareButton('//android.widget.ImageView[@resource-id="com.myzesty:id/compare"]', 2000);
        await this.Click_done_save();
        await this.checkUploadedMedia();
        await this.Check_rate_myzesty();
        await this.Verify_export(expected_export_text);
        await this.Click_export_done();
         
    }

    async Run_Dehazer_vid(expected_text,  expected_export_text)
    {

        await Subscription.Check_Subscription(expected_text)
        await this.Close_Premium();
        await this.Try_dehazer();

        await this.select_video_tab();
        await this.click_sort();
        await Sliders.scrollScreen(500, 400, 500, 1700);
        await this.Select_vid1();
        await this.Click_dehaze2();
        await Sliders.Slider(driver, 255, 954, 2081, 2131, 0.6);
        await Sliders.Slider(driver, 233, 931, 2197, 2275, 0.2);
        await this.Click_apply_dehazer();
        await this.checkUploadedMedia()
        await this.Check_export_progress()
        await this.Check_rate_myzesty();
        await this.Verify_export(expected_export_text);
        await this.Click_export_done();
    }






}

export default new Dehazer();