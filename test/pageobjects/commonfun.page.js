import { Browser } from "puppeteer";
import { $, browser } from '@wdio/globals' ;
class Common_function
{

    get premium()
    {
        return $('//android.widget.ImageView[@content-desc="Premium"]');
    }

    get adv_edit()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/advanceEdit"]');
    }

    get subscriptioon()
    {
        return $('//android.widget.Button[@resource-id="com.myzesty:id/btnContinue"]');
    }
    
    get subscripe_pkg()
    {
        return $('//android.widget.Button[@resource-id="com.android.vending:id/0_resource_name_obfuscated"]');
    }

    get processing_text()
    {
        return $('//android.widget.TextView[@resource-id="com.android.vending:id/0_resource_name_obfuscated"]');
    }

    //=====================================================================

    get preiumCloseBtn () 
    {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
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

    // ========================================================================



    async Advance_edit(expected_text)
    {
        const isvisible = await this.premium.isDisplayed();

        if(!isvisible)
        {
            console.log("Already have premium subscription...")
            await this.adv_edit.click()
        }
        else
        {
            await this.Buy_Subscription(expected_text);
        }

    }

    async Buy_Subscription(expected_text)
    {
        await this.adv_edit.click()
        await this.subscriptioon.waitForDisplayed({timeout:3000}).catch(() => false) ;
        await this.subscriptioon.click();

        await this.subscripe_pkg.waitForDisplayed({timeout:5000}).catch(() => false);
        await this.subscripe_pkg.click();

        const processing_visible = await  this.processing_text.isDisplayed();
        if(processing_visible)
        {
            await this.verify_processing(expected_text)
        }
        else
        {
            console.log("Subscription Processing is not visible...")
        }

    }

    async verify_processing(expected_text)
    {
        await this.processing_text.waitForDisplayed({timeout:5000});
        const actual_text = await this.processing_text.getText();
        assert.strictEqual(actual_text, expected_text, "Subscription Processing text not asserted!")
    }

    async Check_Upload_progress() {
        console.log("Checking upload progress...");
    
        let progress = 0;
    
        while (progress < 100) {
            try {
                // Wait until the element appears (10 seconds max wait time)
                await browser.waitUntil(async () => {
                    return await $('//android.widget.TextView[contains(@text, "Uploading Media")]').isDisplayed();
                }, {
                    timeout: 10000,
                    timeoutMsg: "Progress element did not appear within 10 seconds."
                });
    
                // Dynamically locate the element
                const progress_element = await $('//android.widget.TextView[contains(@text, "Uploading Media")]');
                const progressText = await progress_element.getText();
                console.log(`Progress text: ${progressText}`);
    
                // Break if progress reaches 95% or more
                if (progressText.includes("95%") || progressText.includes("100%")) {
                    console.log("Upload is about to complete!");
                    await browser.pause(5000);
                    break;
                }
    
                // Extract progress percentage from the text
                const match = progressText.match(/(\d+)%/);
                if (match) {
                    progress = parseInt(match[1], 10);
                    console.log(`Current progress: ${progress}%`);
                }
    
            } catch (error) {
                console.warn("Warning: Progress element not found. Retrying...");
            }
    
            await browser.pause(1000); // Short pause before the next check
        }
    
        console.log("Media uploaded successfully.");
    }
    

    async play_pause(selector) 
    {
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


    // get export_progress()
    // {
    //     return $('//android.widget.TextView[@resource-id="com.myzesty:id/progress_perc"]');
    // }
    // async Check_export_progress() {
    //     console.log("Checking export progress...");
    
    //     let progress = 0;
    
    //     // Wait until the progress reaches 100%
    //     while (progress < 100) {
    //         // Get the text of the progress bar
    //         const progressText = await this.export_progress.getText();
    
    //         // Parse the progress percentage from the text
    //         progress = parseInt(progressText.replace('%', ''), 10);
    //         console.log(`Current progress: ${progress}%`);
    
    //         // Break if the progress reaches 100%
    //         if (progressText >= 100) {
    //             console.log("Export is complete!");
    //             break;
    //         }
    
    //         await browser.pause(1000);
    //     }
    
    //     console.log("Video successfully exported!");
    // }

    async Check_export_progress(xpath) {
        console.log("Checking export progress...");
    
        let progress = 0;
    
        // Wait until the progress reaches 100%
        while (progress < 100) {
            // Find the element using the provided XPath
            const exportProgressElement = await $(xpath);
    
            // Get the text of the progress bar
            const progressText = await exportProgressElement.getText();
    
            // Parse the progress percentage from the text
            progress = parseInt(progressText.replace('%', ''), 10);
            console.log(`Current progress: ${progress}%`);
    
            // Break if the progress reaches 100%
            if (progress >= 100) {
                console.log("Export is complete!");
                break;
            }
    
            await browser.pause(1000);
        }
    
        console.log("Video successfully exported!");
    }
    

    get uploading()
    {
        return $('//android.widget.TextView[@resource-id="com.myzesty:id/progress_perc"]')
    }

    async Check_Upload_progress() {
        console.log("Checking uploading progress...");
    
        let upload_progress = 0;
    
        // Wait until the progress reaches 100%
        while (upload_progress < 100) {
            // Get the text of the progress bar
            const progressText = await this.uploading.getText();
    
            // Parse the progress percentage from the text
            progress = parseInt(progressText.replace('%', ''), 10);
            console.log(`Current progress: ${upload_progress}%`);
    
            // Break if the progress reaches 100%
            if (progressText >= 100) {
                upload_progress.log("Export is complete!");
                break;
            }
    
            await browser.pause(1000);
        }
    
        console.log("Video successfully exported!");
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
    
    
}

export default new Common_function();