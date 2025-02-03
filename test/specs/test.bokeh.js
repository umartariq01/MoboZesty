import Verify_Bokeh_templet from '../pageobjects/Bokeh.page.js' ;

describe('Bokeh', () => {


    it('should login with valid credentials', async () => {

        const expected_text = "Processing" ;

        await Verify_Bokeh_templet.Run_Bokeh_temp(expected_text);
        

    })
})