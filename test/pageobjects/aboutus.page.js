import { $, browser } from '@wdio/globals' ;
import assert from 'assert';


class AboutUs
{

    get preiumCloseBtn () 
    {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
    }

    get profiletab()
    {
        return $('//android.view.View[@content-desc="navi-profile-button"]');
    }

    get about()
    {
        return $('//android.widget.Button[@content-desc="about-button"]');
    }

    get aboutus() //About Us
    {
        return $('//android.widget.TextView[@text="About Us"]');
    }

    get aboutus_text()
    {
        return $('//android.widget.TextView[@text="MyZesty offers a series of apps for creating and editing images and videos. These user-friendly apps include a variety of editing tools and features, such as predefined filters, templates, a video maker, and many more. MyZesty is the only app that maintains high image resolution both before and after editing. It also has the ability to mirror content on large TV screens for crowd viewing. Furthermore, MyZesty includes unique underwater filters that can make even the lowest-quality underwater photos look professional."]')
    }

    // ===========Function to perform action===========

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

    async Profile_Tab()
    {
        await this.profiletab.click();
    }

    async About_US()
    {
        await this.about.click();
    }

    async About_Us_1(expected_text_1)
    {
        await this.aboutus.waitForDisplayed();
        const actual_text_1 = await this.aboutus.getText();
        assert.strictEqual(actual_text_1, expected_text_1, "About Us text 1 not asserted.");
    }

    async About_Us_2(expected_text_2)
    {
        await this.aboutus_text.waitForDisplayed();
        const actual_text_2 = await this.aboutus_text.getText();
        assert.strictEqual(actual_text_2, expected_text_2, "About Us text 2 not asserted.");
    }

    // ========= Main Function ===========

    async Run_AboutUs(expected_text_1, expected_text_2)
    {
        await this.Close_Premium();
        await this.Profile_Tab();
        await this.About_US();
        await this.About_Us_1(expected_text_1);
        await this.About_Us_2(expected_text_2);
    }

}

export default new AboutUs();