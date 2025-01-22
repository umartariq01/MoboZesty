import { $, browser, driver } from '@wdio/globals' ;
import assert from 'assert' ;
import Sliders from '../pageobjects/sliders.page.js';


class Adv_test4
{
    get preiumCloseBtn () 
    {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
    }

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

    get done_text()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/done"]');
    }

    get add_text()
    {
        return $('//android.widget.TextView[@text="Add Text"]');
    }

    get text_area()
    {
        return $('//android.widget.EditText[@resource-id="com.myzesty:id/text_area"]');
    }

    get return_button()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/back"]/android.widget.ImageView');
    }

    get export_verify()
    {
        return $('//android.widget.TextView[@text="Your media is saved to your phone gallery"]');
    }

    get color_tab()
    {
        return $('//android.widget.LinearLayout[@content-desc="Color"]');
    }

    get pause()
    {
        return $('//android.widget.SeekBar[@resource-id="com.myzesty:id/seekBar"]');
    }

    get text_expander()
    {
        return $('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[2]');
    }

    //=========================================================================

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

    async  Click_add_text()
    {
        await this.add_text.click()
    }

    async Enter_text(text)
    {
        await this.text_area.click();
        const text_arr = text.split('');
        await this.text_area.sendKeys(text_arr);
    }

    async Apply_text()
    {
        await this.done_text.click()    
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

    async Click_text_extender()
    {
        await this.text_expander.click();
    }


    // ========= Main Function =======

    async test4(expected_text, text, slider_xpath, expected_export_text)
    {

        await browser.pause(3000);
        await this.Close_Premium();
        await this.Try_QC();

        await this.select_img_tab();
        await this.select_img1();
        await this.select_img2();
        await this.select_img10();
        await this.select_img11();
        await this.Click_done();
        await  browser.pause(5000);

        // await this.pause_video();
        await this.click_edit();
        await this.Advance_edit(expected_text);
        await this.Click_wizard_popup();
        await browser.pause(5000);
        await this.Click_full_editor();

        await this.Click_add_text();
        await this.Enter_text(text);
        await browser.pause(2000);
        await this.Apply_text();
        await browser.pause(2000);
        await this.Click_color_tab();
        await Sliders.Slider(driver, 36, 989, 1805, 1898, 0.5);
        await this.Apply_text();
        // await Sliders.Drag_Drop(driver, 748, 1724, 789, 1801) ;

        await this.Click_text_extender();
        await Sliders.dragSliderWithBounds(slider_xpath, 200, [748, 1724])
        await  this.Mian_return_btn();

        await this.click_resolution();
        await this.close_resolution_or_record_btn();
        await this.click_resolution();
        await this.click_resolution_720();
        await this.Click_export();

        await browser.pause(10000);
        await this.Verify_export_success(expected_export_text);

    }

}

export default new Adv_test4();