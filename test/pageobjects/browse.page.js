import assert from 'assert';
import { $, browser, driver } from '@wdio/globals' ;
import Sliders from '../pageobjects/sliders.page.js';
import Subscription from '../pageobjects/BuyPremium.page.js';
import CheckLoginPage from '../pageobjects/checklogin.page.js';
import Share from '../pageobjects/share.page.js';
import { error } from 'console';

class Browse
{
    // ============ Get function ============
    get browse_tab()
    {
        return $('//android.view.View[@content-desc="navi-browse-screen-button"]');
    }

    get option_btn()
    {
        return $('(//android.widget.TextView[@text=""])[1]');
    }

    get my_fav() // My favorites
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-my-favorites-text"]');
    }

    get edit_collection()
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-edit-collection-text"]') ;
    }

    get save_media()
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-save-media-text"]');
    }


    get share() // Share
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-share-text"]');
    }

    get report() // Report
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-report-text"]');
    }

    get content()
    {
        return $('(//android.widget.ImageView[@content-desc="feed-screen-content"])[1]');
    }

    get thumbs_up()
    {
        return $('//android.widget.TextView[@text=""]');
    }

    get double_thumbs_up()
    {
        return $('//android.widget.TextView[@text=""]')
    }

    get thumbs_down()
    {
        return $('//android.widget.TextView[@text=""]');
    }

    get comment()
    {
        return $('//android.widget.TextView[@text=""]');
    }

    get delete()
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-delete-text"]') ;
    }

    //=========================== Check Login Functionality =================================

    get profiletab()
    {
        return $('//android.view.View[@content-desc="navi-profile-button"]');
    }

    get logintab()
    {
        return $('(//android.widget.TextView[@text="Login"])[2]');
    }

    get emailinput()
    {
        return $('//android.widget.EditText[@content-desc="email-input"]');
    }

    get passwordinput()
    {
        return  $('//android.widget.EditText[@content-desc="password-input"]');
    }

    get loginbtn()
    {
        return  $('//android.widget.Button[@content-desc="login-button"]');
    }

    get login_text_1()
    {
        return $('//android.widget.TextView[@content-desc="login-text"]');
    }

    get login_text_2()
    {
        return $('//android.widget.TextView[@content-desc="login-to-your-account"]');
    }

    get settiing()
    {
        return $('//android.widget.TextView[@text="Settings"]');
    }

    get logout()
    {
        return $('//android.widget.Button[@content-desc="settings-log-out-button"]');
    }

    get create_account()
    {
        return $('//android.widget.TextView[@text="Create an Account"]');
    }

    get click_comment()
    {
        return $('//android.view.View[@content-desc="navi-browse-screen-button"]/android.view.ViewGroup');
    }

    get write_comment()
    {
        return $('//android.widget.EditText[@content-desc="comment-input"]');
    }

    get post_comment()
    {
        return $('//android.widget.TextView[@text=""]');
    }

    get User_Name()
    {
        return $('//android.widget.TextView[@content-desc="username-text"]');
    }

    get browse_user_name()
    {
        return $('(//android.widget.TextView[@content-desc="feed-screen-username"])[1]')
    }

    get delete_collection()
    {
        return $('//android.widget.TextView[@content-desc="feed-screen-kebab-delete-text"]');
    }

    get delete_block_text()
    {
        return $('//android.widget.TextView[@content-desc="error-message"]');
    }

    get confirm_dlt_btn()
    {
        return $('//android.widget.Button[@content-desc="error-ok-button"]');
    }

    get inappropriate()
    {
        return $('//android.widget.Button[@content-desc="report-post-inappropriate"]/android.view.ViewGroup');
    }

    get report_btn()
    {
        return $('//android.widget.Button[@content-desc="report-post-report"]');
    }

    get report_sent_msg()
    {
        return $('//android.widget.TextView[@content-desc="report-post-success-message"]');
    }

    get alert_ok_btn()
    {
        return $('//android.widget.TextView[@text="Ok"]');
    }

    get block_user()
    {
        return $('//android.widget.Button[@content-desc=", feed-screen-kebab-block-user-text"]');
    }

    get confirm_block()
    {
        return $('//android.widget.TextView[@text="Yes"]');
    }


    //=======================================================================================

    // ========================= Login Function Action ======================================

    async Verify_Block_User()
    {
        await this.block_user.click();
        await this.delete_block_text.waitForDisplayed();
        const actual_block_text = await this.delete_block_text.getText();
        assert.strictEqual(actual_block_text, 'Are you sure you want to block this user?', 'Block User text not verified.');
        await this.confirm_block.click();

        await this.Refresh_Page();
        await browser.pause(2000);
        await Sliders.scrollScreen(500, 2000, 500, 300, 2);

    }

    async Click_Report_User(expected_report_msg) 
    {
        await this.inappropriate.click();
        await this.report_btn.click();
    
        try {
            // Wait for either "Report Sent" or "Report Already Received" message
            await this.report_sent_msg.waitForDisplayed({ timeout: 5000 });
    
            // Check if the "Report Sent" message is displayed
            const actual_report_msg = await this.report_sent_msg.getText();
    
            if (actual_report_msg === "Report already received: This user has been reported") {
                console.log("User is already reported.");
            } else {
                assert.strictEqual(actual_report_msg, expected_report_msg, "User Reported message not verified.");
            }
    
            await this.alert_ok_btn.click();
        } catch (error) {
            console.error("Error while reporting user: ", error);
        }
    }
    
    
    async Click_Dlt_Collection()
    {
        await this.delete_collection.click();
    }
    async Profile_Tab()
    {
        await this.profiletab.click();
    }

    async Login_Tab()
    {
        await this.logintab.click();
    }

    async Enter_Email(username)
    {
        await this.emailinput.setValue(username);
    }

    async Enter_Password(password)
    {
        await  this.passwordinput.click();
        await this.passwordinput.addValue(password);

    }

    async Login_Button()
    {
        await this.loginbtn.click();
    }

    async Create_Account_Link()
    {
        await this.create_account.waitForExist({timeout:3000});
    }

    async click_setting()
    {
        await this.settiing.click();
    }

    async click_logout()
    {
        await this.logout.click();
    }
    
    // ======================================================================================


    // ========== Action perfom function =========

   
    async Verify_Delete_Text(expected_delete_text)
    {
        await this.delete_block_text.waitForDisplayed();
        const actual_dlt_text = await this.delete_block_text.getText();
        assert.strictEqual(actual_dlt_text, expected_delete_text, 'Confirmation delete text not verified.');
        await this.confirm_dlt_btn.click();
    }
    async click_browse_tab()
    {
        await  this.browse_tab.click()
    }

    async scrollScreen() 
    {
        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 500, y: 222 },
                { type: 'pointerDown', button: 0 },
                // { type: 'pause', duration: 1000 },
                { type: 'pointerMove', duration: 500, origin: 'pointer', x: 500, y: 1932 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        
    }

    async Refresh_Page() {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 500, y: 222 },  // Start point
                { type: 'pointerDown', button: 0 },                    // Touch down
                { type: 'pointerMove', duration: 1000, x: 500, y: 1932 }, // Swipe down
                { type: 'pointerUp', button: 0 }                       // Release touch
            ]
        }]);
    }
    

    async tapScreen(x, y) {
        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: x, y: y },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        
    }

    async option_btn_click()
    {
        await this.option_btn.click();
    }

    async my_fav_text(expected_value)
    {
        await this.my_fav.waitForDisplayed();
        const actual_value = await this.my_fav.getText();
        assert.strictEqual(actual_value, expected_value, "My favourite text is not verified!")
    }

    async Edit_My_Collection(expected_collection)
    {
        await this.edit_collection.waitForDisplayed();
        const actual_collection = await this.edit_collection.getText();
        assert.strictEqual(actual_collection, expected_collection, "Edit My Collection text not asserted.")
    }

    async Save_Media_Device(expected_media)
    {
        await this.save_media.waitForDisplayed();
        const actual_media = await this.save_media.getText();
        assert.strictEqual(actual_media, expected_media, "Save media to your device text not asserted.")
    }

    async share_text(expected_value_1)
    {
        await this.share.waitForDisplayed();
        const actual_value_1 = await this.share.getText();
        assert.strictEqual(actual_value_1, expected_value_1, "Share text is not verified!");
    }

    async Delete_Text(expected_delete)
    {
        await this.delete.waitForDisplayed();
        const actual_delete = await this.delete.getText();
        assert.strictEqual(actual_delete, expected_delete, "Delete text not asserted." )
    }

    async report_text(expected_value_2)
    {
        await  this.report.waitForDisplayed();
        const actual_value_2 = await this.report.getText();
        assert.strictEqual(actual_value_2, expected_value_2, "Report text is not verified!")
    }

    async Click_Report_Btn()
    {
        await this.report.click();
    }

    async check_thumbs_up()
    {
        try{

            if(await this.thumbs_up.isDisplayed())
            {
                await this.thumbs_up.click();
                const isLogin_Displayed = await $('//android.widget.Button[@content-desc="login-button"]');
                if(await isLogin_Displayed.waitForDisplayed())
                {
                    console.log("Redirected to Login Page");
                    await CheckLoginPage.Simple_Login();
                    await browser.pause(3000);
                    await this.thumbs_up.click();

                }
                else
                {
                    console.log('Not redirected to the login page.');
                }
            }
        }
        catch(error)
        {
            console.error("Error in check_thumbs_up():", error);
        }
    }




    async check_double_thumbs_up()
    {
        if(this.double_thumbs_up.isDisplayed())
        {
            await this.double_thumbs_up.click();
            console.log("Double thumbs Up Clicked.");
        }
        else
        {
            console.log("Error in finding double Thumbs Up!");
        }
    }

    async check_thumbs_down()
    {
        if(this.thumbs_down.isDisplayed())
        {
            await this.thumbs_down.click();
            console.log("Thumbs down Clicked.")
        }
        else
        {
            console.log("Error finding thumbd down!")
        }
    }

    async check_comment(add_comment)
    {
        if(this.comment.isDisplayed())
        {
            await this.comment.click();
            await this.click_comment.waitForDisplayed();
            await this.click_comment.click();
            await this.write_comment.setValue(add_comment);
            await this.post_comment.click();
            console.log("Comment is posted.");
            await browser.pause(2000);
        }
        else
        {
            console.log("Error finding comment!");
            browser.pause(5000);
        }
    }

    async Verify_User(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete)
    {
        await this.Profile_Tab();
        const Actual_User = await this.User_Name.getText();
        await browser.pause(2000);

        await this.click_browse_tab();
        const Browse_User = await this.browse_user_name.getText();

        if(Actual_User == Browse_User)
        {
            await this.User_Matched(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete);
            // call the function which contains edit collection
        }
        else
        {
            await  this.User_Mismatched(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete);
            // call the function for general user
        }

    }

    async Verify_User_to_Delete_Collection() {
        // Step 1: Navigate to Profile Tab and Get Actual User
        await this.Profile_Tab();
        const Actual_User = await this.User_Name.getText();
        console.log(`Actual User: ${Actual_User}`);
    
        let Browse_User = "";
        let maxRetries = 10; // Limit retries to prevent infinite loops
        let attempts = 0;
    
        // Step 2: Keep refreshing until users match or max retries reached
        while (Actual_User !== Browse_User && attempts < maxRetries) {
            // Switch to Browse Tab
            await this.click_browse_tab();
            Browse_User = await this.browse_user_name.getText();
            console.log(`Attempt ${attempts + 1}: Browse User - ${Browse_User}`);
    
            // Break the loop if users match
            if (Actual_User === Browse_User) {
                console.log("User matched successfully!");
                break;
            }
    
            // Refresh the screen if users do not match
            console.log("Users do not match. Refreshing...");
            await this.Refresh_Page(); // Ensure refreshPage() is defined
            attempts++;
    
            // Optional: Add a small delay between retries to avoid rapid refreshing
            await browser.pause(4000);
        }
    }
    

    async Verify_Loggedout_Browse()
    {
        const thumbsup_visible = await this.thumbs_up.waitForDisplayed();
        if(thumbsup_visible)
        {
            console.log('Thumbs Up Visible.');
        }
        else
        {
            console.error('Thumbs Up not visible.');
        }

        const double_thumbs_up_visible = await this.double_thumbs_up.waitForDisplayed();
        if(double_thumbs_up_visible)
        {
            console.log('Double Thumbs Up visible.');
        }
        else
        {
            console.error('Double Thumbs Up not visible.');
        }

        const thumbs_down_visible = await this.thumbs_down.waitForDisplayed();
        if(thumbs_down_visible)
        {
            console.log('Thumbs Down Visible');
        }
        else
        {
            console.error('Thumbs Down not Visible.');
        }

        const comments_visiible = await this.comment.waitForDisplayed();
        if(comments_visiible)
        {
            console.log('Comments visible.');
        }
        else
        {
            console.error('comments not Visible.');
        }
    }

    async User_Matched(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete)
    {
        await this.scrollScreen();
        await browser.pause(2000);
        await this.option_btn_click();
        await this.my_fav_text(expected_value);
        await this.Edit_My_Collection(expected_collection);
        await this.Save_Media_Device(expected_media);
        await this.share_text(expected_value_1);
        await this.Delete_Text(expected_delete);
        await this.tapScreen(540,812);
        await this.check_thumbs_up();
        await this.check_double_thumbs_up();
        await this.check_thumbs_down();
        await this.check_comment('This is comment when user matched.');
        await Sliders.tapScreen(500, 600);
        await Sliders.scrollScreen(500, 2000, 500, 300, 2); // Scroll bottom to top
        await browser.pause(3000);
        await Sliders.scrollScreen(500, 300, 500, 2000, 2); // Scroll top to bottom
    }

    async User_Mismatched(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete)
    {
        await this.scrollScreen();
        await browser.pause(2000);
        await this.option_btn_click();
        await this.my_fav_text(expected_value);
        await this.share_text(expected_value_1);
        await this.report_text(expected_value_2);
        await this.tapScreen(540,812);
        await this.check_thumbs_up();
        await this.check_double_thumbs_up();
        await this.check_thumbs_down();
        await this.check_comment('This is comment when user mismatched');
        await Sliders.tapScreen(500, 600);
        await Sliders.scrollScreen(500, 2000, 500, 300, 2); // Scroll bottom to top
        await browser.pause(3000);
        await Sliders.scrollScreen(500, 300, 500, 2000, 2); // Scroll top to bottom
    }

    
    async Logout_Browse(expected_value, expected_value_1, expected_value_2)
    {
        await this.click_browse_tab();
        await this.scrollScreen();
        await browser.pause(2000);
        await this.option_btn_click();
        await this.my_fav_text(expected_value);
        await this.share_text(expected_value_1);
        await this.report_text(expected_value_2);
        await this.tapScreen(540,812);
        await this.Verify_Loggedout_Browse();
        await Sliders.scrollScreen(500, 2000, 500, 300, 4); // Scroll bottom to top
        await browser.pause(3000);
        await Sliders.scrollScreen(500, 300, 500, 2000, 2); // Scroll top to bottom
    }

    async Login_Browse(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete)
    {

        await this.Verify_User(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete);

    }

    async loginToMyZesty(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete)
    {
        if(await this.create_account.isDisplayed())
        {
            await this.Logout_Browse(expected_value, expected_value_1, expected_value_2);
        }

        else if (await this.settiing.isDisplayed())
        {
            await this.Login_Browse(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete)
        }
    }

    // ============ Main Function =================

    async run_browse(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete)
    {
        await Subscription.Check_Subscription('Processing');
        await this.Profile_Tab();
        await this.loginToMyZesty(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete);

    }

    // ...... Verify delete Collection .....

    async Verify_Delete_Collection(expected_delete_text, expected_report_msg)
    {
        await Share.sharemedia("New Collection", "This is description", "Uploading completed successfully");
        await browser.pause(1000);
        await this.Verify_User_to_Delete_Collection();
        await this.option_btn_click();
        await this.Click_Dlt_Collection();
        await this.Verify_Delete_Text(expected_delete_text);
        // Report user
        await this.scrollScreen();
        await this.option_btn_click();
        await this.Click_Report_Btn();
        await this.Click_Report_User(expected_report_msg);
        // Block user
        await this.scrollScreen();
        await browser.pause(2000);
        await this.option_btn_click();
        await this.Verify_Block_User();

    }

    // ...... Verify user Followed or Not ......

    get follow()
    {
        return $('(//android.view.ViewGroup[@content-desc="feed-screen-username, feed-screen-created-date, feed-screen-views"])[1]/android.view.ViewGroup[2]/android.widget.TextView[2]'); // Follow
    }

    get profile_user_name()
    {
        return $('//android.widget.TextView[@content-desc="username-text"]');
    }

    get following()
    {
        return $('//android.widget.TextView[@content-desc="my-profile-following"]');
    }

    // get following_list()
    // {
    //     return $('//android.widget.ScrollView/android.view.ViewGroup');
    // }

    get following_user()
    {
        return $('(//android.widget.TextView[@text="Following"])[1]');
    }



    async Check_Follow()
    {
        const isVisible = await this.follow.isExisting();

        if(isVisible)
        {
            const actual_follow = await this.follow.getText();
            assert.strictEqual(actual_follow, 'Follow', 'Follow text not asserted')
            await this.follow.click();
            const isLogin_Displayed = await $('//android.widget.Button[@content-desc="login-button"]');

            if(await isLogin_Displayed.isDisplayed())
            {
                console.log("Redirected to Login Page");
                await CheckLoginPage.Simple_Login();
                await browser.pause(3000);
                this.Broswe_User = await this.browse_user_name.getText();
                await this.follow.click();
                await this.Confirm_Followed_User();
            }
            else
            {
                this.Broswe_User = await this.browse_user_name.getText();
                console.log("Followed User: ", this.Broswe_User);
                // await this.follow.click();
                await this.Confirm_Followed_User();
            }

        }
        else
        {
            console.log("User already followed.");
            this.Broswe_User = await this.browse_user_name.getText();
            const following_visible = await this.following_user.isExisting();
            const following_text = await this.following_user.getText();
            assert.strictEqual(following_text, 'Following', 'Following text not asserted.');

            if(following_visible)
            {
                await this.following_user.click();
                await browser.pause(2000);

                await this.Confirm_Unfollowed_User();
            }
            else
            {
                console.log("following button not visible.")
            }

        }
    }

    // This function will verify the user from the following list
    async Assert_User() {
        if (this.Broswe_User) {    
            // Wait for the main container to load
            const mainContainer = await $('//android.widget.HorizontalScrollView');
            await mainContainer.waitForExist({ timeout: 10000 });
            // Get all follower elements
            const userList = await mainContainer.$$('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView');
            console.log(`Total users found: ${userList.length}`);
    
            const usernames = [];
    
            for (const user of userList) {
                // Extract follower name using content-desc attribute
                const userNameElement = await user.$('.//android.widget.TextView');
                if (await userNameElement.isDisplayed()) {
                    usernames.push(await userNameElement.getText());
                }
            }
    
            console.log('User List:', usernames);
            console.log("Browse user: ", this.Broswe_User)
    
            browser.pause(3000);
    
            // Assert if the target user exists in the list
            assert.ok(usernames.includes(this.Broswe_User), `User ${this.Broswe_User} not found in the list.`);
        } else {
            throw new Error('Broswe_User is not set.');
        }
    }

    async Assert_User_Unfollowed() 
    {
        if (this.Broswe_User) {    
            // Wait for the main container to load
            const mainContainer = await $('//android.widget.HorizontalScrollView');
            await mainContainer.waitForExist({ timeout: 10000 });
            // Get all follower elements
            const userList = await mainContainer.$$('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView');
            console.log(`Total users found: ${userList.length}`);
    
            const usernames = [];
    
            for (const user of userList) {
                // Extract follower name using content-desc attribute
                const userNameElement = await user.$('.//android.widget.TextView');
                if (await userNameElement.isDisplayed()) {
                    usernames.push(await userNameElement.getText());
                }
            }
    
            console.log('User List:', usernames);
    
            browser.pause(3000);
    
            // Assert if the target user exists in the list
            if(!usernames.includes(this.Broswe_User))
            {
                console.log(`Success: User "${this.Broswe_User}" is NOT found in the list.`);
            }
            else
            {
                throw new error(`Error, User "${this.Broswe_User}" is present in List.`);
            }
        }
    }
    

    async get_browse_Username()
    {
        await this.browse_user_name.getText();
    }

    // To confirm wether the user is followed or not by me.
    async Confirm_Followed_User()
    {
        await this.Profile_Tab();
        await this.profile_user_name.click();
        await this.following.click();
        await this.Assert_User();
    }

    // To confirm wether user is unfollowed or not.
    async Confirm_Unfollowed_User()
    {
        await this.Profile_Tab();
        await this.profile_user_name.click();
        await this.following.click();
        await this.Assert_User_Unfollowed();
    }

    async Verify_User_Follow()
    {
        await Sliders.scrollScreen(500, 300, 500, 2000, 1);
        await this.Check_Follow();
    }
}

export default new Browse();