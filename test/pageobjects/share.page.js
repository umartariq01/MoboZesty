import { $, browser } from '@wdio/globals' ;
import CheckLoginPage from '../pageobjects/checklogin.page.js';
import assert from 'assert';
// const newlogin = new LoginPage();
class Share
{

    get share_tab()
    {
        return $('//android.view.View[@content-desc="navi-share-screen-button"]');
    }

    get close_share()
    {
        return $('//android.widget.TextView[@text=""]');
    }

    get media_1()
    {
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]');
    }

    get media_2()
    {
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]');
    }

    get Done()
    {
        return $('//android.view.View[@content-desc="Done"]');
    }

    get collect_name()
    {
        return $('//android.widget.EditText[@text="Collection Name"]');
    }

    get collect_desc()
    {
        return $('//android.widget.EditText[@text="Collection Description"]')
    }
    
    get add_image()
    {
        return $('//android.view.ViewGroup[@content-desc=", Add an image or a video"]');
    }

    get media_3()
    {
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]');
    }

    get post_btn()
    {
        return $('//android.view.View[@content-desc="Post"]');
    }

    get cancle()
    {
        return  $('//android.widget.TextView[@text=""]');
    }

    get upload_text()
    {
        return $('//android.widget.TextView[@text="Your collection has been uploaded! Refresh the page to view it."]');
    }

    //====================== Function to perform actions ==========================

    async click_share_tab()
    {
        await this.share_tab.click();
    }

    async close_tab()
    {
        await this.close_share.click();
    }

    async click_media_1()
    {
        await this.media_1.click();
    }

    async click_media_2()
    {
        await this.media_2.click();
    }

    async Done_Btn()
    {
        await this.Done.click();
    }

    async collection_name(text1)
    {
        await this.collect_name.sendKeys(text1);
    }

    async collection_desc(text2)
    {
        await this.collect_desc.sendKeys(text2);
    }

    async add_more_image()
    {
        await this.add_image.click();
    }

    async click_media_3()
    {
        await this.media_3.click();
    }

    async post_btn_click()
    {
        await this.post_btn.click();
    }

    async cancle_media()
    {
        await this.cancle.click();
    }

    async upload_confirm(expected_text)
    {
        await this.upload_text.waitForDisplayed({timeout:4000});
        const actual_text = await this.upload_text.getText();
        assert.strictEqual(actual_text, expected_text, "Upload colloection text not verified!")

    }
    // ================ Main Function ======================
    async sharemedia(text1, text2, expected_text)
    {
        
        await CheckLoginPage.login();
        await this.click_share_tab();
        await this.close_tab();
        await this.click_share_tab();
        await this.click_media_1();
        await this.click_media_2();
        await this.Done_Btn();
        await this.collection_name(text1);
        await this.collection_desc(text2);
        await this.add_more_image();
        await this.click_media_3();
        await this.cancle_media();
        await this.click_media_3();
        await this.Done_Btn();
        await this.post_btn_click();
        await this.upload_confirm(expected_text);

    }

}
export default new Share();