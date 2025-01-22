import Adv_test4 from '../pageobjects/QCtest4.page.js';

describe('QC to advance edit', () => {

    it('should login with valid credentials', async () => {


        const expected_text = "Processing" ; 
        const expected_export_text = "Your media is saved to your phone gallery" ; 
        const text = "This is text";
        const slider_xpath = '//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[2]' ;
        
        await Adv_test4.test4(expected_text, text, slider_xpath, expected_export_text)

    })
});