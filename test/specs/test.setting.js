import Settings from '../pageobjects/setting.page.js';

describe('Edit Profile', () => {


    it('should login with valid credentials', async () => {

        const New_name = "Umer Ejaz" ;
        const Mbl_No = "03073396783" ;
        const Location_area = "MM Alam Road" ;
        const Bio_data = "This is editing app."


        await Settings.Edit_profile_run(New_name, Mbl_No, Location_area, Bio_data);
        
    })
});

describe('Privacy', () => {


    it('should login with valid credentials', async () => {

        const expected_public = "Public" ;
        const expected_followers = "Followers" ;
        const expected_onlyme = "Only me" ;

        const expected_public1 = "Public" ;
        const expected_followers1 = "Followers" ;
        const expected_onlyme1 = "Only me" ;

        const Dlt_acc = "Delete my account" ;
        const Dlt_text = "Your account will be deactivated for 30 days, and during this time it will not be accessible to the public. To reactivate your account, simply log in at any time within the 30-day period. If you don’t reactivate your account, it will be permanently deleted along with all of your posts and information." ;

        Settings.Privacy_run(expected_public, expected_followers, expected_onlyme,
            expected_public1, expected_followers1, expected_onlyme1, Dlt_acc, Dlt_text)
        
    })
});