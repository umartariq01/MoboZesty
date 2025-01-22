import Adv_test6 from '../pageobjects/QCtest6.page.js';

describe('QC to advance edit', () => {

    it('should login with valid credentials', async () => {


        const expected_text = "Processing" ; 
        const expected_export_text = "Your media is saved to your phone gallery" ; 
        const slider_xpath = '//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"]/android.view.View[2]' ;
        
        await Adv_test6.test6(expected_text, slider_xpath, expected_export_text)

    })
});