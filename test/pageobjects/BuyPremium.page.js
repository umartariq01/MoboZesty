
import assert from "assert";
class Subscription
{

    get subscriptioon()
    {
        return $('//android.widget.Button[@resource-id="com.myzesty:id/btnContinue"]');
    }

    get subscripe_pkg()
    {
        return $('//android.widget.Button[@resource-id="com.android.vending:id/0_resource_name_obfuscated"]');
    }

    get Pro()
    {
        return $('//android.view.ViewGroup[@content-desc="Pro"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup');
    }

    get processing_text()
    {
        return $('//android.widget.TextView[@resource-id="com.android.vending:id/0_resource_name_obfuscated"]');
    }


    async Check_Subscription(expected_text)  // Processing  expected text
    {
        const isvisible = await this.subscriptioon.isDisplayed();
        const pro_visible = await this.Pro.isDisplayed();

        if(isvisible)
        {
            await this.Buy_Subscription(expected_text);
        }
        else if(pro_visible)
        {
            await this.Pro.click();
            await this.Buy_Subscription(expected_text);
        }
        else
        {
            console.log("Already have Premium Subscription.")
        }

    }

    async Buy_Subscription(expected_text)
    {
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

}

export default new Subscription()