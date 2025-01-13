import { $, browser, driver } from '@wdio/globals' ;


class QC_Edit
{
    get preiumCloseBtn () 
    {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
    }

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

    get vid1()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[1]');
    }

    get vid2()
    {
        return $('(//android.view.View[@resource-id="com.myzesty:id/hover"])[2]');
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

    get close_resolution()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/cancel"]');
    }

    get resolution_720()
    {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.myzesty:id/option_recycle"]/android.widget.FrameLayout[3]/android.view.ViewGroup');
    }

    //========================== Edit Paths ==================================

    get edit()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/tvEdit"]');
    }

    get sort_img1()
    {
        return $('//android.view.View[@resource-id="com.myzesty:id/selectedBg"]');
    }

    get replace()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/btnReplace"]');
    }

    get back()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/back"]');
    }

    get sound()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/btnSound"]');
    }

    get video1()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/imageView"])[4]')
    }

    get Edit_done()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/done"]');
    }

    get Edit_cancel()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/cancel"]');
    }

    get vid_adjust()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/btnAdjust"]');
    }

    get sound_replace()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/btnReplaceAudio"]');
    }

    // get song1()
    // {
    //     return $('(//android.widget.ImageButton[@resource-id="com.myzesty:id/item_action"])[1]');
    // }

    get audioFX()
    {
        return $('//android.widget.LinearLayout[@content-desc="AudioFX"]');
    }

    get audioFX_Song_1()
    {
        return $('(//android.widget.ImageButton[@resource-id="com.myzesty:id/item_action"])[1]');
    }

    get Music_Tab()
    {
        return $('//android.widget.TextView[@text="Music"]');
    }





    //=========================================================================



    async Close_Premium()
    {
        await this.preiumCloseBtn.waitForDisplayed({timeout:5000});
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

    async Click_done()
    {
        await this.done.click();
    }

    async Filter_check2()
    {
        await this.filter2.click();
    }

    async Filter_check3()
    {
        await this.filter3.click()
    }

    async Filter_check4()
    {
        await this.filter4.click();
    }

    async scrollScreen(startX, startY, endX, endY, duration = 1000) {
        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY }, // Move to the start position
                { type: 'pointerDown', button: 0 }, // Press down
                { type: 'pointerMove', duration: duration, x: endX, y: endY }, // Move to the end position over the specified duration
                { type: 'pointerUp', button: 0 } // Release
            ]
        }]);
        await browser.releaseActions();
    }

    async Click_export()
    {
        await this.export.click();
    }

    async click_resolution()
    {
        await this.resolution.click();
    }

    async Cancel_resolution()
    {
        await this.close_resolution.click();
    }

    async click_resolution_720()
    {
        await this.resolution_720.click();
    }

    async click_edit()
    {
        await this.edit.waitForDisplayed({timeout:3000});
        await this.edit.click();
    }

    async click_sort_img1()
    {
        await this.sort_img1.click();
    }

    async Replace_img()
    {
        await this.replace.click();
    }

    async Edit_back()
    {
        await this.back.click();
    }

    async Click_video1()
    {
        await this.video1.click()
    }

    async Edit_sound()
    {
        await this.sound.click();
    }

    async Drag_Drop(driver, dragX, dragY, dropX, dropY) {
        try {
    
            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: dragX, y: dragY },
                        { type: 'pointerDown', button: 0 },
                        { type: 'pause', duration: 500 },
                        { type: 'pointerMove', duration: 500, x: dropX, y: dropY },
                        { type: 'pointerUp', button: 0 }
                    ]
                }
            ]);
    
            console.log(`Drag and drop completed.`);
        } catch (error) {
            console.error('Error during drag and drop:', error);
        }
    }

    async Sound_slide(driver, desiredPercentage) {
        // Validate percentage is between 0 and 1
        if (desiredPercentage < 0 || desiredPercentage > 1) {
            throw new Error('desiredPercentage must be between 0 and 1.');
        }
    
        // Slider bounds
        const startX = 124;
        const endX = 929;
        const centerY = Math.floor((1669 + 1779) / 2); // Calculate vertical center
    
        // Calculate target position
        const targetX = Math.floor(startX + (endX - startX) * desiredPercentage);
    
        console.log(`Sliding from ${startX}, ${centerY} to ${targetX}, ${centerY}`);
    
        // Perform sliding action
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: centerY }, // Start at slider
                    { type: 'pointerDown', button: 0 }, // Press down
                    { type: 'pointerMove', duration: 500, x: targetX, y: centerY }, // Slide to target
                    { type: 'pointerUp', button: 0 } // Release
                ]
            }
        ]);
    
        console.log(`Slider moved to ${desiredPercentage * 100}% position.`);
    }
    
    async Click_Edit_done()
    {
        await this.Edit_done.click();
    }

    async Click_Edit_cancel()
    {
        await this.Edit_cancel.click();
    }
    
    async Video_adjust()
    {
        await this.vid_adjust.click();
    }

    async Slider(driver, startX, endX, startY, endY, desiredPercentage) {
        // Validate percentage is between 0 and 1
        if (desiredPercentage < 0 || desiredPercentage > 1) {
            throw new Error('desiredPercentage must be between 0 and 1.');
        }
    
        // Calculate centerY based on startY and endY
        const centerY = Math.floor((startY + endY) / 2);
    
        // Calculate target position for the desired percentage
        const targetX = Math.floor(startX + (endX - startX) * desiredPercentage);
    
        console.log(`Sliding from ${startX}, ${centerY} to ${targetX}, ${centerY}`);
    
        // Perform sliding action
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: centerY }, // Start at slider
                    { type: 'pointerDown', button: 0 }, // Press down
                    { type: 'pointerMove', duration: 500, x: targetX, y: centerY }, // Slide to target
                    { type: 'pointerUp', button: 0 } // Release
                ]
            }
        ]);
    
        console.log(`Slider moved to ${desiredPercentage * 100}% position.`);
    }

    async Click_sound_replace()
    {
        await this.sound_replace.click();
    }

    async Click_song1()
    {
        await this.song1.click();
    }

    async Music_tab_Click() {
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
        const isSelected = await this.audioFX_Song_1.getAttribute('selected');
    
        if (isSelected === 'true') {
            console.log("Song is already downloaded. Selecting the song.");
            await this.audioFX_Song_1.click(); // Select the song
        } else {
            console.log("Song is not downloaded. Downloading the song first.");
            await this.audioFX_Song_1.click(); // Start downloading the song
    
            // Wait for the song to be downloaded
            await browser.waitUntil(
                async () => {
                    const status = await this.audioFX_Song_1.getAttribute('selected');
                    return status === 'true';
                },
                {
                    timeout: 15000, // Adjust the timeout based on your app's expected download time
                    timeoutMsg: "Song download did not complete within the expected time."
                }
            );
    
            // After confirming the song is downloaded, click again to select it
            console.log("Download complete. Selecting the song.");
            await this.audioFX_Song_1.click();
        }
    }

    async AudioFX_tab() {
        // Start in the Music tab
        await this.audioFX.click();
        let audio_visible = await this.audioFX_Song_1.waitForDisplayed({ timeout: 5000 }).catch(() => false);
    
        if (!audio_visible) {
            console.log("Audio is not visible in the AudioFX tab. Navigating to the Music tab.");
            await this.Music_Tab.click(); // Switch to the AudioFX tab
            await browser.pause(500); // Wait for 0.5 seconds
            await this.audioFX.click();

    
            // Check visibility in the AudioFX tab
            audio_visible = await this.audioFX_Song_1.waitForDisplayed({ timeout: 5000 }).catch(() => false);
    
            if (audio_visible) {
                console.log("Audio is visible in the AudioFX tab.");
                await this.audioFX_Song_1.click()
            }
        }
    
        // Check the "selected" attribute
        const isSelected = await this.audioFX_Song_1.getAttribute('selected');
    
        if (isSelected === 'true') {
            console.log("Song is already downloaded. Selecting the song.");
            await this.audioFX_Song_1.click(); // Select the song
        } else {
            console.log("Song is not downloaded. Downloading the song first.");
            await this.audioFX_Song_1.click(); // Start downloading the song
    
            // Wait for the song to be downloaded
            await browser.waitUntil(
                async () => {
                    const status = await this.audioFX_Song_1.getAttribute('selected');
                    return status === 'true';
                },
                {
                    timeout: 15000, // Adjust the timeout based on your app's expected download time
                    timeoutMsg: "Song download did not complete within the expected time."
                }
            );
    
            // After confirming the song is downloaded, click again to select it
            console.log("Download complete. Selecting the song.");
            await this.audioFX_Song_1.click();
        }
    }
    
    
    


    





    // ========= Main Function =======

    async Edit_Run()
    {

        await this.Close_Premium();
        await this.Try_QC();

        await this.select_img_tab();
        await this.select_img1();
        await this.select_img2();

        await this.select_video_tab();
        await this.click_sort();
        await this.scrollScreen(500, 600, 500, 1600);
        await  this.Select_vid1();
        await this.Select_vid2();

        await this.Click_done();
        // await this.Slider(driver, 18, 1062, 1494, 1546, 0.3)
        await browser.pause(2000);

        await this.click_edit();
        await this.click_sort_img1()
        await this.Replace_img();
        await this.select_img_tab();
        await this.select_img5();
        await this.Click_done();

        // Repplace sound
        await this.Edit_back();
        await browser.pause(500);
        await this.Click_sound_replace();
        await browser.pause(1000);
        await this.Music_tab_Click();
        await this.Click_sound_replace();
        await this.AudioFX_tab();


        await this.click_edit();
        await this.Drag_Drop(driver, 120, 1735, 477, 1800);
        await browser.pause(1000);

        await this.Click_video1()
        await this.Edit_sound()

        // Slider for video sound
        await this.Sound_slide(driver, 0.5);

        await this.Click_Edit_done();
        await this.Video_adjust();

        // Slider for video adjust
        await this.Slider(driver, 74, 1006, 1691, 1878, 0.3);

        await this.Click_Edit_done();
        await this.Edit_back();







        // await this.Filter_check2();
        // await this.Filter_check3();
        // await this.Filter_check4();

        // await this.click_resolution();
        // await this.Cancel_resolution();
        // await this.click_resolution();
        // await this.click_resolution_720();
        // await this.Click_export();

    }

}

export default new QC_Edit();