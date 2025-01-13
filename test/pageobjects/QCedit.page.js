import { $, browser, driver } from '@wdio/globals' ;
import { longPressKeyCode } from 'appium-uiautomator2-driver/build/lib/commands/keyboard';

class QC_Edit
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

    get video_tab()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/video_tab"]');
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

    get vid1()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[1]');
    }

    get vid2()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[2]');
    }

    get done()
    {
        return $('//android.widget.TextView[@text="DONE"]');
    }

    get filter1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/imageView"])[1]');
    }

    get filter2()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/imageView"])[2]');
    }

    get filter3()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/imageView"])[3]') ;
    }

    get filter4()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/imageView"])[4]') ;
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

    get close_resolution()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/cancel"]');
    }

    get resolution_720()
    {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.myzesty:id/option_recycle"]/android.widget.FrameLayout[3]/android.view.ViewGroup');
    }

    //========================== Edit Paths ==================================

    get edit()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/tvEdit"]');
    }

    get sort_img1()
    {
        return $('//android.view.View[@resource-id="com.myzesty:id/selectedBg"]');
    }

    get replace()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/btnReplace"]');
    }

    get back()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/back"]');
    }

    get sound()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/btnSound"]');
    }

    get sort_vid1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/imageView"])[3]')
    }


    //=========================================================================



    async Close_Premium()
    {
        await this.preiumCloseBtn.waitForDisplayed({timeout:5000});
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

    async select_video_tab()
    {
        await this.video_tab.click()
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

    async Click_done()
    {
        await this.done.click();
    }

    async Filter_check2()
    {
        await this.filter2.click();
    }

    async Filter_check3()
    {
        await this.filter3.click()
    }

    async Filter_check4()
    {
        await this.filter4.click();
    }

    async scrollScreen(startX, startY, endX, endY, duration = 1000) {
        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY }, // Move to the start position
                { type: 'pointerDown', button: 0 }, // Press down
                { type: 'pointerMove', duration: duration, x: endX, y: endY }, // Move to the end position over the specified duration
                { type: 'pointerUp', button: 0 } // Release
            ]
        }]);
        await browser.releaseActions();
    }

    async Click_export()
    {
        await this.export.click();
    }

    async click_resolution()
    {
        await this.resolution.click();
    }

    async Cancel_resolution()
    {
        await this.close_resolution.click();
    }

    async click_resolution_720()
    {
        await this.resolution_720.click();
    }

    async click_edit()
    {
        await this.edit.click();
    }

    async Drag_drop(startX, endX, y, duration = 1000) {
        // Horizontal swipe: startX -> endX at a fixed vertical position (y)
        await browser.performActions([{
            type: 'pointer',
            id: 'finger2',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: y }, // Move to the starting horizontal position
                { type: 'pointerDown', button: 0 }, // Press down
                { type: 'pointerMove', duration: duration, x: endX, y: y }, // Slide horizontally to the end position
                { type: 'pointerUp', button: 0 } // Release
            ]
        }]);
        await browser.releaseActions();
    }

    async click_sort_img1()
    {
        await this.sort_img1.click();
    }

    async Replace_img()
    {
        await this.replace.click();
    }

    async Edit_back()
    {
        await this.back.click();
    }

    async Click_sort_vid()
    {
        await this.sort_vid1.click()
    }

    async Edit_sound()
    {
        await this.sound.click();
    }





    // ========= Main Function =======

    async Edit_Run()
    {

        await this.Close_Premium();
        await this.Try_QC();
        await this.select_img_tab();
        await this.select_img1();
        await this.select_img2();
        await this.select_video_tab();
        await this.click_sort();
        await this.scrollScreen(500, 600, 500, 1600);
        await  this.Select_vid1();
        await this.Select_vid2();
        await this.Click_done();
        
        await this.click_edit();
        await this.click_sort_img1()

        // await  this.Drag_drop(128, 500, 1735);
        await this.Replace_img();
        await this.select_img_tab();
        await this.select_img5();
        await this.Click_done();

        await this.Click_sort_vid()
        await this.Edit_sound()



        // await this.Filter_check2();
        // await this.Filter_check3();
        // await this.Filter_check4();

        // await this.click_resolution();
        // await this.Cancel_resolution();
        // await this.click_resolution();
        // await this.click_resolution_720();
        // await this.Click_export();

    }

}

export default new QC_Edit();