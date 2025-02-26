import { $ } from '@wdio/globals' ;
import { assert } from 'chai' ;
import Subscription from '../pageobjects/BuyPremium.page.js';

class LandingScreen
{
    get preiumCloseBtn () 
    {
        return $('//android.widget.ImageButton[@content-desc="Close"]');
    }

    get video()
    {
        return $('//android.view.ViewGroup[@content-desc="Edit, Video"]/android.view.ViewGroup/android.view.View');
    }

    get QC()
    {
        return $('//android.view.ViewGroup[@content-desc="Try, Quick Cuts"]/android.view.ViewGroup');
    }

    get photo()
    {
        return $('//android.view.ViewGroup[@content-desc="Edit, Photo"]/android.view.ViewGroup');
    }

    get slideshow()
    {
        return $('//android.view.ViewGroup[@content-desc="Create, Slideshow"]/android.view.ViewGroup');
    }

    get BG()
    {
        return $('//android.view.ViewGroup[@content-desc="Remove, Background"]/android.view.ViewGroup');
    }

    get dehazer()
    {
        return $('//android.view.ViewGroup[@content-desc="Try Now, Dehazer"]/android.view.ViewGroup');
    }

    get bokeh()
    {
        return $('//android.view.ViewGroup[@content-desc="Try Now, Bokeh Effect"]/android.view.ViewGroup');
    }

    get poster()
    {
        return $('//android.view.ViewGroup[@content-desc="Poster"]/android.view.ViewGroup');
    }

    get frame()
    {
        return $('//android.view.ViewGroup[@content-desc="Frame"]/android.view.ViewGroup');
    }

    get collage()
    {
        return $('//android.view.ViewGroup[@content-desc="Collage"]/android.view.ViewGroup');
    }


    // ========== Function to perform Actions ============

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

    async Edit_video()
    {
        await this.video.waitForEnabled({timeout:2000});
        const isvideoclickable = await this.video.isEnabled();
        assert.isTrue(isvideoclickable, "Edit video is not clickable");
    }

    async Quick_Cut()
    {
        await this.QC.waitForEnabled();
        const QC_btn = await this.QC.isEnabled() ;
        assert.isTrue(QC_btn, "Quick Cut is not clickable")
    }

    async Edit_photo()
    {
        await this.photo.waitForEnabled();
        const Photo_btn = await this.photo.isEnabled();
        assert.isTrue(Photo_btn, "Edit photo is not cliickable")
    }

    async Slide_Show()
    {
        await this.slideshow.waitForEnabled();
        const slide_btn = await this.slideshow.isEnabled();
        assert.isTrue(slide_btn, "Slideshoe is not clickable")
    }

    async BG_Remove()
    {
        await this.BG.waitForEnabled();
        const BG_btn = await this.BG.isEnabled();
        assert.isTrue(BG_btn, "Background remove is not clickable")
    }

    async Try_Dehazer()
    {
        await this.dehazer.waitForEnabled();
        const Dehazer_btn = await this.dehazer.isEnabled();
        assert.isTrue(Dehazer_btn, "Try Dehazer is not clickable")
    }

    async Try_Bokeh()
    {
        await this.bokeh.waitForEnabled();
        const Bokeh_btn = await this.bokeh.isEnabled();
        assert.isTrue(Bokeh_btn, "Bokeh is not clickable")
    }

    async Make_Poster()
    {
        await this.poster.waitForEnabled();
        const poster_btn = await this.poster.isEnabled();
        assert.isTrue(poster_btn, "Poster is not clickable")
    }

    async Make_Frame()
    {
        await this.frame.waitForEnabled();
        const frame_btn = await this.frame.isEnabled();
        assert.isTrue(frame_btn, "Frame is not clickable")
    }

    async Make_Collage()
    {
        await this.collage.waitForEnabled();
        const collage_btn = await this.collage.isEnabled();
        assert.isTrue(collage_btn, "Collage is not clickable")
    }

    // ======== Main Function =======

    async Run_LandingScreen()
    {
        await Subscription.Check_Subscription('Processing');
        // await this.Close_Premium();
        await this.Edit_video();
        await this.Quick_Cut();
        await this.Edit_photo();
        await this.Slide_Show();
        await this.BG_Remove();
        await this.Try_Dehazer();
        await this.Try_Bokeh();
        await this.Make_Poster();
        await this.Make_Frame();
        await this.Make_Collage();

    }

}

export default new LandingScreen();