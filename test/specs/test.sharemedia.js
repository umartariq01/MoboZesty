import Share from "../pageobjects/share.page.js";

describe('Share media Tab', () => {

    // new Promise(resolve => setTimeout(resolve, 5000))
    // .then(() => {
    //     console.log("5 seconds have passed");
    // });
    it('should login with valid credentials', async () => {

        const text1 = "New Collection" ;
        const text2 = "This is description" ;
        const expected_text = "Your collection has been uploaded! Refresh the page to view it." ;

        await Share.sharemedia(text1, text2, expected_text);
        
    })
});