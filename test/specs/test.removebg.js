import Remove_BG from '../pageobjects/RemoveBG.page.js';

describe('Background Remove', ()=>{

    it('should login with valid credentials', async() =>{

        const expected_text = "Please do not close the app or lock the screen until mask extraction is complete.";

        await Remove_BG.Run_Remove_BG(expected_text);

    })
})