import { $, browser } from '@wdio/globals' ;
import CheckLoginPage from '../pageobjects/checklogin.page.js';

class QucikCut
{
    get preiumCloseBtn () 
    {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
    }

    get create()
    {
        return $('//android.view.View[@content-desc="navi-edit-screen-button"]');
    }

    get QC()
    {
        return $('//android.view.ViewGroup[@content-desc="Try, Quick Cuts"]/android.view.ViewGroup');
    }

    get images_tab()
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

    get img_3()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[3]');
    }

    get img_4()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[4]');
    }

    get img_5()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[5]');
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

    get pause()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/play"]');
    }

    get video_tab()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/video_tab"]');
    }

    get gallery()
    {
        return $('//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="com.myzesty:id/nativegallery"]');
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

    async click_create()
    {
        await this.create.click();
    }

    async Try_QC()
    {
        await this.QC.click();
    }

    async select_img_tab()
    {
        await this.images_tab.click()
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

    async select_img3()
    {
        await this.img_3.click();   
    }

    async select_img4()
    {
        await this.img_4.click();   
    }

    async select_img5()
    {
        await this.img_5.click();   
    }

    async Done_btn()
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

    async Pause_btn()
    {
        await this.pause.waitForExist();
    }

    //============ Main Function =========

    async QC_Run()
    {
        await CheckLoginPage.login("umart4767@gmail.com", "Myzesty123");
        await browser.pause(2000);
        await this.click_create();
        await this.Try_QC();
        await this.select_img_tab();
        await this.select_img1();
        await this.select_img2();
        await this.select_img3();
        await this.select_img4();
        await this.select_img5();
        await this.Done_btn();
        // await browser.pause(3000);
        // await this.Pause_btn();
        // await this.Filter_check1();
        await this.Filter_check2();
    }

}

export default new QucikCut();