import { $, browser } from '@wdio/globals' ;
import Subscription from '../pageobjects/BuyPremium.page.js' ;

class QC_Run_Video
{

    get preiumCloseBtn () 
    {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
    }

    get QC()
    {
        return $('//android.view.ViewGroup[@content-desc="Try, Quick Cuts"]/android.view.ViewGroup');
    }

    get done()
    {
        return $('//android.widget.TextView[@text="DONE"]');
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

    get vid3()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[3]');
    }

    get sort()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/sorttype"]');
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

    get export()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/export"]');
    }


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

    async select_video_tab()
    {
        await this.video_tab.click()
    }

    async Click_sort()
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

    async Select_vid3()
    {
        await this.vid3.click();
    }

    async Click_done()
    {
        await this.done.click();
    }

    async Filter_check1()
    {
        await this.filter1.waitForClickable();
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

    async Filter_check5()
    {
        await this.filter2.click();
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

    async scrollScreenHorizontally(startX, endX, y, duration = 1000) {
        // Horizontal swipe: startX -> endX at a fixed vertical position (y)
        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
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

    async Click_export()
    {
        await this.export.click();
    }



    async  Run_QC_Vid()
    {
        await Subscription.Check_Subscription('Processing');
        await this.Try_QC();
        await this.select_video_tab();
        await this.Click_sort();
        await this.scrollScreen(500, 600, 500, 1600);
        await this.Select_vid1();
        // await this.Select_vid2();
        // await this.Select_vid3();
        await this.Click_done();
        // await browser.pause(5000);

        await this.Filter_check2();
        await this.Filter_check3();
        await this.Filter_check4();
        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Click_export();

        
    }

}

export default new QC_Run_Video()