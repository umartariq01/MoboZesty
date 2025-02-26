import Settings from '../pageobjects/setting.page.js';
import { faker } from '@faker-js/faker';

describe('Edit Profile', () => {


    it('should login with valid credentials', async () => {

        const New_name = faker.person.fullName();
        const Mbl_No = faker.phone.number({style : 'international'}) ;
        const Location_area = "MM Alam Road" ;
        const Bio_data = "This is editing app.";
        const expected_updated_text = "Profile information is updated successfully";


        await Settings.Edit_profile_run(New_name, Mbl_No, Location_area, Bio_data, expected_updated_text);
        
    })
});



describe('Privacy', () => {


    it('should login with valid credentials', async () => {

        const expected_public = "Public" ;
        const expected_followers = "Followers " ;
        const expected_onlyme = "Only me" ;

        const expected_public1 = "Public" ;
        const expected_followers1 = "Followers " ;
        const expected_onlyme1 = "Only me" ;

        const Dlt_acc = "Delete my account" ;
        const Dlt_text = "Your account will be deactivated for 30 days, and during this time it will not be accessible to the public. To reactivate your account, simply log in at any time within the 30-day period. If you don’t reactivate your account, it will be permanently deleted along with all of your posts and information." ;

        await Settings.Privacy_run(expected_public, expected_followers, expected_onlyme,
            expected_public1, expected_followers1, expected_onlyme1, Dlt_acc, Dlt_text)
        
    })
});