import { $, browser, expect } from '@wdio/globals' ;
import Sliders from '../pageobjects/sliders.page.js';
import Subscription from '../pageobjects/BuyPremium.page.js';
import Common_function from '../pageobjects/commonfun.page.js';
import assert from 'assert' ;
// import { expect as expectWDIO } from '@wdio/globals';

import { expect as expectChai } from 'chai'
import { expect as expectWDIO } from '@wdio/globals'
import { constrainedMemory } from 'process';
// import { assert } from 'console';



class Video_Editor
{

    get edit_video()
    {
        return $('//android.view.ViewGroup[@content-desc="Edit, Video"]/android.view.ViewGroup/android.view.View');
    }

    async Click_Video_Editor()
    {
        await this.edit_video.click();
    }

    get img_tab()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Images"]');
    }

    async Click_Img_Tab()
    {
        await this.img_tab.click();
    }

    get done()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/done"]')
    }

    async Click_Done()
    {
        await this.done.click();
    }

    get cancel()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/cancel"]');
    }

    async Click_Cancel()
    {
        await this.cancel.click();
    }

    get add_music()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/addAudio"]');
    }

    async Click_Audio()
    {
        await this.add_music.click();
    }

    get apply_changes()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/done"]');
    }

    async Click_Apply_Changes()
    {
        await this.apply_changes.click();
    }

    get duration()
    {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.myzesty:id/durationRecyclerView"]/android.widget.LinearLayout[3]');
    }

    async Select_Duration()
    {
        await this.duration.click();
    }

    get surprise_me()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/surprise"]');
    }

    async Select_Surprise_Me()
    {
        await this.surprise_me.click();
    }

    get next()
    {
        return $('//android.widget.Button[@resource-id="com.myzesty:id/next"]');
    }

    async Click_Next()
    {
        await this.next.click();
    }

    get wizard()
    {
        return $('//android.widget.LinearLayout[@resource-id="com.myzesty:id/sticker"]/android.widget.ImageView');
    }

    async Verify_Wizard()
    {
        const isDisplayed = (await this.wizard).waitForDisplayed();
        if(isDisplayed)
        {
            console.log("User is on Wizard screen.")
        }
        else
        {
            console.log("Wizard screen not visible.")
        }
    }

    get transcoding()
    {
        return  $('//android.view.View[@resource-id="com.myzesty:id/ring_progress"]')
    }

    async Verify_Transcoding()
    {
        const isVisible = await this.transcoding.isDisplayed();
        if(isVisible)
        {
            console.log("Media is being transcoded.")
        }
        else
        {
            console.log("Nedia is not transcoded.")
        }
    }

    get cancel_transcoding()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/cancel_button"]');
    }

    async Cancel_Transcoding()
    {
        (await this.cancel_transcoding).click();
    }

    get video_tab()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Videos"]');
    }

    async Click_Video_Tab()
    {
        await this.video_tab.click()
    }

    get close_editing()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/cancel"]');
    }

    async Close_Project()
    {
        (await this.close_editing).click();
    }

    get close_draft()
    {
        return  $('//android.widget.ImageView[@resource-id="com.myzesty:id/close_base_view"]');
    }

    async Click_Close_Draft()
    {
        (await this.close_draft).click();
    }

    // ================================================================================================================

    // async selectImages(count) {
    //     let imagesSelected = 0;
    
    //     // Array of scroll coordinates (startX, startY, endX, endY, duration)
    //     const scrollCoordinates = [
    //         { startX: 500, startY: 1730, endX: 500, endY: 700, duration: 1500 }, // First scroll
    //         { startX: 500, startY: 1730, endX: 500, endY: 700, duration: 1500 }, // Second scroll (adjust as needed)
    //         { startX: 500, startY: 1950, endX: 500, endY: 550, duration: 1500 }, // Third scroll
    //     ];
    
    //     while (imagesSelected < count) {
    //         for (let col = (imagesSelected > 0 && imagesSelected % 12 === 0) ? 4 : 1; col <= 90 && imagesSelected < count; col++) {
    //             // Dynamic XPath to locate images
    //             let xpath = `(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])[${col}]`;
    
    //             try {
    //                 const image = await $(xpath);
    
    //                 if (await image.isDisplayed()) {
    //                     // Select the image
    //                     await image.click();
    //                     console.log(`Image ${imagesSelected + 1} selected.`);
    //                     imagesSelected++;
    //                 }
    //             } catch (error) {
    //                 console.log(`Image not found at ${xpath}`);
    //             }
    
    //             // Perform scroll after every 12 images
    //             if (imagesSelected > 0 && imagesSelected % 12 === 0) {
    //                 console.log('Scrolling to load more images...');
    
    //                 // Get the appropriate scroll coordinates (cycle through them)
    //                 const scrollIndex = Math.floor(imagesSelected / 12) % scrollCoordinates.length;
    //                 const { startX, startY, endX, endY, duration } = scrollCoordinates[scrollIndex];

    //                 await Sliders.scrollScreen(startX, startY, endX, endY, duration);
    //                 await browser.pause(1500); // Wait for new images to load
    //                 break; // Refresh the loop after scrolling
    //             }
    //         }
    //     }
    
    //     console.log('Image selection completed.');
    // }

    // ======================================================================================================

    async selectImages(count, baseXPath) {
        let imagesSelected = 0;
    
        while (imagesSelected < count) {
            for (let col = (imagesSelected > 0 && imagesSelected % 12 === 0) ? 4 : 1; col <= 90 && imagesSelected < count; col++) {
                // Construct the dynamic XPath using the provided baseXPath
                let xpath = `${baseXPath}[${col}]`;
    
                try {
                    const image = await $(xpath);
    
                    if (await image.isDisplayed()) {
                        await image.click(); // Select the image
                        console.log(`Image ${imagesSelected + 1} selected.`);
                        imagesSelected++;
                    }
                } catch (error) {
                    console.log(`Image not found at ${xpath}`);
                }
    
                // Scroll after every 12 images
                if (imagesSelected > 0 && imagesSelected % 12 === 0) {
                    console.log('Scrolling to load more images...');
                    await Sliders.scrollScreen(500, 1730, 500, 700, 1500); // Scroll down
                    await browser.pause(1500); // Wait for new images to load
                    break; // Exit inner loop to scroll
                }
            }
        }
    
        console.log('Image selection completed.');
    }
    

    async deselectImages() {
        const cancelXPath = '(//android.widget.ImageView[@resource-id="com.myzesty:id/deselect_button"])[1]';
    
        for (let i = 0; i < 5; i++) {
            try {
                const cancelButton = await $(cancelXPath);
    
                if (await cancelButton.isDisplayed()) {
                    console.log(`Deselecting image ${i + 1}...`);
                    await cancelButton.click();
                    await browser.pause(500); // Small pause for UI stability
                } else {
                    console.log('No more images to deselect.');
                    break; // Exit if no button is found
                }
            } catch (error) {
                console.log(`Error finding the cancel button: ${error.message}`);
                break; // Exit on error
            }
        }
    
        console.log('Image deselection process completed.');
    }

    async Check_for_Media_Selected()
    {
        const isVisible = (await this.done).isDisplayed();
        if(isVisible)
        {
            await this.deselectImages();
        }
        else
        {
            await this.selectImages(10, '(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])');
        }
    }

    get add_media()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/addVideo"]');
    }

    async Add_More_Media()
    {
        await  this.add_media.click();
    }

    get dlt_confirmation()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/firstBtn"]');
    }
    
    async Delete_Images() 
    {
        for (let i = 1; i <= 2; i++) {
            // Locate the image and click it
            const image = await $(`(//android.widget.ImageView[@resource-id="com.myzesty:id/imageView"])[${i}]`);
            await image.click();
            console.log(`Clicked on image ${i}.`);
    
            // Click on the delete button (assuming its resource-id is 'com.myzesty:id/deleteButton')
            const deleteButton = await $('//android.widget.LinearLayout[@resource-id="com.myzesty:id/delete"]/android.widget.ImageView');
            await deleteButton.click();
            await (await this.dlt_confirmation).click();
            console.log(`Deleted image ${i}.`);
            // Wait for the UI to update (optional, adjust as needed)
            await driver.pause(1000);
        }
    }
    
    get help()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/adding_rearrange_dialog_help_icon"]');
    }

    get help_text()
    {
        return $('//android.widget.TextView[@text="Adding and Rearranging Media"]');
    }

    get close_help()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/cancel_btn"]');
    }

    async Assert_Help_Text(expectedText) {
        // Click the help element
        await this.help.click();
        await (await this.help_text).waitForDisplayed();
        const actual_help_text = await this.help_text.getText();
        assert.strictEqual(actual_help_text, expectedText, 'Help text not verified.');
        await (await this.close_help).click();
        
    }

    get img1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/imageView"])[1]');
    }

    async Select_Img()
    {
        (await this.img1).click();
    }

    get delete()
    {
        return $('//android.widget.LinearLayout[@resource-id="com.myzesty:id/delete"]/android.widget.ImageView');
    }

    get trim()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/trim_icon"]');
    }

    async Verify_Dlt_Duration()
    {
        const Dlt_Visible = (await this.delete).isDisplayed();
        if(Dlt_Visible)
        {
            console.log("Delete functionality is available");
        }
        else
        {
            console.log("Delete functionality not visible.");
        }

        const Trim_Visible = (await this.trim).isDisplayed();
        if(Trim_Visible)
        {
            console.log("Duration functionality is available.");
        }
        else
        {
            console.log('Duration functionality is not visible.');
        }
    }

    get transition()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/transitionStart"])[1]');
    }

    async Verify_Transition()
    {
        for(let i=1; i<=2; i++)
        {
            const transition_element = await $(`(//android.widget.ImageView[@resource-id="com.myzesty:id/transitionStart"])[${i}]`);
            if(transition_element.isExisting())
            {
                console.log(`Transition element ${i} is selected.`);
                await transition_element.click();
                return;
            }
            else
            {
                console.log('Transition element not found.')
            }
        }

    }

    get glide_1()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/selected_state"]');
    }

    async Transition_1()
    {
        (await this.glide_1).click();
        await browser.pause(2000);
    }

    get apply_to_all()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/btn_apply_to_all"]');
    }

    async Click_Apply_All()
    {
        (await this.apply_to_all).click();
    }



    

    // =============== Main Function ===============

    async Run_Video_Editor_Img_Case()
    {
        await Subscription.Check_Subscription('Processing') ;
        await this.Click_Video_Editor();
        await this.Click_Img_Tab();
        await  this.selectImages(25, '(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])');
        await this.Click_Done();
        await this.Click_Cancel();
        await this.deselectImages();
        await this.Click_Done();
        await this.Click_Next();
        await this.Cancel_Transcoding();
        await this.Click_Done();
        await this.Click_Audio();
        await Sliders.Music_tab_Click();
        await Sliders.Slider(driver, 867, 908, 1854, 2022, 0.6);
        await this.Click_Apply_Changes();
        await this.Select_Duration();
        await this.Select_Surprise_Me();
        await this.Click_Next();
        await browser.pause(5000);
        await this.Verify_Transcoding();
        await this.Verify_Wizard();

        await this.Add_More_Media();
        await this.Click_Img_Tab();
        await this.selectImages(2, '(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])');
        await this.Click_Video_Tab();
        await this.selectImages(1, '(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])');
        await this.Click_Done();
        await browser.pause(5000);
        await this.Delete_Images();
        await this.Assert_Help_Text('Adding and Rearranging Media');
        await Sliders.play_pause(534, 1403) ;
        await browser.pause(5000);
        await Sliders.play_pause(534, 1403) ;
        await Sliders.dragSliderWithBounds('//android.widget.SeekBar[@resource-id="com.myzesty:id/seekBar"]', 300, [[18,1477][1062,1527]])

        await this.Select_Img();
        await this.Verify_Dlt_Duration();
        await this.Verify_Transition();
        await this.Click_Cancel();
        await browser.pause(1000);
        await this.Verify_Transition();
        await this.Click_Apply_Changes();
        
        await this.Verify_Transition();
        await this.Transition_1();
        await this.Click_Apply_All();
        await this.Click_Apply_Changes();


        // await this.Click_Cancel(); // use this function inplace of close project. both are same
        // await this.Close_Project();
        // await browser.pause(1500);
        // await this.Click_Close_Draft();

    }

    async Run_Video_Editor_Vid_Case()
    {
        await Subscription.Check_Subscription('Processing') ;
        await this.Click_Video_Editor();
        await this.Click_Video_Tab();
        await this.selectImages(10, '(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])');
        await this.Click_Done();
        await this.Click_Cancel();
        await this.Check_for_Media_Selected();
        // await this.deselectImages();
        await this.Click_Done();
        await this.Click_Next();
        await this.Cancel_Transcoding();
        await this.Click_Done();
        await this.Click_Audio();
        await Sliders.Music_tab_Click();
        await this.Click_Apply_Changes();
        await this.Select_Duration();
        await this.Select_Surprise_Me();
        await this.Click_Next();
        await this.Verify_Transcoding();
        await this.Verify_Wizard();
        
    }
}



export default new Video_Editor();