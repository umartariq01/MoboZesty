import { $, browser, driver } from '@wdio/globals' ;
import Sliders from '../pageobjects/sliders.page.js' ;
import assert from 'assert' ;
import Subscription from '../pageobjects/BuyPremium.page.js';


class QC_Adv_Edit
{

    get QC()
    {
        return $('//android.view.ViewGroup[@content-desc="Try, Quick Cuts"]/android.view.ViewGroup');
    }

    get img_tab()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/image_tab"]');
    }

    get video_tab()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/video_tab"]');
    }

    get img_1()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[1]');
    }

    get img_2()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[2]');
    }

    get img_5()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[5]');
    }

    get img_10()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[10]');
    }

    get img_11()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[11]');
    }

    get vid1()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[4]');
    }

    get vid2()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[5]');
    }

    get vid7()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[7]');
    }

    get vid8()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[12]')
    }

    get done()
    {
        return $('//android.widget.TextView[@text="DONE"]');
    }

    get filter1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/imageView"])[1]');
    }

    get filter2()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/imageView"])[2]');
    }

    get filter3()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/imageView"])[3]') ;
    }

    get filter4()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/imageView"])[4]') ;
    }

    get sort()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/sorttype"]');
    }

    get export()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/export"]');
    }

    get resolution()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/qualityText"]');
    }

    get close_resolution_or_record()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/cancel"]');
    }

    get resolution_720()
    {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.myzesty:id/option_recycle"]/android.widget.FrameLayout[3]/android.view.ViewGroup');
    }

    //========================== Advance Edit Paths ==================================

    get edit()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/tv_edit"]');
    }

    get adv_edit()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/advanceEdit"]');
    }

    get wizard_popup()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/done"]');
    }

    get full_editor()
    {
        return $('//android.widget.TextView[@text="Full Editor"]');
    }

    get play_button()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/play"]');
    }

    get add_media()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/add_video"]');
    }

    get add_images()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/add_video"]');
    }

    get loading()
    {
        return $('//android.view.View[@resource-id="com.myzesty:id/ring_progress"]');
    }

    get Mute_all()
    {
        return $('//android.widget.HorizontalScrollView[@resource-id="com.myzesty:id/videoTrackView"]/android.view.ViewGroup/android.widget.LinearLayout');
    }

    // get audio()
    // {
    //     return $('(//android.widget.LinearLayout[@resource-id="com.myzesty:id/icon_area"])[4]');
    // }

    // get add_audio()
    // {
    //     return $('(//android.widget.LinearLayout[@resource-id="com.myzesty:id/icon_area"])[1]');
    // }

    get record_audio()
    {
        return  $('(//android.widget.LinearLayout[@resource-id="com.myzesty:id/icon_area"])[2]');
    }
    get edit_audio()
    {
        return $('//android.widget.TextView[@text="Edit Audio"]');
    }

    get audio_bar()
    {
        return $('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]' || '(//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"])[1]');
    }

    get return_button()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/back"]/android.widget.ImageView');
    }

    get start_record()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/record_button"]');
    }

    get Done_record()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/done"]');
    }

    get Voice_recorsd()
    {
        return $('(//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"])[2]' || '(//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"])[3]');
    }

    get close_editing()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/cancel"]');
    }

    get first_draft()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/img"])[1]');
    }

    get maximize_minimize_screen()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/btn_full_screen"]');
    }

    get undo()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/undo"]');
    }

    get redo()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/redo"]')
    }





    //=========================================================================

    async Undo_changes() 
    {
        try 
        {

            while (await this.undo.getAttribute('enabled') === 'true') 
                {
                    await this.undo.click();
                    await browser.pause(500);
                }
        } 
        catch (error) 
        {
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

    async  Click_maximize_minimize()
    {
        await this.maximize_minimize_screen.click();
    }


    async Open_draft()
    {
        await this.first_draft.click();
        await browser.pause(3000);
    }
    async Click_close_editing()
    {
        await this.close_editing.click();
    }
    async Confirm_voice_record()
    {
        const record_visible = await this.Voice_recorsd.isDisplayed();
        if(record_visible)
        {
            console.log("Voiceover is attached.")
        }
        else
        {
            console.log("Voiceover is not attached.")
            console.error("Error finding voiceover...");
        }
    }
    async Click_done_record()
    {
        await this.Done_record.click();
    }
    async Click_start_record() 
    {
        await this.start_record.click();
    }

    async Click_stop_record()
    {
        await this.start_record.click();
    }
    
    async Click_record_audio()
    {
        await this.record_audio.click();
    }
    async Click_Edit_Audio()
    {
        await this.edit_audio.click();
    }

    async Verify_Audio_Bar()
    {
        const audio_display = await this.audio_bar.isDisplayed();
        if(audio_display)
        {
            console.log("Audio is present when move from QC to advance edit.")
        }
        else
        {
            console.log("Audio is not present when move from QC to advance edit.!")
        }

    }

    async Main_return_button()
    {
        await this.return_button.click();
    }

    async Try_QC()
    {
        await this.QC.click();
    }

    async select_img_tab()
    {
        await this.img_tab.click();
    }

    async select_video_tab()
    {
        await this.video_tab.click()
    }

    async select_img1()
    {
        await this.img_1.waitForDisplayed({timeout:2000});
        await this.img_1.click();
    }

    async select_img2()
    {
        await this.img_2.click();   
    }

    async select_img5()
    {
        await this.img_5.click();
    }

    async select_img10()
    {
        await this.img_10.click();
    }

    async select_img11()
    {
        await this.img_11.click();
    }

    async click_sort()
    {
        await this.sort.click();
    }

    async Select_vid1()
    {
        await  this.vid1.click();
    }

    async Select_vid2()
    {
        await this.vid2.click();
    }

    async Select_vid7()
    {
        await this.vid7.click();
    }

    async Select_vid8()
    {
        await this.vid8.click();
    }

    async Click_done()
    {
        await this.done.click();
    }

    async Advance_edit()
    {
        await this.adv_edit.click();
    }

    async Click_wizard_popup()
    {
        await browser.pause(3000);
        const Wizard_visible = await this.wizard_popup.isDisplayed();

        if(Wizard_visible)
        {
            await this.wizard_popup.click();
        }
        else
        {
            console.log("Popup not available.")
        }
        
    }

    async Click_full_editor()
    {
        await this.full_editor.waitForExist();
        await this.full_editor.click();
    }

    async Click_export()
    {
        await this.export.click();
    }

    async click_resolution()
    {
        await this.resolution.click();
    }

    async Cliick_close_resolution_or_record()
    {
        await this.close_resolution_or_record.click();
    }

    async click_resolution_720()
    {
        await this.resolution_720.click();
    }

    async click_edit()
    {
        await this.edit.waitForDisplayed();
        await this.edit.click();
    }

    async play_video()
    {
        await this.play_button.click();
    }

    Play_video()
    {
        return this.play_button.click()
    }

    async Adv_add_img()
    {
        await this.add_images.waitForDisplayed({timeout:5000});
        await this.add_images.click();
    }

    async Click_mute_all()
    {
        await this.Mute_all.click();
    }

    // Sliding seekbar from rright to left
    async Timeline_slider(startX, endX, y, duration = 300, maxAttempts = 10) {
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            // Check if the element is visible
            const isVisible = await this.Mute_all.isDisplayed();
            
            if (isVisible) {
                console.log("Element is visible.");
                return true; // Stop scrolling when the element is visible
            }
    
            // Horizontal swipe: startX -> endX at a fixed vertical position (y)
            await browser.performActions([{
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: y }, // Move to the starting horizontal position
                    { type: 'pointerDown', button: 0 }, // Press down
                    { type: 'pointerMove', duration: duration, x: endX, y: y }, // Slide horizontally to the end position
                    { type: 'pointerUp',   button : 0 } // Release
                ]
            }]);
            
            console.log(`Attempt ${attempt + 1}: Scrolled horizontally.`);
        }
    
        console.log("Element is not visible after maximum attempts.");
        return false; // Return false if the element is not found
    }

    async zoomin(startX1, startY1, startX2, startY2, endX1, endY1, endX2, endY2, repetitions = 2) {
        console.log('Zoom-in Start Coordinates:', { startX1, startY1, startX2, startY2 });
        console.log('Zoom-in End Coordinates:', { endX1, endY1, endX2, endY2 });
        console.log(`Number of repetitions: ${repetitions}`);
    
        for (let i = 0; i < repetitions; i++) {
            console.log(`Performing zoom-in gesture ${i + 1} of ${repetitions}`);
            
            await browser.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: startX1, y: startY1 }, // Initial position of finger 1
                        { type: 'pointerDown' }, // Press finger 1
                        // { type: 'pause', duration: 0 }, // Pause for a short time
                        { type: 'pointerMove', duration: 500, x: endX1, y: endY1 }, // Move finger 1 outward
                        { type: 'pointerUp' } // Release finger 1
                    ]
                },
                {
                    type: 'pointer',
                    id: 'finger2',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: startX2, y: startY2 }, // Initial position of finger 2
                        { type: 'pointerDown' }, // Press finger 2
                        // { type: 'pause', duration: 0 }, // Pause for a short time
                        { type: 'pointerMove', duration: 500, x: endX2, y: endY2 }, // Move finger 2 outward
                        { type: 'pointerUp' } // Release finger 2
                    ]
                }
            ]);
    
            // Optional: Pause briefly between repetitions
            await browser.pause(500);
        }
    
        console.log('Zoom-in gesture performed successfully for all repetitions.');
    }


    async play_pause(selector) {
        try {
            const element = await $(selector); // Locate the element
            const location = await element.getLocation(); // Get element coordinates
    
            await driver.performActions([
                {
                    type: "pointer",
                    id: "finger1",
                    parameters: { pointerType: "touch" },
                    actions: [
                        { type: "pointerMove", duration: 0, x: location.x, y: location.y },
                        { type: "pointerDown", button: 0 },
                        { type: "pause", duration: 100 },
                        { type: "pointerUp", button: 0 }
                    ]
                }
            ]);
    
            console.log("Tapped on the element successfully");
        } catch (error) {
            console.error("Error while tapping the element:", error);
        }
    }

    async scrollUntilElementIsVisible(element, startX, startY, endX, endY, maxScrolls = 5, duration = 1000) {
        for (let i = 0; i < maxScrolls; i++) {
            let isDisplayed = await $(element).isDisplayed();
            
            if (isDisplayed) {
                console.log("Element found!");
                return; // Exit the function if the element is visible
            }
    
            // Scroll the screen
            await Sliders.scrollScreen(startX, startY, endX, endY, 1, duration);
        }
    
        throw new Error("Element not found after maximum scroll attempts");
    }

    async waitForElementToBeVisible(xpath) 
    {
        const element = await $(xpath);
    
        await browser.waitUntil(async () => {
            return await element.isDisplayed(); // Wait until the element is displayed
        }, {
            timeout: 15000, // Maximum wait time (15 seconds)
            timeoutMsg: `Element with XPath "${xpath}" did not become visible within 15 seconds`
        });
    }

    async waitForElementToDisappear(xpath, timeout = 15000) {
        const element = await $(xpath);
    
        await browser.waitUntil(async () => {
            return !(await element.isDisplayed()); // Wait until the element is NOT displayed
        }, {
            timeout: timeout, // Maximum wait time (default 15 seconds)
            timeoutMsg: `Element with XPath "${xpath}" is still visible after ${timeout / 1000} seconds`
        });
    }

    get filter2()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image_view"])[2]');
    }
    async Click_Fiilter_3()
    {
        (await this.filter3).click();
    }
    
    

    // ========= Main Function =======

    async Adv_Edit_Run()
    {

        await Subscription.Check_Subscription('Processing')
        await this.Try_QC();

        await this.select_img_tab();
        await this.select_img1();
        await this.select_img2();

        await this.select_video_tab();
        await this.click_sort();
        Sliders.scrollScreen(500, 400, 500, 1700, 500);
        await  this.Select_vid1();
        await this.Select_vid2();
        await this.Click_done();
        await this.waitForElementToDisappear('//android.widget.TextView[@resource-id="com.myzesty:id/trans_label"]');
        await this.waitForElementToBeVisible('//android.widget.TextView[@resource-id="com.myzesty:id/tv_edit"]');
        await this.Click_Fiilter_3();
        await Sliders.Slider(driver, 18, 1062, 1494, 1546, 0.3);


        await this.click_edit();
        await this.Advance_edit();
        await this.Click_wizard_popup();
        await browser.pause(1000);
        await this.Click_full_editor();

        await this.scrollUntilElementIsVisible('//android.widget.ImageView[@resource-id="com.myzesty:id/image"]', 47, 1620, 836, 1620);
        await this.Click_mute_all();
        await this.play_video();
        await browser.pause(3000),
        await Sliders.play_pause(539, 1422),

        await this.Adv_add_img();
        await this.select_img_tab();
        await this.select_img10();
        await this.Click_done();

        await this.Adv_add_img();
        await this.select_video_tab();
        await this.click_sort();
        Sliders.scrollScreen(500, 400, 500, 1700, 500);
        await browser.pause(1000);
        await this.Select_vid7();
        await this.Click_done();
        await this.waitForElementToDisappear('//android.widget.TextView[@resource-id="com.myzesty:id/trans_label"]');
        // await browser.pause(3000);

        await this.Adv_add_img();
        await this.select_img_tab();
        await this.select_img11();
        await this.select_video_tab();
        await this.click_sort();
        await Sliders.scrollScreen(500, 400, 500, 1700, 500);
        await this.Select_vid8();
        await this.Click_done();
        await this.waitForElementToDisappear('//android.widget.TextView[@resource-id="com.myzesty:id/trans_label"]');
        await this.waitForElementToBeVisible('(//android.widget.ImageView[@resource-id="com.myzesty:id/icon"])[3]'); // Verify edit Effects Bar

        await this.Timeline_slider(0, 1080, 1830);
        await browser.pause(2000);

        //== This slides the timeline in Advance editor==
        await Sliders.scrollScreen(534, 1635, 50, 1635);
        await browser.pause(3000);

        await this.zoomin   //  Need to make them correct
        (
            468, 1843, // Stary X1, Y1
            443, 1843, // Start X2, Y2
            90, 1843, // End X1, Y1
            950, 1843 // End X2, Y2
        
        );
        await Sliders.zoomout // Needs correction
        (
            50, 1843,  // Start X1, y1
            940, 1843, // Start X2, Y2
            400, 1843, // End X1, Y1
            580, 1843 // End X2, Y2
        );
        await  browser.pause(1500);

        await this.Click_Edit_Audio();
        await this.Verify_Audio_Bar();

        //Before recording audio scroll the seekbar  to start
        await this.scrollUntilElementIsVisible('//android.widget.ImageView[@resource-id="com.myzesty:id/image"]', 70, 1860, 900, 1860);
        await this.Click_record_audio();

        Promise.all([
            this.Click_start_record(),
            browser.pause(50000),
            this.Click_stop_record()
        ])

        await this.Click_done_record();
        await this.Confirm_voice_record();
        await this.Main_return_button();

        await this.Click_close_editing();
        await this.Open_draft();
        await this.Click_maximize_minimize();

        await Promise.all([
            this.Play_video(),
            browser.pause(3000),
            Sliders.play_pause(80, 2329)
        ])

        await this.Click_maximize_minimize();
        await browser.pause(2000);
        await Sliders.play_pause(539, 1422);

        await Promise.all([
            browser.pause(5000),
            Sliders.play_pause(539, 1422)
        ])

        await this.Undo_changes();
        await browser.pause(1000);
        await this.Redo_changes(); 
        
        await this.click_resolution();
        await this.Cliick_close_resolution_or_record();
        await this.click_resolution();
        await this.click_resolution_720();
        await this.Click_export();

    }

}

export default new QC_Adv_Edit();