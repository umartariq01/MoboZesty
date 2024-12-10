import Profile_Tab from '../pageobjects/profile.page.js';

describe('Profile Page', () => {


    it('should login with valid credentials', async () => {

        const expected_text_1 = 'Followers' ;
        const expected_text_2 = 'Following' ;
        const expected_text_3 = 'Collections' ;
        const expected_text_4 = 'Private' ;
        const expected_text_5 = 'Favorites' ;

        await Profile_Tab.Profile_Action_Tab(expected_text_1, expected_text_2, expected_text_3, expected_text_4, 
            expected_text_5
        );
        
    })
});