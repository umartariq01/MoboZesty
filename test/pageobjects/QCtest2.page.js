import { $, browser, driver } from '@wdio/globals' ;
import assert from 'assert' ;
import Sliders from '../pageobjects/sliders.page.js';
import  Subscription from '../pageobjects/BuyPremium.page.js';


class Adv_test2
{

    get QC()
    {
        return $('//android.view.ViewGroup[@content-desc="Try, Quick Cuts"]/android.view.ViewGroup');
    }

    get video_tab()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/video_tab"]');
    }

    get vid1()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[1]');
    }

    get vid2()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[2]');
    }

    get vid7()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[7]');
    }

    get vid8()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[8]')
    }

    get done()
    {
        return $('//android.widget.TextView[@text="DONE"]');
    }

    get sort()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/sorttype"]');
    }

    get export()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/export"]');
    }

    get resolution()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/qualityText"]');
    }

    get close_resolution_or_record()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/cancel"]');
    }

    get resolution_720()
    {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.myzesty:id/option_recycle"]/android.widget.FrameLayout[3]/android.view.ViewGroup');
    }

    //========================== Advance Edit Paths ==================================

    get edit()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/tvEdit"]');
    }

    get adv_edit()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/advanceEdit"]');
    }

    get premium()
    {
        return $('//android.widget.ImageView[@content-desc="Premium"]');
    }

    get subscriptioon()
    {
        return $('//android.widget.Button[@resource-id="com.myzesty:id/btnContinue"]');
    }

    get subscripe_pkg()
    {
        return $('//android.widget.Button[@resource-id="com.android.vending:id/0_resource_name_obfuscated"]');
    }

    get confirm_subscribe()
    {
        return $('')
    }

    get wizard_popup()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/done"]');
    }

    get full_editor()
    {
        return $('//android.widget.TextView[@text="Full Editor"]');
    }

    get processing_text()
    {
        return $('//android.widget.TextView[@resource-id="com.android.vending:id/0_resource_name_obfuscated"]');
    }

    get edit_audio()
    {
        return $('//android.widget.TextView[@text="Edit Audio"]');
    }

    get audio_bar()
    {
        return $('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]');
    }

    get return_button()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/back"]/android.widget.ImageView');
    }

    get export_verify()
    {
        return $('//android.widget.TextView[@text="Your media is saved to your phone gallery"]');
    }

    get rate_us()
    {
        return $('//android.widget.Button[@content-desc="rate-us-button"]');
    }

    get cancel_rate_us()
    {
        return $('//android.widget.TextView[@text=""]');
    }

    get export_done()
    {
        return $('//android.view.ViewGroup[@content-desc="Done"]');
    }

    //=========================================================================

    async Try_QC()
    {
        await this.QC.click();
    }

    async select_video_tab()
    {
        await this.video_tab.click()
    }

    async click_sort()
    {
        await this.sort.click();
    }

    async Select_vid1()
    {
        await  this.vid1.click();
    }

    async Select_vid2()
    {
        await this.vid2.click();
    }

    async Select_vid7()
    {
        await this.vid7.click();
    }

    async Select_vid8()
    {
        await this.vid8.click();
    }

    async Click_done()
    {
        await this.done.click();
    }

    async Advance_edit(expected_text)
    {
        const isvisible = await this.premium.isDisplayed();

        if(!isvisible)
        {
            console.log("Already have premium subscription...")
            await this.adv_edit.click()
        }
        else
        {
            await this.Buy_Subscription(expected_text);
        }

    }

    async Buy_Subscription(expected_text)
    {
        await this.adv_edit.click()
        await this.subscriptioon.waitForDisplayed({timeout:3000}).catch(() => false) ;
        await this.subscriptioon.click();

        await this.subscripe_pkg.waitForDisplayed({timeout:5000}).catch(() => false);
        await this.subscripe_pkg.click();

        const processing_visible = await  this.processing_text.isDisplayed();
        if(processing_visible)
        {
            await this.verify_processing(expected_text)
        }
        else
        {
            console.log("Subscription Processing is not visible...")
        }

    }

    async verify_processing(expected_text)
    {
        await this.processing_text.waitForDisplayed({timeout:5000});
        const actual_text = await this.processing_text.getText();
        assert.strictEqual(actual_text, expected_text, "Subscription Processing text not asserted!")
    }

    async Click_wizard_popup()
    {
        const isavailable = await this.wizard_popup.isDisplayed();

        if(isavailable)
        {
            await this.wizard_popup.click();
        }
        else
        {
            console.log("Popup not available.")
        }
        
    }

    async Click_full_editor()
    {
        await this.full_editor.waitForExist();
        await this.full_editor.click();
    }

    async Click_export()
    {
        await this.export.click();
    }

    async click_resolution()
    {
        await this.resolution.click();
    }

    async close_resolution_or_record_btn()
    {
        await this.close_resolution_or_record.click();
    }

    async click_resolution_720()
    {
        await this.resolution_720.click();
    }

    async click_edit()
    {
        await this.edit.waitForDisplayed({timeout:10000});
        await this.edit.click();
    }

    async Click_edit_Audio()
    {
        await this.edit_audio.click();
    }

    async Audio_bar_verify()
    {
        const Bar_displayed = await this.audio_bar.isDisplayed();
        if(Bar_displayed)
        {
            console.log("Audio is available..");
        }
        else
        {
            console.log("Audio is  when move from QC to advance edit.")
        }
    }

    async Mian_return_btn()
    {
        await this.return_button.click();
    }

    async Verify_export_success(expected_export_text)
    {
        await this.export_verify.waitForDisplayed({timeout:5000});
        const actual_export_text = await this.export_verify.getText();
        assert.strictEqual(actual_export_text, expected_export_text, "Video is not exported. Error in exporting video.")
    }

    get pause()
    {
        return $('//android.widget.SeekBar[@resource-id="com.myzesty:id/seekBar"]');
    }

    async pause_video()
    {
        await this.pause.click();
    }

    async Click_Rate_Us()
    {
        const isDisplayed = await this.rate_us.isDisplayed() ;
        if(isDisplayed)
        {
            await this.cancel_rate_us.click();
        }
        else
        {
            console.log('Rate Us popup not Appeared.')
        }
    }

    async Click_export_done()
    {
        await this.export_done.click();
    }



    // ========= Main Function =======

    async test2(expected_text, expected_export_text)
    {

        await Subscription.Check_Subscription('Processing');
        await this.Try_QC();

        await this.select_video_tab();
        await this.click_sort();
        await Sliders.scrollScreen(500, 400, 500, 2200);
        await  this.Select_vid1();
        await this.Select_vid2();
        await this.Select_vid7();
        await this.Select_vid8();
        await this.Click_done();

        await browser.pause(3000);
        await Sliders.play_pause(539, 1422);
        await this.click_edit();
        await this.Advance_edit(expected_text);
        await this.Click_wizard_popup();
        await browser.pause(5000);
        await this.Click_full_editor();

        await this.Click_edit_Audio();
        await this.Audio_bar_verify();
        await  this.Mian_return_btn();

        await this.click_resolution();
        await this.close_resolution_or_record_btn();
        await this.click_resolution();
        await this.click_resolution_720();
        await this.Click_export();

        await browser.pause(10000);
        await this.Click_Rate_Us();
        await this.Verify_export_success(expected_export_text);
        await this.Click_export_done();

    }

}

export default new Adv_test2();