import AboutUs from '../pageobjects/aboutus.page.js';

describe('About Us Page', () => {

    it('Should login with valid credentials', async() =>{

        const expected_text_1 = "About Us" ;
        const expected_text_2 = "MyZesty offers a series of apps for creating and editing images and videos. These user-friendly apps include a variety of editing tools and features, such as predefined filters, templates, a video maker, and many more. MyZesty is the only app that maintains high image resolution both before and after editing. It also has the ability to mirror content on large TV screens for crowd viewing. Furthermore, MyZesty includes unique underwater filters that can make even the lowest-quality underwater photos look professional." ;

        await AboutUs.Run_AboutUs(expected_text_1, expected_text_2);

    })
});