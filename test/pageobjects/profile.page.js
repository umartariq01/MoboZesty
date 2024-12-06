// import { $ } from '@wdio/globals' ;
// import { remote } from 'webdriverio';
// import assert from 'assert';
// import LoginPage from '../pageobjects/login.page.js';

// class Profile_Tab
// {
//     //========= Function to get Element values =========

//     get profiletab()
//     {
//         return $('//android.view.View[@content-desc="navi-profile-button"]');
//     }

//     get profile_btn()
//     {
//         return $('(//android.widget.TextView[@text="Profile"])[1]');
//     }

//     get followers()
//     {
//         return $('//android.widget.TextView[@content-desc="my-profile-followers"]');
//     }

//     get following()
//     {
//         return $('//android.widget.TextView[@content-desc="my-profile-following"]');
//     }

//     get collection()
//     {
//         return $('//android.widget.TextView[@content-desc="my-profile-collections"]');
//     }

//     get private()
//     {
//         return $('//android.widget.TextView[@content-desc="my-profile-private"]');
//     }

//     get favourite()
//     {
//         return $('//android.widget.TextView[@content-desc="my-profile-favorites"]');
//     }


//     //========= Function to perform Actions =========

//     async Profile_Tab()
//     {
//         await this.profiletab.click();
//     }

//     async profile_btn_click()
//     {
//         await this.profile_btn.click();
//     }

//     async followers_text()
//     {
//         await this.followers.waitForDisplayed() ;
//         const actual_text_1 = await this.followers.getText();
//         assert.strictEqual(actual_text_1, expected_text_1, "Follower assertion Failed!");
//         console.log("Followers assertion passed successfully..")
//         //assert this
//     }

//     async following_text()
//     {
//         await this.following.waitForDisplayed();
//         const actual_text_2 = await this.following.getText();
//         assert.strictEqual(actual_text_2, expected_text_2, "Following assertion Failed!");
//         console.log("Following assertion passed successfully..")
//         // assert here
//     }

//     async collection_text()
//     {
//         await this.collection.waitForDisplayed();
//         const actual_text_3 = await this.collection.getText();
//         assert.strictEqual(actual_text_3, expected_text_1, "Collection assertion Failed!");
//         console.log("Collection assertion passed successfully..")
//         //assert here
//     }

//     async private_text()
//     {
//         await this.private.waitForDisplayed();
//         const actual_text_4 = await this.private.getText();
//         assert.strictEqual(actual_text_4, expected_text_4, "Private assertion Failed!");
//         console.log("Private assertion passed successfully..")
//         //assert here
//     }

//     async favourite_text()
//     {
//         await this.favourite.waitForDisplayed();
//         const actual_text_5 = await this.favourite.getText();
//         assert.strictEqual(actual_text_5, expected_text_5, "Favourite assertion Failed!");
//         console.log("Favourite assertion passed successfully..")
//         //asseert here
//     }

//     //========= Main Function =========


//     async Profile_Action_Tab()
//     {
//         LoginPage.login();
//         await this.Profile_Tab();

//     }
// }