import Demo from '../pageobjects/demo.page.js';

describe('Demo', () => {


    it('Should validate functionality', async () => {
    
          try 
          {
            await Demo.Verify_Photo_Sticker()
            console.log('✅ Test Passed: Select images and video');
          } 
          catch (error) 
          {
            console.error('❌ Test Failed: Select images and video');
            throw error; // 👉 THIS tells Mocha the test really failed
          }
          
        });
})