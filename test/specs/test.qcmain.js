import QC_Main from '../pageobjects/QCmain.page.js';

describe('QC Main', () => {

    it('should login with valid credentials', async () => {

        await QC_Main.Main_Run();

    })
});