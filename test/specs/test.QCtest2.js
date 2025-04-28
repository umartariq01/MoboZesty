import Adv_test2 from '../pageobjects/QCtest2.page.js';

describe('QC to advance edit', () => {

    it('should login with valid credentials', async () => {


        const expected_text = "Processing" ; 
        const expected_export_text = "Your media is saved to your phone gallery" ; 
        
        await Adv_test2.test2(expected_text, expected_export_text)

    })
});