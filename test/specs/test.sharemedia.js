import Share from "../pageobjects/share.page.js";

describe('Share media Tab', () => {

    it('should login with valid credentials', async () => {

        let expected_warning = "A posted collection must contain at least one media file. It is not possible to remove all media files from this collection." ;
        let expected_confirmation_text = "Are you sure you want to delete the selected media?" ;
        let text1 = "New Collection" ;
        let text2 = "This is description" ;
        let expected_text = "Uploading completed successfully" ;


        await Share.sharemedia(expected_warning, expected_confirmation_text, text1, text2, expected_text);
        
    })
});