import QC_Run_Video from '../pageobjects/QCvid.page.js' ;

describe('QC Video', () => {


    it('should login with valid credentials', async () => {

        await QC_Run_Video.Run_QC_Vid()
        
    })
});