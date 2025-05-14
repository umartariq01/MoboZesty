import { $, browser } from '@wdio/globals' ;
import Subscription from '../pageobjects/BuyPremium.page.js';
import Sliders from '../pageobjects/sliders.page.js';
import assert from 'assert';
import { valueFromRemoteObject } from 'puppeteer';
import { BrowserWebSocketTransport } from 'puppeteer';
import { th } from '@faker-js/faker';

class Photo_Editor
{
    get photo()
    {
        return $('//android.view.ViewGroup[@content-desc="Edit, Photo"]/android.view.ViewGroup');
    }

    async Edit_photo()
    {
        await this.photo.click();
    }

    get img1()
    {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]');
    }
    async Select_Img1()
    {
        await this.img1.waitForDisplayed();
        await this.img1.click();
    }

    get presets()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/icon"])[1]');
    }
    async Click_Presets()
    {
        await (await this.presets).click();
        await browser.pause(700);
    }

    get trend()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/trends"]');
    }
    get color()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/color"]');
    }
    get artistic()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/artistic"]');
    }
    get Gradient()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/gradient"]');
    }
    get unique()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/unique"]');
    }

    // async Apply_all_Effects() {
    //     let index = 1;
    //     let processCount = 0;
    //     let scrollCount = 0;
    
    //     while (true) {
    //         try {
    //             const effect = await $(`(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[${index}]`);
    
    //             if (!(await effect.isExisting())) {
    //                 console.log(`No more effects found at index ${index}.`);
    //                 break;
    //             }
    
    //             console.log(`Clicking on effect ${index + scrollCount * 5}`);
    //             await effect.click();
    //             await browser.pause(1500);
    //             index++;
    //             processCount++;
    
    //             if (index > 5) {
    //                 scrollCount++;
    //                 await Sliders.scrollScreen(940, 1773, 107, 1773, 1500);
    //                 await browser.pause(1000);
    //                 index = 2; // Restart index at 2 because after scroll, index 1 is repeated
    //             }
    
    //         } catch (error) {
    //             console.log(`Error clicking effect ${index}:`, error.message);
    //             break;
    //         }
    //     }
    // }

    // async Apply_all_Effects() {
    //     let index = 1;
    //     let processCount = 0;
    //     let scrollCount = 0;
    //     let lastVisibleEffectCount = 0;
    
    //     while (true) {
    //         try {
    //             const effects = await $$('//android.widget.ImageView[@resource-id="com.myzesty:id/image"]');
    //             const currentVisibleCount = effects.length;
    
    //             // Exit condition: No new filters loaded after scroll
    //             if (currentVisibleCount === lastVisibleEffectCount && index > currentVisibleCount) {
    //                 console.log('All filters loaded and applied.');
    //                 break;
    //             }
    
    //             // Guard index from exceeding current filter count
    //             if (index > currentVisibleCount) {
    //                 console.log(`Reached end of visible filters at index ${index}. Scrolling...`);
    //                 scrollCount++;
    //                 await Sliders.scrollScreen(940, 1773, 107, 1773, 1500);
    //                 await browser.pause(1000);
    //                 index = 2; // Skipping index 1 to avoid reapplying it
    //                 lastVisibleEffectCount = currentVisibleCount;
    //                 continue;
    //             }
    
    //             const effect = effects[index - 1]; // -1 for 0-based index in array
    
    //             if (!await effect.isExisting()) {
    //                 console.log(`Effect at index ${index} does not exist.`);
    //                 break;
    //             }
    
    //             console.log(`Clicking on effect ${index + scrollCount * 5}`);
    //             await effect.click();
    //             await browser.pause(1500);
    //             index++;
    //             processCount++;
    
    //         } catch (error) {
    //             console.log(`Error clicking effect ${index}:`, error.message);
    //             break;
    //         }
    //     }
    // }

    async Apply_All_Effects(xpathBase, maxScrolls = 2, startIndex = 1) {
        let index = startIndex;
        let processCount = 0;
        let scrollCount = 0;
    
        while (true) {
            try {
                const fullXpath = `(${xpathBase})[${index}]`;
                const effect = await $(fullXpath);
    
                if (!(await effect.isExisting())) {
                    console.log(`No more effects found at index ${index}.`);
                    break;
                }
    
                console.log(`Clicking on effect ${index + scrollCount * 5}`);
                await effect.click();
                await browser.pause(1500);
                index++;
                processCount++;
    
                if (index > 5) {
                    if (scrollCount < maxScrolls) {
                        scrollCount++;
                        await Sliders.scrollScreen(940, 1773, 107, 1773, 1500);
                        await browser.pause(1000);
                        index = 2; // Restart from 2 to avoid repeating first effect
                    } else {
                        console.log('Reached max scroll count. Ending.');
                        break;
                    }
                }
    
            } catch (error) {
                console.log(`Error clicking effect ${index}:`, error.message);
                break;
            }
        }
    }
    
    async Verify_Presets() {
        const categories = [
            { name: 'Trends', element: this.trend },
            { name: 'Color', element: this.color },
            { name: 'Artistic', element: this.artistic },
            { name: 'Gradient', element: this.Gradient },
            { name: 'Unique', element: this.unique }
        ];
    
        for (const category of categories) {
            const element1 = await category.element;
            const isVisible = await element1.isDisplayed();
            
            if (isVisible) {
                await element1.click();
                await browser.pause(1000);
                await this.Apply_All_Effects('//android.widget.ImageView[@resource-id="com.myzesty:id/image"]', 3 , 1);
            } else {
                console.log(`${category.name} category not visible.`);
            }
        }
    }
    
    get cancel_changes()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/cancel"]');
    }
    async Click_Cancel_Changes()
    {
        await (await this.cancel_changes).click();
    }

    get custom()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Custom"]');
    }
    async Click_Custom()
    {
        await (await this.custom).click();
        await browser.pause(500);
    }
    get help_text()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/close_help"]');
    }
    async Close_Help_Text()
    {
        const isVisible = await (await this.help_text).isDisplayed();
        if(isVisible)
        {
            await (await this.help_text).click();
        }
        else
        {
            console.log('Help text popup not appeared.');
        }
    }

    get magic()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Magic"]');
    }
    get magic_dafault_value()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/intensity"]');
    }
    async Click_Magic()
    {
        await (await this.magic).click();
    }

    async Verify_Magic_Value()
    {
        const isVisible = await (await this.magic_dafault_value).isDisplayed();
        if(isVisible)
        {
            const actual_value = await (await this.magic_dafault_value).getText();
            assert.strictEqual(actual_value, '85', "Magic actual value not matched.");
            console.log('Magic value is valid.')
        }
    }

    get tune()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Tune"]');
    }
    get brightness()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/brightness_text"]');
    }
    get contrast()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/contrast_text"]');
    }
    get saturation()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/saturation_text"]');
    }
    get hue()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/hue_text"]');
    }
    get shadow()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/shadow_text"]');
    }
    get vibrance()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/vibrance_text"]');
    }

    async Click_Tune()
    {
        await (await this.tune).click();
    }
    async Apply_Tune_Filters()
    {
        const tunesteps = [
           { element : this.brightness, value : 0.3 },
           { element : this.contrast, value : 0.8 },
           { element : this.saturation, value : 0.6 },
           { element : this.hue, value : 0.4 },
           { element : this.shadow, value : 0.6 },
           { element : this.vibrance, value : 0.8}
        ];

        for (const step of tunesteps)
        {
            await (await step.element).click();
            await Sliders.Sound_slide(driver, 7, 962, 1981, 2091, step.value);
            await browser.pause(500);
        }
    }

    get color()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Color"]');
    }
    async Click_Color()
    {
        await (await this.color).click();
    }

    // Helper function to slide a given SeekBar
    async slideSlider(sliderElement, valuePercent) 
    {
        const location = await sliderElement.getLocation();
        const size = await sliderElement.getSize();
    
        const startX = location.x;
        const centerY = location.y + Math.floor(size.height / 2);
        const endX = startX + Math.floor(size.width * valuePercent);
    
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: centerY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 200 },
                    { type: 'pointerMove', duration: 500, x: endX, y: centerY },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
    
        await driver.releaseActions();
    }

    // This function apply all the filter, move intensity & color slider and perform scroll according to effects.
    async Apply_All_Sliders({
    baseXPath,
    saturationXPath,
    intensityXPath,
    saturationValue = 0.7,
    intensityValue = 0.3,
    sliderPause = 500,
    itemPause = 1000,
    scrollAfter = 0,
    scrollOptions = null,   // { startX, startY, endX, endY, times }
    maxScrolls,        // <-- New parameter added here
}) {
    let filterCount = 0;   // total filters processed
    let scrollCount = 0;   // total scrolls performed

    while (true) {
        let index = 2; // reset index after each scroll

        while (index <= scrollAfter || scrollAfter === 0) {
            const filterXPath = `(${baseXPath})[${index}]`;
            const filterElement = await $(filterXPath);

            if (!await filterElement.isExisting()) {
                return; // no more filters, stop everything
            }

            await filterElement.click();
            await browser.pause(itemPause);

            const saturationSlider = await $(saturationXPath);
            const intensitySlider = await $(intensityXPath);

            if (await saturationSlider.isExisting()) {
                await this.slideSlider(saturationSlider, saturationValue);
            }
            await browser.pause(sliderPause);

            if (await intensitySlider.isExisting()) {
                await this.slideSlider(intensitySlider, intensityValue);
            }
            await browser.pause(sliderPause);

            index++;
            filterCount++;
        }

        // Scroll if allowed and under the limit
        if (scrollAfter > 0 && scrollOptions && scrollCount < maxScrolls) {
            const { startX, startY, endX, endY, times = 1 } = scrollOptions;
            await Sliders.scrollScreen(startX, startY, endX, endY, 1500, times);
            await browser.pause(1000); // allow filters to load
            scrollCount++;
        } else {
            break; // Either no scroll needed or max scrolls reached
        }
    }
}






    get crop()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Crop / Rotate"]');
    }
    async Click_Crop()
    {
        await (await this.crop).click();
    }
    async Verify_Crop_Dimension() 
    {
        let index = 3;

        while (true) {
            const filterXPath = `(//android.widget.ImageView[@resource-id="com.myzesty:id/crop_image"])[${index}]`;
            const filterElement = await $(filterXPath);

            if (!await filterElement.isExisting())
                break;

            await filterElement.click();
            await browser.pause(1000); 
            index++;
        }
    }

    get rotate()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title_view_rotate"]');
    }
    get rotate_90()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/wrapper_rotate_by_angle"]/android.widget.ImageView');
    }
    async  Click_Rotate()
    {
        await (await this.rotate).click();
        await  browser.pause(1000);

        for( let i=0; i<4; i++ )
        {
            await (await this.rotate_90).click();
            await browser.pause(500);
        }
    }

    get scale()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title_view_scale"]');
    }
    async Click_Scale_Img()
    {
        await (await this.scale).click();
        await Sliders.Single_slide(826, 300, 2045);
    }

    get expand_tool()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/expand"]');
    }
    get neon_tool()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Neon"]');
    }
    async click_Expand_Tools()
    {
        (await this.expand_tool).click();
        (await this.neon_tool).waitForDisplayed({timeout:3000});
    }
    async Click_Neon()
    {
       await (await this.neon_tool).click();
    }

    get fade()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Fade"]');
    }
    get right_fade()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/right_fade"]');
    }
    get left_fade()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/left_fade"]');
    }
    get bottom_fade()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/bottom_fade"]');
    }
    get top_fade()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/top_fade"]');
    }
    async Click_Fade()
    {
        await (await this.fade).click();
    }
   async Filter_with_Single_Slider(tuneSteps, coordinates)
    {
        const { startX, startY, endX, endY } = coordinates;

        for (const step of tuneSteps)
        {
            await (await step.element).click();
            await Sliders.Slider(driver, startX, endX, startY, endY, step.value);
            await browser.pause(500);
        }
    }

    get stickers()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Sticker"]');
    }
    get first_sticker()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/animated_icon"])[1]');
    }
    async Click_Sticker()
    {
        await (await this.stickers).click();
        await (await this.first_sticker).click();
        await browser.pause(500);

        await Sliders.Slider(driver, 14, 914, 1787, 1870, 0.9); // Opacity of sticker
        await Sliders.Slider(driver, 14, 914, 1953, 2036, 0.5); // Size of sticker

        await Sliders.Drag_Drop(driver, 527, 1124, 818, 593); // Drag sticker 1
    }

    get add_sticker()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/add_sticker"]');
    }
    get reaction_category()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/textView" and @text="Reactions"]');
    }
    async Click_Reaction_Sticker()
    {
        await (await this.add_sticker).click();
        await browser.pause(500);
        await (await this.reaction_category).click();
        await (await this.first_sticker).click();
        await browser.pause(500);
        await Sliders.Drag_Drop(driver, 527, 1124, 225, 545); // Drag sticker 2
    }

    get smiley_category()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/textView" and @text="Smileys"]');
    }
    async Click_Smiley_Stickers()
    {
        await (await this.add_sticker).click();
        await browser.pause(500);
        await (await this.smiley_category).click();
        await (await this.first_sticker).click();
        await Sliders.Drag_Drop(driver, 527, 1124, 862, 1445); // Drag sticker 3
    }

    get animal_category()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/textView" and @text="Animals"]');
    }
    async Click_Animal_Stickers()
    {
        await (await this.add_sticker).click();
        await browser.pause(500);
        await (await this.animal_category).click();
        await (await this.first_sticker).click();
        await Sliders.Drag_Drop(driver, 527, 1124, 203, 1419); // drag sticker 4
    }


    
    










    // ------ Main Function -----
    async Verify_Photo_Presets()
    {
        try
        {
            await Subscription.Check_Subscription('Processing');
            await this.Edit_photo();
            await this.Select_Img1();
            await this.Click_Presets();
            await this.Verify_Presets();
            await this.Click_Cancel_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Photo Presets FAILED', error.message);
            throw error;
        }
    }
    async Verify_Photo_Custom()
    {
        try
        {
            await this.Click_Custom();
            await this.Close_Help_Text();
            await this.Apply_All_Effects('//android.widget.LinearLayout[@resource-id="com.myzesty:id/custom_container_parent"]', 1);
            await this.Click_Cancel_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Photo Custom FAILED', error.message);
            throw error;
        }  
    }

    async Verify_Photo_Magic()
    {
        try
        {
            await this.Click_Magic();
            await this.Verify_Magic_Value();
            await this.Click_Cancel_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Photo Magic FAILED', error.message);
            throw error;
        }   
    }

    async Verify_Photo_Tune()
    {
        try
        {
            await this.Click_Tune();
            await this.Apply_Tune_Filters();
            await this.Click_Cancel_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Photo Tune FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Color()
    {
        try
        {
            await this.Click_Color();
            await this.Apply_All_Sliders({
                baseXPath : '//android.widget.FrameLayout[@resource-id="com.myzesty:id/color"]' ,
                saturationXPath : '//android.widget.SeekBar[@resource-id="com.myzesty:id/saturation_bar"]',
                intensityXPath : '//android.widget.SeekBar[@resource-id="com.myzesty:id/intensity_bar"]' ,
                scrollAfter : 0,
            });
            await this.Click_Cancel_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Photo Color FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Crop()
    {
        try
        {
            await this.Click_Crop();
            await this.Verify_Crop_Dimension();
            await this.Click_Rotate();
            await this.Click_Scale_Img();
            await this.Click_Cancel_Changes();
        }
        catch (error)
        {
            console.log('❌ Verify Photo Crop FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Neon()
    {
        try
        {
            await this.click_Expand_Tools();
            await this.Click_Neon();
            await this.Apply_All_Sliders({
                baseXPath : '//android.widget.ImageView[@resource-id="com.myzesty:id/image"]',
                saturationXPath : '//android.view.View[@resource-id="com.myzesty:id/color_bar"]',
                intensityXPath : '//android.widget.SeekBar[@resource-id="com.myzesty:id/intensity_bar"]',
                scrollAfter : 6,
                scrollOptions : {
                    startX: 910,
                    startY: 1677,
                    endX: 155,
                    endY: 1677,
                    times: 1,
                    maxScrolls: 2,     
                }
            });
            await this.Click_Cancel_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Photo Neon FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Fade()
    {
        try
        {
            await this.click_Expand_Tools();
            await this.Click_Fade();
            const tuneSteps = [
                {element : this.right_fade, value : 0.7},
                {element : this.left_fade, value : 0.8},
                {element : this.bottom_fade, value : 0.9},
                {element : this.top_fade, value : 0.8},
            ];
            const coordiinates = {
                startX: 7,
                startY: 1981,
                endX: 962,
                endY: 2091
            };
            await this.Filter_with_Single_Slider(tuneSteps,coordiinates);
            await this.Click_Cancel_Changes();
            await browser.pause(1000);

        }
        catch (error)
        {
            console.log('❌ Verify Photo Fade FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Sticker()
    {
        try
        {
            await this.click_Expand_Tools();
            await this.Click_Sticker();
            await this.Click_Reaction_Sticker();
            await this.Click_Smiley_Stickers();
            await this.Click_Animal_Stickers();
            await this.Click_Cancel_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Photo Sticker FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Text()
    {
        try
        {
            
        }
        catch (error)
        {
            console.log('❌ Verify Photo Sticker FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Crop()
    {
        try
        {
            
        }
        catch (error)
        {
            console.log('❌ Verify Photo Sticker FAILED', error.message);
            throw error;
        }
    }
}

export default new Photo_Editor();