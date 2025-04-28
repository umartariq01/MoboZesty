import { $, browser } from '@wdio/globals' ;
import Sliders from '../pageobjects/sliders.page.js';
import Subscription from '../pageobjects/BuyPremium.page.js';
import Common_function from '../pageobjects/commonfun.page.js';
import { mobileDragGesture } from 'appium-uiautomator2-driver/build/lib/commands/gestures.js';



class Full_Editor
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

    get sort()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/sorttype"]');
    }

    async Sort_Videos()
    {
        (await this.sort).click();
    }

    get video()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])[5]');
    }

    async Select_Video_with_Audio()
    {
        (await this.video).click();
    }

    async selectImages() 
    {
        try 
        {
          const imageElements = await $$('//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"]');
      
          for (let i = 0; i < imageElements.length && i < 3; i++) {
            await imageElements[i].click();
            console.log(`Clicked image at index ${i + 1}`);
          }
        } 
        catch (error) 
        {
          console.error('Error selecting images:', error);
        }
    }

    get full_editor()
    {
        return $('//android.widget.TextView[@text="Full Editor"]');
    }

    async Click_Full_Editor() {
        try {
            for (let i = 0; i <= 3; i++) {
                try {
                    await (await this.full_editor).click();
                    break; // if click is successful, exit the loop
                } catch (err) {
                    console.log(`Attempt ${i + 1} failed. Retrying...`);
                    if (i === 3) throw err; // rethrow after final attempt
                    await new Promise(resolve => setTimeout(resolve, 500)); // wait before retry
                }
            }
        } catch (error) {
            console.log('Unable to click on Full Editor.', error);
        }
    }

    get main_back()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/back"]/android.widget.ImageView');
    }
    async Click_Main_Back()
    {
        (await this.main_back).click();
    }

    get add_audio()
    {
        return $('//android.widget.TextView[@text="Add Audio"]');
    }
    async Click_Add_Audio()
    {
        await this.add_audio.click();
    }

    get mute_all()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Mute All"]');
    }
    async Click_Mute_All()
    {
        (await this.mute_all).click();
    }

    get add_music()
    {
        return $('(//android.widget.LinearLayout[@resource-id="com.myzesty:id/icon_area"])[1]');
    }
    async Click_Add_Music()
    {
        (await this.add_music).click();
    }

    get record()
    {
        return $('(//android.widget.LinearLayout[@resource-id="com.myzesty:id/icon_area"])[2]');
    }
    async Click_Record()
    {
        (await this.record).click();;
    }

    get record_start_stop()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/record_button"]');
    }
    async Click_Record_Start_Stop()
    {
        (await this.record_start_stop).click();
    }

    get apply_changes()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/done"]');
    }
    async Click_Apply_Changes()
    {
        (await this.apply_changes).click();
    }

    get extract_audio()
    {
        return $('(//android.widget.LinearLayout[@resource-id="com.myzesty:id/icon_area"])[3]');
    }
    async Click_Extract_Audio()
    {
        (await this.extract_audio).click();
    }

    get my_library()
    {
        return $('//android.widget.TextView[@text="My Library"]');
    }
    get mylibrary_song1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.google.android.documentsui:id/icon_thumb"])[1]');
    }
    async Cliick_My_Library()
    {
        (await this.my_library).click();
        await browser.pause(1000);
        (await this.mylibrary_song1).click();
    }


    get add_text()
    {
        return $('//android.widget.TextView[@text="Add Text"]');
    }
    async  Click_add_text()
    {
        await this.add_text.click()
    }

    get enter_text()
    {
        return $('//android.widget.EditText[@resource-id="com.myzesty:id/text_area"]');
    }
    async Enter_Half_Duration_Text()
    {
        (await this.enter_text).click();
        await browser.pause(500);
        await browser.keys('This is at Half Duration.');
        await this.Click_Apply_Changes();  // Same xpath. It applies the text also
        await this.Click_Apply_Changes();  // Same xpath. It applies the text also
        await browser.pause(500);

    }

    get add_effects()
    {
        return $('//android.widget.TextView[@text="Add Effects"]');
    }
    get churnII()
    {
        return $('//android.widget.GridView[@resource-id="com.myzesty:id/effect_list"]/android.widget.LinearLayout[2]/android.widget.FrameLayout');
    }
    async Click_Add_Effects()
    {
        (await this.add_effects).click();
        await browser.pause(700);
        (await this.churnII).click();

    }

    get add_sticker()
    {
        return $('//android.widget.TextView[@text="Add Sticker"]');
    }
    get sticker1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/animated_image"])[1]');
    }
    async Click_Add_Sticker()
    {
        (await this.add_sticker).click();
        await browser.pause(700);
    }
    
    async Apply_Sticker()
    {
        (await this.sticker1).click();
    }

    get sort()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/icon"])[1]');
    }
    async Click_Sort()
    {
        (await this.sort).click();
    }

    get edit()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/icon"])[2]');
    }
    async Click_Edit()
    {
        (await this.edit).click();
    }
    get trim()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Trim"]');
    }

    // this function check if current selected media is image or video.
    async Check_Media_Type() 
    {
        try
        {
            const trim_Visible = await this.trim.isDisplayed();
            if(trim_Visible)
            {
                return 'video';
            }
            else
            {
                return 'image';
            }
        }
        catch (error)
        {
            // If the Play button is NOT found, assume it's an image
            return 'image';
        }
    }

    // This will handle if selected media is image or video then it call the respective functions to perform operations on media.
    // It will scroll right to find video and if not founf then scroll left to right.
    async handleMediaType() {
        let mediaType = await Check_Media_Type();
    
        if (mediaType === 'image') {
            console.log('Image detected');
            await this.Perform_Image_Functions();
    
            console.log('Scrolling right-to-left to find video...');
            let videoFound = false;
    
            // Try scrolling right to left
            for (let i = 0; i < 5; i++) {  // You can change max attempts
                await Sliders.scrollScreen(startX, startY, endX, endY) // 👉 your scroll right-to-left function
                mediaType = await Check_Media_Type();
    
                if (mediaType === 'video') {
                    console.log('Video detected after right-to-left scroll');
                    await Perform_Video_Functions();
                    videoFound = true;
                    break;
                }
            }
    
            // If not found, try scrolling left to right
            if (!videoFound) {
                console.log('Video not found. Now scrolling left-to-right...');
                for (let i = 0; i < 5; i++) {  // You can change max attempts
                    await Sliders.scrollScreen(startX, startY, endX, endY); // 👉 your scroll left-to-right function
                    mediaType = await this.Check_Media_Type();
    
                    if (mediaType === 'video') {
                        console.log('Video detected after left-to-right scroll');
                        await this.Perform_Video_Functions();
                        videoFound = true;
                        break;
                    }
                }
            }
    
            if (!videoFound) {
                console.log('Video not found even after scrolling both directions!');
            }
    
        } else if (mediaType === 'video') {
            console.log('Video detected');
            await this.Perform_Video_Functions();
        } else {
            console.log('Unknown media type!');
        }
    }
    
    get duration()
    {
        return $('')
    }

    async Perform_Image_Functions()
    {

    }

    async Perform_Video_Functions()
    {

    }
    
    






    async verify_Select_Media() 
    {
        try 
        {
            await Subscription.Check_Subscription('Processing') ;
            await this.Click_Video_Editor();
            await this.Click_Video_Tab();
            await this.Sort_Videos();
            await browser.pause(500);
            await Sliders.scrollScreen(540, 586, 546, 1600);
            await this.Select_Video_with_Audio();
            await this.Click_Img_Tab();
            await this.selectImages();
            await this.Click_Done();;
            await this.Click_Full_Editor();
        } 
        catch (error) 
        {
          console.error('❌ verify_Select_Media FAILED:', error.message);
          throw error; // so that Mocha still marks the test as failed
        }
    }

    async Verify_Music()
    {
        try
        {
            await this.Click_Add_Audio();
            await this.Click_Mute_All();
            await this.Click_Add_Music();
            await Sliders.Music_tab_Click();
            await browser.pause(500);
            await Sliders.play_pause(534, 1412);
            await browser.pause(5000);
            await Promise.all([
                await Sliders.play_pause(534, 1412)
            ]);
            await Sliders.scrollUntilElementIsVisible('//android.widget.ImageView[@resource-id="com.myzesty:id/image"]', 80, 1630, 930, 1630);
            await this.Click_Record();
            await this.Click_Record_Start_Stop();
            await browser.pause(5000);
            await Promise.all([
                await Sliders.play_pause(553, 2222)
            ]);
            await this.Click_Apply_Changes();
            await browser.pause(300);
            // Add Music from Library
            await this.Click_Add_Music();
            await this.Cliick_My_Library();
            
            await this.Click_Extract_Audio();
            await browser.pause(1000);
            await this.Click_Video_Tab();
            await browser.pause(700);
            await this.Sort_Videos();
            await browser.pause(500);
            await Sliders.scrollScreen(540, 538, 546, 1990);
            await this.Select_Video_with_Audio();
            await browser.pause(1000);
            await this.Click_Main_Back();
        }
        catch (error)
        {
            console.log('❌ Verify Music FAILED:', error.message);
            throw error;
        }
    }

    async Verify_Text()
    {
        try
        {
            await this.Click_add_text();
            await this.Click_Add_Music(); // Both have same xpath. It adds text.
            await this.Enter_Half_Duration_Text();
            await browser.pause(1000);
            await Sliders.dragSliderWithBounds('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[2]', 150, [[748,1724][789,1801]]);
            await  this.Click_Main_Back();
        }
        catch (error)
        {
            console.log('❌ Verify Text FAILED', error.message);
            throw error;
        }
    }
      
    async Verify_Effects()
    {
        try
        {
            await this.Click_Add_Effects();
            await this.Click_Apply_Changes();
            await browser.pause(1000);
            await Sliders.dragSliderWithBounds('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[2]', 150, [[748,1724][789,1801]]);
            await Sliders.dragSliderWithBounds('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[2]', 150, [[748,1724][789,1801]]);
            await  this.Click_Main_Back();
        }
        catch (error)
        {
            console.log('❌ Verify Effects FAILED', error.message);
            throw error;
        }
    }

    async Verify_Add_Sticker()
    {
        try
        {
            await this.Click_Add_Sticker();
            await this.Apply_Sticker();
            await browser.pause(1500);
            await this.Click_Apply_Changes();
            await browser.pause(1000);
            await  Sliders.dragSliderWithBounds('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[2]', 150, [[746,1724][787,1801]]);
            await  Sliders.dragSliderWithBounds('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[2]', 150, [[746,1724][787,1801]]);
            await  this.Click_Main_Back();
            await browser.pause(1000);
        }
        catch (error)
        {
            console.log('❌ Verify Stickers FAILED', error.message);
            throw error;
        }
    }

    async Verify_Sort()
    {
        try
        {
            await Sliders.Single_slide(37, 950, 1800, 1000);
            await this.Click_Sort();
            await browser.pause(600);
            await  Sliders.Drag_Drop(driver, 114, 346, 527, 339);
            await browser.pause(500);
            await Sliders.Drag_Drop(driver, 310, 346, 918, 339);
            await this.Click_Apply_Changes();
            
        }
        catch (error)
        {
            console.log('❌ Verify Sort Functionality FAILED', error.message);
            throw error;
        }
    }

    async Verify_Edit()
    {
        try
        {
            
        }
        catch (error)
        {
            console.log('❌ Verify Edit Functionality FAILED', error.message);
            throw error;
        }
    }

}

export default new Full_Editor();