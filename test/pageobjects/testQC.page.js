import { $, browser } from '@wdio/globals' ;
import assert from 'assert';
import Sliders from '../pageobjects/sliders.page.js';
import Subscription from '../pageobjects/BuyPremium.page.js';
import Common_function from '../pageobjects/commonfun.page.js';


class QucikCutSample
{
    get preiumCloseBtn () 
    {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
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
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/cancel_button"]');
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
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image_view"])[1]');
    }

    get filter2()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image_view"])[2]');
    }

    get filter3()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image_view"])[3]') ;
    }

    get filter4()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image_view"])[4]') ;
    }

    get filter5()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image_view"])[5]') ;
    }

    get filter6()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image_view"])[6]') ;
    }

    get filter7()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image_view"])[7]') ;
    }

    get filter8()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image_view"])[8]') ;
    }

    get filter9()
    {
        return $('(//android.widget.ImageView[@resource-id="com.myzesty:id/image_view"])[9]') ;
    }

    get export()
    {
        return $('//android.widget.FrameLayout[@resource-id="com.myzesty:id/export"]');
    }

    get export_done()
    {
        return $('//android.view.ViewGroup[@content-desc="Done"]');
    }


    //======================= Verifying Filter's Song =======================

    async Click_export()
    {
        await this.export.click();
    }
    
    async verifyFilterAndSong(filterIndex, expectedSong) {
        await this.selectFilter(filterIndex);
        await this.verifySongName(expectedSong, filterIndex);
    }

    async verifyAllFiltersAndSongs(expectedSongs) {
        // 1. Verify first filter (already selected by default)
        await this.verifySongName(expectedSongs[0], 1);
    
        let scrollCount = 0;
        let firstFilterAfterScroll = false; // Track first filter after scroll
        
        // 2. Process remaining songs
        for (let i = 1; i < expectedSongs.length; i++) {
            // Calculate which filter to click next
            let filterToClick;
            
            if (scrollCount < 5) {
                // Normal behavior for first 5 scrolls (filters 2-8 then 1-8)
                if (i < 7) {
                    // First cycle: filters 2-8
                    filterToClick = i + 1;
                } else {
                    // Subsequent cycles: filters 1-8
                    filterToClick = (i % 8) + 1;
                }
            } else {
                // After 5th scroll
                if (!firstFilterAfterScroll) {
                    // First filter after scroll (41st song)
                    const songsAfterScroll = i - 40;
                    filterToClick = ((songsAfterScroll - 1) % 5) + 5;
                    // filterToClick = 5;
                    // firstFilterAfterScroll = true;
                } else {
                    // Continue the 5-9 cycle
                    // const songsAfterScroll = i - 40;
                    // filterToClick = ((songsAfterScroll - 1) % 5) + 5;
                    console.log("Filter not clicked.");
                }
            }
    
            // Click and verify
            await this.selectFilter(filterToClick);
            await this.verifySongName(expectedSongs[i], i + 1);
    
            // Track and handle scrolling
            if ((i + 1) % 8 === 0) {
                await this.scrollToLoadMoreFilters();
                await browser.pause(1000);
                scrollCount++;
                firstFilterAfterScroll = false; // Reset for next scroll
            }
        }
    }

    async verifySongName(expectedSong, filterIndex) {
        await this.song_name_path.waitForDisplayed();
        const actualSong = await this.song_name_path.getText();
        assert.strictEqual(actualSong, expectedSong, `Filter ${filterIndex} song not verified!`);
        console.log(`Filter ${filterIndex} song verified: ${expectedSong}`);
        await Common_function.waitForElementToDisappear('//android.widget.TextView[@text="Loading Template.."]');
    }

    async selectFilter(filterIndex) {
        const filterElement = await $(`(//android.widget.ImageView[@resource-id="com.myzesty:id/image_view"])[${filterIndex}]`);
        await filterElement.click();
    }

    async scrollToLoadMoreFilters() {
        await Sliders.scrollScreen(520, 2263, 520, 1760, 1500);
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
        await this.filter1.waitForDisplayed();
        await this.filter1.click();
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

    async Filter_check5()
    {
        await this.filter5.click();
    }

    async Filter_check6()
    {
        await this.filter6.click();
    }

    async Filter_check7()
    {
        await this.filter7.click();
    }

    async Filter_check8()
    {
        await this.filter8.click();
    }

    async Filter_check9()
    {
        await this.filter9.click();
    }

    async Cancel_btn()
    {
        const cancle_Visible = await this.cancel.isDisplayed();
        if(cancle_Visible)
        {
            await this.cancel.click();
        }
        else
        {
            const done_Visible = await this.export_done.isDisplayed();
            if(done_Visible)
            {
                await this.export_done.click()
            }
            else{
                console.log("Button not visible.");
            }
        }
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
    



    //============ Main Function =========

    async QC_Run_Image(expectedSongs)

    {

        await Subscription.Check_Subscription('Processing');
        await this.Try_QC();
        await this.select_img_tab();
        await this.select_img1();
        await this.Done_btn();
        await browser.pause(2000);

        await this.verifyAllFiltersAndSongs(expectedSongs);

        await browser.pause(1000);
        await this.Click_export();
        await this.Cancel_btn();
    }


}

export default new QucikCutSample();