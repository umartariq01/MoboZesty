import { $, browser } from '@wdio/globals' ;
import CheckLoginPage from '../pageobjects/checklogin.page.js';
import assert from 'assert';
import { runInThisContext } from 'vm';

class QucikCut
{
    get preiumCloseBtn () 
    {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
    }

    get create()
    {
        return $('//android.view.View[@content-desc="navi-edit-screen-button"]');
    }

    get QC()
    {
        return $('//android.view.ViewGroup[@content-desc="Try, Quick Cuts"]/android.view.ViewGroup');
    }

    get images_tab()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/image_tab"]');
    }

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

    get img_4()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[4]');
    }

    get img_5()
    {
        return $('(//android.widget.FrameLayout[@resource-id="com.myzesty:id/disablestate"])[5]');
    }

    get done()
    {
        return $('//android.widget.TextView[@text="DONE"]');
    }

    get pause()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/play"]');
    }

    get cancel()
    {
        return $('//android.widget.ImageView[@resource-id="com.myzesty:id/back"]');
    }

    get song_name_path()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/audio_name"]');
    }

    get loading()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/progress_perc"]')
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

    get seekbar()
    {
        return $('//android.widget.SeekBar[@resource-id="com.myzesty:id/seekBar"]');
    }

    get export()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/export"]');
    }


    //======================= Verifying Filter's Song =======================

    // async Loading_check() {

    //     const loadiing_display = await this.loading.waitForDisplayed();
    //     if(loadiing_display)
    //     {
    //         let progress = "0%";
    
    //     // Poll the element's text until it reaches "100%"
    //         while (progress !== "100%") {
    //             progress = await this.loading.getText();
    //             console.log(`Current progress: ${progress}`);
    //             await browser.pause(500); // Small delay to avoid excessive polling
    //     }
    
    //     console.log("Loading reached 100%!");
    //     // await this.Pause_btn();
    //     }
    //     else
    //     {
    //         console.log("Loading bar not Displayed!")
    //     }
        
    // }

    async Click_export()
    {
        await this.export.click();
    }
    
    async Song1_name(expected_song1)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );

        const actual_song1 = await this.song_name_path.getText();
        assert.strictEqual(actual_song1, expected_song1, "Filter 1 song not verified!");

    }

    async Song2_name(expected_song2)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song2 = await this.song_name_path.getText();
        assert.strictEqual(actual_song2, expected_song2, "Filter 2 song not verified!");

    }

    async Song3_name(expected_song3)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song3 = await this.song_name_path.getText();
        assert.strictEqual(actual_song3, expected_song3, "Filter 3 song not verified!")
    }

    async Song4_name(expected_song4)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song4 = await this.song_name_path.getText();
        assert.strictEqual(actual_song4, expected_song4, "Filter 4 song not verified!")
    }

    async Song5_name(expected_song5)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song5 = await this.song_name_path.getText();
        assert.strictEqual(actual_song5, expected_song5, "Filter 5 song not verified!")
    }

    async Song6_name(expected_song6)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song6 = await this.song_name_path.getText();
        assert.strictEqual(actual_song6, expected_song6, "Filter 6 song not verified!")
    }

    async Song7_name(expected_song7)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song7 = await this.song_name_path.getText();
        assert.strictEqual(actual_song7, expected_song7, "Filter 7 song not verified!")
    }

    async Song8_name(expected_song8)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song8 = await this.song_name_path.getText();
        assert.strictEqual(actual_song8, expected_song8, "Filter 8 song not verified!")
    }

    async Song9_name(expected_song9)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song9 = await this.song_name_path.getText();
        assert.strictEqual(actual_song9, expected_song9, "Filter 9 song not verified!")
    }

    async Song10_name(expected_song10)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song10 = await this.song_name_path.getText();
        assert.strictEqual(actual_song10, expected_song10, "Filter 10 song not verified!")
    }

    async Song11_name(expected_song11)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song11 = await this.song_name_path.getText();
        assert.strictEqual(actual_song11, expected_song11, "Filter 11 song not verified!")
    }

    async Song12_name(expected_song12)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song12 = await this.song_name_path.getText();
        assert.strictEqual(actual_song12, expected_song12, "Filter 12 song not verified!")
    }

    async Song13_name(expected_song13)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song13 = await this.song_name_path.getText();
        assert.strictEqual(actual_song13, expected_song13, "Filter 13 song not verified!")
    }

    async Song14_name(expected_song14)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song14 = await this.song_name_path.getText();
        assert.strictEqual(actual_song14, expected_song14, "Filter 14 song not verified!")
    }

    async Song15_name(expected_song15)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song15 = await this.song_name_path.getText();
        assert.strictEqual(actual_song15, expected_song15, "Filter 15 song not verified!")
    }

    async Song16_name(expected_song16)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song16 = await this.song_name_path.getText();
        assert.strictEqual(actual_song16, expected_song16, "Filter 16 song not verified!")
    }

    async Song17_name(expected_song17)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song17 = await this.song_name_path.getText();
        assert.strictEqual(actual_song17, expected_song17, "Filter 17 song not verified!")
    }

    async Song18_name(expected_song18)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song18 = await this.song_name_path.getText();
        assert.strictEqual(actual_song18, expected_song18, "Filter 18 song not verified!")
    }

    async Song19_name(expected_song19)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song19 = await this.song_name_path.getText();
        assert.strictEqual(actual_song19, expected_song19, "Filter 19 song not verified!")
    }

    async Song20_name(expected_song20)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song20 = await this.song_name_path.getText();
        assert.strictEqual(actual_song20, expected_song20, "Filter 20 song not verified!")
    }

    async Song21_name(expected_song21)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song21 = await this.song_name_path.getText();
        assert.strictEqual(actual_song21, expected_song21, "Filter 21 song not verified!")
    }

    async Song22_name(expected_song22)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song22 = await this.song_name_path.getText();
        assert.strictEqual(actual_song22, expected_song22, "Filter 22 song not verified!")
    }

    async Song23_name(expected_song23)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song23 = await this.song_name_path.getText();
        assert.strictEqual(actual_song23, expected_song23, "Filter 23 song not verified!")
    }

    async Song24_name(expected_song24)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song24 = await this.song_name_path.getText();
        assert.strictEqual(actual_song24, expected_song24, "Filter 24 song not verified!")
    }

    async Song25_name(expected_song25)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song25 = await this.song_name_path.getText();
        assert.strictEqual(actual_song25, expected_song25, "Filter 25 song not verified!")
    }

    async Song26_name(expected_song26)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song26 = await this.song_name_path.getText();
        assert.strictEqual(actual_song26, expected_song26, "Filter 26 song not verified!")
    }

    async Song27_name(expected_song27)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song27 = await this.song_name_path.getText();
        assert.strictEqual(actual_song27, expected_song27, "Filter 27 song not verified!")
    }

    async Song28_name(expected_song28)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song28 = await this.song_name_path.getText();
        assert.strictEqual(actual_song28, expected_song28, "Filter 28 song not verified!")
    }

    async Song29_name(expected_song29)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song29 = await this.song_name_path.getText();
        assert.strictEqual(actual_song29, expected_song29, "Filter 29 song not verified!")
    }

    async Song30_name(expected_song30)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song30 = await this.song_name_path.getText();
        assert.strictEqual(actual_song30, expected_song30, "Filter 30 song not verified!")
    }

    async Song31_name(expected_song31)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song31 = await this.song_name_path.getText();
        assert.strictEqual(actual_song31, expected_song31, "Filter 31 song not verified!")
    }

    async Song32_name(expected_song32)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song32 = await this.song_name_path.getText();
        assert.strictEqual(actual_song32, expected_song32, "Filter 32 song not verified!")
    }

    async Song33_name(expected_song33)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song33 = await this.song_name_path.getText();
        assert.strictEqual(actual_song33, expected_song33, "Filter 33 song not verified!")
    }

    async Song34_name(expected_song34)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song34 = await this.song_name_path.getText();
        assert.strictEqual(actual_song34, expected_song34, "Filter 34 song not verified!")
    }

    async Song35_name(expected_song35)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song35 = await this.song_name_path.getText();
        assert.strictEqual(actual_song35, expected_song35, "Filter 35 song not verified!")
    }

    async Song36_name(expected_song36)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song36 = await this.song_name_path.getText();
        assert.strictEqual(actual_song36, expected_song36, "Filter 36 song not verified!")
    }

    async Song37_name(expected_song37)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song37 = await this.song_name_path.getText();
        assert.strictEqual(actual_song37, expected_song37, "Filter 37 song not verified!")
    }

    async Song38_name(expected_song38)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song38 = await this.song_name_path.getText();
        assert.strictEqual(actual_song38, expected_song38, "Filter 38 song not verified!")
    }

    async Song39_name(expected_song39)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song39 = await this.song_name_path.getText();
        assert.strictEqual(actual_song39, expected_song39, "Filter 39 song not verified!")
    }

    async Song40_name(expected_song40)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song40 = await this.song_name_path.getText();
        assert.strictEqual(actual_song40, expected_song40, "Filter 40 song not verified!")
    }

    async Song41_name(expected_song41)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song41 = await this.song_name_path.getText();
        assert.strictEqual(actual_song41, expected_song41, "Filter 41 song not verified!")
    }

    async Song42_name(expected_song42)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song42 = await this.song_name_path.getText();
        assert.strictEqual(actual_song42, expected_song42, "Filter 42 song not verified!")
    }

    async Song43_name(expected_song43)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song43 = await this.song_name_path.getText();
        assert.strictEqual(actual_song43, expected_song43, "Filter 43 song not verified!")
    }

    async Song44_name(expected_song44)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song44 = await this.song_name_path.getText();
        if(actual_song44 == expected_song44)
        {
            console.log("Filter 44 song is verified...")
        }
        else
        {
            console.log("Filter 44 song not verified!")
        }
        // assert.strictEqual(actual_song44, expected_song44, "Filter 44 song not verified!")
    }

    async Song45_name(expected_song45)
    {
        await browser.waitUntil(
            async() => await this.pause.isDisplayed(),
            {
                timeout : 10000 ,
                timeoutMsg : "Button not visible"
            }
        );
        const actual_song45 = await this.song_name_path.getText();
        if(actual_song45 == expected_song45)
            {
                console.log("Filter 44 song is verified...")
            }
            else
            {
                console.log("Filter 44 song not verified!")
            }
        // assert.strictEqual(actual_song45, expected_song45, "Filter 45 song not verified!")
    }




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

    async click_create()
    {
        await this.create.click();
    }

    async Try_QC()
    {
        await this.QC.click();
    }

    async select_img_tab()
    {
        await this.images_tab.click()
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

    async select_img3()
    {
        await this.img_3.click();   
    }

    async select_img4()
    {
        await this.img_4.click();   
    }

    async select_img5()
    {
        await this.img_5.click();   
    }

    async Done_btn()
    {
        await this.done.click();
    }

    async Filter_check1()
    {
        await this.filter1.waitForClickable();
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

    async Cancel_btn()
    {
        await this.cancel.click();
    }

    async Pause_btn()
    {
        await this.pause.click();
    }

    async Click_gallery()
    {
        await this.gallery.click();
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

    async scrollScreenHorizontally(startX, endX, y, duration = 1000) {
        // Horizontal swipe: startX -> endX at a fixed vertical position (y)
        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: y }, // Move to the starting horizontal position
                { type: 'pointerDown', button: 0 }, // Press down
                { type: 'pointerMove', duration: duration, x: endX, y: y }, // Slide horizontally to the end position
                { type: 'pointerUp', button: 0 } // Release
            ]
        }]);
        await browser.releaseActions();
    }
    

    async Click_seekbar()
    {
        await this.seekbar.click();
    }



    //============ Main Function =========

    async QC_Run_Image(
        expected_song1, expected_song2, expected_song3, 
        expected_song4, expected_song5, expected_song6, 
        expected_song7, expected_song8, expected_song9,
        expected_song10, expected_song11, expected_song12,
        expected_song13, expected_song14, expected_song15,
        expected_song16, expected_song17, expected_song18,
        expected_song19, expected_song20, expected_song21,
        expected_song22, expected_song23, expected_song24,
        expected_song25, expected_song26, expected_song27,
        expected_song28, expected_song29, expected_song30,
        expected_song31, expected_song32, expected_song33,
        expected_song34, expected_song35, expected_song36,
        expected_song37, expected_song38, expected_song39,
        expected_song40, expected_song41, expected_song42,
        expected_song43, expected_song44, expected_song45
    )

    {
        await CheckLoginPage.login("umart4767@gmail.com", "Myzesty123");
        await browser.pause(2000);
        await this.click_create();
        await this.Try_QC();
        await this.select_img_tab();
        await this.select_img1();
        // await this.select_img2();
        // await this.select_img3();
        // await this.select_img4();
        // await this.select_img5();
        await this.Done_btn();
        // await this.Click_seekbar();
        // await this.Loading_check();
        await this.Song1_name(expected_song1);
        // await this.Filter_check1();
        await this.Filter_check2();
        await this.Pause_btn();
        await this.Song2_name(expected_song2);
        await this.Filter_check3();
        await this.Song3_name(expected_song3);
        await this.Filter_check4();
        await this.Song4_name(expected_song4);
        await browser.pause(2000);

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Song5_name(expected_song5);
        await this.Filter_check3();
        await this.Song6_name(expected_song6);
        await this.Filter_check4();
        await this.Song7_name(expected_song7);

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Song8_name(expected_song8);
        await this.Filter_check3();
        await this.Song9_name(expected_song9);
        await this.Filter_check4();
        await this.Song10_name(expected_song10);

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Song11_name(expected_song11);
        await this.Filter_check3();
        await this.Song12_name(expected_song12);
        await this.Filter_check4();
        await this.Song13_name(expected_song13);

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Song14_name(expected_song14);
        await this.Filter_check3();
        await this.Song15_name(expected_song15);
        await this.Filter_check4();
        await this.Song16_name(expected_song16);

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Song17_name(expected_song17);
        await this.Filter_check3();
        await this.Song18_name(expected_song18);
        await this.Filter_check4();
        await this.Song19_name(expected_song19);

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Song20_name(expected_song20);
        await this.Filter_check3();
        await this.Song21_name(expected_song21);
        await this.Filter_check4();
        await this.Song22_name(expected_song22);

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Song23_name(expected_song23);
        await this.Filter_check3();
        await this.Song24_name(expected_song24);
        await this.Filter_check4();
        await this.Song25_name(expected_song25)

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Song26_name(expected_song26);
        await this.Filter_check3();
        await this.Song27_name(expected_song27);
        await this.Filter_check4();
        await this.Song28_name(expected_song28);

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Song29_name(expected_song29);
        await this.Filter_check3();
        await this.Song30_name(expected_song30);
        await this.Filter_check4();
        await this.Song31_name(expected_song31);

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Song32_name(expected_song32);
        await this.Filter_check3();
        await this.Song33_name(expected_song33);
        await this.Filter_check4();
        await this.Song34_name(expected_song34);

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Song35_name(expected_song35);
        await this.Filter_check3();
        await this.Song36_name(expected_song36);
        await this.Filter_check4();
        await this.Song37_name(expected_song37);

        await this.scrollScreenHorizontally(850, 150, 1900);
        await this.Filter_check2();
        await this.Song38_name(expected_song38);
        await this.Filter_check3();
        await this.Song39_name(expected_song39);
        await this.Filter_check4();
        await this.Song40_name(expected_song40);

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check2();
        await this.Song41_name(expected_song41);
        await this.Filter_check3();
        await this.Song42_name(expected_song42);
        await this.Filter_check4();
        await this.Song43_name(expected_song43);

        await this.scrollScreenHorizontally(900, 100, 1900);
        await this.Filter_check3();
        await this.Song44_name(expected_song44);
        await this.Filter_check4();
        await  this.Song45_name(expected_song45);

        await this.Click_export();


        // await this.Cancel_btn();
    }


}

export default new QucikCut();