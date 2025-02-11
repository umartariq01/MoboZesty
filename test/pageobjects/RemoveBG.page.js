import { $, browser } from '@wdio/globals' ;
import Common_function from '../pageobjects/commonfun.page.js';
import Sliders from '../pageobjects/sliders.page.js';
import assert from 'assert';


class Remove_BG
{

    get BG()
    {
        return $('//android.view.ViewGroup[@content-desc="Remove, Background"]/android.view.ViewGroup');
    }

    async BG_Remove()
    {
        await this.BG.click();
    }
    // ......................................................

    get Img()
    {
        return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]');
    }

    async Select_Img()
    {
        await this.Img.click();
    }
    // .........................................................

    get loading_text()
    {
        return $('//android.widget.TextView[@text="Please do not close the app or lock the screen until mask extraction is complete."]');
    }

    async Loading_wait(expected_text)
    {
        const loading_visible = await this.loading_text.isDisplayed();
        if(loading_visible)
        {
            const actual_text = await this.loading_text.getText();
            assert.strictEqual(actual_text, expected_text, "Loading assertion failed.")
            console.log("Loading text is asserted.");
        }
        else
        {
            console.log("Loading not visible...")
        }
        
    }
    //................................................................................

    get change_BG()
    {
        return $('//android.widget.TextView[@text="BG"]');
    }

    async Click_Change_BG()
    {
        await this.change_BG.click();
    }
    //.................................................................................

    get loading_filter()
    {
        return $('//android.view.View[@resource-id="com.myzesty:id/progress"]');
    }

    async Assert_loading_filter()
    {
        const loader_visible = await this.loading_filter.isDisplayed();
        if(loader_visible)
        {
            console.log("Filter is applyinh. Wait for few moments please..");
            await browser.pause(3000);
        }
        else
        {
            console.log("Loader is not visible.")
        }
    }
    //........................................................................................

    get BG_1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/iv_background"])[3]');
    }

    async Select_BG_1()
    {
        await this.BG_1.click();
        // await browser.pause(2000);
    }

    get BG_2()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/iv_background"])[4]');
    }

    async Select_BG_2()
    {
        await this.BG_2.click();
        // await browser.pause(2000);
    }
    //......................................................................

    get temp1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/iv_background"])[1]');
    }

    get temp2()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/iv_background"])[2]');
    }

    get temp3()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/iv_background"])[3]');
    }

    get temp4()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/iv_background"])[4]');
    }

    get temp5()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/iv_background"])[5]');
    }

    get temp6()
    {
        return $('(//androidx.cardview.widget.CardView[@resource-id="com.myzesty:id/card_view"])[6]');
    }


    async processAllEffects() {
    try {
        let moreEffects = true;
        let scrollCount = 0;

        // Initial wait for effects to load
        await browser.pause(1500);

        while (moreEffects) {
            const effects = [];

            if (scrollCount === 0) {

                if (await this.temp3.isDisplayed().catch(() => false)) {
                    effects.push({ name: "Effect 3", element: this.temp3 });
                }
                if (await this.temp4.isDisplayed().catch(() => false)) {
                    effects.push({ name: "Effect 4", element: this.temp4 });
                }
                if (await this.temp5.isDisplayed().catch(() => false)) {
                    effects.push({ name: "Effect 5", element: this.temp5 });
                }

            } else {

                // if (await this.temp1.isDisplayed().catch(() => false)) {
                //     effects.push({ name: "Effect 1", element: this.temp1 });
                // }
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
            }

            // Process each effect
            for (const effect of effects) {
                try {
                    await effect.element.waitForDisplayed({ timeout: 5000 });
                    await effect.element.click();
                    console.log(`Selected ${effect.name}.`);

                    await browser.pause(1000);
                    await Sliders.Slider(driver, 7, 962, 1952, 2062, 0.3);
                    // await Sliders.Slider(driver, startX, endX, startY, endY, desiredPercentage)
                    await browser.pause(500);
                } catch (error) {
                    console.error(`Error processing ${effect.name}:`, error);
                    continue;
                }
            }

            scrollCount++;

            if (scrollCount >= 10) {
                try {
                    if (await this.temp6.isDisplayed().catch(() => false)) {
                        console.log("Effect 6 found after 6th scroll. Processing it...");
                        await this.temp6.waitForDisplayed({ timeout: 5000 });
                        await this.temp6.click();
                        console.log("Selected Effect 6.");

                        await browser.pause(1000);
                        await Sliders.Slider(driver, 7, 962, 1952, 2062, 0.8);
                    }
                } catch (error) {
                    console.error("Error processing Effect 6:", error);
                }
                console.log("Stopping after processing the 6th scroll.");
                moreEffects = false;
            } else if (effects.length === 0 && scrollCount > 0) {
                console.log("No more effects available. Stopping...");
                moreEffects = false;
            } else {
                console.log("Scrolling to next set of effects...");
                await Sliders.Single_slide(860, 170, 1740, 500);
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
    // ................................................................................

    get done()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/save"]');
    }

    async Click_Done()
    {
        await this.done.click();
    }
    // ..................................................................................

    get save()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/save"]');
    }

    async Click_Save()
    {
        await this.save.click();
    }

    // --------------------- Main Function -------------------

    async Run_Remove_BG(expected_text)
    {
        await Common_function.Close_Premium();
        await this.BG_Remove();
        await this.Select_Img();
        await this.Loading_wait(expected_text);
        await this.Click_Change_BG();
        // await this.Select_BG_1();
        
        // await this.Select_BG_2();
        // await this.Assert_loading_filter();
        await this.processAllEffects()
        await this.Click_Done();
        await this.Click_Save();


    }

}

export default new Remove_BG();