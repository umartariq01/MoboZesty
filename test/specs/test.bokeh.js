import Bokeh_effect from '../pageobjects/Bokeh.page.js' ;

describe('Bokeh', () => {


    it('should login with valid credentials', async () => {

        const expected_text = "Processing" ;

        await Bokeh_effect.Run_Bokeh(expected_text);
        

    })
})