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

    get sort_video()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/sorttype"]');
    }

    async Sort_Videos()
    {
        await (await this.sort_video).click();
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

    get sort_media()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Sort"]');
    }
    async Click_Sort()
    {
        (await this.sort_media).click();
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

    get duration()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Duration"]');
    }
    async Click_Duration()
    {
        (await this.duration).click();
    }
    get BG()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="BG"]');
    }
    get BG_1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/color_bg"])[1]');
    }
    async Click_BG()
    {
        (await this.BG).click();
        await browser.pause(600);
        await (await this.BG_1).click();
        await this.Click_Apply_Changes();
    }
    
    

    async Perform_Image_Functions()
    {
        await this.Click_Duration();
        await browser.pause(1000);
        await Sliders.Sound_slide(driver, 41, 929, 1662, 1772, 0.4);
        await this.Click_Apply_Changes();
        await browser.pause(500);
        await this.Click_BG();
    }

    get trim()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Trim"]');
    }
    get split()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Split"]');
    }
    get speed()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Speed"]');
    }
    get reverse()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Reverse"]');
    }
    get extract()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Extract"]');
    }

    async Click_Trim()
    {
        (await this.trim).click();
        await Sliders.dragSliderWithBounds('//android.view.View[@resource-id="com.myzesty:id/timeLine_view"]', 50, [[74,1691][1006,1878]]);
        await this.Click_Apply_Changes();
    }
    async Click_Split()
    {
        await Sliders.scrollScreen(538, 1791, 270, 1791);
        await browser.pause(700);
        (await this.split).click();
    }
    async Click_Speed()
    {
        await (await this.speed).click();
        await Sliders.Slider(driver, 217, 627, 1905, 1905, 0.5);
        await browser.pause(1000);
        await this.Click_Apply_Changes();
    }
    async Click_Reverse()
    {
        await (await this.reverse).click();
        await browser.pause(2000);
    }
    async Click_Extract_Audio_Main()
    {
        await (await this.extract).click();
        await browser.pause(1000);
        await this.Click_Main_Back();
        await this.Click_Edit();

    }

    async Perform_Video_Functions()
    {
        await this.Click_Speed();
        await Sliders.scrollUntilElementIsVisible('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Extract"]', 892, 2329, 370, 2329);
        await this.Click_Reverse();
        await this.Click_Extract_Audio_Main();
        await Sliders.scrollUntilElementIsVisible('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Trim"]', 910, 2329, 509, 2329, 1500);
        await this.Click_Trim(); 
        // await this.Click_Apply_Changes();
        await browser.pause(500);
        await this.Click_Split();
        await browser.pause(500);
    }

    get presets()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Presets"]');
    }
    get preset_1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[2]');
    }
    async Click_Presets()
    {
        await (await this.presets).click();
        await browser.pause(1000);
        (await this.preset_1).click();
        await this.Click_Apply_Changes();
    }

    get dehazer()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Dehazer"]');
    }
    get dehazer_2()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[3]');
    }
    async Click_Dehazer()
    {
        (await this.dehazer).click();
        await browser.pause(700);
        (await this.dehazer_2).click();
        await this.Click_Apply_Changes();
    }

    get tune()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Tune"]');
    }
    get brightness()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/name" and @text="Brightness"]');
    }
    get contrast()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/name" and @text="Contrast"]');
    }
    get saturation()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/name" and @text="Saturation"]');
    }
    get tint()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/name" and @text="Tint"]');
    }
    get temprature()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/name" and @text="Temperature"]');
    }
    get hue()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/name" and @text="Hue"]');
    }
    get highlight()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/name" and @text="Highlight"]');
    }
    get shadow()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/name" and @text="Shadow"]');
    }
    get vibrance()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/name" and @text="Vibrance"]');
    }
    get sharpen()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/name" and @text="Sharpen"]');
    }
    async Click_Tune()
    {
        await (await this.tune).click();

        await (await this.brightness).click();
        await  Sliders.Sound_slide(driver, 222, 914, 2036, 2086, 0.4);
        await browser.pause(500);

        await (await this.contrast).click();
        await  Sliders.Sound_slide(driver, 222, 914, 2036, 2086, 0.3);
        await browser.pause(500);

    }

    
    
    






    async verify_Select_Media() 
    {
        try 
        {
            await Subscription.Check_Subscription('Processing') ;
            await this.Click_Video_Editor();
            await this.Click_Video_Tab();
            await browser.pause(1000);
            await this.Sort_Videos();
            await browser.pause(500);
            await Sliders.scrollScreen(527, 870, 527, 2000);
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
            await Sliders.Extender(driver, '//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[3]', 150);
            // await Sliders.dragSliderWithBounds('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[3]', 150, [[748,1724][789,1801]]);
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
            await Sliders.dragSliderWithBounds('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[3]', 150, [[748,1724][789,1801]]);
            await Sliders.dragSliderWithBounds('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[3]', 150, [[778,1724][819,1801]]);
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
            await  Sliders.dragSliderWithBounds('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[3]', 150, [[746,1724][787,1801]]);
            await  Sliders.dragSliderWithBounds('//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[3]', 150, [[746,1724][787,1801]]);
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
            await this.Click_Edit();
            await this.Perform_Image_Functions();
            // Slide to perform action on video
            await Sliders.scrollUntilElementIsVisible('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Trim"]', 1028, 1765, 80, 1765);
            await this.Perform_Video_Functions();
            await this.Click_Main_Back();
        
        }
        catch (error)
        {
            console.log('❌ Verify Edit Functionality FAILED', error.message);
            throw error;
        }
    }

    async Verify_Presets()
    {
        try
        {
            await Sliders.Single_slide(37, 950, 1800, 1000);
            await this.Click_Presets();
            // Preset bar needs to be implimented because its not visible in new release
            await this.Click_Main_Back();
        
        }
        catch (error)
        {
            console.log('❌ Verify Presets Functionality FAILED', error.message);
            throw error;
        }
    }

    async Verify_Dehazer()
    {
        try
        {
            await Sliders.Single_slide(37, 950, 1800, 1000);
            await browser.pause(1000);
            await this.Click_Dehazer();
            
        
        }
        catch (error)
        {
            console.log('❌ Verify Dehazer Functionality FAILED', error.message);
            throw error;
        }
    }

    async Verify_Tune()
    {
        try
        {
            await Sliders.scrollUntilElementIsVisible('//android.widget.TextView[@resource-id="com.myzesty:id/text" and @text="Tune"]', 900, 2300, 350, 2300);
            await this.Click_Tune();
            
        
        }
        catch (error)
        {
            console.log('❌ Verify Tune Functionality FAILED', error.message);
            throw error;
        }
    }

}

export default new Full_Editor();