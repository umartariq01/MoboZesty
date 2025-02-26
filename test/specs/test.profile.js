import Profile_Tab from '../pageobjects/profile.page.js';

describe('Profile Page', () => {


    it('should login with valid credentials', async () => {

        const expected_alert = 'Profile picture updated successfully' ;
        const expected_text_1 = 'Followers ' ;
        const expected_text_2 = 'Following ' ;
        const expected_text_3 = 'Collections ' ;
        const expected_text_4 = 'Private ' ;
        const expected_text_5 = 'Favorites ' ;

        await Profile_Tab.Profile_Action_Tab(expected_alert, expected_text_1, expected_text_2, expected_text_3, expected_text_4, 
            expected_text_5
        );
        
    })

    it('should validate Profile Tabs', async () => {


        const expected_profile          = 'Profile';
        const expected_notification     = 'Notifications';
        const expected_chat             = 'Chat';
        const expected_collection_text  = 'Private Collection';
        const expected_setting          = 'Settings';
        const expected_subscription     = 'Cancel Subscription';
        const expected_about            = 'About';
        const expected_contact_us       = 'Contact Us';
        const expected_invite_text      = 'Invite Friends to Join';
        const expected_rate_myzesty     = 'Rate MyZesty';
        const expected_terms_text       = 'Terms & Conditions';
        const expected_privacy_policy   = 'Privacy Policy';
        const expected_features         = 'Features';
        const expected_blog             = 'Blog';


        await Profile_Tab.Profile_Tabs_Verification(
            expected_profile, expected_notification, expected_chat, expected_collection_text,
            expected_setting, expected_subscription, expected_about, expected_contact_us,
            expected_invite_text, expected_rate_myzesty, expected_terms_text, expected_privacy_policy,
            expected_features, expected_blog
        )
    })


        
});