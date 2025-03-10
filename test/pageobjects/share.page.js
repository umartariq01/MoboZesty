import { $, browser } from '@wdio/globals' ;
import CheckLoginPage from '../pageobjects/checklogin.page.js';
import assert from 'assert';
import Subscription from '../pageobjects/BuyPremium.page.js';
import Sliders from '../pageobjects/sliders.page.js';
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
        return $('//android.widget.TextView[@text="Uploading completed successfully"]');
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
        await this.collect_name.setValue(text1);
    }

    async collection_desc(text2)
    {
        await this.collect_desc.setValue(text2);
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
        await this.upload_text.waitForDisplayed();
        const actual_text = await this.upload_text.getText();
        assert.strictEqual(actual_text, expected_text, "Upload colloection text not verified!")

    }

    // Function to dynamically select 20 images
async selectImages(count) {
    let imagesSelected = 0;
    let hasScrolled = false;
    let rowOffset = 0;

    for (let row = 1; imagesSelected < count; row++) {
        for (let col = 1; col <= 3 && imagesSelected < count; col++) {
            // Construct the dynamic XPath (rows increase continuously)
            let xpath = `//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[${row}]/android.view.ViewGroup[${col}]`;

            // Check if the image exists
            const image = await $(xpath);

            if (await image.isDisplayed()) {
                await image.click(); // Select the image
                console.log(`Image ${imagesSelected + 1} selected.`);
                imagesSelected++;
            }

            // Scroll when 15 images are selected
            if (imagesSelected === 15 && !hasScrolled) {
                await browser.performActions([
                    {
                        type: 'pointer',
                        id: 'finger1',
                        parameters: { pointerType: 'touch' },
                        actions: [
                            { type: 'pointerMove', duration: 0, x: 500, y: 1780 },
                            { type: 'pointerDown', button: 0 },
                            { type: 'pause', duration: 500 },
                            { type: 'pointerMove', duration: 2000, x: 500, y: 500 },
                            { type: 'pointerUp', button: 0 }
                        ]
                    }
                ]);

                await driver.pause(1000); // Allow time for images to load
                rowOffset += row;
                row = 0;
                hasScrolled = true;
                break;
            }
        }
    }

    console.log('Image selection completed.');
}

async Check_Max_Img_Limit() {
    let imagesSelected = 0;

    for (let row = 1; ; row++) {
        for (let col = 1; col <= 3; col++) {
            // Check if the warning message is displayed
            const warningMessage = await $('//android.widget.TextView[@content-desc="error-message"]');
            if (await warningMessage.isDisplayed()) {
                console.log('Warning message detected. Stopping image selection.');
                await this.dlt_ok_btn.click();
                return;
            }

            // Construct the dynamic XPath (rows increase continuously)
            let xpath = `//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[${row}]/android.view.ViewGroup[${col}]`;

            // Check if the image exists
            const image = await $(xpath);

            if (await image.isDisplayed()) {
                await image.click(); // Select the image
                console.log(`Image ${imagesSelected + 1} selected.`);
                imagesSelected++;
            }
        }
    }

    console.log('Image selection completed.');
}


get edit_img()
{
    return $('(//android.widget.TextView[@text=""])[1]');
}

get presets()
{
    return $('(//android.widget.RelativeLayout[@resource-id="com.myzesty:id/relativeLayout"])[1]');
}

get cancel_editing()
{
    return $('//android.widget.ImageView[@resource-id="com.myzesty:id/cancel"]');
}

get select_all()
{
    return $('//android.view.ViewGroup[@content-desc="Select All"]');
}

get delete()
{
    return $('//android.view.ViewGroup[@content-desc="Delete, "]');
}

get warning_text()
{
    return $('//android.widget.TextView[@content-desc="error-message"]');
}

get warning_text_ok_btn()
{
    return $('//android.widget.TextView[@text="Ok"]');
}

get unselect_img()
{
    return $('(//android.view.ViewGroup[@content-desc="Move"])[1]/android.view.ViewGroup[2]/android.widget.Button/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView');
}

get dlt_ok_btn()
{
    return $('//android.widget.Button[@content-desc="error-ok-button"]');
}

get select_img()
{
    return $('(//android.view.ViewGroup[@content-desc="Move"])[1]/android.view.ViewGroup[2]/android.widget.Button/android.view.ViewGroup');
}


async Dlt_Confirmation(expected_confirmation_text)
{
    const isDisplayed = await this.warning_text.isDisplayed();
    if(isDisplayed)
    {
        const actual_confirmation_text = await this.warning_text.getText();
        assert.strictEqual(actual_confirmation_text, expected_confirmation_text, 'Confirmation delete text not verified.');
        await this.dlt_ok_btn.click();
    }
    else
    {
        console.log("Confirmation delete alert not appeared.")
    }
}

async Delete_Selected_Imgs()
{
    await this.unselect_img.click();
    await this.delete.click();
}

async Click_Dlt()
{
    await this.delete.click();
}

async Select_Img()
{
    await this.select_img.click()
}

async Verify_Warning(expected_warning)
{
    const isVisible = await this.warning_text.isDisplayed();
    if(isVisible)
    {
        const actual_warning = await this.warning_text.getText();
        assert.strictEqual(actual_warning, expected_warning, "Warning Text not verified.");
        await this.warning_text_ok_btn.click();
    }
    else
    {
        console.log("Warning text do not appers.");
    }

}

async select_all_delete()
{
    await this.select_all.click();
    await browser.pause(1000);
    await this.delete.click();
}
async Verify_Img_Editor()
{
    await this.edit_img.click();
    const isVisible = await this.presets.isDisplayed();
    if(isVisible)
    {
        console.log("Redirected to umage editor.")
    }
    else
    {
        console.log("Do not redirected to image editor.")
    }
    await this.cancel_editing.click();
}

async Scroll_Into_Element()
{
    const Maxscroll = 5;
    let Scrollcount = 0 ;

    while(!(await this.add_image.isDisplayed()) && Scrollcount < Maxscroll)
    {
        await Sliders.scrollScreen(539, 1980, 539, 1050);
        Scrollcount ++ ;
        await browser.pause(1000);
    }
    if(await this.add_image.isDisplayed())
    {
        console.log("Add images displayed.")
        await this.add_image.click();

    }
    else
    {
        throw new Error("Element not found after maximum scroll attempts.");
    }
}

async Add_Image_Btn_Hidden() 
{
    const Maxscroll = 5;
    let Scrollcount = 0;

    while (await this.add_image.isDisplayed() && Scrollcount < Maxscroll) {
        await Sliders.scrollScreen(539, 1980, 539, 1050);
        Scrollcount ++ ;
        await browser.pause(1000);
    }
    const isDisplayed = await this.add_image.isDisplayed();
    if (!isDisplayed) {
        console.log("Success: Add images is no longer displayed after scrolling.");
        return ;
    } else {
        console.error("Error: Add images is still displayed after maximum scroll attempts.");
        throw new Error("Add images is still displayed after maximum scroll attempts.");
    }
}



    // ================ Main Function ======================
    async sharemedia(expected_warning, expected_confirmation_text, text1, text2, expected_text)
    {
        await Subscription.Check_Subscription('Processing');
        await CheckLoginPage.login("umart4767@gmail.com", "Myzesty123")
        await this.click_share_tab();
        await this.close_tab();
        await this.click_share_tab();
        await this.selectImages(20);
        await this.Done_Btn();
        await this.Verify_Img_Editor();
        await Sliders.Drag_Drop(driver, 236, 1140, 800, 1663);
        await browser.pause(1000);
        await Sliders.Drag_Drop(driver, 283, 491, 800, 1025);
        await browser.pause(1000);
        await this.Select_Img();
        await this.Click_Dlt();
        await this.Dlt_Confirmation(expected_confirmation_text);
        await this.Scroll_Into_Element();
        await this.Check_Max_Img_Limit();
        await this.Done_Btn();
        await this.Add_Image_Btn_Hidden();
        await Sliders.Drag_Drop(driver, 236, 1140, 800, 1663);
        await this.select_all_delete();
        await this.Verify_Warning(expected_warning);
        await this.Delete_Selected_Imgs();
        await this.Dlt_Confirmation(expected_confirmation_text);

        await this.add_more_image();
        await this.click_media_1();
        await this.click_media_2();
        await this.Done_Btn();
        await this.collection_name(text1);
        await this.collection_desc(text2);
        await this.post_btn_click();
        await browser.pause(20000);
        await Sliders.Refresh_Page();

    }

    async Simple_Share_Media()
    {

        await Subscription.Check_Subscription('Processing');
        await CheckLoginPage.login("umart4767@gmail.com", "Myzesty123");
        await this.click_share_tab();
        await this.click_media_1();
        await this.click_media_2();
        await this.Done_Btn();
        await this.collection_name('My Collection');
        await this.collection_desc('New collection description.');
        await this.add_more_image();
        await this.click_media_3();
        await this.Done_Btn();
        await this.post_btn_click();
    }

}
export default new Share();