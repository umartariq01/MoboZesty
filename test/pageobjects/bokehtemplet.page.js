import { $, browser } from '@wdio/globals' ;
import Sliders from '../pageobjects/sliders.page.js';
import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { Jimp } from 'jimp';

class Bokeh_image_verification
{

    get preiumCloseBtn () 
    {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
    }
    
    get bokeh()
    {
        return $('//android.view.ViewGroup[@content-desc="Try Now, Bokeh Effect"]/android.view.ViewGroup');
    }

    // get close_gallery()
    // {
    //     return $('//android.widget.TextView[@text="Close"]');
    // }

    get img1()
    {
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView')
    }

    get temp2()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[2]');
    }
    get temp3()
    {
        return  $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[3]');
    }

    get temp4()
    {
        return  $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[4]');
    }

    get temp5()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[5]');
    }

    get temp6()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[6]')
    }

    get compare()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/compare"]');
    }

    get compareButton() 
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/compare"]');
    }

    get done()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/action_text"]');
    }

    get screenshot()
    {
        return $('//android.widget.RelativeLayout[@resource-id="com.myzesty:id/items_container"]');
    }


//=============================================================================================================================
async processAllEffects() {
    try {
        let moreEffects = true;
        let scrollCount = 0;
        
        // Initial wait for effects to load
        await browser.pause(1500);

        while (moreEffects) {
            const effects = [];

            // Check effects with proper error handling
            if (await this.temp2.isDisplayed().catch(() => false)) {
                effects.push({ name: "Effect 2", element: this.temp2 });
            }
            if (await this.temp3.isDisplayed().catch(() => false)) {
                effects.push({ name: "Effect 3", element: this.temp3 });
            }
            if (await this.temp4.isDisplayed().catch(() => false)) {
                effects.push({ name: "Effect 4", element: this.temp4 });
            }
            if (await this.temp5.isDisplayed().catch(() => false)) {
                effects.push({ name: "Effect 5", element: this.temp5 });
            }

            // Process each available effect
            for (const effect of effects) {
                try {
                    await effect.element.waitForDisplayed({ timeout: 5000 });
                    await effect.element.click();
                    console.log(`Selected ${effect.name}.`);
                    
                    await browser.pause(1000);
                    await Sliders.Slider(driver, 7, 962, 1938, 2048, 0.6);
                    await browser.pause(500);
                } catch (error) {
                    console.error(`Error processing ${effect.name}:`, error);
                    continue;
                }
            }

            scrollCount++;

            if (scrollCount >= 6) {
                try {
                    if (await this.temp6.isDisplayed().catch(() => false)) {
                        console.log("Effect 6 found after 6th scroll. Processing it...");
                        await this.temp6.waitForDisplayed({ timeout: 5000 });
                        await this.temp6.click();
                        console.log("Selected Effect 6.");
                        
                        await browser.pause(1000);
                        await Sliders.Slider(driver, 7, 962, 1938, 2048, 0.6);
                    }
                } catch (error) {
                    console.error("Error processing Effect 6:", error);
                }
                console.log("Stopping after processing the 6th scroll.");
                moreEffects = false;
            } else if (effects.length === 0) {
                console.log("No more effects available. Stopping...");
                moreEffects = false;
            } else {
                console.log("Scrolling to next set of effects...");
                await Sliders.Single_slide(883, 100, 1740);
                await browser.pause(1000); // Wait for scroll to complete
            }
        }

        await browser.pause(1500); // Final wait before proceeding
        console.log("All effects processed successfully");

    } catch (error) {
        console.error("Error in processAllEffects:", error);
        throw error;
    }
}
//=============================================================================================================================

    async Close_Premium()
    {
        const isDisplayed = await this.preiumCloseBtn.isDisplayed();
        if (isDisplayed)
        {
            await this.preiumCloseBtn.click();
        }
        else
        {
            console.log("Premium Screen not Displayed!")
        }
    }

    async Try_Bokeh()
    {
        await this.bokeh.click();
    }

    async Click_close_gallery()
    {
        await this.close_gallery.click();
    }

    async Select_img1()
    {
        await this.img1.click();
        await browser.pause(1500);
    }

    async select_tem2()
    {
        await this.temp2.click();
    }

    async select_temp3()
    {
        await this.temp3.click();
    }

    async select_temp4()
    {
        await this.temp4.click();
    }

    async select_tem5()
    {
        await this.temp5.click();
    }

    async Click_done()
    {
        await this.done.click();
    }

    async Click_export_done()
    {
        await this.export_done.click();
    }

    async Load_image()
    {
        await this.screenshot.waitForDisplayed();
    }



    async takeImageScreenshot(imageElement, outputPath) {
        await new Promise(resolve => setTimeout(resolve, 3000));
    
        // Take a full-screen screenshot
        console.log("Taking Screenshot know..")
        const screenshotBase64 = await driver.takeScreenshot();
        const screenshotBuffer = Buffer.from(screenshotBase64, 'base64');
    
        // Save full screenshot temporarily
        const tempScreenshotPath = './temp_screenshot.png';
        fs.writeFileSync(tempScreenshotPath, screenshotBuffer);
    
        // Ensure the element is visible before interacting
        await imageElement.waitForDisplayed({ timeout: 5000 });
    
        // Get element's location and size
        const location = await imageElement.getLocation();
        const size = await imageElement.getSize();
    
        const { x, y } = location;
        const { width, height } = size;
    
        // Read the full screenshot and crop the image area
        const image = await Jimp.read(tempScreenshotPath);
        const croppedImage = image.crop(x, y, width, height);
    
        // Save the cropped image
        await croppedImage.writeAsync(outputPath);
        console.log(`Cropped image saved at: ${outputPath}`);
    
        // Remove temporary full screenshot
        fs.unlinkSync(tempScreenshotPath);
    }






    //--------- Main Function -----------

    async Run_verification()
    {
        await this.Close_Premium();
        await this.Try_Bokeh();
        await this.Select_img1();
        await browser.pause(5000);
        await this.Click_done();
        // const element = await $('//android.widget.RelativeLayout[@resource-id="com.myzesty:id/main_container"]');
        // await this.takeImageScreenshot(element, './test/screenshots/cropped_image.png');
        


        // await this.processAllEffects(); 

        await this.Click_done();
    }

}

export default new Bokeh_image_verification();