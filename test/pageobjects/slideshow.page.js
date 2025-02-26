import { $, browser, driver } from '@wdio/globals' ;
import Common_function from '../pageobjects/commonfun.page.js';
import Sliders from '../pageobjects/sliders.page.js';
import Subscription from '../pageobjects/BuyPremium.page.js';



class Slideshow
{

    get slideshow()
    {
        return $('//android.view.ViewGroup[@content-desc="Create, Slideshow"]/android.view.ViewGroup');
    }

    async Slide_Show()
    {
        await this.slideshow.click();
    }
    //.....................................................
    
    get img_tab()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/image_tab"]');
    }

    async Select_Img_Tab()
    {
        await this.img_tab.click()
    }
    // .....................................................

    get img_1()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[1]');
    }
    get img_2()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[2]');
    }
    get img_3()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[3]');
    }

    async Select_Images()
    {
        await this.img_1.click();
        await browser.pause(500);
        await this.img_2.click();
        await browser.pause(500);
        await this.img_3.click();
    }
    // .......................................................

    get video_tab()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/video_tab"]');
    }

    async Select_Video_Tab()
    {
        await this.video_tab.click();
    }
    // .......................................................

    get vid1()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[1]');
    }
    get vid2()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[2]');
    }

    async Select_Videos()
    {
        await this.vid1.click()
        await browser.pause(500);
        // await this.vid2.click();
    }
    // .........................................................

    get done()
    {
        return $('//android.widget.TextView[@text="DONE"]');
    }

    async Click_Done()
    {
        await this.done.click();
    }
    // ..........................................................

    get add_media()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/add_video"]');
    }

    async Click_Add_Media()
    {
        await this.add_media.click();
    }
    // ..........................................................

    get dlt_media()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/delete_video"]');
    }

    async Click_Dlt_Media()
    {
        await this.dlt_media.click();
        await browser.pause(1000);
    }
    // ...........................................................

    get img_tab()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/image_tab"]');
    }
    
    async select_img_tab()
    {
        await this.img_tab.click();
    }
    // ............................................................

    get add_img_1()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])[8]');
    }

    get add_img_2()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])[9]');
    }

    get add_img_3()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/frame"])[10]');
    }

    async Add_Images()
    {
        await this.add_img_1.click();
        await this.add_img_2.click();
        await this.add_img_3.click();
    }
    // ...........................................................

    get Dlt_music()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/delete_music"]');
    }

    async Click_Dlt_Music()
    {
        await this.Dlt_music.click();
    }
    // ...........................................................

    get add_music()
    {
        return $('//android.widget.TextView[@text="Add Music"]');
    }

    async Click_Add_Music()
    {
        await this.add_music.click();
    }
    // ............................................................

    get audioFX_Song_1()
    {
        return $('(//android.widget.ImageButton[@resource-id="com.myzesty:id/item_action"])[1]');
    }
    get audioFX()
    {
        return $('//android.widget.LinearLayout[@content-desc="AudioFX"]');
    }
    get Music_Tab()
    {
        return $('//android.widget.TextView[@text="Music"]');
    }


    async Music_tab_Click() 
    {
    
            const maxRetries = 3; // Maximum number of retry attempts
            let attempt = 0;
            let downloadComplete = false;
    
            // Start in the Music tab
            console.log("Starting in the Music tab.");
            let audio_visible = await this.audioFX_Song_1.waitForDisplayed({ timeout: 5000 }).catch(() => false);
        
            if (!audio_visible) {
                console.log("Audio is not visible in the Music tab. Navigating to the AudioFX tab.");
                await this.audioFX.click(); // Switch to the AudioFX tab
                await browser.pause(500); // Wait for 0.5 seconds
                await this.Music_Tab.click();
        
                // Check visibility in the AudioFX tab
                audio_visible = await this.audioFX_Song_1.waitForDisplayed({ timeout: 5000 }).catch(() => false);
        
                if (audio_visible) {
                    console.log("Audio is visible in the Music tab.");
                    await this.audioFX_Song_1.click()
                }
            }
        
            // Check the "selected" attribute
            while (attempt < maxRetries) {
                attempt++;
                console.log(`Attempt ${attempt} to download the song.`);
        
                // Check if the song is already downloaded
                const isSelected = await this.audioFX_Song_1.getAttribute('selected');
                
                if (isSelected === 'true') {
                    console.log("Song is already downloaded. Selecting the song.");
                    await this.audioFX_Song_1.click(); // Select the song
                    downloadComplete = true;
                    break;
                } else {
                    console.log("Song is not downloaded. Downloading the song first.");
                    await this.audioFX_Song_1.click(); // Start downloading the song
        
                    // Wait for the song to be downloaded
                    downloadComplete = await browser.waitUntil(
                        async () => {
                            const status = await this.audioFX_Song_1.getAttribute('selected');
                            return status === 'true';
                        },
                        {
                            timeout: 15000, // Adjust the timeout based on your app's expected download time
                            timeoutMsg: "Song download did not complete within the expected time."
                        }
                    ).catch(() => false);
        
                    if (downloadComplete) {
                        console.log("Download complete. Selecting the song.");
                        await this.audioFX_Song_1.click();
                        break; // Exit the loop if download succeeds
                    } else {
                        console.log("Download failed. Retrying...");
                    }
                }
            }
        
            if (!downloadComplete) {
                throw new Error("Failed to download the song after multiple attempts.");
            }
    }
    // ...................................................................

    get audio_trim()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/btn_trim_audio"]');
    }

    async Click_Audio_Trim()
    {
        await this.audio_trim.click();
    }
    // ......................................................................

    get cancel_trim()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/cancel"]');
    }
    get apply_trim()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/done"]');
    }

    async Click_Cancle_Trim()
    {
        await this.cancel_trim.click();
    }
    async Click_Apply_Trim()
    {
        await this.apply_trim.click();
    }
    // ......................................................................

    get audio()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/sound"]');
    }

    async Click_Audio()
    {
        await this.audio.click();
    }
    // ......................................................................

    get mute_audio()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/mute_icon"]');
    }

    async Click_Mute_Audio()
    {
        await this.mute_audio.click()
    }
    // .........................................................................

    get export()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/export"]');
    }

    async Click_export()
    {
        await this.export.click();
    }y
    // .......................................................................

    get sort()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/sorttype"]');
    }

    async click_sort()
    {
        await this.sort.click();
    }
    // ..........................................................................

    get play_pause()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/play"]');
    }

    async Click_Play_Pause()
    {
        await this.play_pause.click();
    }
    // .............................................................................

    get My_library()
    {
        return $('//android.widget.LinearLayout[@content-desc="My Library"]');
    }

    async Click_My_Library()
    {
        await this.My_library.click();
    }
    // ...............................................................................

    get library_song1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.google.android.documentsui:id/icon_thumb"])[1]');
    }

    async Select_library_song1()
    {
        await this.library_song1.click();
    }



    // ----------------------- Main Function ----------------------

    async Run_Slideshow()
    {
        await Subscription.Check_Subscription('Processing')
        await this.Slide_Show();
        await this.Select_Img_Tab();
        await this.Select_Images();
        await this.Select_Video_Tab();
        await this.click_sort();
        Sliders.scrollScreen(500, 400, 500, 1700);
        await this.Select_Videos();
        await this.Click_Done();
        await browser.pause(5000);
        await Sliders.play_pause(539, 1422);

        await Sliders.Drag_Drop(driver, 798, 1743, 307, 1743);
        await this.Click_Dlt_Media();
        await this.Click_Add_Media();
        await this.select_img_tab();
        await this.Add_Images();
        await this.Click_Done();
        await browser.pause(5000);

        await Sliders.play_pause(539, 1422);
        await this.Click_Dlt_Music();
        await this.Click_Add_Music();
        await Sliders.Music_tab_Click();
        await browser.pause(2000);
        await this.Click_Play_Pause();   
        await browser.pause(3000),
        await Sliders.play_pause(539, 1422)
        await Sliders.Slider(driver, 18, 1062, 1496, 1546, 0.1)

        await this.Click_Dlt_Music();
        await this.Click_Add_Music();
        await Sliders.AudioFX_tab();
        await browser.pause(2000);
        await Sliders.Slider(driver, 18, 1062, 1496, 1546, 0.1)
        await this.Click_Play_Pause();
        await browser.pause(3000),
        await Sliders.play_pause(539, 1422)

        await Sliders.Slider(driver, 18, 1062, 1496, 1546, 0.1)
        await this.Click_Dlt_Music();
        await this.Click_Add_Music();
        await  this.Click_My_Library()
        await this.Select_library_song1();
        await this.Click_Play_Pause();
        await browser.pause(3000),
        await Sliders.play_pause(539, 1422)
        
        await this.Click_Audio();
        await this.Click_Mute_Audio();
        await this.Click_Apply_Trim();
        await this.Click_Play_Pause();
        await browser.pause(3000),
        await Sliders.play_pause(539, 1422)
        
        await this.Click_Audio();
        Sliders.Sound_slide(driver, 124, 929, 1669, 1779, 1)
        await this.Click_Apply_Trim();
        await Sliders.Slider(driver, 18, 1062, 1496, 1546, 0.1)

        await this.Click_Play_Pause();
        await browser.pause(3000),
        await Sliders.play_pause(539, 1422)

        await this.Click_Audio_Trim();
        await this.Click_Cancle_Trim();
        await this.Click_Audio_Trim();
        await this.Click_Apply_Trim();
        await this.Click_Audio_Trim();
        Sliders.Trim_slide(driver, 8, 154, 195, 1738, 1906); // move this at last after adding miusic from all three tabs.
        await this.Click_Apply_Trim();

        await this.Click_export();

    }


}

export default new Slideshow()