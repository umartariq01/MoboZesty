import { $, browser, driver } from '@wdio/globals' ;
import assert from 'assert' ;
import Sliders from '../pageobjects/sliders.page.js';
import Subscription from '../pageobjects/BuyPremium.page.js';


class Adv_test5
{

    get QC()
    {
        return $('//android.view.ViewGroup[@content-desc="Try, Quick Cuts"]/android.view.ViewGroup');
    }

    get img_tab()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/image_tab"]');
    }

    get img_1()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[1]');
    }

    get img_2()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[2]');
    }

    get img_5()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[5]');
    }

    get img_10()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[10]');
    }

    get img_11()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[11]');
    }

    get done()
    {
        return $('//android.widget.TextView[@text="DONE"]');
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

    get wizard_popup()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/done"]');
    }

    get full_editor()
    {
        return $('//android.widget.TextView[@text="Full Editor"]');
    }

    get Edit_effect()
    {
        return $('//android.widget.TextView[@text="Edit Effects"]');
    }

    get Add_effectt()
    {
        return $('(//android.widget.LinearLayout[@resource-id="com.myzesty:id/icon_area"])[1]');
    }

    get done_effect()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/done"]');
    }


    get return_button()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/back"]/android.widget.ImageView');
    }

    get export_verify()
    {
        return $('//android.widget.TextView[@text="Your media is saved to your phone gallery"]');
    }

    get pause()
    {
        return $('//android.widget.SeekBar[@resource-id="com.myzesty:id/seekBar"]');
    }

    get expand_effect()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[9]');
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

    async select_img_tab()
    {
        await this.img_tab.click();
    }

    async select_img1()
    {
        await this.img_1.waitForDisplayed({timeout:2000});
        await this.img_1.click();
    }

    async select_img2()
    {
        await this.img_2.click();   
    }

    async select_img5()
    {
        await this.img_5.click();
    }

    async select_img10()
    {
        await this.img_10.click();
    }

    async select_img11()
    {
        await this.img_11.click();
    }

    async Click_done()
    {
        await this.done.click();
    }

    async Advance_edit()
    {
        await this.adv_edit.click()
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

    async Click_edit_effect()
    {
        await this.Edit_effect.click();
    }

    async Click_add_effect()
    {
        await this.Add_effectt.waitForDisplayed({timeout:3000});
        await this.Add_effectt.click();
    }



    async Apply_effect()
    {
        await this.done_effect.click()    
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

    async pause_video()
    {
        await this.pause.click();
    }

    async Click_color_tab()
    {
        await this.color_tab.click();
    }

    async select_expand_effect()
    {
        await this.expand_effect.click();
        await browser.pause(1000);
        // await this.expand_effect.click();
    }

    get slider_path()
    {
        return $('(//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"])[5]/android.view.View[2]');
    }

    async wait_slider()
    {
        await this.slider_path.waitForDisplayed({timeout:5000})
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

    async test5( slider_xpath, expected_export_text)
    {

        await Subscription.Check_Subscription('Processing');
        await this.Try_QC();

        await this.select_img_tab();
        await this.select_img1();
        await this.select_img2();
        await this.select_img10();
        await this.select_img11();
        await this.Click_done();
        await  browser.pause(3000);

        await Sliders.play_pause(539, 1422);
        await this.click_edit();
        await this.Advance_edit();
        await this.Click_wizard_popup();
        await browser.pause(5000);
        await this.Click_full_editor();

        await this.Click_edit_effect();
        await this.Click_add_effect();
        await this.select_expand_effect();
        await this.Apply_effect();
        await this.wait_slider();
        await Sliders.dragSliderWithBounds(slider_xpath, 500, [776, 818])
        await  this.Mian_return_btn();

        await this.click_resolution();
        await this.close_resolution_or_record_btn();
        await this.click_resolution();
        await this.click_resolution_720();
        await this.Click_export();

        await browser.pause(10000);
        await this.Verify_export_success(expected_export_text);
        await this.Click_Rate_Us();
        await this.Click_export_done();

    }

}

export default new Adv_test5();