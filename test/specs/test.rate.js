// import Ratezesty from '../pageobjects/ratemyzesty.js';
import Ratezesty from  "../pageobjects/rate.page"

describe('Rate My Application', () => {


    it('should login with valid credentials', async () => {

        const expected_text_1 = "Enjoying MyZesty?"; 
        const expected_text_2 = "Rate Us";

        Ratezesty.Rate_Application(expected_text_1, expected_text_2);
        
    })
});