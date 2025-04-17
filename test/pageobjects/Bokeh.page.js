import { $, browser } from '@wdio/globals' ;
import Sliders from '../pageobjects/sliders.page.js';
import assert from 'assert';
import Subscription from '../pageobjects/BuyPremium.page.js';

class Verify_Bokeh_templet
{
    
    get bokeh()
    {
        return $('//android.view.ViewGroup[@content-desc="Try Now, Bokeh Effect"]/android.view.ViewGroup');
    }

    get cancel_editing()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/cancel"]');
    }

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

    get save()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/action_text"]');
    }

    get export_done()
    {
        return $('//android.view.ViewGroup[@content-desc="Done"]');
    }

    get rate_us()
    {
        return $('//android.widget.Button[@content-desc="rate-us-button"]');
    }

    get cancel_rate_us()
    {
        return $('//android.widget.TextView[@text=""]');
    }

//=============================================================================================================================

// This function process all the bokeh effects. It finds the filters and oush then into array then click on it. After 6th scroll it will check if the filter appears, it clicks on it.
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

    async Try_Bokeh()
    {
        await this.bokeh.click();
    }

    async Click_cancell_editing()
    {
        await this.cancel_editing.click()
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


   
    
    async longPressCompareButton(duration = 2000) {
        // Find the location of the compare button
        const compareElement = await this.compareButton;
        const { x, y } = await compareElement.getLocation(); // Get the element's location
    
        // Perform long press using touch actions
        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: x + 1, y: y + 1 }, // Move to the button (offset slightly to ensure tap)
                    { type: 'pointerDown', button: 0 }, // Press down
                    { type: 'pause', duration: duration }, // Pause to simulate long press
                    { type: 'pointerUp', button: 0 } // Release the press
                ]
            }
        ]);
        await browser.releaseActions();
    
        console.log(`Long pressed the compare button for ${duration} ms.`);
    }

    async Click_done()
    {
        await this.done.click();
    }

    async Click_Save()
    {
        await this.save.click() ;
    }

    async Click_export_done()
    {
        await this.export_done.click();
    }

    async Click_Rate_Us()
    {
        const isDisplayed = await this.rate_us.isDisplayed() ;
        if(isDisplayed)
        {
            await this.cancel_rate_us.click();
        }
        else
        {
            console.log('Rate Us popup not Appeared.')
        }
    }



    //--------- Main Function -----------

    async Run_Bokeh_temp()
    {
        await Subscription.Check_Subscription('Processing');
        await this.Try_Bokeh();
        await this.Select_img1();
        await this.Click_cancell_editing();
        await this.Click_cancell_editing();
        await browser.pause(500);
        await this.Select_img1();
        await this.processAllEffects();
        await this.longPressCompareButton(); 
        await this.Click_done();
        await this.Click_Save();
        await this.Click_export_done();
        
    }






}

export default new Verify_Bokeh_templet();