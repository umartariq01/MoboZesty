import { $, browser } from '@wdio/globals' ;
import assert from 'assert';
import Subscription from '../pageobjects/BuyPremium.page.js' ;
import Sliders from '../pageobjects/sliders.page.js';;

class Profile_Tab
{
    //========= Function to get Element values =========

    get profiletab()
    {
        return $('//android.view.View[@content-desc="navi-profile-button"]');
    }

    get profile_btn()
    {
        return $('(//android.widget.TextView[@text="Profile"])[1]');
    }

    get followers()
    {
        return $('//android.widget.TextView[@content-desc="my-profile-followers"]');
    }

    get following()
    {
        return $('//android.widget.TextView[@content-desc="my-profile-following"]');
    }

    get collection()
    {
        return $('//android.widget.TextView[@content-desc="my-profile-collections"]');
    }

    get private()
    {
        return $('//android.widget.TextView[@content-desc="my-profile-private"]');
    }

    get favourite()
    {
        return $('//android.widget.TextView[@content-desc="my-profile-favorites"]');
    }

    get back_btn()
    {
        return $('//android.widget.TextView[@text=""]');
    }

    get profile_img()
    {
        return $('//android.widget.ImageView[@content-desc="my-profile-image"]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView | //android.widget.ImageView[@content-desc="main-menu-profile-image"]');
    }

    get choose_img()
    {
        return $('//android.widget.TextView[@text="Choose photo"]');
    }

    get imgg_1()
    {
        return  $('(//android.widget.ImageView[@resource-id="com.google.android.providers.media.module:id/icon_thumbnail"])[1]');
    }

    get profile_success_alert()
    {
        return $('//android.widget.TextView[@content-desc="success-update-message"]');
    }

    get profile_success_alert_OK()
    {
        return $('//android.widget.Button[@content-desc="success-message-ok-button"]');
    }


    //========= Function to perform Actions =========

    async Profile_Tab()
    {
        await this.profiletab.click();
    }

    async profile_btn_click()
    {
        await this.profile_btn.click();
    }

    async followers_text(expected_text_1)
    {
        await this.followers.waitForDisplayed() ;
        const actual_text_1 = await this.followers.getText();
        assert.strictEqual(actual_text_1, expected_text_1, "Follower assertion Failed!");
        console.log("Followers assertion passed successfully..")
    }

    async following_text(expected_text_2)
    {
        await this.following.waitForDisplayed();
        const actual_text_2 = await this.following.getText();
        assert.strictEqual(actual_text_2, expected_text_2, "Following assertion Failed!");
        console.log("Following assertion passed successfully..")
    }

    async collection_text(expected_text_3)
    {
        await this.collection.waitForDisplayed();
        const actual_text_3 = await this.collection.getText();
        assert.strictEqual(actual_text_3, expected_text_3, "Collection assertion Failed!");
        console.log("Collection assertion passed successfully..")
    }

    async private_text(expected_text_4)
    {
        await this.private.waitForDisplayed();
        const actual_text_4 = await this.private.getText();
        assert.strictEqual(actual_text_4, expected_text_4, "Private assertion Failed!");
        console.log("Private assertion passed successfully..")
    }

    async favourite_text(expected_text_5)
    {
        await this.favourite.waitForDisplayed();
        const actual_text_5 = await this.favourite.getText();
        assert.strictEqual(actual_text_5, expected_text_5, "Favourite assertion Failed!");
        console.log("Favourite assertion passed successfully..")
    }

    async go_back()
    {
        await this.back_btn.click();
    }

    async Click_Profile_Img()
    {
        await this.profile_img.click();
    }

    async Click_Choose_Img()
    {
        await this.choose_img.click();
    }

    async Select_Img()
    {
        await this.imgg_1.click();
    }

    async Verify_Profile_Img_Alert(expected_alert) {
        // Check if the alert is displayed within the timeout
        if (await this.profile_success_alert.waitForDisplayed({ timeout: 10000 }).catch(() => false)) 
        {
            const actual_alert = await this.profile_success_alert.getText();
            assert.strictEqual(actual_alert, expected_alert, "Profile Pic updated alert not verified.");
            await this.profile_success_alert_OK.click();
        } 
        else 
        {
            console.log(" Profile Pic updated alert did not appear.");
        }
    }
    

    // .............. Profile Section ............

    get profile()
    {
        return $('(//android.widget.TextView[@text="Profile"])[1]'); // Profile
    }

    get notification()
    {
        return $('//android.widget.TextView[@text="Notifications"]'); // Notifications
    }

    get Chat()
    {
        return $('//android.widget.TextView[@text="Chat"]'); // Chat
    }

    get private_collection()
    {
        return $('//android.widget.TextView[@text="Private Collection"]'); // Private Collection
    }

    get settings()
    {
        return $('//android.widget.TextView[@text="Settings"]'); // Settings
    }

    get cancel_subscription()
    {
        return $('//android.widget.TextView[@text="Cancel Subscription"]'); // Cancel Subscription
    }

    get about()
    {
        return $('//android.widget.TextView[@text="About"]'); // About
    }

    get contact_us()
    {
        return $('//android.widget.TextView[@text="Contact Us"]'); // Contact Us
    }

    get invite_friends()
    {
        return $('//android.widget.TextView[@text="Invite Friends to Join"]'); // Invite Friends to Join
    }

    get rate_myzesty()
    {
        return $('//android.widget.TextView[@text="Rate MyZesty"]'); // Rate MyZesty
    }

    get term_condition()
    {
        return $('//android.widget.TextView[@text="Terms & Conditions"]');  // Terms & Conditions
    }

    get privacy_policy()
    {
        return $('//android.widget.TextView[@text="Privacy Policy"]'); // Privacy Policy
    }

    get features()
    {
        return $('//android.widget.TextView[@text="Features"]'); // Features
    }

    get blog()
    {
        return $('//android.widget.TextView[@text="Blog"]'); //  Blog
    }

    async Verify_Profile(expected_profile)
    {
        await this.profile.waitForDisplayed();
        const actual_profile = await this.profile.getText();
        assert.strictEqual(actual_profile, expected_profile, 'Profile text not verified.');

    }

    async Verify_Notification(expected_notification)
    {
        await this.notification.waitForDisplayed();
        const actual_notification = await this.notification.getText();
        assert.strictEqual(actual_notification, expected_notification, "Notification text not verified.");
    }

    async Verify_Chat(expected_chat)
    {
        await this.Chat.waitForDisplayed();
        const actual_Chat = await this.Chat.getText();
        assert.strictEqual(actual_Chat, expected_chat, "Chat text not verified.");
    }

    async Verify_Private_Collection(expected_collection_text)
    {
        await this.private_collection.waitForDisplayed();
        const actual_collection_text = await this.private_collection.getText();
        assert.strictEqual(actual_collection_text, expected_collection_text, 'Private Collection text not verified.');
    }

    async Verify_Settings(expected_setting)
    {
        await this.settings.waitForDisplayed();
        const actual_setting = await this.settings.getText();
        assert.strictEqual(actual_setting, expected_setting, 'Settings text not verified.');
    }

    async Verify_Cancel_Subscription(expected_subscription)
    {
        await this.cancel_subscription.waitForDisplayed();
        const actual_subscription = await this.cancel_subscription.getText();
        assert.strictEqual(actual_subscription, expected_subscription, 'Canacel Subscription text not verified.')
    }

    async Verify_About(expected_about)
    {
        await this.about.waitForDisplayed();
        const actual_about = await this.about.getText();
        assert.strictEqual(actual_about, expected_about, 'About text not verified.');
    }

    async Verify_Contact_Us(expected_contact_us)
    {
        await this.contact_us.waitForDisplayed();
        const actual_contact_us = await this.contact_us.getText();
        assert.strictEqual(actual_contact_us, expected_contact_us, 'Contact Us text not verified.');
    }

    async Verify_Invite(expected_invite_text)
    {
        await this.invite_friends.waitForDisplayed();
        const actual_invite_text = await this.invite_friends.getText();
        assert.strictEqual(actual_invite_text, expected_invite_text,  'Invite Friends text not verified.');
    }

    async Verify_Rate_Myzesty(expected_rate_myzesty)
    {
        await this.rate_myzesty.waitForDisplayed();
        const actual_rate_myzesty = await this.rate_myzesty.getText();
        assert.strictEqual(actual_rate_myzesty, expected_rate_myzesty, 'Rate MtyZesty text not verified.');
    }

    async Verify_Terms_Condition(expected_terms_text)
    {
        await this.term_condition.waitForDisplayed();
        const actual_terms_text = await this.term_condition.getText();
        assert.strictEqual(actual_terms_text, expected_terms_text, 'Terms & Condition text not verified.');
    }

    async Verify_Privacy_Policy(expected_privacy_policy)
    {
        await this.privacy_policy.waitForDisplayed();
        const actual_privacy_policy = await this.privacy_policy.getText();
        assert.strictEqual(actual_privacy_policy, expected_privacy_policy, 'Privacy Policy text not verified.') ;
    }

    async Verify_Features(expected_features)
    {
        await this.features.waitForDisplayed();
        const actual_features = await this.features.getText();
        assert.strictEqual(actual_features, expected_features, 'Features text not verified.') ;
    }

    async Verify_Blog(expected_blog)
    {
        await this.blog.waitForDisplayed();
        const actual_blog = await this.blog.getText();
        assert.strictEqual(actual_blog, expected_blog, 'Blog text not verified.');
    }

    //========= Main Function =========


    async Profile_Action_Tab(expected_alert, expected_text_1, expected_text_2, expected_text_3, expected_text_4, expected_text_5)
    {
        await Subscription.Check_Subscription('Processing');
        await this.Profile_Tab();
        await this.profile_btn_click();
        await this.Click_Profile_Img();
        await this.Click_Choose_Img();
        await this.Select_Img();
        await browser.pause(5000);
        await this.Verify_Profile_Img_Alert(expected_alert);
        await this.followers_text(expected_text_1);
        await this.following_text(expected_text_2);
        await this.collection_text(expected_text_3);
        await this.private_text(expected_text_4);
        await this.favourite_text(expected_text_5);
        await this.go_back();

    }

    async Profile_Tabs_Verification(
        expected_profile, expected_notification, expected_chat, expected_collection_text,
        expected_setting, expected_subscription, expected_about, expected_contact_us,
        expected_invite_text, expected_rate_myzesty, expected_terms_text, expected_privacy_policy,
        expected_features, expected_blog

    )
    {
        await this.Verify_Profile(expected_profile);
        await this.Verify_Notification(expected_notification);
        await this.Verify_Chat(expected_chat);
        await this.Verify_Private_Collection(expected_collection_text);
        await this.Verify_Settings(expected_setting);
        await this.Verify_Cancel_Subscription(expected_subscription);
        await this.Verify_About(expected_about);
        await this.Verify_Contact_Us(expected_contact_us);
        await this.Verify_Invite(expected_invite_text);
        await this.Verify_Rate_Myzesty(expected_rate_myzesty);
        await this.Verify_Terms_Condition(expected_terms_text);
        await this.Verify_Privacy_Policy(expected_privacy_policy);
        await Sliders.scrollScreen(450, 1860, 450, 1044);
        await this.Verify_Features(expected_features);
        await this.Verify_Blog(expected_blog);

    }
}

export default new Profile_Tab();