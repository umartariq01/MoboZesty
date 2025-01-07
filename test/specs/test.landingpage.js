import LandingScreen from '../pageobjects/landingscreen.page.js';

describe('Landing Page', () => {

    it('Should login with valid credentials', async() =>{

        await LandingScreen.Run_LandingScreen();

    })
});