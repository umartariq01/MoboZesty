import Dehazer from '../pageobjects/Dehazer.page.js';

describe('Dehazer', () => {


    it('should login with valid credentials', async () => {

        const expected_text = "Processing" ;
        const expected_export_text = "Your media is saved to your phone gallery"; 

        // await Dehazer.Run_Dehazer_imag(expected_text, expected_exxport_text);
        await Dehazer.Run_Dehazer_vid(expected_text, expected_export_text);
        

    })
})