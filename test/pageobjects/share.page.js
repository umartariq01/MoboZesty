import { $ } from '@wdio/globals' ;
import LoginPage from '../pageobjects/login.page.js';
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
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]');
    }

    get media_2()
    {
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[2]');
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
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView');
    }

    get post_btn()
    {
        return $('//android.view.View[@content-desc="Post"]');
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

    async collection_name()
    {
        await this.collect_name.sendKeys();
    }

    async collection_desc()
    {
        await this.collect_desc.sendKeys();
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
    // ================ Main Function ======================
    async sharemedia()
    {
        
        await LoginPage.login();
        await this.click_share_tab();
        await this.close_tab();
        await this.click_share_tab();
        await this.click_media_1();
        await this.click_media_2();
        await this.Done_Btn();
        await this.collection_name();
        await this.collection_desc();
        await this.add_more_image();
        await this.post_btn_click();





    }

}
export default new Share();