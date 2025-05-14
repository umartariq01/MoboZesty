import Image_Editor from '../pageobjects/Imgeditor.page.js';

describe('Image Editor', () => {


    it('It should validate Presets', async () => {
    
      try
      {
        await Image_Editor.Verify_Photo_Presets();
        console.log('✅ Test Passed: Verify Photo Editor Presets');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Photo Editor Presets');
        throw error;
      }
      });

    // ===================================================================

    it('It should validate Custom Tool', async () => {
  
      try
      {
        await Image_Editor.Verify_Photo_Custom();
        console.log('✅ Test Passed: Verify Photo Editor Custom Tool.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Photo Editor Custom Tool.');
        throw error;
      }
      }); 

    // ====================================================================
      
    it('It should validate Magic Tool', async () => {

      try
      {
        await Image_Editor.Verify_Photo_Magic();
        console.log('✅ Test Passed: Verify Photo Editor Magic Tool.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Photo Editor Magic Tool.');
        throw error;
      }
      }); 

    // ====================================================================

    it('It should validate Tune Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Tune();
        console.log('✅ Test Passed: Verify Photo Editor Tune Tool.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Photo Editor Tune Tool.');
        throw error;
      }
      }); 

    // ====================================================================

    it('It should validate Color Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Color();
        console.log('✅ Test Passed: Verify Photo Editor Color Tool.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Photo Editor Color Tool.');
        throw error;
      }
      });
    
    // ====================================================================

    it('It should validate Crop Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Crop();
        console.log('✅ Test Passed: Verify Photo Editor Crop Tool.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Photo Editor Crop Tool.');
        throw error;
      }
      });

    // ====================================================================

    it('It should validate Neon Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Neon();
        console.log('✅ Test Passed: Verify Photo Editor Neon Tool.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Photo Editor Neon Tool.');
        throw error;
      }
      });

    // ====================================================================

  it('It should validate Fade Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Fade();
        console.log('✅ Test Passed: Verify Photo Editor Fade Tool.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Photo Editor Fade Tool.');
        throw error;
      }
      });

    //====================================================================

  it.only('It should validate Sticker Tool', async () => {
      try
      {
        await Image_Editor.Verify_Photo_Sticker();
        console.log('✅ Test Passed: Verify Photo Editor Sticker Tool.');
      }
      catch (error)
      {
        console.log('❌ Test Failed: Verify Photo Editor Sticker Tool.');
        throw error;
      }
      });


});