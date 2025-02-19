import { $ } from '@wdio/globals' ;
import Subscription from '../pageobjects/BuyPremium.page.js';
import Sliders from '../pageobjects/sliders.page.js';

class Edit_Photo
{
    get photo()
    {
        return $('//android.view.ViewGroup[@content-desc="Edit, Photo"]/android.view.ViewGroup');
    }

    async Edit_photo()
    {
        await this.photo.click();
    }

    get img1()
    {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]');
    }

    async Select_Img1()
    {
        await this.img1.waitForDisplayed();
        await this.img1.click();
    }











    // ------ Main Function -----
    async Run_Photo_Editor(expected_text)
    {
        await Subscription.Check_Subscription(expected_text)
        await this.Edit_photo();
        await this.Select_Img1();

    }
}

export default new Edit_Photo();