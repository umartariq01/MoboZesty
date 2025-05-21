import { $, browser, expect } from '@wdio/globals' ;
import Sliders from '../pageobjects/sliders.page.js';
import Subscription from '../pageobjects/BuyPremium.page.js';
import Common_function from '../pageobjects/commonfun.page.js';
import assert from 'assert' ;
import { urlToHttpOptions } from 'url';



class Video_Editor
{

    get edit_video()
    {
        return $('//android.view.ViewGroup[@content-desc="Edit, Video"]/android.view.ViewGroup');
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
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/close_button"]');
    }

    async Click_Cancel()
    {
        await this.cancel.click();
    }

    get audio()
    {
        return $('//android.widget.LinearLayout[@resource-id="com.myzesty:id/audio"]/android.widget.ImageView');
    }

    async Click_Audio()
    {
        await this.audio.click();
    }

    get apply_changes()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/done"]');
    }

    async Click_Apply_Changes()
    {
        await this.apply_changes.click();
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

    // This function will check wether the medai is selected or not. if not selected, then it will select the media first.
    async Check_for_Media_Selected() {
        let isVisible = false;
    
        try {
            isVisible = await (await this.done).isDisplayed();
        } catch (error) {
            console.log("Done button not found, proceeding to select images.");
        }
    
        if (!isVisible) {
            await this.Click_Img_Tab();
            await this.selectImages(10, '(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])');
            await this.Click_Done();
        } else {
            await this.deselectImages();
            console.log("Inside Check_for_Media_Selected function.");
            await this.Click_Done();
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
    
    // This function will delete images
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
        await (await this.transition).click();
        await browser.pause(1500);

        for(let i=1; i<=2; i++)
        {
            const transition_element = await $(`(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[${i}]`);
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

    get stickers()
    {
        return $('//android.widget.LinearLayout[@resource-id="com.myzesty:id/sticker"]/android.widget.ImageView');
    }

    async Click_Stickers()
    {
        await this.stickers.click();
    }

    get animation()
    {
        return $('//android.widget.TextView[@text="Animation"]');
    }

    get giphy()
    {
        return $('//android.widget.HorizontalScrollView[@resource-id="com.myzesty:id/tabs_layout"]/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.LinearLayout/android.widget.ImageView');
    }

    get neon()
    {
        return $('//android.widget.TextView[@text="Neon"]');
    }

    get trending()
    {
        return $('//android.widget.TextView[@text="Trending"]');
    }

    get reactions()
    {
        return $('//android.widget.TextView[@text="Reactions"]');
    }

    get smileys()
    {
        return $('//android.widget.TextView[@text="Smileys"]');
    }

    get animals()
    {
        return $('//android.widget.TextView[@text="Animals"]');
    }

    get others()
    {
        return $('//android.widget.TextView[@text="Others"]');
    }

    // Verify all Sticker Categories.
    async Verify_Sticker_Category()
    {
        const animation_visible = await (await this.animation).isDisplayed();
        if(animation_visible){
            (await this.animation).click();
            const animation_text = await (await this.animation).getText();
            assert.strictEqual(animation_text, 'Animation', "Animation category not asserted.");
        }else{
            console.log("Animation category not visible.");
        }

        const giphy_visible = await (await this.giphy).isDisplayed();
        if(giphy_visible){
            (await this.giphy).click();
            const giphy_text = await (await this.giphy).getText();
            console.log("GIPHY Text: ",giphy_text)
        }else{
            console.log("GIPHY category not visible.");
        }

        const neon_visible = await (await this.neon).isDisplayed();
        if(neon_visible){
            (await this.neon).click();
            const neon_text = await (await this.neon).getText();
            assert.strictEqual(neon_text, 'Neon', "Neon category not asserted.");
        }else{
            console.log("Neon category not visible.");
        }

        const trending_visible = await (await this.trending).isDisplayed();
        if(trending_visible){
            (await this.trending).click();
            const trending_text = await (await this.trending).getText();
            assert.strictEqual(trending_text, 'Trending', "Trending category not asserted.");
        }else{
            console.log("Trending category not visible.");
        }

        const reactions_visible = await (await this.reactions).isDisplayed();
        if(reactions_visible){
            (await this.reactions).click();
            const reactions_text = await (await this.reactions).getText();
            assert.strictEqual(reactions_text, 'Reactions', "Reaction category not asserted.");
        }else{
            console.log("Reaction category not visible.");
        }

        const smiley_visible = await (await this.smileys).isDisplayed();
        if(smiley_visible){
            (await this.smileys).click();
            const smiley_text = await (await this.smileys).getText();
            assert.strictEqual(smiley_text, 'Smileys', "Smiley category not asserted.");
        }else{
            console.log("Smiley category not visible.");
        }

        const animal_visible = await (await this.animals).isDisplayed();
        if(animal_visible){
            (await this.animals).click();
            const animal_text = await (await this.animals).getText();
            assert.strictEqual(animal_text, 'Animals', "Animal category not asserted.");
        }else{
            console.log("Animal category not visible.");
        }

        const others_visible = await (await this.others).isDisplayed();
        if(others_visible){
            (await this.others).click();
            const other_text = await (await this.others).getText();
            assert.strictEqual(other_text, 'Others', "Other category not asserted.");
        }else{
            console.log("Other category not visible.");
        }

    }

    async Verify_close_apply_Btn()
    {
        const cancle_visible = await (await this.cancel).isDisplayed();
        if(cancle_visible)
        {
            console.log("Cancel button visible.");
        }else{
            console.log("Cancel button not visible.");
        }

        const apply_visible = await (await this.apply_changes).isDisplayed();
        if(apply_visible)
        {
            console.log("Apply changes button visible.");
        }else{
            console.log("Apply changes button not visible.");
        }
    }

    get sticker_help()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/showGuide"]');
    }

    get sticker_help_text()
    {
        return $('//android.widget.TextView[@text="How to adjust the duration?"]');
    }

    async Verify_sticker_Help()
    {
        (await this.sticker_help).click();
        const actual_help_text = await (await this.sticker_help_text).getText();
        assert.strictEqual(actual_help_text, 'How to adjust the duration?', 'Adjust sticker duration text not asserted.')
    }

    get sticker_1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[2]');
    }

    get full_duration()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/full_length_icon"]');
    }

    async Apply_Sticker()
    {
        (await this.sticker_1).click();
        await browser.pause(2000);
        const Full_duration_Visible = await (await this.full_duration).isDisplayed();
        if(Full_duration_Visible)
        {
            (await this.full_duration).click();
        }
        else{
            console.log("Full duration is not visible.");
        }
        
    }

    get maximize_minimize()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/btn_full_screen"]');
    }

    async Check_Mini_Maximize()
    {
        (await this.maximize_minimize).click();
    }

    get undo()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/undo"]');
    }

    get redo()
    {
        return  $('//android.widget.ImageView[@resource-id="com.myzesty:id/redo"]');
    }

    // async Undo_changes() 
    // {
    //     try 
    //     {

    //         while (await this.undo.getAttribute('enabled') === 'true') 
    //             {
    //                 await this.undo.click();
    //                 await browser.pause(500);
    //             }
    //     } 
    //     catch (error) 
    //     {
    //         console.log('Error while undoing changes:', error.message);
    //     }
    // }

    async Undo_changes() {
        try {
            while (await this.undo.isEnabled()) {
                await this.undo.click();
                await browser.pause(500);
            }
        } catch (error) {
            console.log('Error while undoing changes:', error.message);
        }
    }
    
    
    async Redo_changes()
    {
        try
        {
            while(await this.redo.getAttribute('enabled') === 'true')
                {
                    await this.redo.click();
                    await browser.pause(500);
                }
        }
        catch(error)
        {
            console.log("Error while redoing changes:", error.message);
        }
        
    }

    get effects()
    {
        return $('//android.widget.LinearLayout[@resource-id="com.myzesty:id/effect"]/android.widget.ImageView');
    }

    async Apply_Effects()
    {
        (await this.effects).click();
    }

    get magnify()
    {
        return $('//android.widget.TextView[@text="Magnify"]');
    }

    get light()
    {
        return $('//android.widget.TextView[@text="Light"]');
    }

    get vibrant()
    {
        return $('//android.widget.TextView[@text="Vibrant"]');
    }

    get outro()
    {
        return $('//android.widget.TextView[@text="Outro"]');
    }

    get neon()
    {
        return $('//android.widget.TextView[@text="Neon"]');
    }

    get dynamic()
    {
        return $('//android.widget.TextView[@text="Dynamic"]');
    }

    get zoom()
    {
        return $('//android.widget.TextView[@text="Zoom"]');
    }

    get retro()
    {
        return $('//android.widget.TextView[@text="Retro"]');
    }

    get soundsync()
    {
        return $('//android.widget.TextView[@text="SoundSync"]');
    }

    get intro()
    {
        return $('//android.widget.TextView[@text="Intro"]');
    }

    get cinematic()
    {
        return $('//android.widget.TextView[@text="Cinematic"]');
    }

    get distort()
    {
        return $('//android.widget.TextView[@text="Distort"]');
    }

    get mirror()
    {
        return $('//android.widget.TextView[@text="Mirror"]');
    }

    get glitz()
    {
        return $('//android.widget.TextView[@text="Glitz"]');
    }

    // Verify all Effects category.
    // async Verify_Effects()
    // {
    //     const zoom_Visible = await (await this.zoom).isDisplayed();
    //     if(zoom_Visible){
    //         (await this.zoom).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Zoom category not visible.");
    //     }

    //     const cinematic_Visible = await (await this.cinematic).isDisplayed();
    //     if(cinematic_Visible){
    //         (await this.cinematic).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Cinematic category not visible.");
    //     }

    //     const magnify_Visible = await (await this.magnify).isDisplayed();
    //     if(magnify_Visible){
    //         (await this.magnify).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Magnify category not visible.")
    //     }

    //     const distort_Visible = await (await this.distort).isDisplayed();
    //     if(distort_Visible){
    //         (await this.distort).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Distort category not visible.");
    //     }

    //     const glitz_Visible = await (await this.glitz).isDisplayed();
    //     if(glitz_Visible){
    //         (await this.glitz).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Glitz category not visible.");
    //     }

    //     const intro_Visible = await (await this.intro).isDisplayed();
    //     if(intro_Visible){
    //         (await this.intro).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Intro category not visible.");
    //     }

    //     const mirror_Visible = await (await this.mirror).isDisplayed();
    //     if(mirror_Visible){
    //         (await this.mirror).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Mirror category not visible.");
    //     }

    //     const neon_Visible = await (await this.neon).isDisplayed();
    //     if(neon_Visible){
    //         (await this.neon).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Neon category not visible.");
    //     }

    //     const light_Visible = await (await this.light).isDisplayed();
    //     if(light_Visible){
    //         (await this.light).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Light category not visible.")
    //     }

    //     const outro_Visible = await (await this.outro).isDisplayed();
    //     if(outro_Visible){
    //         (await this.outro).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Outro category not visible.")
    //     }

    //     const sound_Visible = await (await this.soundsync).isDisplayed();
    //     if(sound_Visible){
    //         (await this.soundsync).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("SoundSync category not visible.");
    //     }

    //     const dynamic_Visible = await (await this.dynamic).isDisplayed();
    //     if(dynamic_Visible){
    //         (await this.dynamic).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Dynamic category not visible.");
    //     }

    //     const retro_Visible = await (await this.retro).isDisplayed();
    //     if(retro_Visible){
    //         (await this.retro).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Retro category not visible.");
    //     }

    //     const vibrant_Visible = await (await this.vibrant).isDisplayed();
    //     if(vibrant_Visible){
    //         (await this.vibrant).click();
    //         await this.Apply_all_Effects();
    //     }
    //     else{
    //         console.log("Vibrant category not visible.")
    //     }
        
    // }

    // Apply the first 4 filters of all effects.
    
    async Verify_Effects() {
        const categories = [
            { name: "Light", element: this.zoom },
            { name: "Magnify", element: this.cinematic },
            { name: "Distort", element: this.magnify },
            { name: "Dynamic", element: this.distort },
            { name: "Intro", element: this.glitz },
            { name: "Neon", element: this.intro },
            { name: "Outro", element: this.mirror },
            { name: "Vibrant", element: this.neon },
            { name: "Zoom", element: this.light },
            { name: "Cinematic", element: this.outro },
            { name: "SoundSync", element: this.soundsync },
            { name: "Retro", element: this.dynamic },
            { name: "Glitz", element: this.retro },
            { name: "Mirror", element: this.vibrant }
        ];
    
        // const { width, height } = await driver.getWindowRect();
        // const y = Math.floor(height * 0.5);
        // const startX = Math.floor(width * 0.8);
        // const endX = Math.floor(width * 0.2);
    
        for (const category of categories) {
            let found = false;
    
            // First try without swiping
            try {
                const visible = await (await category.element).isDisplayed();
                if (visible) {
                    await (await category.element).click();
                    await this.Apply_all_Effects();
                    found = true;
                    continue;
                }
            } catch (e) {}
    
            // Try swiping left-to-right (rightward)
            for (let i = 0; i < 3 && !found; i++) {
                await Sliders.scrollScreenHorizontally(232, 920, 1666); // swipe right
                try {
                    const visible = await (await category.element).isDisplayed();
                    if (visible) {
                        await (await category.element).click();
                        await this.Apply_all_Effects();
                        found = true;
                        break;
                    }
                } catch (e) {}
            }
    
            // If still not found, try swiping right-to-left (leftward)
            for (let i = 0; i < 5 && !found; i++) {
                await Sliders.scrollScreenHorizontally(940, 317, 1666); // swipe left
                try {
                    const visible = await (await category.element).isDisplayed();
                    if (visible) {
                        await (await category.element).click();
                        await this.Apply_all_Effects();
                        found = true;
                        break;
                    }
                } catch (e) {}
            }
    
            if (!found) {
                console.log(`${category.name} category not visible.`);
            }
        }
    }
    
    
    
    async Apply_all_Effects() 
    {
        let index = 1;
        let processCount = 0 ;
        while (index <=4) { // If you want to check all effects, change condition to true
            try {
                const effect = await $(`(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[${index}]`);
                
                if (!(await effect.isExisting())) {
                    console.log(`No more effects found. Stopping at index ${index}.`);
                    break;
                }
    
                console.log(`Clicking on effect ${index}`);
                await effect.click();
    
                await browser.pause(1500);
                index++; // Move to the next effect
                processCount ++;

                if(processCount % 10 === 0 )
                {
                    await Sliders.scrollScreen(472, 2296, 472, 1875);
                    await browser.pause(1000);
                }
            } catch (error) {
                console.log(`Error clicking effect ${index}:`, error.message);
                break;
            }
        }
    }

    get add_music()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/addMusic"]');
    }
    async Click_Add_Music()
    {
        (await this.add_music).click();
    }

    get apply_music()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/done"])[2]');
    }

    async Click_Apply_Music()
    {
        (await this.apply_music).click();
    }

    get record()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/record"]');
    }

    get start_stop()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/record_button"]');
    }


    // Record audio then apply it.
    async Verify_Record_Audio()
    {
        (await this.record).click();
        (await this.start_stop).click();
        await browser.pause(5000);
        (await this.start_stop).click();
        // await Sliders.play_pause(startX, startY);
        (await this.apply_music).click();
        await browser.pause(500);
        (await this.apply_music).click();

    }

    get toggle()
    {
        return $('//android.widget.Switch[@resource-id="com.myzesty:id/switch_mute"]');
    }

    async Verify_Toggle()
    {
        (await this.toggle).click();
    }

    get my_library()
    {
        return $('//android.widget.TextView[@text="My Library"]');
    }

    get mylibrary_song()
    {
        return $('(//android.widget.ImageView[@resource-id="com.google.android.documentsui:id/icon_thumb"])[1]');
    }

    // Open phone library and add song
    async Click_My_Library()
    {
        (await this.my_library).click();
        (await this.mylibrary_song).click();
        await this.Click_Apply_Music();
        await browser.pause(1000);
    }

    get outdoor()
    {
        return $('//android.widget.TextView[@text="Outdoor"]');
    }
    get stylze()
    {
        return $('//android.widget.TextView[@text="Stylze"]');
    }
    get portrait()
    {
        return $('//android.widget.TextView[@text="Portrait"]');
    }
    get outdoor()
    {
        return $('//android.widget.TextView[@text="outdoor"]');
    }
    get mono()
    {
        return $('//android.widget.TextView[@text="Mono"]');
    }


    async Click_Presets()
    {
        (await this.presets).click();
        await browser.pause(1000);

    }

    get presets()
    {
        return $('//android.widget.LinearLayout[@resource-id="com.myzesty:id/preset"]/android.widget.ImageView');
    }

    get Mono()
    {
        return $('//android.widget.TextView[@text="Mono"]');
    }
    get Unique()
    {
        return $('//android.widget.TextView[@text="Unique"]');
    }
    get Night()
    {
        return $('//android.widget.TextView[@text="Night"]');
    }
    get Movie()
    {
        return $('//android.widget.TextView[@text="Movie"]');
    }
    get Neon()
    {
        return $('//android.widget.TextView[@text="Neon"]');
    }
    get Gradient()
    {
        return $('//android.widget.TextView[@text="Gradient"]');
    }
    get Trends()
    {
        return $('//android.widget.TextView[@text="Trends"]');
    }
    get Color()
    {
        return $('//android.widget.TextView[@text="Color"]');
    }
    get Outdoor()
    {
        return $('//android.widget.TextView[@text="Outdoor"]');
    }
    get Portrait()
    {
        return $('//android.widget.TextView[@text="Portrait"]');
    }
    get Retro()
    {
        return $('//android.widget.TextView[@text="Retro"]');
    }
    get Stylze()
    {
        return $('//android.widget.TextView[@text="Stylze"]');
    }

    // Verify all Presets Category
    async Verify_Presets()
    {
        const mono_Visible = (await this.Mono).isDisplayed();
        if(mono_Visible){
            (await this.mono).click();
            await browser.pause(1000);
            await this.Apply_all_Effects();
        }
        else{
            console.log('Mono category not visible.')
        }

        const movie_Visible = (await this.Movie).isDisplayed();
        if(movie_Visible){
            (await this.Movie).click();
            await browser.pause(1000);
            await this.Apply_all_Effects();
        }
        else{
            console.log('Movie category not visible.')
        }

        const night_Visible = (await this.Night).isDisplayed();
        if(night_Visible){
            (await this.Night).click();
            await browser.pause(1000);
            await this.Apply_all_Effects();
        }
        else{
            console.log('Night category not visible.')
        }

        const gradient_Visible = (await this.Gradient).isDisplayed();
        if(gradient_Visible){
            (await this.Gradient).click();
            await browser.pause(1000);
            await this.Apply_all_Effects();
        }
        else{
            console.log('Gradient category not visible.')
        }

        const neon_Visible = (await this.Neon).isDisplayed();
        if(neon_Visible){
            (await this.Neon).click();
            await browser.pause(1000);
            await this.Apply_all_Effects();
        }
        else{
            console.log('Neon category not visible.')
        }

        const trends_Visible = (await this.Trends).isDisplayed();
        if(trends_Visible){
            (await this.Trends).click();
            await browser.pause(1000);
            await this.Apply_all_Effects();
        }
        else{
            console.log('Trends category not visible.')
        }

        const color_Visible = (await this.Color).isDisplayed();
        if(color_Visible){
            (await this.Color).click();
            await browser.pause(1000);
            await this.Apply_all_Effects();
        }
        else{
            console.log('Color category not visible.')
        }

        const portrait_Visible = (await this.Portrait).isDisplayed();
        if(portrait_Visible){
            (await this.Portrait).click();
            await browser.pause(1000);
            await this.Apply_all_Effects();
        }
        else{
            console.log('Portrait category not visible.')
        }

        const outdoor_Visible = (await this.Outdoor).isDisplayed();
        if(outdoor_Visible){
            (await this.Outdoor).click();
            await browser.pause(1000);
            await this.Apply_all_Effects();
        }
        else{
            console.log('Outdoor category not visible.')
        }

        const retro_Visible = (await this.Retro).isDisplayed();
        if(retro_Visible){
            (await this.Retro).click();
            await browser.pause(1000);
            await this.Apply_all_Effects();
        }
        else{
            console.log('Retro category not visible.')
        }

        const unique_Visible = (await this.Unique).isDisplayed();
        if(unique_Visible){
            (await this.Unique).click();
            await browser.pause(1000);
            await this.Apply_all_Effects();
        }
        else{
            console.log('Unique category not visible.')
        }

        // const stylze_Visible = (await this.Stylze).isDisplayed();
        // if(stylze_Visible){
        //     (await this.Stylze).click();
        //     await browser.pause(1000);
        //     await this.Apply_all_Effects();
        // }
        // else{
        //     console.log('Stylze category not visible.')
        // } 

    }

    get magic()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/magic_icon"]');
    }

    async Apply_Magic()
    {
        (await this.magic).click();
        await browser.pause(2000);
    }

    get text()
    {
        return $('//android.widget.LinearLayout[@resource-id="com.myzesty:id/text"]/android.widget.ImageView');
    }

    get text_area()
    {
        return $('//android.widget.EditText[@resource-id="com.myzesty:id/text_area"]');
    }

    get apply_full_duration()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/full_length_icon"]');
    }

    get cancel_text()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/delete_icon"]');
    }

    async Enter_Empty_Text()
    {
        (await this.text).click();
        await browser.pause(1000);

        const text_area_Visible = (await this.text_area).isDisplayed();
        if(text_area_Visible){
            (await this.text_area).click();
            await browser.keys(' ');
            await  this.apply_full_duration.click();
            await browser.pause(1000);
            await this.Click_Apply_Changes();
        }
        else{
            console.log('Text input field not visible.');
        }
    }

    // Apply text at current media, then at full duration.
    async Enter_Text()
    {
        (await this.text).click();
        await browser.pause(1000);

        const text_area_Visible = (await this.text_area).isDisplayed();
        if(text_area_Visible){
            await browser.keys('Script running..');
            (await this.cancel_text).click();
            await browser.pause(500);

            (await this.text).click();
            await browser.pause(500);
            await browser.keys('Script 2 writing..');
            (await this.apply_full_duration).click();
            (await this.cancel_text).click();
            await browser.pause(500);

            (await this.text).click();
            await browser.pause(500);
            await browser.keys('Final Script..');
            (await this.apply_full_duration).click();
            await browser.pause(1500);
            await this.Click_Apply_Changes();
            await browser.pause(1000);
            await this.Click_Apply_Changes();
            await browser.pause(1000);

            (await this.text).click();
            await browser.pause(1000);
            await browser.keys('Half Duration..');
            await this.Click_Apply_Changes();


        }
        else{
            console.log('Text input field not visible.');
        }
    }

    get text_font()
    {
        return $('//android.widget.TextView[@text="Font"]');
    }
    get text_color()
    {
        return $('//android.widget.TextView[@text="Color"]');
    }
    get text_style()
    {
        return $('//android.widget.TextView[@text="Style"]');
    }
    get text_stroke()
    {
        return $('//android.widget.TextView[@text="Stroke"]');
    }

    // Check for text Style, Color nad Font Style
    async Verify_Text_Properties()
    {
        (await this.text_font).waitForDisplayed();
        const actual_font = await (await this.text_font).getText();
        assert.strictEqual(actual_font, 'Font', 'Font text not asserted.');

        (await this.text_color).waitForDisplayed();
        const actual_color = await (await this.text_color).getText();
        assert.strictEqual(actual_color, 'Color', 'Color text not asserted.');

        (await this.text_style).waitForDisplayed();
        const actual_style = await (await this.text_style).getText();
        assert.strictEqual(actual_style, 'Style', 'Style text not asserted.');

        (await this.text_stroke).waitForDisplayed();
        const actual_stroke = await (await this.text_stroke).getText();
        assert.strictEqual(actual_stroke, 'Stroke', 'Stroke text not asserted.');

    }

    get text_help()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/showGuide"]');
    }

    get text_help_text()
    {
        return $('//android.widget.TextView[@text="How to adjust the duration?"]');
    }

    async  Verify_Text_Help()
    {
        (await this.text_help).click();
        const actual_sticker_help = await (await this.text_help_text).getText();
        assert.strictEqual(actual_sticker_help, 'How to adjust the duration?',  "Text help text not asserted.");

    }

    get unlock_font()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[2]');
    }

    async Apply_Font_Style()
    {
        (await this.unlock_font).click();
        await browser.pause(1000);
        (await this.close_editing).click();
    }

    get project_screen_next_btn()
    {
        return $('//android.widget.Button[@resource-id="com.myzesty:id/next"]');
    }
    get project_setting()
    {
        return $('//android.widget.Button[@resource-id="com.myzesty:id/next"]');
    }

    async Project_Screen_Next()
    {
        const project_screen_Visible = (await this.project_setting).isDisplayed();
        if(project_screen_Visible)
        {
            (await this.project_screen_next_btn).click();
        }
        else{
            console.log("Project screen not displayed.");
        }
    }

    get draft_proj_1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/img"])[1]');
    }

    get export()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/export"]');
    }

    get rate_us()
    {
        return $('//android.widget.Button[@content-desc="rate-us-button"]');
    }

    get close_rate_us()
    {
        return $('//android.widget.TextView[@text=""]');
    }

    get export_done()
    {
        return $('//android.view.ViewGroup[@content-desc="Done"]');
    }

    get sort()
    {
        return $('//android.widget.TextView[@text="Sort By"]');
    }

    get video()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])[5]');
    }

    async Open_Proj_Draft_1()
    {
        (await this.draft_proj_1).click();
        await browser.pause(2000);
    }

    async Click_export()
    {
        await this.export.click();
    }

    async Check_Rate_Us()
    {
        const rate_us_Visible = (await this.rate_us).isDisplayed();
        if(rate_us_Visible)
        {
            (await this.close_rate_us).click();
        }
        else{
            console.log('Rate Us Pop Up not appeared.');
        }
    }

    async Click_Export_Done()
    {
        (await this.export_done).click();
    }

    async Sort_Videos()
    {
        (await this.sort).click();
    }

    async Select_Video_with_Audio()
    {
        (await this.video).click();
    }

    async clickWithRetry(selector, retries = 3, delay = 1000) {
        const el = await $(selector);
        
        for (let i = 0; i < retries; i++) {
          try {
            await el.click();
            console.log(`Clicked on element '${selector}' successfully`);
            break;
          } catch (err) {
            console.warn(`Click failed on attempt ${i + 1} for selector '${selector}'`);
            if (i === retries - 1) throw err; // throw after final attempt
            await driver.pause(delay);
          }
        }
      }
      

    // =============== Main Function ===============
    async Verify_Wizard_Mute_Toggle()
    {
        try
        {
          await Subscription.Check_Subscription('Processing') ;
          await browser.pause(2000);
          // Add video with sound & check toggle button
          await this.Click_Video_Editor();
          await this.Click_Video_Tab();
          await browser.pause(500);
          await this.Sort_Videos();
          await browser.pause(500);
          await Sliders.scrollScreen(540, 586, 546, 1600);
          await browser.pause(1000);
          await this.Select_Video_with_Audio();
          await this.Click_Done();
          await Sliders.play_pause(534, 1403) ;
          // // await this.clickWithRetry('//android.widget.ImageView[@resource-id="com.myzesty:id/play"]'); // It will click on given element multiple time
          await Promise.all([
              await browser.pause(3000),
              await Sliders.tapScreen(534, 1403),
          ]);
          await this.Click_Audio();
          await this.Verify_Toggle();
          await this.Click_Apply_Changes();
          await Sliders.play_pause(534, 1403) ;
          await Promise.all([
              await browser.pause(3000),
              await Sliders.tapScreen(534, 1403),
          ]);
          // Save to Draft         
          await this.Close_Project();
          await browser.pause(1500);
          
          await this.Open_Proj_Draft_1();
          await this.Click_export();
          await browser.pause(3000);
          await this.Check_Rate_Us();
          await this.Click_Export_Done();
          await browser.pause(700);
        }
        catch (error)
        {
            console.log('❌ Verify Mute Toggle button Wizard Functionality FAILED', error.message);
            throw error;
        }
    }

    async Verify_Media_Selection()
    {
        try
        {

            await this.Click_Video_Editor();
            await this.Click_Img_Tab();
            await  this.selectImages(25, '(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])');
            await this.Click_Done();
            // await this.Project_Screen_Next();
            await this.Click_Cancel();
            await this.Check_for_Media_Selected();
            await this.Project_Screen_Next();
            await this.Verify_Transcoding();
            await browser.pause(1500);
            await this.Click_Audio();
            await this.Click_Add_Music();
            await Sliders.Music_tab_Click();
            await Sliders.Slider(driver, 396, 437, 1738, 1906, 0.6);
            await this.Click_Apply_Music();
            await this.Click_Apply_Changes();
            await this.Verify_Wizard();
            await browser.pause(1000);

            await this.Add_More_Media();
            await this.Click_Img_Tab();
            await this.selectImages(2, '(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])');
            await this.Click_Video_Tab();
            await this.selectImages(1, '(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])');
            await this.Click_Done();
            await this.Verify_Transcoding();
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
            await this.Close_Project();
            await browser.pause(1000);
            await this.Verify_Transition();
            await this.Click_Apply_Changes();
            await this.Verify_Transition();
            await this.Transition_1();
            await this.Click_Apply_All();
            await this.Click_Apply_Changes();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Media Selection Functionality FAILED', error.message);
            throw error;
        }
    }

    async Verify_Wizard_Stickers()
    {
        try
        {
            await this.Click_Stickers();
            await this.Verify_Sticker_Category();
            await this.Verify_close_apply_Btn();
            await this.Verify_sticker_Help();
            await Sliders.tapScreen(510, 1313);
            await this.Apply_Sticker();
            await this.Click_Apply_Changes();
            await Sliders.play_pause(534, 1403) ;
            await browser.pause(500);
            await this.Check_Mini_Maximize();
            await browser.pause(1000);
            await Sliders.play_pause(75, 2340) ;
            await browser.pause(3000);
            await Sliders.play_pause(75, 2340) ;
            await this.Check_Mini_Maximize();
            await this.Undo_changes();
            await browser.pause(1000);
            await this.Redo_changes();
            await browser.pause(1000);
    
        }
        catch (error)
        {
            console.log('❌ Verify Wizard Sticker Functionality FAILED', error.message);
            throw error;
        }
    }

    async Verify_Wizard_Effect()
    {
        try
        {
            await this.Apply_Effects();
            await browser.pause(1500);
            await this.Click_Apply_Changes();
            await this.Apply_Effects();
            await this.Verify_Effects();
            await this.Click_Apply_All();
            await browser.pause(1000);
            await this.Click_Apply_Changes();
            await Sliders.play_pause(534, 1403) ;
            await browser.pause(3000);
            await Sliders.play_pause(534, 1403) ;
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Wizard Effect Functionality FAILED', error.message);
            throw error;
        }
    }

    async Verify_Wizard_Audio()
    {
        try
        {
            await this.Click_Audio();
        await this.Click_Add_Music()
        await Sliders.Music_tab_Click();
        await Sliders.dragSliderWithBounds('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]', 200, [133,1822]);
        try{
            await this.Click_Apply_Music();
        }
        catch{
            console.log("Apply button not visible.");
        }
        
        await this.Verify_Record_Audio();
        await this.Verify_Toggle();
        await browser.pause(1000);
        try
        {
            await this.Click_Apply_Changes();
        }
        catch{
            console.log("Apply 2 button not visible.");
        }
       
        await Sliders.play_pause(75, 2340);
        await browser.pause(3000);
        await Sliders.play_pause(75, 2340);
        // await this.Click_Audio();
        // await this.Click_Add_Music();
        // await this.Click_My_Library();
        // try{
        //     await this.Click_Apply_Changes();
        // }
        // catch{
        //     console.log("Apply button 3 not visible.");
        // }
        
        await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Wizard Audio Functionality FAILED', error.message);
            throw error;
        }
    }

    async Verify_Wizard_Preset()
    {
        try
        {
            await this.Click_Presets();
            await this.Verify_Presets();
            await this.Click_Apply_All();
            await browser.pause(1000);
            await this.Click_Apply_Changes();
            await Sliders.play_pause(534, 1403) ;
            await browser.pause(3000);
            await Sliders.play_pause(534, 1403) ;
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Wizard Preset Functionality FAILED', error.message);
            throw error;
        }
    }

    async Verify_Wizard_Magic()
    {
        try
        {
            await this.Apply_Magic();
            await this.Check_Mini_Maximize();
            await browser.pause(1000);
            await Sliders.play_pause(75, 2340) ;
            await browser.pause(5000);
            await Sliders.play_pause(75, 2340) ;
            await this.Check_Mini_Maximize();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Wizard Magic Functionality FAILED', error.message);
            throw error;
        }
    }

    async Verify_Wizard_Text()
    {
        try
        {
            await Sliders.Slider(driver, 18, 1062, 1477, 1522, 0.3);
            await this.Enter_Empty_Text();
            await browser.pause(2000);
            await this.Enter_Text();
            await this.Verify_Text_Properties();;
            await this.Verify_Text_Help(); 
            await browser.pause(700);
            await Sliders.tapScreen(500, 1260);
            await this.Apply_Font_Style();
        }
        catch (error)
        {
            console.log('❌ Verify Wizard Text Functionality FAILED', error.message);
            throw error;
        }
    }

    async Verify_Draft_Export()
    {
        try
        {
            await this.Close_Project();
            await browser.pause(1500);
            await this.Open_Proj_Draft_1();
            await browser.pause(1000);
            await this.Click_export();
            // await Common_function.Check_export_progress('//android.widget.TextView[@resource-id="com.myzesty:id/percLabel"]');
            await this.Check_Rate_Us();
            await this.Click_Export_Done();
            await browser.pause(700);
        }
        catch (error)
        {
            console.log('❌ Verify Chroma Functionality FAILED', error.message);
            throw error;
        }
    }

   
}



export default new Video_Editor();