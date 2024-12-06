import Share from "../pageobjects/share.page.js";

describe('Share media Tab', () => {

    // new Promise(resolve => setTimeout(resolve, 5000))
    // .then(() => {
    //     console.log("5 seconds have passed");
    // });
    it('should login with valid credentials', async () => {

        await Share.sharemedia();
        
    })
});