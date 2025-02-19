import Share from "../pageobjects/share.page.js";

describe('Share media Tab', () => {

    it('should login with valid credentials', async () => {

        let text1 = "New Collection" ;
        let text2 = "This is description" ;
        let expected_text = "Uploading completed successfully" ;

        await Share.sharemedia(text1, text2, expected_text);
        
    })
});