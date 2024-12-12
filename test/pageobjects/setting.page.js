import { $ } from '@wdio/globals' ;
import { remote } from 'webdriverio';
import assert from 'assert';
import CheckLoginPage from '../pageobjects/checklogin.page.js';
import { constants } from 'buffer';

class Settings
{
    //========= Function to get Element ========

    get profiletab()
    {
        return $('//android.view.View[@content-desc="navi-profile-button"]');
    }

    get settiing()
    {
        return $('//android.widget.TextView[@text="Settings"]');
    }

    get edit_profile()
    {
        return $('//android.widget.Button[@content-desc="settings-edit-profile-button"]');
    }

    get name()
    {
        return $('//android.widget.EditText[@content-desc="edit-profile-username"]');
    }

    get Ph_no()
    {
        return $('//android.widget.EditText[@content-desc="edit-profile-phone"]');
    }

    get location()
    {
        return $('//android.widget.EditText[@content-desc="edit-profile-location"]');
    }

    get bio()
    {
        return $('//android.widget.EditText[@content-desc="edit-profile-bio"]');
    }

    get save_btn()
    {
        return $('//android.widget.Button[@content-desc="edit-profile-save-button"]');
    }

    get back_btn()
    {
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]');
    }

    // ==============Privacy Tab===========
    get privacy()
    {
        return $('//android.widget.Button[@content-desc="settings-privacy-button"]');
    }

    get public() // Public 
    {
        return $('//android.widget.TextView[@content-desc="privacy-followers-public"]');
    }

    get followers() // Followers
    {
        return $('//android.widget.TextView[@content-desc="privacy-followers-followers"]');
    }

    get only_me() // Only me
    {
        return $('//android.widget.TextView[@content-desc="privacy-followers-only-me"]');
    }

    get public_1()
    {
        return $('//android.widget.TextView[@content-desc="privacy-following-public"]') ;
    }

    get followers_1()
    {
        return $('//android.widget.TextView[@content-desc="privacy-following-followers"]');
    }

    get only_me_1()
    {
        return $('//android.widget.TextView[@content-desc="privacy-following-only-me"]');
    }

    get dlt_acc() // Delete my account
    {
        return $('//android.widget.TextView[@text="Delete my account"]');
    }

    get dlt_acc_text()
    {
        return $('//android.widget.TextView[@text="Your account will be deactivated for 30 days, and during this time it will not be accessible to the public. To reactivate your account, simply log in at any time within the 30-day period. If you don’t reactivate your account, it will be permanently deleted along with all of your posts and information."]');
    }


    //========= Function to Perfom Actions =========

    async click_setting()
    {
        await this.settiing.click();
    }

    async Profile_Tab()
    {
        await this.profiletab.click();
    }

    async Edit_profile_btn()
    {
        await this.edit_profile.waitForDisplayed({timeout:3000});
        await this.edit_profile.click();
    }

    async Edit_name(New_name)
    {
        await this.name.clearValue();
        await this.name.setValue(New_name);
    }

    async Phone_No(Mbl_No)
    {
        await this.Ph_no.setValue(Mbl_No);
    }

    async Enter_Location(Location_area)
    {
        await this.location.setValue(Location_area);
    }

    async Enter_Bio(Bio_data)
    {
        await this.bio.setValue(Bio_data);
    }

    async click_save_btn()
    {
        await this.save_btn.click();
    }

    async Go_Back()
    {
        await this.back_btn.click()
    }

    // =========Privacy Function======

    async Click_Privacy()
    {
        await this.privacy.click();
    }


    async Public_text(expected_public)
    {
        await this.public.waitForDisplayed({timeout:3000});
        const actual_public = await this.public.getText();
        assert.strictEqual(actual_public, expected_public, "Followers Public text not verified!");
    }

    async Followers_text(expected_followers)
    {
        await this.followers.waitForDisplayed();
        const actual_followers = await this.followers.getText();
        assert.strictEqual(actual_followers, expected_followers, "Followers, followers text not verified!");
    }

    async Only_me_text(expected_onlyme)
    {
        await this.only_me.waitForDisplayed();
        const actual_onlyme = await this.only_me.getText();
        assert.strictEqual(actual_onlyme, expected_onlyme, "Followers only me text not veerified!");
    }

    async Public_text_1(expected_public1)
    {
        await this.public_1.waitForDisplayed();
        const actual_public1 = await this.public_1.getText();
        assert.strictEqual(actual_public1, expected_public1, "Following Public text not verified!");
    }

    async Follower_text_1(expected_followers1)
    {
        await this.followers_1.waitForDisplayed();
        const actual_follower1 = await this.followers_1.getText();
        assert.strictEqual(actual_follower1, expected_followers1, "Followinf follower text not verified!")
    }

    async Only_me_1(expected_onlyme1)
    {
        await this.only_me_1.waitForDisplayed();
        const actual_onlyme1 = await this.only_me_1.getText();
        assert.strictEqual(actual_onlyme1, expected_onlyme1, "Following onlyme text not verified!")
    }

    async Delete_Acc(Dlt_acc)
    {
        await this.dlt_acc.waitForDisplayed();
        const actual_dlt_acc = await this.dlt_acc.getText();
        assert.strictEqual(actual_dlt_acc, Dlt_acc, "Delete my account is not verified!")
    }

    async Delete_Acc_text(Dlt_text)
    {
        await this.dlt_acc_text.waitForDisplayed();
        const actual_dlt_text = await this.dlt_acc_text.getText();
        assert.strictEqual(actual_dlt_text, Dlt_text, "Delete text is not verified!")
    }


    //=========  Main Function =========

    async Edit_profile_run(New_name, Mbl_No, Location_area, Bio_data)
    {
        CheckLoginPage.login();
        await this.Profile_Tab();
        await this.click_setting();
        await this.Edit_profile_btn();
        await  this.Edit_name(New_name);
        await this.Phone_No(Mbl_No);
        await  this.Enter_Location(Location_area);
        await this.Enter_Bio(Bio_data);
        await this.click_save_btn();
        await this.Go_Back();
        await this.Go_Back();

    }

    async Privacy_run(expected_public, expected_followers, expected_onlyme,
        expected_public1, expected_followers1, expected_onlyme1, Dlt_acc, Dlt_text)
    {
        // Privacy Function calling
        await this.Click_Privacy();
        await this.Public_text(expected_public);
        await this.Followers_text(expected_followers);
        await this.Only_me_text(expected_onlyme);
        await this.Public_text_1(expected_public1);
        await this.Follower_text_1(expected_followers1);
        await this.Only_me_1(expected_onlyme1);
        await this.Delete_Acc(Dlt_acc);
        await this.Delete_Acc_text(Dlt_text);
    }
}

export default new Settings();