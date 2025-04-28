import Adv_test1 from '../pageobjects/QCtest1.page.js';

describe('QC to advance edit', () => {

    it('should login with valid credentials', async () => {

        const expected_text = "Processing" ; 
        
        await Adv_test1.test1(expected_text)

    })
});