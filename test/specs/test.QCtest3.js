import Adv_test3 from '../pageobjects/QCtest3.page.js';

describe('QC to advance edit', () => {

    it('should login with valid credentials', async () => {

 
        const expected_export_text = "Your media is saved to your phone gallery" ; 
        
        await Adv_test3.test3( expected_export_text)

    })
});