import Ratezesty from '../pageobjects/rate.page.js';

describe('Rate My Application', () => {


    it('should login with valid credentials', async () => {

        const expected_text_1 = "Enjoying MyZesty?"; 
        const expected_text_2 = "Rate Us";

        await Ratezesty.Rate_Application(expected_text_1, expected_text_2);
        
    })
});