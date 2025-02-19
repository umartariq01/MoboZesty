
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
    
        // Wait until the progress reaches 100% or matches the target text
        while (progress < 100) {
            // Locate the element dynamically using a partial match
            const progress_element = await $("//android.widget.TextView[contains(@text, 'Uploading Media')]");
            const progressText = await progress_element.getText();
            console.log(`Progress text: ${progressText}`);
    
            // Check if progress text matches the expected completion text
            if (progressText.trim() >= "Uploading Media  (95%)...") {
                console.log("Upload is about to complete!");
                break;
            }
    
            // Parse the progress percentage from the text (if applicable)
            const match = progressText.match(/(\d+)%/);
            if (match) {
                progress = parseInt(match[1], 10);
                console.log(`Current progress: ${progress}%`);
            }
    
            await browser.pause(1000);
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
    
    
}

export default new Common_function();