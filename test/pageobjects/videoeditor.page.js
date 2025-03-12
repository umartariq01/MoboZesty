import { $, browser } from '@wdio/globals' ;
import Sliders from '../pageobjects/sliders.page.js';
import Subscription from '../pageobjects/BuyPremium.page.js';

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
        return $('(//android.view.View[@resource-id="com.myzesty:id/selectedBg"])[1]');
    }

    async Verify_Wizard()
    {
        const isDisplayed = await this.wizard.isDisplayed();
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

    get video_tab()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Videos"]');
    }

    async Click_Video_Tab()
    {
        await this.video_tab.click()
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

    // async selectImages(count) 
    // {
    //     let imagesSelected = 0;
    
    //     while (imagesSelected < count) {
    //         for (let col = (imagesSelected > 0 && imagesSelected % 12 === 0) ? 4 : 1; col <= 90 && imagesSelected < count; col++) {  // After first scroll, it will set the valu of col to 4 to select the next image
    //             // Construct the dynamic XPath
    //             let xpath = `(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])[${col}]`;
    
    //             try {
    //                 const image = await $(xpath);
    
    //                 if (await image.isDisplayed()) {
    //                     await image.click(); // Select the image
    //                     console.log(`Image ${imagesSelected + 1} selected.`);
    //                     imagesSelected++;
    //                 }
    //             } catch (error) {
    //                 console.log(`Image not found at ${xpath}`);
    //             }
    
    //             // Scroll after every 12 images
    //             if (imagesSelected > 0 && imagesSelected % 12 === 0) {
    //                 console.log('Scrolling to load more images...');
    //                 await Sliders.scrollScreen(500, 1730, 500, 700, 1500); // Scroll down
    //                 await browser.pause(1500); // Wait for new images to load
    //                 break; // Exit inner loop to scroll
    //             }
    //         }
    //     }
    
    //     console.log('Image selection completed.');
    // }

    // --------------------------------------------------------------------------------------------------------

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
    
        for (let i = 0; i < 10; i++) {
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
    

    // =============== Main Function ===============

    async Run_Video_Editor_Img_Case()
    {
        await Subscription.Check_Subscription('Processing') ;
        await this.Click_Video_Editor();
        await this.Click_Img_Tab();
        await  this.selectImages(90, '(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])');
        await this.Click_Done();
        await this.Click_Cancel();
        await this.deselectImages();
        await this.Click_Done();
        await this.Click_Audio();
        await Sliders.Music_tab_Click();
        await Sliders.Slider(driver, 867, 908, 1854, 2022, 0.6);
        await this.Click_Apply_Changes();
        await this.Select_Duration();
        await this.Select_Surprise_Me();
        await this.Click_Next();
        await browser.pause(8000);
        await this.Verify_Transcoding();
        await this.Verify_Wizard();

    }

    async Run_Video_Editor_Vid_Case()
    {
        await Subscription.Check_Subscription('Processing') ;
        await this.Click_Video_Editor();
        await this.Click_Video_Tab();
        await this.selectImages(40, '(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])');
        await this.Click_Done();
        await this.Click_Cancel();
        await this.deselectImages();
        await this.Click_Done();
        await this.Click_Audio();
        await Sliders.Music_tab_Click();
        await Sliders.Slider(driver, 867, 908, 1854, 2022, 0.6);
        await this.Click_Apply_Changes();
        await this.Select_Duration();
        await this.Select_Surprise_Me();
        await this.Click_Next();
        await browser.pause(8000);
        await this.Verify_Transcoding();
        await this.Verify_Wizard();
        
        
    }
}



export default new Video_Editor();