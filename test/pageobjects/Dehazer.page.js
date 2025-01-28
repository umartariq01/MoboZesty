import { $, browser } from '@wdio/globals' ;
import { assert } from 'chai' ;
import Sliders from '../pageobjects/sliders.page.js';
import Bokeh_effect from '../pageobjects/Bokeh.page.js';


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


    async Verify_export()
    {
        await this.export_text.waitForDisplayed();
        const export_text = await this.export_text.getText();
        assert.strictEqual(export_text, expected_exxport_text, "Export text is not verified.")
    }

    async Click_export_done()
    {
        await this.export_done.click();
    }


    // -----  Main Function -----

    async Run_Dehazer_imag(expected_text, expected_exxport_text)
    {
        // await this.Close_Premium();
        // await this.Try_dehazer();
        // await this.select_img_tab();
        // await this.select_img1();
        // await this.Click_dehaze2();
        // await Sliders.Slider(driver, 7, 962, 1981, 2091, 0.5);
        // await browser.pause(1000);
        // await this.Click_remove_dehaze();
        await Sliders.CompareButton('//android.widget.ImageView[@resource-id="com.myzesty:id/compare"]', 2000);
        await this.Click_done_save();
        await Bokeh_effect.Check_premium(expected_text);
        await this.Click_done_save();
        await this.Verify_export(expected_exxport_text);
        await this.Click_export_done();





         
    }

    // async Run_Dehazer_vid()
    // {
    //     await this.Close_Premium();
    //     await this.Try_dehazer();

    //     await this.select_video_tab();
    //     await this.click_sort();
    //     await  Sliders.scrollScreen(startX, startY, endX, endY);
    //     await this.Select_vid1();
    // }






}

export default new Dehazer();