import Browse from '../pageobjects/browse.page.js';

describe('Browse Page', () => {

    it('should login with valid credentials', async () => {

        const expected_value = "My favorites" ;
        const expected_value_1 = "Share" ;
        const expected_value_2 = "Report" ;

        
        await Browse.run_browse(expected_value, expected_value_1, expected_value_2);
        
    })
});