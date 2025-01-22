import QC_Adv_Edit from '../pageobjects/QCadv.page.js' ;

describe('QC to Advance edit', () => {

    it('should login with valid credentials', async () => {

        const expected_text = "Processing" ;

        await QC_Adv_Edit.Adv_Edit_Run(expected_text);

    })
});