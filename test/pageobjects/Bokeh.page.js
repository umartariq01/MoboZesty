import { $, browser } from '@wdio/globals' ;
import Sliders from '../pageobjects/sliders.page.js';
import assert from 'assert';

class Verify_Bokeh_templet
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

    get premium()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/icon_premium"])[1]');
    }

    get save()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/action_text"]');
    }

    get join_myzesty()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/btnJoin"]')
    }

    get subscripe_pkg()
    {
        return $('//android.widget.Button[@resource-id="com.myzesty:id/btnContinue"]');
    }

    get subscribe()
    {
        return $('//android.widget.Button[@resource-id="com.android.vending:id/0_resource_name_obfuscated"]');
    }

    get processing()
    {
        return  $('//android.widget.TextView[@resource-id="com.android.vending:id/0_resource_name_obfuscated"]');
    }

    get export_done()
    {
        return $('//android.view.ViewGroup[@content-desc="Done"]');
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

    async Check_premium(expected_text)
    {
        const isVisible = await this.premium.isDisplayed();

        if(!isVisible)
        {
            console.log("Already have premium subscription.")
            await this.save.click();
        }
        else
        {
            await this.save.click();
            await this.join_myzesty.waitForDisplayed();
            await this.join_myzesty.click();
            //buy subscription module

            await this.subscripe_pkg.waitForDisplayed();
            await this.subscripe_pkg.click();

            await this.subscribe.waitForDisplayed();
            await this.subscribe.click();

            const processing_visible = await this.processing.waitForDisplayed();
            if(processing_visible)
            {
                await this.verify_processing(expected_text)
            }
            else
            {
                console.log("Subscription Processing is not visible...")
            }
            
        }
    }

    async verify_processing(expected_text)
    {
        await this.processing.waitForDisplayed();
        const actual_processing = await this.processing.getText();
        assert.strictEqual(actual_processing, expected_text, "Subscription Processing text not asserted!");
    }

    async Click_export_done()
    {
        await this.export_done.click();
    }



    //--------- Main Function -----------

    async Run_Bokeh_temp(expected_text)
    {
        await this.Close_Premium();
        await this.Try_Bokeh();
        await this.Select_img1();
        await this.Click_cancell_editing();
        await this.Click_cancell_editing();
        await browser.pause(500);
        await this.Select_img1();

        await this.processAllEffects();
        // await this.longPressCompareButton(); 

        await this.Click_done();
        await this.Check_premium(expected_text);
        await this.Click_export_done();
        
    }






}

export default new Verify_Bokeh_templet();