import Adv_test5 from '../pageobjects/QCtest5.page.js';


describe('QC to advance edit', () => {

    it('should login with valid credentials', async () => {


        const expected_text = "Processing" ; 
        const expected_export_text = "Your media is saved to your phone gallery" ; 
        const text = "This is text";
        const slider_xpath = '(//android.view.ViewGroup[@resource-id="com.myzesty:id/range_slider"])[5]/android.view.View[2]' ;
        
        await Adv_test5.test5(slider_xpath, expected_export_text)

    })
});