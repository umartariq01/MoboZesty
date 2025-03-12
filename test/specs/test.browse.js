import Browse from '../pageobjects/browse.page.js';

describe('Browse Page', () => {

    // it('should login with valid credentials', async () => {

    //     const expected_value = "My favorites" ;
    //     const expected_value_1 = "Share" ;
    //     const expected_value_2 = "Report" ;
    //     const expected_collection = "Edit My Collection" ;
    //     const expected_media = "Save media to your device" ;
    //     const expected_delete = "Delete" ;

        
    //     await Browse.run_browse(expected_value, expected_value_1, expected_value_2, expected_collection, expected_media, expected_delete);
        
    // })


    

    it('should login with valid credentials', async () => {

        
        const expected_delete_text = "This collection will be permanently deleted. Are you sure you want to continue?";
        const expected_report_msg = "Report sent. Thanks for informing us!";
        
        await Browse.Verify_Delete_Collection(expected_delete_text, expected_report_msg)
        
    })



    // it('should login with valid credentials', async () => {

        
    //     await Browse.Verify_User_Follow()
        
    // })

    
});