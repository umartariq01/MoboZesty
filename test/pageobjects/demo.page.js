    
import { $, browser } from '@wdio/globals' ;
import Sliders from '../pageobjects/sliders.page.js';
    
    class Demo
    {

        get text()
        {
            return $('//android.widget.TextView[@resource-id="com.myzesty:id/title" and @text="Text"]');
        }
        get text_area()
        {
            return $('//android.widget.EditText[@resource-id="com.myzesty:id/add_text_edit_text"]');
        }
        get bold()
        {
            return $('//android.widget.ImageView[@resource-id="com.myzesty:id/bold"]');
        }
        get italic()
        {
            return $('//android.widget.ImageView[@resource-id="com.myzesty:id/italic"]');
        }
        get apply_text()
        {
            return $('//android.widget.ImageView[@resource-id="com.myzesty:id/done"]');
        }

        async Add_Text()

        {
            await (await this.text).click();
            await (await this.text_area).click();
            await browser.pause(1000);
            await browser.keys('Script Running..');
            await (await this.bold).click();
            await (await this.italic).click();
            await browser.pause(1000);
            await Sliders.Slider(driver, 28, 1052, 1431, 1541, 0.2);
            await (await this.apply_text).click();
        }

        async Apply_Font_Styles()
        {
            let index = 1;
    
            while (index < 4 ) {
                const filterXPath = `(//android.widget.ImageView[@resource-id="com.myzesty:id/image"])[${index}]`;
                const filterElement = await $(filterXPath);
    
                if (!await filterElement.isExisting())
                    break;
    
                await filterElement.click();
                await browser.pause(1000); 
                index++;
            }
        }

        get font_color()
        {
            return $('//android.widget.TextView[@resource-id="com.myzesty:id/color_text"]');
        }
        get font_opacity()
        {
            return $('//android.widget.TextView[@resource-id="com.myzesty:id/opacity_text"]');
        }
        get font_shadow()
        {
            return $('//android.widget.TextView[@resource-id="com.myzesty:id/shadow_text"]');
        }
        get font_stroke()
        {
            return $('//android.widget.TextView[@resource-id="com.myzesty:id/stroke_text"]');
        }

        async Click_Font_Color()
        {
            await (await this.font_color).click();
            await Sliders.Slider(driver, 28, 936, 2010, 2059, 0.3);
        }
        async Click_Font_Opacity()
        {
            await (await this.font_opacity).click();
            await  Sliders.Slider(driver, 14, 914, 1987, 2097, 0.8);
        }
        async Click_Font_Shadow()
        {
            await (await this.font_shadow).click();
            await Sliders.Slider(driver, 14, 914, 1987, 2097, 0.2);
        }
        async Click_Font_Stroke()
        {
            await (await this.font_stroke).click();
            await Sliders.Slider(driver, 14, 914, 1848, 1958, 0.2);
            await browser.pause(500);
            await  Sliders.Slider(driver, 28, 936, 2010, 2059, 0.4);
        }

       async Verify_Photo_Sticker() 
       {
        try {
            await this.click_Expand_Tools();
            await this.Add_Text();
            await this.Apply_Font_Styles();
            await this.Click_Font_Color();
            await this.Click_Font_Opacity();
            await this.Click_Font_Shadow();
            await this.Click_Font_Stroke();
            await browser.pause(1000);
            } catch (error) 
            {
                console.log('❌ Verify Photo Sticker FAILED', error.message);

                // ⬇️ Capture screenshot on crash
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                const screenshotPath = `./error-screenshots/crash-${timestamp}.png`;
                await browser.saveScreenshot(screenshotPath);
                console.log(`📸 Screenshot saved at: ${screenshotPath}`);

                // ⬇️ Capture logcat logs
                try {
                    const logs = await driver.getLogs('logcat');
                    const logText = logs.map(entry => `[${entry.timestamp}] ${entry.level} - ${entry.message}`).join('\n');

                    const fs = await import('fs');
                    const logPath = `./error-logs/crash-log-${timestamp}.txt`;
                    fs.writeFileSync(logPath, logText);
                    console.log(`🪵 Log saved at: ${logPath}`);
                } catch (logErr) {
                    console.log('❌ Failed to capture logs:', logErr.message);
                }

                throw error;
            }
        }

    }

export default new Demo();
    