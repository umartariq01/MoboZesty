import { $, browser } from '@wdio/globals' ;
import Subscription from '../pageobjects/BuyPremium.page.js';
import Sliders from '../pageobjects/sliders.page.js';
import assert from 'assert';
import { RETRY_DELAY } from 'puppeteer';
import { ADDRGETNETWORKPARAMS } from 'dns';

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
    get preset_color()
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
            { name: 'Color', element: this.preset_color },
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

    async Apply_Tune_Filters(tuneSteps, coordinates) 
    {
        for (const step of tuneSteps) 
            {
                const { startX, startY, endX, endY } = coordinates;

                await (await step.element).click();
                await Sliders.Sound_slide(driver, startX, endX, startY, endY, step.value);
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
   async Filter_with_Single_Slider(tuneSteps, coordinates) {
    const { startX, startY, endX, endY } = coordinates;

    for (const step of tuneSteps) {
        await (await step.element).click();
        // Only apply slider if a value is provided
        if (typeof step.value === 'number') {
            await Sliders.Slider(driver, startX, endX, startY, endY, step.value);
            await browser.pause(500);
        } else {
            console.log(`Skipping slider for step: ${step.name || 'Unnamed step'}`);
        }
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

        await Sliders.Drag_Drop(driver, 527, 970, 833, 398); // Drag sticker 1
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
        await Sliders.Drag_Drop(driver, 527, 970, 190, 430); // Drag sticker 2
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
        await Sliders.Drag_Drop(driver, 527, 970, 210, 1390); // Drag sticker 3
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
        await Sliders.Drag_Drop(driver, 527, 970, 818, 1415); // drag sticker 4
    }

    get text()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Text"]');
    }
    get text_area()
    {
        return $('//android.widget.EditText[@resource-id="com.myzesty:id/add_text_edit_text"]');
    }
    get bold()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/bold"]');
    }
    get italic()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/italic"]');
    }
    get apply_text()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/done"]');
    }
    async Add_Text()
    {
        await (await this.text).click();
        await (await this.text_area).click();
        await browser.pause(1000);
        (await this.text_area).setValue('Script Running');
        await browser.pause(1000);
        await (await this.bold).click();
        await (await this.italic).click();
        await browser.pause(1000);
        await Sliders.Slider(driver, 28, 1052, 1431, 1541, 0.2);
        await (await this.apply_text).click();
    }
    get font_color()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/color_text"]');
    }
    get font_opacity()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/opacity_text"]');
    }
    get font_shadow()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/shadow_text"]');
    }
    get font_stroke()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/stroke_text"]');
    }
    async Apply_Font_Styles()
    {
        let index = 1;

        while (index < 4 ) {
            const filterXPath = `(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[${index}]`;
            const filterElement = await $(filterXPath);

            if (!await filterElement.isExisting())
                break;

            await filterElement.click();
            await browser.pause(1000); 
            index++;
        }
    }
    async Click_Font_Color()
    {
        await (await this.font_color).click();
        await Sliders.Slider(driver, 28, 936, 2010, 2059, 0.3);
    }
    async Click_Font_Opacity()
    {
        await (await this.font_opacity).click();
        await  Sliders.Slider(driver, 14, 914, 1987, 2097, 0.8);
    }
    async Click_Font_Shadow()
    {
        await (await this.font_shadow).click();
        await Sliders.Slider(driver, 14, 914, 1987, 2097, 0.2);
    }
    async Click_Font_Stroke()
    {
        await (await this.font_stroke).click();
        await Sliders.Slider(driver, 14, 914, 1848, 1958, 0.2);
        await browser.pause(500);
        await  Sliders.Slider(driver, 28, 936, 2010, 2059, 0.4);
    }

    get brush()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/shape_text"]');
    }
    get draw()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Draw"]');
    }
    get square_draw()
    {
        return  $('//android.widget.ImageView[@resource-id="com.myzesty:id/square"]');
    }
    get draw_color() // same xpath as font_color
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/color_text"]');
    }
    get draw_feather()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/feather_text"]');
    }
    get draw_opacity() // same xpath as font_opacity
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/opacity_text"]');
    }
    get undo_draw()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/undo"]');
    }
    get redo_draw()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/redo"]');
    }
    async Click_Circle_Draw()
    {
        await (await this.draw).click();
        await Sliders.Drag_Drop(driver, 170, 391, 170, 1253);
        await (await this.undo_draw).click();
        await browser.pause(500);
        await (await this.redo_draw).click();
    }
    async Click_Color_Feature()
    {
        await (await this.font_color).click();
    }
    async Click_Draw_Color
    ({  startX, endX, startY, endY, desiredPercentage, 
        dragX, dragY, dropX, dropY
    })
    {
        await Sliders.Slider(driver, startX, endX, startY, endY, desiredPercentage)
        await Sliders.Drag_Drop(driver, dragX, dragY, dropX, dropY);
        await (await this.undo_draw).click();
        await browser.pause(500);
        await (await this.redo_draw).click();
    }
    async Click_Feather_Feature()
    {
        await (await this.draw_feather).click();
    }
    async Click_Draw_Feather
    ({  startX, endX, startY, endY, desiredPercentage,
        dragX, dragY, dropX, dropY
    })
    {
        await Sliders.Slider(driver, startX, endX, startY, endY, desiredPercentage);
        await Sliders.Drag_Drop(driver, dragX, dragY, dropX, dropY);
        await (await this.undo_draw).click();
        await browser.pause(500);
        await (await this.redo_draw).click();
    }
    async Click_Opacity_Feature()
    {
        await (await this.font_opacity).click();
    }
    async Click_Draw_Opacity
    ({
        startX, endX, startY, endY, desiredPercentage,
        dragX, dragY, dropX, dropY
    })
    {
        await Sliders.Slider(driver, startX, endX, startY, endY, desiredPercentage);
        await Sliders.Drag_Drop(driver, dragX, dragY, dropX, dropY);
    }
    async Click_Brush()
    {
        await (await this.brush).click();
        await (await this.square_draw).click();
        await Sliders.Drag_Drop(driver, 107, 780, 940, 780);
    }

    get flip()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Flip"]');
    }
    get horizental_flip()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/flipH"]');
    }
    get vertical_flip()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/flipV"]');
    }
    async Click_Flip()
    {
        await (await this.flip).click();
    }
    async Flip_Horizentally()
    {
        await(await this.horizental_flip).click();
    }
    async Flip_Vertically()
    {
        await (await this.vertical_flip).click();
    }

    get blur()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Blur"]');
    }
    get linear_blur()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/linear"]');
    }
    get radial_blur()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/radial"]');
    }
    get inner_radial_blur()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/iradial"]');
    }
    get shape_blur()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/shaped"]');
    }
    async Click_Blur()
    {
        await (await this.blur).click();
    }

    async  Apply_Blur_Effects()
    {
        await (await this.linear_blur).click();
        await browser.pause(600);
        await (await this.radial_blur).click();
        await browser.pause(600);
        await (await this.inner_radial_blur).click();
    }
    async Apply_Shape_Blur()
    {
        await (await this.shape_blur).click();

        let index = 1 ;

        while (index <=7)
        {
            const xpath = `(//android.widget.ImageView[@resource-id="com.myzesty:id/shape"])[${index}]` ;
            const Elemet = await $(xpath);

            if(!await Elemet.isExisting())
                break;
            await Elemet.click();
            await browser.pause(500);
            index ++ ;
        }
    }

    get overlay()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Overlay"]');
    }
    async Click_Overlay()
    {
        await (await this.overlay).click();
    }
    get canvas()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/canvas_text"]');
    }
    get grunge()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/grunge_text"]');
    }
    get lights()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/lights_text"]');
    }
    get patterns()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/patterns_text"]');
    }
    async Apply_Filters(categories, baseXPath, startIndex, maxIndex) 
    {
        let categoryList;

        if (categories.length > 0) 
            {
                categoryList = categories;
            } 
        else 
            {
                categoryList = [null];
            }

        for (const category of categoryList) {
            if (category) 
                {
                    await category.click();
                    await browser.pause(1000); // wait for filters to load
                }

            for (let index = startIndex; index <= maxIndex; index++) {
                const filterXPath = `${baseXPath}[${index}]`;
                const filterElement = await $(filterXPath);

                if (!await filterElement.isExisting()) break;

                await filterElement.click();
                await browser.pause(1000);
            }
        }
    }

    get blend()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Blend"]');
    }
    get blend_img()
    {
        return $('(//androidx.cardview.widget.CardView[@resource-id="com.myzesty:id/select_cover"])[9]');
    }
    async Click_Blend()
    {
        await (await this.blend).click();
        await (await this.blend_img).click();
    }

    get white_balance()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="White-Balance"]');
    }
    get temperature()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/temperature_text"]');
    }
    get tint()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/tint_text"]');
    }
    get auto()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/auto_text"]');
    }
    async Click_White_Balance()
    {
        await (await this.white_balance).click();
    }

    get curves()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Curves"]');
    }
    async Click_Curve()
    {
        await (await this.curves).click();
    }

    get vintage()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Vignette"]');
    }
    async Click_Vintage()
    {
        await (await this.vintage).click();
    }
    get circle()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/round_icon"]');
    }
    get square()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/square_icon"]');
    }
    get rectangle()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/rectangle_icon"]');
    }
    get ellipse()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/oval_icon"]');
    }
    async Apply_Vintage_Sliders(tuneSteps, coordinates) 
    {
        for (const step of tuneSteps) 
            {
                const { dragX, dragY, dropX, dropY } = coordinates;

                await (await step.element).click();
                await Sliders.Drag_Drop(driver, dragX, dragY, dropX, dropY)
                await browser.pause(500);
            }
    }

    get fisheye()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Fisheye"]');
    }
    get radius()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/radius_text"]');
    }
    get rotation()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/rotation_text"]');
    }
    async Click_Fisheye()
    {
        await (await this.fisheye).click();
    }
    async Change_Radius()
    {
        await (await this.radius).click();
        await Sliders.Slider(driver, 7, 962, 1981, 2091, 0.4);
    }
    async Change_Rotation()
    {
        await (await this.rotation).click();
        await Sliders.Slider(driver, 7, 962, 1981, 2091, 0.7);
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
            const tuneSteps = [
                {element : this.brightness, value : 0.3},
                {element : this.contrast, value : 0.8},
                {element : this.saturation, value : 0.6},
                {element : this.hue, value : 0.4},
                {element : this.shadow, value : 0.6},
                {element : this.vibrance, value : 0.8}
            ];
            const coordiinates = {
                startX: 7,
                endX: 962,
                startY: 1981,
                endY: 2091
            };

            await this.Apply_Tune_Filters(tuneSteps,coordiinates);
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
            await this.click_Expand_Tools();
            await this.Add_Text();
            await this.Apply_Font_Styles();
            await this.Click_Font_Color();
            await this.Click_Font_Opacity();
            await this.Click_Font_Shadow();
            await this.Click_Font_Stroke();
            await this.Click_Cancel_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Photo Text FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Draw()
    {
        try
        {
            await this.click_Expand_Tools();
            await this.Click_Circle_Draw();
            // await this.Click_Draw_Color(28, 936, 1999, 2048, 0.4, 270, 391, 270, 1253);
            await this.Click_Color_Feature();
            await this.Click_Draw_Color({
                startX : 28, 
                endX : 936,
                startY : 1999, 
                endY : 2048,
                desiredPercentage : 0.4,
                dragX : 270, 
                dragY : 391, 
                dropX : 270, 
                dropY : 1253
            });
            await this.Click_Feather_Feature();
            await this.Click_Draw_Feather({
                startX : 22, 
                endX : 942,
                startY : 1976, 
                endY : 2086,
                desiredPercentage : 0.6,
                dragX : 370, 
                dragY : 391, 
                dropX : 370, 
                dropY : 1253
            });
            await this.Click_Opacity_Feature();

            await this.Click_Draw_Opacity({
                startX : 22, 
                endX : 942,
                startY : 1976, 
                endY : 2086,
                desiredPercentage : 0.6,
                dragX : 470, 
                dragY : 391, 
                dropX : 470, 
                dropY : 1253
            });
            await this.Click_Brush();
            await this.Click_Cancel_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Photo Draw FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Flip()
    {
        try
        {
            await this.click_Expand_Tools();
            await this.Click_Flip();
            await this.Flip_Horizentally();
            await this.Flip_Vertically();
            await this.Click_Cancel_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Photo Flip FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Blur()
    {
        try
        {
            await this.click_Expand_Tools();
            await this.Click_Blur();
            await this.Apply_Blur_Effects();
            await this.Apply_Shape_Blur();
            await  this.Click_Cancel_Changes();
        }
        catch (error)
        {
            console.log('❌ Verify Photo Sticker FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Overlay()
    {
        try
        {
            await this.click_Expand_Tools();
            await this.Click_Overlay();
            const categories = [this.canvas, this.grunge, this.lights, this.patterns];
            const baseXPath = '(//android.widget.ImageView[@resource-id="com.myzesty:id/overlay"])' ;
            const startIndex = 2 ;
            const maxIndex = 7 ;
            await this.Apply_Filters(categories, baseXPath, startIndex, maxIndex);
            await this.Click_Cancel_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Photo Sticker FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Blend()
    {
        try
        {
            await this.click_Expand_Tools();
            await this.Click_Blend();
            await Sliders.Drag_Drop(driver, 550, 1000, 420, 440);
            await this.Apply_All_Effects('(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])',2, 2);
            await  this.Click_Cancel_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Photo Blend FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_White_Balance()
    {
        try
        {
            await this.click_Expand_Tools();
            await this.Click_White_Balance();
            const tuneSteps = [
                { element : this.temperature, value : 0.7},
                { element : this.tint, value : 0.3},
                { element : this.auto }
            ];
            const coordinates = {
                startX: 7,
                startY: 1981,
                endX: 962,
                endY: 2091
            }
            await this.Filter_with_Single_Slider(tuneSteps, coordinates);
            await this.Click_Cancel_Changes();
        }
        catch (error)
        {
            console.log('❌ Verify Photo White Balance FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Curves()
    {
        try
        {
            await this.click_Expand_Tools();
            await this.Click_Curve();
            await Sliders.Drag_Drop(driver, 542, 1533, 339, 1338);
            await browser.pause(1000);
            await this.Click_Cancel_Changes();
        }
        catch (error)
        {
            console.log('❌ Verify Photo Sticker FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Vintage()
    {
        try
        {
            await this.click_Expand_Tools();
            await this.Click_Vintage();
            await Sliders.Slider(driver, 28, 914, 1673, 1783, 0.4); // Outer Intensity
            await Sliders.Slider(driver, 28, 914, 1827, 1937, 0.8); // Inner Intensity
            const tuneSteps = [
                { element : this.circle },
                { element : this.square },
                { element : this.rectangle },
                { element : this.ellipse },
            ];
            const coordinates = {
                dragX : 538,
                dragY : 955,
                dropX : 538,
                dropY : 774,
            };
            await this.Apply_Vintage_Sliders(tuneSteps, coordinates);
            await this.Click_Cancel_Changes();

        }
        catch (error)
        {
            console.log('❌ Verify Photo Vintage FAILED', error.message);
            throw error;
        }
    }

    async Verify_Photo_Fisheye()
    {
        try
        {
            await this.click_Expand_Tools();
            await this.Click_Fisheye();
            await Sliders.Slider(driver, 7, 962, 1981, 2091, 0.9);
            await Sliders.Drag_Drop(driver, 531, 1437, 534, 1050);
            await this.Change_Radius();
            await this.Change_Rotation();
            await this.Click_Cancel_Changes();
        }
        catch (error)
        {
            console.log('❌ Verify Photo Sticker FAILED', error.message);
            throw error;
        }
    }
}

export default new Photo_Editor();