import { $ } from '@wdio/globals' ;
import LoginPage from './login.page.js';
import assert from 'assert';

class Ratezesty
{

    get preiumCloseBtn () {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
    }

    get profiletab()
    {
        return $('//android.view.View[@content-desc="navi-profile-button"]');
    }

    get RateTab()
    {
        return $('//android.widget.TextView[@text="Rate MyZesty"]');
    }

    get Rate_US()
    {
        return $('//android.widget.Button[@content-desc="rate-us-button"]');
    }

    get Text_1()
    {
        return $('//android.widget.TextView[@content-desc="enjoying-myzesty"]');
    }

    get Text_2()
    {
        return $('//android.widget.TextView[@text="Rate Us"]');
    }

    get Close_Popup()
    {
        return $('//android.widget.TextView[@text=""]');
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

    async Profile_Tab()
    {
        await this.profiletab.click();
    }

    async Rate_Myzesty()
    {
        await this.RateTab.click();
    }

    async Rate_Us_Btn()
    {
        await this.Rate_US.click();
    }

    async Verify_1(expected_text_1)
    {
        await this.Text_1.waitForDisplayed({timeout:2000});
        const actutal_text_01 = await this.Text_1.getText();
        assert.strictEqual(actutal_text_01, expected_text_1, "Rate us text nor verified!")
        console.log("Enjoying MyZesty text verified successfully.")
    }

    async Verify_2(expected_text_2)
    {
        await this.Text_2.waitForDisplayed({timeout:2000});
        const actual_text_02 = await this.Text_2.getText();
        assert.strictEqual(actual_text_02, expected_text_2, "Rate Us button not Verified@");
        console.log("Rate Us button verified successfully.")
    }

    async Popup_Close()
    {
        await this.Close_Popup.click();
    }

    async Rate_Application(expected_text_1, expected_text_2)
    {
        await this.Close_Premium();
        await this.Profile_Tab();
        await this.Rate_Myzesty();
        await this.Verify_1(expected_text_1);
        await this.Verify_2(expected_text_2);
        await this.Popup_Close();
        
        
    }

    
}

export default new Ratezesty();